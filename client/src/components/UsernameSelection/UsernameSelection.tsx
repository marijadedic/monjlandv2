import React, { FunctionComponent, useContext, useState } from 'react';
import { ConnectionContext } from 'context/WebSocketConnectionContext';

import { sendMessage } from 'utils/message';

import { Button, ErrorLabel, Input, MainContainer, Title } from './styles';

interface UsernameSelectionProps {
	error: string;
}

export const UsernameSelection: FunctionComponent<UsernameSelectionProps> = ({ error }) => {
	const [inputValue, setInputValue] = useState('');

	const WebSocketConnection = useContext(ConnectionContext);

	const handleUsernameInputChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key !== 'Enter') {
			sendMessage(WebSocketConnection, event.target.value, 'username-availability');
		} else if (event.key === 'Enter') {
			handleContinueClick();
		}
	};

	const handleContinueClick = () => {
		if (inputValue) sendMessage(WebSocketConnection, inputValue, 'username');
	};

	return (
		<MainContainer>
			<Title>Choose your username</Title>
			<Input
				disabled={WebSocketConnection.readyState > 1}
				placeholder='Enter username...'
				onKeyUp={handleUsernameInputChange}
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
			/>
			<ErrorLabel visible={!!error}>{error}</ErrorLabel>

			<Button disabled={WebSocketConnection.readyState > 1 || !inputValue} onClick={handleContinueClick}>
				Continue
			</Button>
		</MainContainer>
	);
};
