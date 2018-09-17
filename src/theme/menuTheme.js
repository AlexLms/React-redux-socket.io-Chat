import { createMuiTheme } from '@material-ui/core/styles';

const menuTheme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        marginLeft: '-192px',
        minWidth: '215px !important',
        marginTop: '5px',
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
