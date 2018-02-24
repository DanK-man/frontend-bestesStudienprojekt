// In der Implementierung kann nachgelesen werden, welche Werte
// verändert werden können.
// https://github.com/mui-org/material-ui/blob/master/src/styles/getMuiTheme.js
//
// Beispiel anhand des default Themas:
// https://github.com/mui-org/material-ui/blob/master/src/styles/baseThemes/lightBaseTheme.js
//
// Farbpalette
// http://www.material-ui.com/#/customization/colors

import {
  cyan500,
  pink700,
  grey500,
} from '../node_modules/material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const customTheme = getMuiTheme({
    palette: {
      textColor: pink700,
      primary1Color: cyan500,
    },
    appBar: {
      height: 40,
    },

  }
);

export default customTheme;
