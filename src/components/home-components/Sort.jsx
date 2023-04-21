import { useEffect, useState } from 'react';

const Sort = ({ sortArticles, setSearchParams }) => {
	const [sortValue, setSortValue] = useState('created_at');
	const [orderValue, setOrderValue] = useState('desc');

	const handleSortFormSubmit = e => {
		e.preventDefault();

		setSearchParams(current => {
			return { ...current, sort_by: sortValue, order_by: orderValue };
		});

		sortArticles({ sortValue, orderValue });
	};

	return (
		<div className='sort'>
			<form onSubmit={handleSortFormSubmit}>
				<label htmlFor='sort'>Sort by </label>
				<select
					name='sort'
					id='sort'
					value={sortValue}
					onChange={e => setSortValue(e.target.value)}
				>
					<option value='created_at'>Date</option>
					<option value='votes'>Votes</option>
					<option value='comment_count'>Comments</option>
				</select>

				<label htmlFor='order'>Order by </label>
				<select
					name='order'
					id='order'
					value={orderValue}
					onChange={e => setOrderValue(e.target.value)}
				>
					<option value='desc'>Desc</option>
					<option value='asc'>Asc</option>
				</select>
				<button type='submit'>Apply</button>
			</form>
		</div>
	);
};

export default Sort;
