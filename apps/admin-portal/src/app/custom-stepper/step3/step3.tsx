import { Button } from '@mui/material';
import styles from './step3.module.scss';

/* eslint-disable-next-line */
export interface Step3Props {
  navigateFinish: any;
}

export function Step3(props: Step3Props) {
  const handleFinish = () => {
    props.navigateFinish();
  };

  return (
    <div className={styles['container']}>
      <h1>Welcome to Step3!</h1>
      <br/>

      <Button
        type="button"
        onClick={handleFinish}
        style={{backgroundColor:'black', color:'white'}}
      >
        Finish
      </Button>
    </div>
  );
}

export default Step3;
