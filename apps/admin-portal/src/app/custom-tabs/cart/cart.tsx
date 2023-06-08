import styles from './cart.module.scss';

/* eslint-disable-next-line */
export interface CartProps {
  // value: number;
  // index: number;
}

export function Cart(props: CartProps) {
 // const {value, index} = props;

  return (
    <div className={styles['container']}>
      <h1>Welcome to Cart! </h1>
    </div>
  );
}

export default Cart;
