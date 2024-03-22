'use client';

import Pagination from '@/widgets/Pagination/Pagination';
import styles from './TeamPage.module.scss';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Icon from '@/shared/Icon';
import { Icons } from '@/shared/Icons';

const TeamPage = () => {
	const teamId = useParams();

	if (!teamId) {
		return (
			<div className={styles.teamPage}>
				<div className={styles.container}>
					<div className={styles.center}>
						<h2 className={styles.error}>Неверный путь. Попробуйте еще раз</h2>
						<Link href={'/'} className={styles.button}>
							Вернуться назад
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.teamPage}>
			<div className={styles.container}>
				<div className={styles.path}>
					<Link href='/' className={styles.pathText}>
						Команды
					</Link>
					<Icon icon={Icons.rightArrow(styles.icon)} />
					<p className={styles.pathText}>Название команды</p>
				</div>
				<div className={styles.date}>
					<h1 className={styles.title}>Матчи</h1>
					<div className={styles.dateWrapper}>
						<p className={styles.dateText}>с</p>
						<input type='date' className={styles.inputDate} />
						<p className={styles.dateText}>по</p>
						<input type='date' className={styles.inputDate} />
					</div>
				</div>
				<table className={styles.matches}>
					<thead className={styles.tableHeadRow}>
						<tr className={styles.tableRow}>
							<th className={styles.tableCol}>Дата матча</th>
							<th className={styles.tableCol}>Время матча</th>
							<th className={styles.tableCol}>Статус матча</th>
							<th className={styles.tableCol}>Команда А</th>
							<th className={styles.tableCol}>Против</th>
							<th className={styles.tableCol}>Команда Б</th>
							<th className={styles.tableCol}>Счет</th>
						</tr>
					</thead>
					<tbody>
						<tr className={styles.tableRow}>
							<td className={styles.tableCol}>ДД.ММ.ГГГГ</td>
							<td className={styles.tableCol}>ЧЧ.ММ</td>
							<td className={styles.tableCol}>Статус</td>
							<td className={styles.tableCol}>Команда А</td>
							<td className={styles.tableCol}>-</td>
							<td className={styles.tableCol}>Команда Б</td>
							<td className={styles.tableCol}>XYYZZTFAS</td>
						</tr>
						<tr className={styles.tableRow}>
							<td className={styles.tableCol}>ДД.ММ.ГГГГ</td>
							<td className={styles.tableCol}>ЧЧ.ММ</td>
							<td className={styles.tableCol}>Статус</td>
							<td className={styles.tableCol}>Команда А</td>
							<td className={styles.tableCol}>-</td>
							<td className={styles.tableCol}>Команда Б</td>
							<td className={styles.tableCol}>XYYZZTFAS</td>
						</tr>
						<tr className={styles.tableRow}>
							<td className={styles.tableCol}>ДД.ММ.ГГГГ</td>
							<td className={styles.tableCol}>ЧЧ.ММ</td>
							<td className={styles.tableCol}>Статус</td>
							<td className={styles.tableCol}>Команда А</td>
							<td className={styles.tableCol}>-</td>
							<td className={styles.tableCol}>Команда Б</td>
							<td className={styles.tableCol}>XYYZZTFAS</td>
						</tr>
						<tr className={styles.tableRow}>
							<td className={styles.tableCol}>ДД.ММ.ГГГГ</td>
							<td className={styles.tableCol}>ЧЧ.ММ</td>
							<td className={styles.tableCol}>Статус</td>
							<td className={styles.tableCol}>Команда А</td>
							<td className={styles.tableCol}>-</td>
							<td className={styles.tableCol}>Команда Б</td>
							<td className={styles.tableCol}>XYYZZTFAS</td>
						</tr>
					</tbody>
				</table>
				<Pagination />
			</div>
		</div>
	);
};

export default TeamPage;
