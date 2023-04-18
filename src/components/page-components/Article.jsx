import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api';
import FullArticle from '../article-components/FullArticle';

const Article = () => {
	const { article_id: id } = useParams();
	const [article, setArticle] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		api.fetchArticleById(id).then(res => {
			setArticle(res);
			setIsLoading(false);
		});
	}, []);

	return (
		<div className='content-container'>
			<div className='article'>
				{isLoading ? <h3>Loading...</h3> : <FullArticle article={article} />}
			</div>
			<div className='comments'></div>
		</div>
	);
};

export default Article;
