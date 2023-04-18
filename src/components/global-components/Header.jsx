import { Link } from 'react-router-dom';

const Header = ({ setIsSideBarOpen }) => {
	return (
		<header>
			<section className='side-bar-btn'>
				<button
					onClick={() => {
						setIsSideBarOpen(current => {
							const isOpen = !current;
							return isOpen;
						});
					}}
				>
					<img
						src='/menu_icon.png'
						alt='Menu button icon'
					/>
				</button>
			</section>

			<Link
				className='logo-link'
				to='/'
			>
				<section className='page-title'>
					<h1>NC</h1>
					<img
						src='/globe_icon.jpg'
						alt='a globe icon'
					/>
					<h1>News</h1>
				</section>
			</Link>

			<section className='user-widget'>
				<div className='user-widget-container'></div>
			</section>
		</header>
	);
};

export default Header;
