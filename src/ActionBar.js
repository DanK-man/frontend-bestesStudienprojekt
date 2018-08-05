import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

import Editorsicht from './Editorsicht'

function ActionBar(props){
    return (
      <div>
        <AppBar zDepth={0}
          title={props.title}
          titleStyle={{textAlign: "center"}}/>
      </div>
    );
}

export default ActionBar;
