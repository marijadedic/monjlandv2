import React, { useContext, useState } from 'react';
import { ConnectionContext } from 'context/WebSocketConnectionContext';

import { sendMessage } from 'utils/message';

import { MainContainer, MessageInput, SendButton, SendButtonContainer, SendIcon } from './styles';

export const MessageInputContainer = () => {
	const [inputValue, setInputValue] = useState('');

	const WebSocketConnection = useContext(ConnectionContext);

	const handleInputChange = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.key === 'Enter' && !event.shiftKey && event.target.value.length) {
			event.preventDefault();
			sendMessage(WebSocketConnection, inputValue, 'message');
			setInputValue('');
		} else if (event.key === 'Enter' && !event.shiftKey && !event.target.value.length) {
			event.preventDefault();
			setInputValue('');
		}
	};

	const handleSendMessage = () => {
		if (inputValue.length) {
			sendMessage(WebSocketConnection, inputValue, 'message');
			setInputValue('');
		}
	};

	return (
		<MainContainer>
			<MessageInput
				placeholder='Type message...'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyDown={handleInputChange}
			></MessageInput>
			<SendButtonContainer>
				<SendButton onClick={handleSendMessage}>
					<SendIcon src='./sendIcon.svg' alt='send' />
				</SendButton>
			</SendButtonContainer>
		</MainContainer>
	);
};
