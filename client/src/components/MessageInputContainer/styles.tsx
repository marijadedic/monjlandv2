import styled from 'styled-components';

export const MainContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin-top: 0.5rem;
`;

export const MessageInput = styled.textarea`
	width: 100%;
	border: none;
	border-radius: 2rem;
	padding: 1.2em 0 1.2em 1rem;
	margin-left: 0.5rem;
	box-shadow: -1px 0px 15px -8px rgba(0, 0, 0, 0.27);
	margin-bottom: 0.5rem;
	resize: none;
	font-size: 1rem;
	max-height: 1.2rem;
	background-color: #353535;
	color: white;
`;

export const SendButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 0.7rem;
	margin-bottom: 0.5rem;
`;

export const SendButton = styled.button`
	border: none;
	border-radius: 2rem;
	background-color: #353535;
	cursor: pointer;
`;

export const SendIcon = styled.img`
	width: 2rem;
	height: 2.5rem;
	padding: 0.3rem 0.4rem;
	display: inline;
	margin: auto;
`;
