import { useEffect, useState } from 'react';

const Sort = ({ setSearchParams, searchParams }) => {
	const [sortValue, setSortValue] = useState('created_at');
	const [orderValue, setOrderValue] = useState('desc');

	const handleSortFormSubmit = e => {
		e.preventDefault();

		setSearchParams(current => {
			return { ...current, sort_by: sortValue, order_by: orderValue };
		});
	};

	useEffect(() => {
		setSortValue(searchParams.get('sort_by') || 'created_at');
		setOrderValue(searchParams.get('order_by') || 'desc');
	}, []);

	return (
		<div className='sort'>
			<form onSubmit={handleSortFormSubmit}>
				<div className='sorting-container'>
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
						<option value='title'>Title</option>
						<option value='author'>Author</option>
					</select>
				</div>

				<div className='sorting-container'>
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
				</div>

				<div className='sorting-container'>
					<button type='submit'>Apply</button>
				</div>
			</form>
		</div>
	);
};

export default Sort;
