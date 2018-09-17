import { createMuiTheme } from '@material-ui/core/styles';

const menuTheme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        minWidth: '181px !important',
        marginTop: '13px',
        marginLeft: '-100px',
      },
    },
    MuiButtonBase: {
      root: {
        fontFamily: 'catamaran-regular !important',
        fontSize: '15px',
        paddingBottom: '5px !important',
        paddingTop: '5px !important',
      },
    },
  },
});

export default menuTheme;
