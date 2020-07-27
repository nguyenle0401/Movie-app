import { createMuiTheme } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: lightGreen[500],
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    success: {
        light: lightGreen[500],
        main: lightGreen[500],
        dark: lightGreen[500],
        contrastText: lightGreen[500],
    }
  },
});

export default theme;