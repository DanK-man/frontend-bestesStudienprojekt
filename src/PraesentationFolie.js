import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {
  palevioletred,
  cyan500
} from '../node_modules/material-ui/styles/colors';

import MarkdownRender from './MarkdownRender';


import "./Presentation.css"

function PraesentationFolie(props) {
  //TODO einheitliche Komponente, damit Vorschau und dies hier konsistent dargestellt werden.
  return (
    <div style={{height: "inherit"}}>
      <Paper id="PresFolie"  zDepth={3}>
        <MarkdownRender inhalt={props.inhalt} />
      </Paper>
    </div>
  );
}

export default PraesentationFolie;
