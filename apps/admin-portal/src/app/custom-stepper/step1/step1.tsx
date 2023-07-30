import { Button } from '@mui/material';
import styles from './step1.module.scss';

/* eslint-disable-next-line */
export interface Step1Props {
  navigateNext: any;
}

export function Step1(props: Step1Props) {
  const navigateNext = () => {
    //
    props.navigateNext();
  };

  return (
    <div className={styles['container']}>
      <h1>Welcome to Step1!</h1>

      <br />
      <Button
        type="button"
        onClick={navigateNext}
        style={{backgroundColor:'black', color:'white'}}
      >
        Next
      </Button>
    </div>
  );
}

export default Step1;
