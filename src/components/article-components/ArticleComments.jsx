import { useContext, useEffect, useState } from 'react';
import { api } from '../../api';
import CommentCard from './CommentCard';
import { UserContext } from '../context-components/User';

const ArticleComments = ({ articleId }) => {
	const { signedInUser } = useContext(UserContext);
	const [users, setUsers] = useState({});
	const [comments, setComments] = useState([]);
	const [newCommentInput, setNewCommentInput] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [hasSubmitted, setHasSubmitted] = useState(false);

	const fetchComments = () => {
		api
			.fetchArticleCommentsById(articleId)
			.then(res => {
				setComments(res);
				setIsLoading(false);
			})
			.catch(err => {
				alert('Failed to load comments, try again later.');
			});
	};

	const deleteComment = id => {
    setComments(current => {
			return current.filter(comment => comment.comment_id !== id);
		});

		api.deleteCommentFromArticle(id);
	};

	const handleNewCommentSubmit = e => {
		e.preventDefault();
		setNewCommentInput('');
		setHasSubmitted(true);

		const commentBody = e.target.children[1].value;

		api
			.postCommentToArticle(articleId, {
				username: signedInUser.username,
				body: commentBody,
			})
			.then(res => {
				setComments(current => {
					return [res, ...current];
				});
			})
			.catch(() => {
				alert('Could not post comment, try again later.');
			})
			.finally(() => {
				setHasSubmitted(false);
			});
	};

	useEffect(() => {
		fetchComments();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		api.getUserData().then(res => {
			const userData = res.data.users.reduce((acc, curr) => {
				acc[curr['username']] = curr['avatar_url'];
				return acc;
			}, {});

			setUsers(userData);
		});
	}, []);

	return (
		<section className='comments-container'>
			<div className='new-comment'>
				<form onSubmit={handleNewCommentSubmit}>
					<label htmlFor='newComment'>Write a new Comment:</label>
					<textarea
						name='newComment'
						id='newComment'
						cols='30'
						rows='4'
						value={newCommentInput}
						onChange={e => setNewCommentInput(e.target.value)}
						minLength='12'
						maxLength='250'
						required
					></textarea>
					<button
						type='submit'
						disabled={hasSubmitted}
					>
						Submit
					</button>
				</form>
			</div>

			<div className='divider-small'></div>

			{isLoading ? (
				<h3>Loading...</h3>
			) : (
				<ol className='comment-list'>
					{comments.map(comment => (
						<li key={comment.comment_id}>
							<CommentCard
								comment={comment}
								userProfilePic={users[comment.author]}
								deleteComment={deleteComment}
							/>
						</li>
					))}
				</ol>
			)}
		</section>
	);
};

export default ArticleComments;
