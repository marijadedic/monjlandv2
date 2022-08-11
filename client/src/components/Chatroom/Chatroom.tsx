import React, { useContext, useEffect, useRef, useState } from 'react';
import { MessagesContext } from 'context/MessagesContext';
import { UserContext } from 'context/UserContext';

import { ChatroomTitleContainer } from 'components/ChatroomTitleContainer/ChatroomTitleContainer';
import { Message } from 'components/Message/Message';
import { MessageInput } from 'components/MessageInputContainer/MessageInputContainer';
import { useOnScreen } from 'utils/hooks';

import { Body, Bubble, MainContainer, MessageIcon, NewMessagePin, Pointer } from './styles';

export const Chatroom = () => {
	const { messages } = useContext(MessagesContext);

	const [showNewMessagePin, setShowNewMessagePin] = useState(false);

	const bottomRef = useRef<HTMLDivElement>(null);
	const messageInputRef = useRef<HTMLTextAreaElement>(null);

	const { user } = useContext(UserContext);

	const isVisible = useOnScreen(bottomRef);

	const scrollToBottom = () => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		setTimeout(() => {
			if (bottomRef.current) {
				bottomRef.current.scrollIntoView({ block: 'start' });
			}
		}, 200);
	};

	useEffect(() => {
		// scroll to bottom on every new message if user hasn't already scrolled up
		if (isVisible) {
			scrollToBottom();
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
		scrollToBottom();
	};

	return (
		<MainContainer>
			<ChatroomTitleContainer />
			<Body>
				{messages.map((message, i) => (
					<Message
						key={message.id}
						message={message}
					/>
				))}
				<div
					ref={bottomRef}
					style={{ color: 'transparent' }}
				>
					bottom
				</div>
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
			<MessageInput messageInputRef={messageInputRef} />
		</MainContainer>
	);
};
