import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

function EditorFolie(props) {
  return (
    <div>
      <Paper
        style={{margin: "5%", height: "20em", width: "40%", float: "left"}}
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
