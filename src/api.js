import axios from 'axios';

const newsAPI = axios.create({
	baseURL: 'https://nc-news-xd69.onrender.com/api',
});

const fetchArticles = async (sortQueryString = 'created_at') => {
	const results = await newsAPI.get(`/articles?sort_by=${sortQueryString}`);

	return results.data.articles;
};

const fetchArticleById = async id => {
	const results = await newsAPI.get(`/articles/${id}`);

	return results.data.article;
};

const fetchArticleCommentsById = async id => {
	const results = await newsAPI.get(`/articles/${id}/comments`);

	return results.data.comments;
};

export const api = {
	fetchArticles,
	fetchArticleById,
	fetchArticleCommentsById,
};
