import styles from './tables.module.scss';

/* eslint-disable-next-line */
export interface TablesProps {}

export function Tables(props: TablesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Tables!</h1>
    </div>
  );
}

export default Tables;
