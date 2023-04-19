import { useEffect, useState } from 'react';
import './App.css';
import { api } from './api';
import Header from './components/global-components/Header';
import SideBar from './components/global-components/SideBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/page-components/Home';
import Article from './components/page-components/Article';

function App() {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);
	const [user, setUser] = useState({});

	//fake user, picks a random dummy user from db
	useEffect(() => {
		api.getUserData().then(res => {
			const tempUser = res.data.users[Math.floor(Math.random() * 6)];
			setUser(tempUser);
		});
	}, []);

	return (
		<div className='App'>
			<Header
				setIsSideBarOpen={setIsSideBarOpen}
				user={user}
			/>
			<SideBar
				isSideBarOpen={isSideBarOpen}
				setIsSideBarOpen={setIsSideBarOpen}
			/>

			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>

				<Route
					path='/articles'
					element={<Home />}
				/>

				<Route
					path='/articles/:article_id'
					element={<Article user={user} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
