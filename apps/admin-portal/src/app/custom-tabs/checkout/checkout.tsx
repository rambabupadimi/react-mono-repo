import styles from './checkout.module.scss';

/* eslint-disable-next-line */
export interface CheckoutProps {
  // value: number;
  // index: number;
}

export function Checkout(props: CheckoutProps) {
  // const {value, index} = props;

  return (
    <div className={styles['container']}>
      <h1>Welcome to Checkout! </h1>
    </div>
  );
}

export default Checkout;
