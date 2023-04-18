import { useState } from 'react';
import './App.css';
import Header from './components/global-components/Header';
import SideBar from './components/global-components/SideBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/page-components/Home';

function App() {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);

	return (
		<div className='App'>
			<Header setIsSideBarOpen={setIsSideBarOpen} />
			<SideBar isSideBarOpen={isSideBarOpen} />

			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>

				<Route
					path='/articles'
					element={<Home />}
				/>
			</Routes>
		</div>
	);
}

export default App;
