import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {
  palevioletred,
  cyan500
} from '../node_modules/material-ui/styles/colors';

import "./Presentation.css"

function PraesentationFolie(props) {
  return (
    <div style={{height: "inherit"}}>
      <Paper id="PresFolie"

        zDepth={3}>
        <textarea
          value={props.inhalt}
          name = {props.name}
          style={{resize: "none", border: "none",
                }}
        />
            Folienansicht
      </Paper>
        Lorem ipsum...
    </div>
  );
}

export default PraesentationFolie;
