import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context-components/User';

const CommentCard = ({ comment, userProfilePic, deleteComment }) => {
	const { signedInUser } = useContext(UserContext);
	const [isUserComment, setIsUserComment] = useState(false);

	useEffect(() => {
		if (comment.author === signedInUser.username) setIsUserComment(true);
	}, [signedInUser, comment.author]);

	return (
		<article className='comment'>
			<img
				src={userProfilePic}
				alt='A user profile'
			/>
			<h4>{comment.author}</h4>
			<h6>
				<span>
					{new Date(comment.created_at)
						.toUTCString()
						.split(' ')
						.slice(1, 4)
						.join(' ')}
				</span>
			</h6>
			<p>{comment.body}</p>
			<p>
				<span>Votes: </span>
				{comment.votes}
			</p>
			{!isUserComment && <button>Like</button>}
			{!isUserComment && <button>Dislike</button>}
			{isUserComment && (
				<button
					onClick={e => {
						e.target.disabled = true;
						e.target.innerText = 'Deleting comment...';
						deleteComment(comment.comment_id);
					}}
				>
					Delete
				</button>
			)}
		</article>
	);
};

export default CommentCard;
