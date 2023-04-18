import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ isSideBarOpen }) => {
	const navigate = useNavigate();
	const sideBarRef = useRef();

	const toggleSideBar = () => {
		if (isSideBarOpen) {
			sideBarRef.current.classList.add('active');
		} else {
			sideBarRef.current.classList.remove('active');
		}
	};

	useEffect(() => {
		toggleSideBar();
	}, [isSideBarOpen]);

	return (
		<section
			className='side-bar'
			ref={sideBarRef}
		>
			<button onClick={() => navigate('/articles')}>Articles</button>
			<button>Topics</button>
			<button>Profile</button>
			<button>Settings</button>
		</section>
	);
};

export default SideBar;
