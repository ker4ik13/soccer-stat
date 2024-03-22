'use client';

import Link from 'next/link';
import styles from './LeaguesPage.module.scss';
import Pagination from '@/widgets/Pagination/Pagination';
import Search from '@/shared/Search/Search';
import { useEffect } from 'react';
import { LeagueService } from '@/services/LeagueService';

const mockLeagues = [
	{
		id: '1',
		name: 'name1',
		area: {
			name: 'country1',
		},
	},
	{
		id: '2',
		name: 'name2',
		area: {
			name: 'country2',
		},
	},
	{
		id: '3',
		name: 'name3',
		area: {
			name: 'country3',
		},
	},
	{
		id: '4',
		name: 'name4',
		area: {
			name: 'country4',
		},
	},
	{
		id: '5',
		name: 'name5',
		area: {
			name: 'country5',
		},
	},
	{
		id: '6',
		name: 'name6',
		area: {
			name: 'country6',
		},
	},
	{
		id: '7',
		name: 'name7',
		area: {
			name: 'country7',
		},
	},
	{
		id: '8',
		name: 'name8',
		area: {
			name: 'country8',
		},
	},
	{
		id: '9',
		name: 'name9',
		area: {
			name: 'country9',
		},
	},
];

const LeaguesPage = () => {
	useEffect(() => {
		LeagueService.getLeagues();
	}, []);
	return (
		<div className={styles.leaguesPage}>
			<div className={styles.container}>
				<Search />
				<div className={styles.leagues}>
					{mockLeagues.map((league) => (
						<Link href={`/${league.id}`} className={styles.league} key={league.id}>
							<p className={styles.name}>{league.name}</p>
							<p className={styles.country}>{league.area.name}</p>
						</Link>
					))}
				</div>
				<Pagination />
			</div>
		</div>
	);
};

export default LeaguesPage;
