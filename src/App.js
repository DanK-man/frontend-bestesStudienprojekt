import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import customTheme from './customMuiTheme';
import ActionBar from './ActionBar';
import Sichten from './Sichten';
import BegruesungsDialog from './BegruesungsDialog';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      folien: ["",],
    }
    this.handleNeueFolie=this.handleNeueFolie.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleNeueFolie() {
    const f = this.state.folien;
    f.push("");
    this.setState(f);
        console.log("Click");
        console.log(this.state.folien)
  }

  handleChange(event) {
    var newFolien = this.state.folien.slice();
    newFolien[event.target.name] = event.target.value;
    this.setState({folien: newFolien});

    console.log(newFolien, event.target.name)
    console.log(this.state.folien)
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={customTheme}>
        <ActionBar title="Hombres!"/>
        <Sichten folien={this.state.folien}
          neueFolie={this.handleNeueFolie}
          onChange={this.handleChange}/>
        <BegruesungsDialog/>

      </MuiThemeProvider>
    );
  }
}
export default App;
