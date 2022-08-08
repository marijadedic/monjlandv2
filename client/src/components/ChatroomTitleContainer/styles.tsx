import styled from 'styled-components';

export const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
`;

export const StatsButton = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
	position: absolute;
	left: 0;
	padding: 1rem;
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

export const Title = styled.h1`
	width: max-content;
	font-size: 1.6rem;
	padding: 1rem;
	font-weight: 700;
`;
