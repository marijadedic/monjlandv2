import styled from 'styled-components';

export const Wrapper = styled.div<{ isOwnMessage: boolean }>`
	margin: 0.5rem 0;
	display: flex;
	flex-direction: column;

	align-items: ${({ isOwnMessage }) => (isOwnMessage ? 'flex-end' : 'flex-start')};
`;

export const MainMessageContainer = styled.div`
	background-color: #353535;
	padding: 0.5rem 0.5rem 0 0.5rem;
	max-width: 90%;
	border-radius: 0.5rem;
	max-width: 70%;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Author = styled.div<{ backgroundColor: string; foregroundColor: string }>`
	background-color: #353535;
	padding: 0.2rem 0.3rem;
	border-radius: 0.5rem;
	width: max-content;

	background-color: ${({ backgroundColor }) => backgroundColor};
	color: ${({ foregroundColor }) => foregroundColor};
`;

export const MessageContent = styled.p`
	margin: 0.5rem 0;
	padding: 0.2rem 0.5rem;
	word-break: break-all;
	white-space: pre-wrap;
`;

export const Time = styled.div`
	color: white;
	margin: 5px 0 10px 0;
	display: flex;
	justify-content: flex-end;
	font-size: small;
`;
