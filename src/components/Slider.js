import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import theme from './theme'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([1990, 2020]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      
      <MuiThemeProvider theme={theme}>
      <Typography id="range-slider" gutterBottom color="secondary">
        {props.name}
      </Typography>
      <Slider
        value={value}
        color = "success dark"
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      </MuiThemeProvider>
    </div>
  );
}