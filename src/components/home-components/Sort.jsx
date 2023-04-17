const Sort = () => {
	return (
		<div className='sort'>
			<label htmlFor='sort'>Sort by </label>
			<select
				name='sort'
				id='sort'
			>
				<option value='date'>Date</option>
			</select>
		</div>
	);
};

export default Sort;
