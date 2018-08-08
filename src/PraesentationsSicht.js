import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContendAdd from 'material-ui/svg-icons/content/add';
import {
  palevioletred,
  cyan500
} from '../node_modules/material-ui/styles/colors';

import './Editorsicht.css'
import RenderFolie from './RenderFolie'
import PraesentationFolie from './PraesentationFolie'
import Chatroom from './Chatroom'
import Facecam from './Facecam'

class PraesentationsSicht extends Component {


  render() {

    return (
      <div>
        <div className="PresView">
          <Facecam/>
      
          <PraesentationFolie/>
          <Chatroom />
        </div>
      </div>
    );
  }
}

export default PraesentationsSicht;
