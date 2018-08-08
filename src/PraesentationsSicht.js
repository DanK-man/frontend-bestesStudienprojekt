import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContendAdd from 'material-ui/svg-icons/content/add';
import {
  palevioletred,
  cyan500
} from '../node_modules/material-ui/styles/colors';


import RenderFolie from './RenderFolie'
import PraesentationFolie from './PraesentationFolie'
import Chatroom from './Chatroom'
import Facecam from './Facecam'
import FolienGrid from './FolienGrid'

class PraesentationsSicht extends Component {


  render() {

    return (
      <div>
        <div className="PresView">


          <PraesentationFolie/>
          <FolienGrid />
          <Chatroom />
          <Facecam />

        </div>

      </div>
    );
  }
}

export default PraesentationsSicht;
