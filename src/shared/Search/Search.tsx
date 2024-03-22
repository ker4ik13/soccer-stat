import styles from './Search.module.scss';

const Search = () => {
	return <input type='search' className={styles.input} placeholder='Поиск' />;
};

export default Search;
