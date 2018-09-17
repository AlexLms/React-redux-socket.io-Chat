import { createMuiTheme } from '@material-ui/core/styles';

const tabTheme = createMuiTheme({
  overrides: {
    MuiTabs: {
      root: {
        overflow: 'visible !important',
      },
      indicator: {
        display: 'none',
      },
      scroller: {
        overflow: 'visible !important',
      },
      flexContainer: {
        maxHeight: '20px',
      },
    },
    MuiTab: {
      selected: {
        '& svg': {
          color: '#fff !important',
        },
      },
      labelContainer: {
        padding: '0px !important',
      },
    },
    MuiButtonBase: {
      root: {
        minWidth: 'auto !important',
        minHeight: 'auto !important',
        overflow: 'visible !important',
        marginRight: '20px',
        marginLeft: '20px',
        '&:first-child': {
          marginLeft: '0px',
        },
        '&:nth-child(2)': {
          fontSize: '25px',
        },
        '&:hover svg': {
          color: 'rgba(255,255,255,.8)',
          transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
        },
      },
    },
    MuiTouchRipple: {
      root: {
        display: 'none',
      },
    },
    MuiSvgIcon: {
      root: {
        color: 'rgba(255,255,255,.5)',
        transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
    },

  },
});

export default tabTheme;
