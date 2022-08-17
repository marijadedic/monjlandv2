import React, { FunctionComponent, RefObject, useContext, useState } from 'react';
import { ConnectionContext } from 'context/WebSocketConnectionContext';

import { sendMessage } from 'utils/message';

import { MainContainer, SendButton, SendButtonContainer, SendIcon,Textarea, TextareaWrapper } from './styles';

interface MessageInputProps {
	messageInputRef: RefObject<HTMLTextAreaElement>;
}

export const MessageInput: FunctionComponent<MessageInputProps> = ({ messageInputRef }) => {
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
		messageInputRef.current?.focus();
		if (inputValue.length) {
			sendMessage(WebSocketConnection, inputValue, 'message');
			setInputValue('');
		}
	};

	return (
		<MainContainer>
			<TextareaWrapper >
			<Textarea
				ref={messageInputRef}
				placeholder='Type message...'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyDown={handleInputChange}
			></Textarea>
			</TextareaWrapper>
			<SendButtonContainer>
				<SendButton onClick={handleSendMessage}>
					<SendIcon
						src='./sendIcon.svg'
						alt='send'
					/>
				</SendButton>
			</SendButtonContainer>
		</MainContainer>
	);
};
