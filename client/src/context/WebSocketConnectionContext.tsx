import React, { createContext, FunctionComponent } from 'react';

interface WebSocketContextProps {
	connection: WebSocket;
	children: any;
}

export const ConnectionContext = createContext<WebSocket>({} as WebSocket);

export const WebSocketConnectionContext: FunctionComponent<WebSocketContextProps> = ({ connection, children }) => (
    <ConnectionContext.Provider value={connection}>
        {children}
    </ConnectionContext.Provider>
);
