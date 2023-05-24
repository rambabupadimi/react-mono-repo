import styles from './forms.module.scss';

/* eslint-disable-next-line */
export interface FormsProps {}

export function Forms(props: FormsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Forms!</h1>
    </div>
  );
}

export default Forms;
