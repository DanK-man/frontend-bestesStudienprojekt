import React, {Component} from 'react';
import Home from './Home';
import About from './About';
import Zuschauersicht from './Zuschauersicht';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import customTheme from './customMuiTheme';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={customTheme}>

        <Router>
          <div style={{height: "inherit"}}>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            <Route path='/vortrag/:vortragsID(\d+)' component={Zuschauersicht}  />
          </div>
        </Router>

      </MuiThemeProvider>
    );
  }
}
export default App;
