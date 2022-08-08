import React, { FunctionComponent, useContext } from 'react';
import { StatsContext } from 'context/StatsContext';

import { getForegroundColorBasedOnBackgroundColor } from 'utils/colors';
import { getJoiningTime } from 'utils/format';

import { CancelIcon, Client, ClientList, Header, MainContainer, StatsIcon, Time, Username } from './styles';

interface StatsContainerProps {
	toggleStats: () => void;
}

export const Stats: FunctionComponent<StatsContainerProps> = ({ toggleStats }) => {
	const stats = useContext(StatsContext).stats;

	return (
		<MainContainer>
			<Header>
				<StatsIcon
					src='./statsIcon.svg'
					alt='stats'
				/>
				<CancelIcon
					src='./xIcon.svg'
					alt='cancel'
					onClick={toggleStats}
				/>
			</Header>
			<ClientList>
				{stats.map((client) => (
					<Client key={client.username}>
						<Username
							backgroundColor={client.color}
							foregroundColor={getForegroundColorBasedOnBackgroundColor(client.color)}
							dangerouslySetInnerHTML={{ __html: `${client.username}` }}
						/>
						<Time>{getJoiningTime(client.timeOfJoining)}</Time>
					</Client>
				))}
			</ClientList>
		</MainContainer>
	);
};
