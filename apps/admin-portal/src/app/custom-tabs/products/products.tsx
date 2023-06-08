import styles from './products.module.scss';

/* eslint-disable-next-line */
export interface ProductsProps {
  // value: number;
  // index: number;
}

export function Products(props: ProductsProps) {

  // const {value, index} = props;

  return (
    <div className={styles['container']}>
      <h1>Welcome to Products!</h1>
    </div>
  );
}

export default Products;
