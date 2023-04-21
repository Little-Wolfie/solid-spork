import { useEffect, useState } from 'react';
import ArticleContainer from '../home-components/ArticleContainer';
import Sort from '../home-components/Sort';
import { api } from '../../api';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		console.clear();

		const sortParam = searchParams.get('sort_by') || 'created_at';
		const orderParam = searchParams.get('order_by') || 'desc';
		const sortString = `?sort_by=${sortParam}&order_by=${orderParam}`;
		console.log('sortString:', sortString);

		api.fetchArticles(sortString).then(res => {
			console.log('res:', res);

			setArticles(res);
			setIsLoading(false);
		});
	}, [searchParams]);

	return (
		<main>
			<Sort setSearchParams={setSearchParams} />
			<ArticleContainer
				articles={articles}
				isLoading={isLoading}
			/>
		</main>
	);
};

export default Home;
