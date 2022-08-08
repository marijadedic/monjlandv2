import React, { createContext, FunctionComponent, useState } from 'react';
import { Message } from 'types/message';

interface MessagesContextProps {
	children: any;
}

export const MessagesContext = createContext({
	messages: [] as Array<Message>,
	addMessage: (message: Message) => {}
});

export const MessagesInfoContext: FunctionComponent<MessagesContextProps> = ({ children }) => {
	const addMessage = (message: Message) => {
		setMessagesData((prevState) => ({ ...prevState, messages: [...prevState.messages, message] }));
	};

	const [messagesData, setMessagesData] = useState({ messages: [] as Array<Message>, addMessage });

	return <MessagesContext.Provider value={messagesData}>{children}</MessagesContext.Provider>;
};
