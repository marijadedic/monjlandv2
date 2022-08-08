import { server as WebSocketServer } from 'websocket';
import { getRandomColor } from './utils/colors';
import {
	htmlEntities,
	isOriginAllowed,
	pushToJSONFile,
	sendMessage,
	sendMessageToAllClients,
	validateUsername
} from './utils/helpers';
import { Server } from 'http';

import fs from 'fs';

import server from './server';
import { Client } from 'types/stats';
import { ConnectionListItem } from 'types/connection';
import { logger } from './utils/logger';

const wsServer = new WebSocketServer({
	httpServer: server as unknown as Server,
	autoAcceptConnections: false
});

let clients: Array<Client> = [];
let connections: Array<ConnectionListItem> = [];
let messageId = 0;

wsServer.on('request', (request) => {
	logger.info(`Connection from origin ${request.origin}.`);

	if (!isOriginAllowed(request.origin)) {
		request.reject();
		logger.info(`Connection from origin ${request.origin} rejected.`);
		return;
	}

	const connection = request.accept(null, request.origin);
	logger.info(`Connection accepted.`);

	sendMessageToAllClients(connections, { type: 'stats', data: { clients } });

	let username: string;
	let userColor: string;

	connection.on('message', (message) => {
		try {
			if (message.type === 'utf8') {
				const messageData = JSON.parse(message.utf8Data);

				if (messageData.type === 'username') {
					const { error } = validateUsername(clients, messageData);

					if (error) {
						sendMessage(connection, {
							type: 'error',
							data: error
						});
					} else {
						username = htmlEntities(messageData.data);
						userColor = getRandomColor(clients);

						const timeOfJoining = new Date();

						connections.push({ connection, username, color: userColor, timeOfJoining });
						clients.push({ username, color: userColor, timeOfJoining });

						sendMessage(connection, { type: 'user', data: { color: userColor, username } });

						sendMessageToAllClients(connections, { type: 'stats', data: { clients } });

						logger.info(`User ${username} with ${userColor} color joined.`);
					}
				} else if (messageData.type === 'username-availability') {
					const { error } = validateUsername(clients, messageData);
					if (error) {
						sendMessage(connection, {
							type: 'error',
							data: error
						});
					} else {
						sendMessage(connection, {
							type: 'info',
							data: 'username-available'
						});
					}
				} else if (messageData.type === 'message') {
					logger.info(`Received Message from ${username}: ${messageData.data}`);

					const newMessage = {
						id: messageId,
						time: new Date(),
						text: htmlEntities(messageData.data),
						author: username,
						color: userColor
					};

					messageId++;

					pushToJSONFile('src/history.json', newMessage);

					sendMessageToAllClients(connections, { type: 'message', data: newMessage });
				}
			}
		} catch (error) {
			logger.error(error);
		}
	});

	connection.on('close', () => {
		if (username && userColor) {
			logger.info(`Peer ${username} disconnected.`);
			clients = clients.filter((client) => client.username !== username);
			connections = connections.filter((client) => client.username !== username);
			sendMessageToAllClients(connections, { type: 'stats', data: { clients } });
		}

		if (clients.length === 0) {
			fs.writeFile('src/history.json', JSON.stringify([]), (err: any) => {
				if (err) logger.error(err);
			});
			messageId = 0;
		}
	});

	connection.on('error', (error) => {
		logger.error(error);
	});
});
