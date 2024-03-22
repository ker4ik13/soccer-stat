import Search from '@/shared/Search/Search';
import styles from './TeamsPage.module.scss';
import Pagination from '@/widgets/Pagination/Pagination';
import Link from 'next/link';

const TeamsPage = () => {
	return (
		<div className={styles.teamsPage}>
			<div className={styles.container}>
				<Search />
				<div className={styles.teams}>
					<Link href={'/teams/1'} className={styles.team}>
						<h2 className={styles.teamTitle}>teamTitle</h2>
						{/* TODO: после получения api -> */}
						{/* <img src='#' alt={'teamTitle'} className={styles.teamImage} /> */}
						<div className={styles.teamImage} />
					</Link>
					<Link href={'/teams/2'} className={styles.team}>
						<h2 className={styles.teamTitle}>teamTitle</h2>
						<div className={styles.teamImage} />
					</Link>
					<Link href={'/teams/3'} className={styles.team}>
						<h2 className={styles.teamTitle}>teamTitle</h2>
						<div className={styles.teamImage} />
					</Link>
					<Link href={'/teams/4'} className={styles.team}>
						<h2 className={styles.teamTitle}>teamTitle</h2>
						<div className={styles.teamImage} />
					</Link>
					<Link href={'/teams/5'} className={styles.team}>
						<h2 className={styles.teamTitle}>teamTitle</h2>
						<div className={styles.teamImage} />
					</Link>
					<div className={styles.team}>
						<h2 className={styles.teamTitle}>teamTitle</h2>
						<div className={styles.teamImage} />
					</div>
					<div className={styles.team}>
						<h2 className={styles.teamTitle}>teamTitle</h2>
						<div className={styles.teamImage} />
					</div>
					<div className={styles.team}>
						<h2 className={styles.teamTitle}>teamTitle</h2>
						<div className={styles.teamImage} />
					</div>
					<div className={styles.team}>
						<h2 className={styles.teamTitle}>teamTitle</h2>
						<div className={styles.teamImage} />
					</div>
					<div className={styles.team}>
						<h2 className={styles.teamTitle}>teamTitle</h2>
						<div className={styles.teamImage} />
					</div>
				</div>
				<Pagination />
			</div>
		</div>
	);
};

export default TeamsPage;
