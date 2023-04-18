const ArticleCard = ({ article }) => {
	return (
		<article className='article-card'>
			<img
				src={article.article_img_url}
				alt={article.topic}
			/>
			<div className='text-content'>
				<h4>{article.title}</h4>
				<h5>{article.author}</h5>
				<p>
					{new Date(article.created_at)
						.toUTCString()
						.split(' ')
						.slice(0, 3)
						.join(' ')}{' '}
					- votes: {article.votes}
				</p>
				<p>{article.body.slice(0, 150)}</p>
				<button>Read more</button>
			</div>
		</article>
	);
};

export default ArticleCard;
