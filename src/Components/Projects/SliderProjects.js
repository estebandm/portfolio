import React from 'react';

import { useTheme } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import { useStyles, Typography } from './styles'
import { tutorialSteps } from './Constants' 

export const SliderProjects = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;



  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography variant='h5'>{tutorialSteps[activeStep].title}</Typography>
      </Paper>
      <div className={classes.container}>
        <div>
          <img 
            className={`${classes.imgContainer}`}
            src={tutorialSteps[activeStep].imgPath}
            alt={tutorialSteps[activeStep].title}
          />
        </div>
        <div className={`${classes.descriptionContainer}`}>
            <div>
              <Typography className={classes.margin} variant='body2'>
                {tutorialSteps[activeStep].description}
              </Typography> 
            </div>
            <div className={classes.margin}>
              <strong>Código: </strong>
              <Typography  
                component='a' 
                href={tutorialSteps[activeStep].gitHub} 
                target="_blank" 
                >
                {tutorialSteps[activeStep].gitHub}
              </Typography> 
            </div>
            <div className={classes.margin}>
              <strong>Live version: </strong>
              <Typography 
                href={tutorialSteps[activeStep].live} 
                component='a'                
                target="_blank" 
              >
                {tutorialSteps[activeStep].live}
              </Typography>
            </div>
        </div>
      </div>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Siguiente
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Anterior
          </Button>
        }
      />
    </div>
  );
}

export default SliderProjects