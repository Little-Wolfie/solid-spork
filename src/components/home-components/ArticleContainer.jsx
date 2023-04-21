import ArticleCard from './ArticleCard';

const ArticleContainer = ({ articles, isLoading }) => {
	return (
		<div className='article-container'>
			{isLoading ? (
				<h3>Loading....</h3>
			) : (
				<ol>
					{articles.map(article => {
						return (
							<li key={article.article_id}>
								<ArticleCard article={article} />
							</li>
						);
					})}
				</ol>
			)}
		</div>
	);
};

export default ArticleContainer;
