import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context-components/User';

const Header = ({ setIsSideBarOpen }) => {
	const { signedInUser } = useContext(UserContext);

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
				<img
					src={signedInUser.avatar_url}
					alt='user profile'
				/>
				<p>{signedInUser.username}</p>
			</section>
		</header>
	);
};

export default Header;
