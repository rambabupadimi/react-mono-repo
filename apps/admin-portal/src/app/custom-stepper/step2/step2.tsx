import { Button } from '@mui/material';
import styles from './step2.module.scss';

/* eslint-disable-next-line */
export interface Step2Props {
  navigatePrev:any,
  navigateNext:any
}

export function Step2(props: Step2Props) {

  const handlePrev = ()=> {
    props.navigatePrev();
  }

  const handleNext = () => {
    props.navigateNext()
  }

  return (
    <div className={styles['container']}>
      <h1>Welcome to Step2!</h1>
      <br />

      <Button
        type="button"
        className="mx-4"

        onClick={handlePrev}
        style={{backgroundColor:'black', color:'white'}}
      >
        Prev
      </Button>
      <Button
        type="button"
        onClick={handleNext}
        style={{backgroundColor:'black', color:'white'}}
      >
        Next
      </Button>
    </div>
  );
}

export default Step2;
