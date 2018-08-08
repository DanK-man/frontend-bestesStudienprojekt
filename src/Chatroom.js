import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {
  palevioletred,
  cyan500
} from '../node_modules/material-ui/styles/colors';

import './Chatroom.css'

function Chatroom(props) {
  return (
    <div>
      <Paper id="Chatroom" zDepth={3}>
        <textarea
          value={props.inhalt}
          name = {props.name}
          style={{height: "100%", width: "100%",
                  resize: "none", border:"none",
                  }}
        />
      </Paper>
    </div>
  );
}

export default Chatroom;
