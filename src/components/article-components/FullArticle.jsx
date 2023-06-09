import { useEffect, useState } from 'react';
import { api } from '../../api';

const FullArticle = ({ article }) => {
	const [hasVoted, setHasVoted] = useState(false);
  const [disabled, setDisabled] = useState(false);
	const [votes, setVotes] = useState(article.votes);

	const handleUpvoteButton = e => {
		setVotes(current => {
			setDisabled(true);
			return Number(current) + Number(e.target.value);
		});

		api
			.upvoteArticle(article.article_id, e.target.value)
			.then(() => {
				if (e.target.value === '1') {
					setHasVoted(true);
				} else {
					setHasVoted(false);
				}
			})
			.catch(err => {
				alert('Could not upvote at this time, try again later.');
			})
			.finally(() => {
				setDisabled(false);
			});
	};

	useEffect(() => {
		const hasVotedFromStorage = localStorage.getItem(
			`hasVoted-${article.article_id}`
		);

		if (hasVotedFromStorage) {
			setHasVoted(JSON.parse(hasVotedFromStorage));
		}
	}, [article.article_id]);

	useEffect(() => {
		localStorage.setItem(
			`hasVoted-${article.article_id}`,
			JSON.stringify(hasVoted)
		);
	}, [article.article_id, hasVoted]);

	return (
		<article className='full-article-container'>
			<section className='article-content'>
				<h2>{article.title}</h2>

				<div className='divider-small'></div>

				<div className='author-date-upvote-container'>
					<h4>Author: {article.author}</h4>

					<h5>
						Created:{' '}
						{new Date(article.created_at)
							.toUTCString()
							.split(' ')
							.slice(1, 4)
							.join(' ')}
					</h5>

					<div className='upvote-btn'>
						<h5>votes: {votes}</h5>
						<button
							onClick={handleUpvoteButton}
							disabled={disabled}
							value={hasVoted ? -1 : 1}
						>
							{hasVoted ? 'Upvoted!' : 'Vote'}
						</button>
					</div>
				</div>

				<div className='divider-small'></div>

				<img
					src={article.article_img_url}
					alt={article.topic}
				/>

				<p>{article.body}</p>
			</section>
			<div className='divider-small'></div>
		</article>
	);
};

export default FullArticle;
