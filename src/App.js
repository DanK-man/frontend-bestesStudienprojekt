import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import customTheme from './customMuiTheme';
import ActionBar from './ActionBar';
import Sichten from './Sichten';
import BegruesungsDialog from './BegruesungsDialog';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      folien: [""], //die Präsentation
    }
    this.handleNeueFolie=this.handleNeueFolie.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

//fügt eine neue Folie zur Präsentation hinzu
  handleNeueFolie() {
    const f = this.state.folien;
    f.push("");
    this.setState(f);
  /*    console.log("Click");  //debuggen
        console.log(this.state.folien) */
  }

//Updatet die Folien
  handleChange(event) {
    var newFolien = this.state.folien.slice();
    newFolien[event.target.name] = event.target.value;
    this.setState({folien: newFolien});
/*    console.log(newFolien, event.target.name)
    console.log(this.state.folien) */ //debuggen
  }

  render() {
    return (
      <div>
      <head>
      <title> HOMEPLES </title>
      </head>
      <MuiThemeProvider muiTheme={customTheme}>
        <ActionBar title="HomePresentation!"/>
        <Sichten folien={this.state.folien}
          neueFolie={this.handleNeueFolie}
          onChange={this.handleChange}/>
        <BegruesungsDialog/>

      </MuiThemeProvider>
      </div>
    );
  }
}
export default App;
