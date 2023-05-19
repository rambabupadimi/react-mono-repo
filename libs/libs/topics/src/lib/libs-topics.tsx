import styles from './libs-topics.module.scss';

/* eslint-disable-next-line */
export interface LibsTopicsProps {}

export function LibsTopics(props: LibsTopicsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibsTopics!</h1>
    </div>
  );
}

export default LibsTopics;
