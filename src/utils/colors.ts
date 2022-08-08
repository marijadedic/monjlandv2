export const getRandomColor = (clients: Array<Record<string, any>>) => {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}

	const colorAlreadyTaken = clients.find((client) => client.color === color);
	if (colorAlreadyTaken) {
		getRandomColor(clients);
	} else return color;
};
