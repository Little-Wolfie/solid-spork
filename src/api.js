import axios from 'axios';

const newsAPI = axios.create({
	baseURL: 'https://nc-news-xd69.onrender.com/api',
});

const fetchArticles = async (sortQueryString = 'created_at') => {
	const results = await newsAPI.get(`/articles?sort_by=${sortQueryString}`);

	return results.data.articles;
};

export const api = {
	fetchArticles,
};
