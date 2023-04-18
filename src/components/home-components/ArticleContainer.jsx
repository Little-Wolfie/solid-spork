import ArticleCard from './ArticleCard';
import { api } from '../../api';
import { useEffect, useState } from 'react';

const ArticleContainer = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		api.fetchArticles().then(res => {
			// console.log(res.data.articles[0]);
			setArticles(res);
		});
	}, []);

	return (
		<div className='article-container'>
			{articles.map(article => {
				return (
					<ArticleCard
						article={article}
						key={article.article_id}
					/>
				);
			})}
		</div>
	);
};

export default ArticleContainer;
