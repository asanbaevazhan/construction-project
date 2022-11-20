import * as React from 'react';
import './SliderFlatThirteen.scss'
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import flat from './../../../assets/flat/квартира 13.jpg'
import flat2 from './../../../assets/img2/13.png'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: flat,
  },
  {
    imgPath: flat2,
  }
];
const useStyles = makeStyles({
  dot: {
    backgroundColor: "#dfdfdf"
  },
  dotActive: {
    backgroundColor: "#756b60"
  }
});
function SliderFlatThirteen() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 850, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div >
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 500,
                  display: 'block',
                  maxWidth: 800,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        classes={{
          dot: classes.dot,
          dotActive: classes.dotActive
        }}
        sx={{
          '& .css-26w9jf-MuiMobileStepper-dot': {
            backgroundColor: '#756b60', 
          },
        }}
        nextButton={
          <Button
            size="small"
            style={{
                color: '#756b60'
            }}
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button 
            size="small" 
            style={{
                color: '#756b60'
            }}
            onClick={handleBack} 
            disabled={activeStep === 0}
            >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            
          </Button>
        }
      />
    </Box>
  );
}

export default SliderFlatThirteen;