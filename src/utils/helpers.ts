import { Message } from 'types/ message';
import { ConnectionListItem } from 'types/connection';
import { Client } from 'types/stats';
import { connection } from 'websocket';
import { logger } from './logger';

export const isOriginAllowed = (origin: string) => {
	logger.info(origin);
	return true;
};

export const htmlEntities = (string: string) => {
	let formattedString = String(string);

	formattedString = formattedString.replace(/[\u00A0-\u9999<>\&]/g, function (i) {
		return '&#' + i.charCodeAt(0) + ';';
	});

	return formattedString;
};
export const sendMessage = (connection: connection, data: Message<string | Record<string, any>>) => {
	const json = JSON.stringify(data);
	connection.sendUTF(json);
};

export const sendMessageToAllClients = (
	connections: Array<ConnectionListItem>,
	message: Message<string | Record<string, any>>
) => {
	for (let i = 0; i < connections.length; i++) {
		sendMessage(connections[i].connection, message);
	}
};

export const validateUsername = (clients: Array<Client>, message: Message<string>) => {
	const usernameAlreadyExists = clients.find((client) => client.username === message.data);

	if (usernameAlreadyExists) {
		return {
			error: 'That username is already taken, please use another one.'
		};
	} else if (message.data.length > 30) {
		return {
			error: 'Username must contain maximum 30 characters.'
		};
	}

	return {};
};
