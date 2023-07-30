import { Box, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router';
import styles from './custom-stepper.module.scss';
import Step1 from './step1/step1';
import Step2 from './step2/step2';
import Step3 from './step3/step3';

/* eslint-disable-next-line */
export interface CustomStepperProps {}

const steps = ['Step1', 'Step2', 'Step3'];


export function CustomStepper(props: CustomStepperProps) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const handleNext = () => {
    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={styles['container']}>
      <h1>Welcome to CustomStepper!</h1>

      <Box sx={{ width: '100%' }} >
        <Stepper  activeStep={activeStep}  >        
          {
          steps.map((label,index) => {
            return (
              <Step key={label}
              sx={{
                '& .MuiStepLabel-root .Mui-completed': {
                  color: 'secondary.dark', // circle color (COMPLETED)
                },
                '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                  {
                    color: 'grey.500', // Just text label (COMPLETED)
                  },
                '& .MuiStepLabel-root .Mui-active': {
                  color: 'secondary.main', // circle color (ACTIVE)
                },
                '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                  {
                    color: 'common.white', // Just text label (ACTIVE)
                  },
                '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                  fill: 'black', // circle's number (ACTIVE)
                },
              }}
              
              >
                <StepLabel>{label}</StepLabel>
            </Step>
            )
          })
        } 
        </Stepper>
        <Box className='p-12' >

        { activeStep === 0 &&  <Step1 navigateNext={handleNext} ></Step1> }
        { activeStep === 1 &&  <Step2 navigatePrev={handleBack} navigateNext={handleNext}></Step2> }
        { activeStep === 2 &&   <Step3 navigateFinish={handleReset}></Step3> }
        </Box>
      </Box>
    </div>
  );
}

export default CustomStepper;
