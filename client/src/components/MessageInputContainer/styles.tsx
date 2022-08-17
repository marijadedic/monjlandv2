import styled from 'styled-components';

export const MainContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
`;

export const TextareaWrapper = styled.div`
	width: 100%;
	border-radius: 1.5rem;
	background-color: #353535;
	margin: 0.5rem;
	padding: 0.2rem;
	height: 3rem;
	display: flex;
	align-items: center;
`;

export const Textarea = styled.textarea`
	border-radius: 1.5rem;
	background-color: #353535;
	width: 99%;
	max-height: 100%;
	border: none;
	height: 2rem;
	padding: 0.5rem 1rem;
	resize: none;
	font-size: 1rem;
	color: white;
	box-sizing: border-box;
	line-height: 1rem;

	&:focus {
		outline: none;
		border: none;
	}
`;

export const SendButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-right: 0.7rem;
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
