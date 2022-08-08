import React, { FunctionComponent, useContext, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { MessagesContext } from 'context/MessagesContext';
import { StatsContext } from 'context/StatsContext';
import { UserContext } from 'context/UserContext';
import { ConnectionContext } from 'context/WebSocketConnectionContext';

import { Chatroom } from 'components/Chatroom/Chatroom';
import { UsernameSelection } from 'components/UsernameSelection/UsernameSelection';
import { parseMessage } from 'utils/message';

import './App.css';

const App: FunctionComponent = () => {
	const [showUsernameSelect, setShowUsernameSelect] = useState(true);
	const [error, setError] = useState('');

	const WebSocketConnection = useContext(ConnectionContext);
	const messagesData = useContext(MessagesContext);
	const { setUser } = useContext(UserContext);
	const { setStats } = useContext(StatsContext);

	WebSocketConnection.onmessage = (message) => {
		const json = parseMessage(message.data);

		switch (json.type) {
			case 'error':
				setError(json.data);
				break;
			case 'info':
				if (json.data === 'username-available' && error) {
					setError('');
				}
				break;
			case 'user':
				setUser(json.data);
				setShowUsernameSelect(false);
				break;
			case 'message':
				messagesData.addMessage(json.data);
				break;
			case 'stats':
				setStats(json.data.clients);
				break;
			default:
				break;
		}
	};

	return (
		<div className='App'>
			<SwitchTransition mode='out-in'>
				<CSSTransition
					key={showUsernameSelect ? 'username-select' : 'chatroom'}
					unmountOnExit
					classNames='chatroom'
					addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
				>
					{showUsernameSelect ? <UsernameSelection error={error} /> : <Chatroom />}
				</CSSTransition>
			</SwitchTransition>
		</div>
	);
};

export default App;
