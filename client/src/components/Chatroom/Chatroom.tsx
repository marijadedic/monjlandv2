import React, { useContext, useEffect, useRef, useState } from 'react';
import { MessagesContext } from 'context/MessagesContext';
import { UserContext } from 'context/UserContext';

import { ChatroomTitleContainer } from 'components/ChatroomTitleContainer/ChatroomTitleContainer';
import { Message } from 'components/Message/Message';
import { MessageInputContainer } from 'components/MessageInputContainer/MessageInputContainer';
import { useOnScreen } from 'utils/hooks';

import { Body, Bubble, MainContainer, MessageIcon, NewMessagePin, Pointer } from './styles';

export const Chatroom = () => {
	const [showNewMessagePin, setShowNewMessagePin] = useState(false);

	const bottomRef = useRef<HTMLDivElement>(null);

	const { messages } = useContext(MessagesContext);

	const { user } = useContext(UserContext);

	const isVisible = useOnScreen(bottomRef);

	useEffect(() => {
		// scroll to bottom on every new message if user hasn't already scrolled up
		if (isVisible) {
			bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
		} else if (messages.length) {
			if (user.username === messages[messages.length - 1].author) {
				showNewMessages();
			} else {
				setShowNewMessagePin(true);
			}
		}
	}, [messages]);

	useEffect(() => {
		if (isVisible) setShowNewMessagePin(false);
	}, [isVisible]);

	const showNewMessages = () => {
		setShowNewMessagePin(false);
		bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
	};

	return (
		<MainContainer>
			<ChatroomTitleContainer />
			<Body>
				{messages.map((message) => (
					<Message
						key={message.id}
						message={message}
					/>
				))}
				<div ref={bottomRef} />
			</Body>

			{showNewMessagePin && (
				<NewMessagePin onClick={showNewMessages}>
					<Bubble>
						<MessageIcon
							src='./messageIcon.svg'
							alt='message'
						/>
					</Bubble>

					<Pointer />
				</NewMessagePin>
			)}
			<MessageInputContainer />
		</MainContainer>
	);
};
