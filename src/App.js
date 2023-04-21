import { useState } from 'react';
import './App.css';
import Header from './components/global-components/Header';
import SideBar from './components/global-components/SideBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/page-components/Home';
import Article from './components/page-components/Article';

function App() {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);

	return (
		<div className='App'>
			<Header setIsSideBarOpen={setIsSideBarOpen} />
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
					element={<Article />}
				/>

				<Route
					path='*'
					element={
						<Navigate
							to='/articles'
							replace
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
