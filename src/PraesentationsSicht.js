import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContendAdd from 'material-ui/svg-icons/content/add';
import {
  palevioletred,
  cyan500
} from '../node_modules/material-ui/styles/colors';
import "./Presentation.css"


import RenderFolie from './RenderFolie'
import PraesentationFolie from './PraesentationFolie'
import Chatroom from './Chatroom'
import Facecam from './Facecam'
import FolienGrid from './FolienGrid'

class PraesentationsSicht extends Component {


  render() {

    return (
      <div className="PresentationView">
        <div className="leftColumn">
            <FolienGrid />
        </div>
        <div className="midColumn">
            <PraesentationFolie/>
        </div>
        <div className="rightColumn">
          <Facecam />
        </div>
      </div>
    );
  }
}

export default PraesentationsSicht;
