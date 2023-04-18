import ArticleCard from './ArticleCard';
import { api } from '../../api';
import { useEffect, useState } from 'react';

const ArticleContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		api.fetchArticles().then(res => {
			setArticles(res);
			setIsLoading(false);
		});
	}, []);

	return (
		<div className='article-container'>
			{isLoading ? (
				<h3>Loading....</h3>
			) : (
				articles.map(article => {
					return (
						<ArticleCard
							article={article}
							key={article.article_id}
						/>
					);
				})
			)}
		</div>
	);
};

export default ArticleContainer;
