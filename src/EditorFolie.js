import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {
  palevioletred,
  cyan500
} from '../node_modules/material-ui/styles/colors';
function EditorFolie(props) {
  return (
    <div>
      <Paper
        style={{margin: "5%", height: "27.5em", width: "40%", float: "left"}}
        zDepth={3}>
        <textarea
          value={props.inhalt}
          name = {props.name}
          style={{height: "100%", width: "100%",
                  resize: "none", border:"none",
                  }}
          onChange={props.onChange}
        />
      </Paper>
    </div>
  );
}

export default EditorFolie;
