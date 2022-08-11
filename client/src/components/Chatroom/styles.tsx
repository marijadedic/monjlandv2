import styled from 'styled-components';

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 60vw;
	max-width: 800px;
	margin: 3rem auto;
	height: 85vh;
	background-color: #121212;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

	@media screen and (max-width: 1080px) {
		box-shadow: none;
		width: 100%;
		height: calc(100vh - 1.6rem * 2 - 0.4rem);
		margin: 0;
		max-width: unset;
	}
`;

export const Body = styled.div`
	height: 100%;
	padding: 1.5rem 1rem 0 1rem;
	display: flex;
	flex-direction: column;
	overflow: auto;
	position: relative;
`;

export const NewMessagePin = styled.div`
	position: absolute;
	z-index: 10;
	color: white;
	width: max-content;
	left: 0;
	right: 0;
	bottom: 11rem;
	margin-left: auto;
	margin-right: auto;

	@media screen and (max-width: 1080px) {
		bottom: 5rem;
	}
`;

export const Bubble = styled.div`
	padding: 1.2rem;
	background-color: rgb(10, 87, 181);
	border-radius: 5rem;
`;

export const Pointer = styled.div`
	height: 1.5rem;
	width: 1.2rem;
	background-color: rgb(10, 87, 181);
	margin: 0 auto;
	transform: rotate(45deg);
	margin-top: -22px;
	position: relative;
`;

export const MessageIcon = styled.img`
	height: 1.5rem;
	width: 1.5rem;
	z-index: 11;
`;
