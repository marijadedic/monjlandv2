import winston from 'winston';

const { combine, timestamp, printf } = winston.format;

const myFormat = printf(({ level, message, timestamp }) => {
	return `${timestamp} ${level}: ${message}`;
});

export const logger = winston.createLogger({
	format: combine(timestamp(), myFormat),
	transports: [new winston.transports.Console()]
});
