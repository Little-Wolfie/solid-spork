import { useEffect, useState } from 'react';
import { api } from '../../api';
import CommentCard from './CommentCard';

const ArticleComments = ({ articleId }) => {
	const [comments, setComments] = useState([]);
  const [newCommentInput, setNewCommentInput] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const handleNewCommentSubmit = e => {
		e.preventDefault();
		console.log(e.target.children[1].value);
	};

	useEffect(() => {
		api.fetchArticleCommentsById(articleId).then(res => {
			setComments(res);
			setIsLoading(false);
		});
	}, [articleId]);

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
					></textarea>
					<button type='submit'>Submit</button>
				</form>
			</div>

			<div className='divider-small'></div>

			{isLoading ? (
				<h3>Loading...</h3>
			) : (
				<ol className='comment-list'>
					{comments.map(comment => (
						<li key={comment.comment_id}>
							<CommentCard comment={comment} />
						</li>
					))}
				</ol>
			)}
		</section>
	);
};

export default ArticleComments;
