import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {
  palevioletred,
  cyan500
} from '../node_modules/material-ui/styles/colors';

import "./Presentation.css"

function Chatroom(props) {
  return (
    <div style={{height: "inherit"}}>
      <Paper id="Chatroom" zDepth={3}>
        <textarea
          value={props.inhalt}
          name = {props.name}
          style={{
                  resize: "none", border:"none",
                  }}
        />
        Chatroom
      </Paper>
    </div>
  );
}

export default Chatroom;
