import styled from 'styled-components';

export const MainContainer = styled.div`
	width: 60%;
	max-width: 800px;
	margin: 8rem auto;
	background-color: #121212;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
	padding: 3rem;
	text-align: center;

	@media screen and (max-width: 1080px) {
		max-width: unset;
		width: 100%;
		height: 100vh;
		padding: 0;
		margin: 0 auto;
	}
`;

export const Title = styled.h1`
	font-size: 2rem;
	padding-bottom: 4rem;
	font-weight: bold;

	@media screen and (max-width: 1080px) {
		font-size: 1.5rem;
		padding-top: 3rem;
	}
`;

export const Input = styled.input`
	padding: 1rem;
	border-radius: 0.5rem;
	border: none;
	width: 90%;
	font-size: 1.5rem;
	background-color: #353535;
	color: white;

	&:focus {
		outline: none;
	}

	@media screen and (max-width: 1080px) {
		padding: 0.5rem;
		font-size: normal;
		width: 80%;
	}
`;

export const ErrorLabel = styled.div<{ visible: boolean }>`
	margin-top: 1.2rem;
	color: #f46767;
	font-weight: 600;
	height: 1rem;

	visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};

	@media screen and (max-width: 1080px) {
		padding: 0 2rem;
	}
`;

export const Button = styled.button`
	border-radius: 0.5rem;
	background-color: rgb(10, 87, 181);
	color: white;
	font-size: 1.5rem;
	border: none;
	padding: 0.7rem 1rem;
	margin-top: 4rem;
	cursor: pointer;

	&:hover {
		background-color: rgb(9, 37, 71);
	}

	&:active {
		background-color: rgb(9, 37, 71);
		border: 1px solid rgb(36, 126, 237);
	}

	&:disabled {
		cursor: not-allowed;
		background-color: grey;
	}

	@media screen and (max-width: 1080px) {
		padding: 0.5rem 0.7rem;
		margin-top: 3rem;
	}
`;
