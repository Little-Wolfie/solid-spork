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

const postCommentToArticle = async (id, comment) => {
	const results = await newsAPI.post(`/articles/${id}/comments`, comment);
	return results.data.comment;
};

const upvoteArticle = async (id, value) => {
	return await newsAPI.patch(`/articles/${id}`, {
		inc_votes: value,
	});
};

const getUserData = async () => {
	return await newsAPI.get(`/users`);
};

export const api = {
	fetchArticles,
	fetchArticleById,
	fetchArticleCommentsById,
	upvoteArticle,
	getUserData,
	postCommentToArticle,
};
