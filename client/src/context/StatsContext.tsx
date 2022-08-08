import React, { createContext, FunctionComponent, useState } from 'react';
import { Client } from 'types/stats';

interface StatsContextProps {
	children: any;
}

export const StatsContext = createContext({
	stats: [] as Array<Client>,
	setStats: (stats: Array<Client>) => {}
});

export const StatsDataContext: FunctionComponent<StatsContextProps> = ({ children }) => {
	const setStats = (stats: Array<Client>) => {
		setStatsData({ ...statsData, stats });
	};

	const [statsData, setStatsData] = useState({ stats: [] as Array<Client>, setStats });

	return <StatsContext.Provider value={statsData}>{children}</StatsContext.Provider>;
};
