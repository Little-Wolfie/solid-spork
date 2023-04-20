import { createContext, useEffect, useState } from 'react';
import { api } from '../../api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [signedInUser, setSignedInUser] = useState({});

	//fake user, picks a random dummy user from db
	useEffect(() => {
		api.getUserData().then(res => {
			const tempUser = res.data.users[Math.floor(Math.random() * 6)];
			setSignedInUser(tempUser);
		});
	}, []);

	return (
		<UserContext.Provider value={{ signedInUser, setSignedInUser }}>
			{children}
		</UserContext.Provider>
	);
};
