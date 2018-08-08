import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {
  palevioletred,
  cyan500
} from '../node_modules/material-ui/styles/colors';

function PraesentationFolie(props) {
  return (
    <div>
      <Paper
        style={{marginLeft: ".5%",
                marginTop: "2.5%",
                marginBottom: ".5%",
                marginRight: "2.5%",
                height: "25em",
                width: "55%",
                float: "right"}}
        zDepth={3}>
        <textarea
          value={props.inhalt}
          name = {props.name}
          style={{height: "100%", width: "100%",
                  resize: "none", border:"none",
                  }}
        />
            Folienansicht
      </Paper>

    </div>
  );
}

export default PraesentationFolie;
