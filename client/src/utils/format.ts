function dateFormatterFunc(locale: string, options: Record<string, any>) {
	const localFormatter = new Intl.DateTimeFormat(locale, options);

	return (argument: string) => {
		return localFormatter.format(new Date(argument));
	};
}

export const getMessageTime = (time: string) =>
	dateFormatterFunc('en-GB', {
		hour: 'numeric',
		minute: 'numeric'
	})(time);

export const getJoiningTime = (time: string) =>
	dateFormatterFunc('en-GB', {
		month: '2-digit',
		day: '2-digit',
		year: '2-digit',
		hour: 'numeric',
		minute: 'numeric'
	})(time);
