import { useEffect, useState } from 'react';
import { api } from '../../api';
import CommentCard from './CommentCard';

const ArticleComments = ({ articleId }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		api.fetchArticleCommentsById(articleId).then(res => {
			setComments(res);
		});
	}, [articleId]);

	return (
		<section className='comments-container'>
			<div className='new-comment'>
				<form>
					<label htmlFor='newComment'>Write a new Comment:</label>
					<textarea
						name='newComment'
						id='newComment'
						cols='30'
						rows='4'
					></textarea>
					<button>Submit</button>
				</form>
			</div>

			<div className='divider-small'></div>

			<div className='comment-list'>
				{comments.map(comment => (
					<CommentCard
						comment={comment}
						key={comment.comment_id}
					/>
				))}
			</div>
		</section>
	);
};

export default ArticleComments;
