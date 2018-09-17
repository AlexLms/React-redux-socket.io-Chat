import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiModal: {
      root: {
        background: '#fff',
      },
    },
    MuiPaper: {
      root: {
        opacity: '1 !important',
      },
    },
  },
});
export default theme;
