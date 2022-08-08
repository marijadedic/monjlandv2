import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Stats } from 'components/Stats/Stats';

import { StatsButton, StatsIcon, Title, TitleContainer } from './styles';

export const ChatroomTitleContainer = () => {
	const [showStats, setShowStats] = useState(false);

	const closeStats = () => {
		setShowStats(false);
	};

	return (
		<TitleContainer>
			<StatsButton onClick={() => setShowStats(true)}>
				<StatsIcon
					src='./statsIcon.svg'
					alt='stats'
				/>
			</StatsButton>
			<Title>Monjland</Title>

			<CSSTransition
				mountOnEnter
				unmountOnExit
				in={showStats}
				timeout={500}
				classNames='stats-transition'
			>
				<Stats toggleStats={closeStats} />
			</CSSTransition>
		</TitleContainer>
	);
};
