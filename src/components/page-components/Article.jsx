import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api';
import FullArticle from '../article-components/FullArticle';
import ArticleComments from '../article-components/ArticleComments';

const Article = ({ user }) => {
	const { article_id: id } = useParams();
	const [article, setArticle] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		api.fetchArticleById(id).then(res => {
			setArticle(res);
			setIsLoading(false);
		});
	}, [id]);

	return (
		<section className='content-container'>
			<div className='article'>
				{isLoading ? <h3>Loading...</h3> : <FullArticle article={article} />}
			</div>
			<div className='comments'>
				<ArticleComments
					articleId={id}
					user={user}
				/>
			</div>
		</section>
	);
};

export default Article;
