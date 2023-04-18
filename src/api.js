import axios from 'axios';

const newsAPI = axios.create({
	baseURL: 'https://nc-news-xd69.onrender.com/api',
});

const fetchArticles = async () => {
	const results = await newsAPI.get('/articles');
	const sortedResults = results.data.articles.sort(
		(a, b) => new Date(b.created_at) - new Date(a.created_at)
	);

	return sortedResults;
};

export const api = {
	fetchArticles,
};
