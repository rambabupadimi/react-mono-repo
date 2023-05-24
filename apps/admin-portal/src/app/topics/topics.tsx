import styles from './topics.module.scss';

/* eslint-disable-next-line */
export interface TopicsProps {}

export function Topics(props: TopicsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Topics!</h1>
    </div>
  );
}

export default Topics;
