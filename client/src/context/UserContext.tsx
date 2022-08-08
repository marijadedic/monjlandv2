import React, { createContext, FunctionComponent, useState } from 'react';
import { User } from 'types/user';

interface UserInfoContextProps {
	children: any;
}

export const UserContext = createContext({
	user: {} as User,
	setUser: (user: User) => {}
});

export const UserInfoContext: FunctionComponent<UserInfoContextProps> = ({ children }) => {
	const setUser = (user: User) => {
		setUserData({ ...userData, user });
	};

	const [userData, setUserData] = useState({ user: {} as User, setUser });

	return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};
