import styled from 'styled-components';

export const MainContainer = styled.div`
	background-color: #353535;
	width: 60vw;
	max-width: 800px;
	margin: 2rem auto;
	height: 85vh;
	position: fixed;
	top: 0;
	bottom: 0;
	z-index: 100;
	padding: 2rem;

	&.stats-transition-enter {
		transform: translateX(-200%);
	}

	&.stats-transition-enter-active {
		transform: translateX(0);
		transition: all 0.5s ease-in;
	}

	&.stats-transition-exit {
		transform: translateX(0);
	}

	&.stats-transition-exit-active {
		transform: translateX(200%);
		transition: all 1s ease-out;
	}

	@media screen and (max-width: 1080px) {
		position: fixed;
		top: 0;
		bottom: 0;
		height: 100vh;
		width: 90%;
		z-index: 100;
		margin: 0;
		padding: 2rem 3rem;

		&.stats-transition-exit-active {
			transform: translateX(-200%);
		}
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;
`;

export const StatsIcon = styled.img`
	height: 1.5rem;
	width: 1.5rem;
	background-color: transparent;
	filter: invert(99%) sepia(55%) saturate(0%) hue-rotate(67deg) brightness(111%) contrast(100%);

	@media screen and (max-width: 1080px) {
		height: 2rem;
		width: 2rem;
	}
`;

export const CancelIcon = styled(StatsIcon)`
	cursor: pointer;
`;

export const ClientList = styled.div`
	overflow: auto;
`;

export const Client = styled.div`
	padding: 0.2rem 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-shadow: 0 0 1px #000;
`;

export const Username = styled.div<{ backgroundColor: string; foregroundColor: string }>`
	padding: 0.2rem 0.5rem;
	border-radius: 1rem;
	font-weight: bold;
	text-shadow: 0 0 5px #000;
	word-break: break-all;
	max-width: 60%;

	background-color: ${({ backgroundColor }) => backgroundColor};
	color: ${({ foregroundColor }) => foregroundColor};

	@media screen and (max-width: 1080px) {
		max-width: 65%;
		padding: 0.4rem 0.6rem;
		margin-right: 1.5rem;
	}
`;

export const Time = styled.div`
	@media screen and (max-width: 1080px) {
		word-wrap: break-word;
		text-align: center;
	}
`;
