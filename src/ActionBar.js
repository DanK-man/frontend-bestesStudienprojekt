import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

import Editorsicht from './Editorsicht'

class ActionBar extends Component {

  render() {
    return (
      <div>
        <AppBar zDepth={0}
          title={this.props.title}
          titleStyle={{textAlign: "center"}}/>
      </div>
    );
  }
}

export default ActionBar;
