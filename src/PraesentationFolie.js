import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {
  palevioletred,
  cyan500
} from '../node_modules/material-ui/styles/colors';

import "./Presentation.css"

function PraesentationFolie(props) {
  return (
    <div style={{height: "inherit"}}
     id="PresFolie">
      <Paper
        style={{margin: "1.5%", height: "42.5em", width: "97%"}}
        zDepth={3}>
       
      </Paper>
    </div>
  );
}

export default PraesentationFolie;
