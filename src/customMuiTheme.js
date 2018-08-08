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

// Hier kann das Styling der Material-UI-Komponenten für die *ganze*
// App angepasst werden (etwa z.B. das Farbschema)
const customTheme = getMuiTheme({
    palette: {
      textColor: pink700,
      primary1Color:  "#333",
    },
    appBar: {
      height: 40,
    },

  }
);

export default customTheme;
