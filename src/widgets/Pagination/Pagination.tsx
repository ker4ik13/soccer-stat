import Icon from '@/shared/Icon';
import styles from './Pagination.module.scss';
import { Icons } from '@/shared/Icons';

const Pagination = () => {
	return (
		<div className={styles.pagination}>
			<button type='button' className={styles.button}>
				<Icon icon={Icons.leftArrow(styles.icon)} />
			</button>
			<button type='button' className={styles.button}>
				1
			</button>
			<button type='button' className={styles.button}>
				2
			</button>
			<button type='button' className={styles.button}>
				3
			</button>
			<button type='button' className={styles.button}>
				4
			</button>
			<button type='button' className={styles.button}>
				5
			</button>
			<p>...</p>
			<button type='button' className={styles.button}>
				17
			</button>
			<button type='button' className={styles.button}>
				<Icon icon={Icons.rightArrow(styles.icon)} />
			</button>
		</div>
	);
};

export default Pagination;
