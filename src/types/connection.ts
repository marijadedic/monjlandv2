import { connection } from 'websocket';

export type ConnectionListItem = {
	connection: connection;
	color: string;
	username: string;
	timeOfJoining: Date;
};
