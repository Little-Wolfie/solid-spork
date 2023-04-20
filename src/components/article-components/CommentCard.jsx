const CommentCard = ({ comment, userProfilePic }) => {
	return (
		<article className='comment'>
			<img
				src={userProfilePic}
				alt=''
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
			<button>Like</button>
			<button>Dislike</button>
		</article>
	);
};

export default CommentCard;
