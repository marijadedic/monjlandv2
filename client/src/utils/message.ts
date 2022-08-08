export const sendMessage = (connection: WebSocket, value: string, type: string) => {
	if (!value) {
		return;
	}

	const message = {
		data: value,
		type
	};

	connection.send(JSON.stringify(message));
};

export const parseMessage = (message: string) => {
	try {
		return JSON.parse(message);
	} catch (e) {
		console.log('Invalid JSON');
		return;
	}
};
