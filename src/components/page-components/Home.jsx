import { useEffect, useState } from 'react';
import ArticleContainer from '../home-components/ArticleContainer';
import Sort from '../home-components/Sort';
import { api } from '../../api';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const sortParam = searchParams.get('sort_by') || 'created_at';
		const orderParam = searchParams.get('order_by') || 'desc';
		const sortString = `?sort_by=${sortParam}&order_by=${orderParam}`;
		navigate(`/articles${sortString}`);

		api.fetchArticles(sortString).then(res => {
			setArticles(res);
			setIsLoading(false);
		});
	}, [searchParams]);

	return (
		<main>
			<Sort
				setSearchParams={setSearchParams}
				searchParams={searchParams}
			/>
			<ArticleContainer
				articles={articles}
				isLoading={isLoading}
			/>
		</main>
	);
};

export default Home;
