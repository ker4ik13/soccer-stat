'use client';
import Logo from '@/shared/Logo/Logo';
import styles from './Nav.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
	const linkPath = usePathname();

	const isActive = (path: string) =>
		linkPath === path ? `${styles.navLink} ${styles.active}` : styles.navLink;

	return (
		<div className={styles.nav}>
			<div className={styles.container}>
				<Logo />
				<Link href='/' className={isActive('/')}>
					Лиги
				</Link>
				<Link href='/teams' className={isActive('/teams')}>
					Команды
				</Link>
			</div>
		</div>
	);
};

export default Nav;
