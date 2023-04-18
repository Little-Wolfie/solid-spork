const FullArticle = ({ article }) => {
	return (
		<article className='full-article-container'>
			<section className='article-content'>
				<h2>{article.title}</h2>

				<div className='divider-small'></div>
				<div className='author-date-upvote-container'>
					<h4>Author: {article.author}</h4>
					<h5>
						Created:{' '}
						{new Date(article.created_at)
							.toUTCString()
							.split(' ')
							.slice(1, 4)
							.join(' ')}
					</h5>
					<div className='upvote-btn'>
						<h5>votes: {article.votes}</h5>
						<button>Upvote</button>
					</div>
				</div>
				<div className='divider-small'></div>

				<img
					src={article.article_img_url}
					alt={article.topic}
				/>

				<p>{article.body}</p>
			</section>
			<div className='divider-small'></div>
			<section className='comment-content'></section>
		</article>
	);
};

export default FullArticle;
