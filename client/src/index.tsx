import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { MessagesInfoContext } from 'context/MessagesContext';
import { StatsDataContext } from 'context/StatsContext';
import { UserInfoContext } from 'context/UserContext';
import { WebSocketConnectionContext } from 'context/WebSocketConnectionContext';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const webSocketConnection = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL as string);

root.render(
	<WebSocketConnectionContext connection={webSocketConnection}>
		<UserInfoContext>
			<MessagesInfoContext>
				<StatsDataContext>
					<App />
				</StatsDataContext>
			</MessagesInfoContext>
		</UserInfoContext>
	</WebSocketConnectionContext>
);
