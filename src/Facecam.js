import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {
  palevioletred,
  cyan500
} from '../node_modules/material-ui/styles/colors';

import "./Presentation.css"

function Facecam(props) {
  return (
      <div style={{height: "inherit"}}>
      <Paper id="Facecam" zDepth={3}>
        <textarea
          value={props.inhalt}
          name = {props.name}
          style={{ resize: "none", border:"none", }}

        />
        Facecam
      </Paper>
    </div>
  );
}

export default Facecam;
