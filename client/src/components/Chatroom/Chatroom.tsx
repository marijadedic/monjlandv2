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
	const [messagesList, setMessagesList] = useState(messages);

	const bottomRef = useRef<HTMLDivElement>(null);
	const lastMessageRef = useRef<HTMLDivElement>(null);
	const messageInputRef = useRef<HTMLTextAreaElement>(null);

	const { user } = useContext(UserContext);

	const isVisible = useOnScreen(lastMessageRef.current ? lastMessageRef : bottomRef);

	const scrollToBottom = () => {
		lastMessageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		setTimeout(() => {
			if (lastMessageRef.current) {
				lastMessageRef.current.scrollIntoView({ block: 'start' });
			}
		}, 200);
	};

	useEffect(() => {
		// scroll to bottom on every new message if user hasn't already scrolled up
		if (isVisible) {
			setMessagesList(messages);
			scrollToBottom();
		} else if (messagesList.length) {
			setMessagesList(messages);

			if (user.username === messages[messages.length - 1].author) {
				showNewMessages();
				setShowNewMessagePin(false);
			} else {
				const timeout = setTimeout(() => {
					if (user.username !== messages[messages.length - 1].author) setShowNewMessagePin(true);
				}, 500);
				return () => {
					clearTimeout(timeout);
				};
			}
		}
	}, [messages, messagesList]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (isVisible) setShowNewMessagePin(false);
		}, 700);

		return () => {
			clearTimeout(timeout);
		};
	}, [isVisible]);

	const showNewMessages = () => {
		setShowNewMessagePin(false);
		scrollToBottom();
	};

	return (
		<MainContainer>
			<ChatroomTitleContainer />
			<Body>
				{messagesList.map((message, i) => (
					<Message
						key={message.id}
						message={message}
						lastMessageRef={i === messagesList.length - 1 ? lastMessageRef : null}
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
			<MessageInput messageInputRef={messageInputRef} />
		</MainContainer>
	);
};
