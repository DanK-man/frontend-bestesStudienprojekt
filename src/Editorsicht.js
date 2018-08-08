import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContendAdd from 'material-ui/svg-icons/content/add';
import {
  palevioletred,
  cyan500
} from '../node_modules/material-ui/styles/colors';


import EditorFolie from './EditorFolie'
import RenderFolie from './RenderFolie'
import './Editorsicht.js'
class Editorsicht extends Component {


  render() {
    //todo besserer key
    const expFolien = this.props.folien.map((n, index) =>
      <div className="Folienduo" key={index}>
        <EditorFolie name={index} inhalt={n} onChange={this.props.onChange}/>
        <RenderFolie inhalt={n} />
      </div> );

    return (
      <div>
        <div className="Folienstream">
        { expFolien }
        </div>
        <FloatingActionButton className="FABEditor"
          onClick={this.props.neueFolie}>
          <ContendAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

export default Editorsicht;
