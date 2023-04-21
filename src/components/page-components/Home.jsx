import { useEffect, useState } from 'react';
import ArticleContainer from '../home-components/ArticleContainer';
import Sort from '../home-components/Sort';
import { api } from '../../api';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchParams, setSearchParams] = useSearchParams();

	const sortArticles = ({ sortValue, orderValue }) => {
		const sortParam = sortValue;
		const orderParam = orderValue;

		setArticles(current => {
			const sortedArticles = [...current];

			if (orderParam === 'asc') {
				sortedArticles.sort((a, b) => {
					if (
						typeof a[sortParam] === 'number' &&
						typeof b[sortParam] === 'number'
					) {
						return a[sortParam] - b[sortParam];
					} else {
						return a[sortParam].localeCompare(b[sortParam]);
					}
				});
			} else {
				sortedArticles.sort((a, b) => {
					if (
						typeof a[sortParam] === 'number' &&
						typeof b[sortParam] === 'number'
					) {
						return b[sortParam] - a[sortParam];
					} else {
						return b[sortParam].localeCompare(a[sortParam]);
					}
				});
			}

			return sortedArticles;
		});
	};

	useEffect(() => {
		navigate('.', { replace: true });
	}, []);

	useEffect(() => {
		api.fetchArticles().then(res => {
			//not sure why comment count is a string, might be a back end mistake ill fix later
			res.map(article => {
				article.comment_count = Number(article.comment_count);
				return article;
			});

			setArticles(res);
			setIsLoading(false);
		});
	}, []);

	return (
		<main>
			<Sort
				sortArticles={sortArticles}
				setSearchParams={setSearchParams}
			/>
			<ArticleContainer
				articles={articles}
				isLoading={isLoading}
			/>
		</main>
	);
};

export default Home;
