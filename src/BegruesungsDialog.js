import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {
  Link,
} from 'react-router-dom';

import Zuschauersicht from "./Zuschauersicht";

//import styled from 'styled-components';
// Die Nachricht die beim Aufruf der Seite angezeigt wird.
// In App.js muss noch eine Methode zum Hochladen einer alten Präsentation
// implementiert werden, die dann hierher weitergegeben werden muss.


class BegruesungsDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
    this.handleNew=this.handleNew.bind(this);
    this.handleUpload=this.handleUpload.bind(this);
  }

  handleNew = () => {
    this.setState({open: false});
  }

  handleUpload = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <div>
        <FlatButton
          label="Neue Präsentation erstellen"
          onClick={this.handleNew}
          style={{margin: 10,
                }}
                labelStyle={{fontSize: 20, }}

                />,
                <FlatButton
                label="Präsentation hochladen"
                onClick={this.handleUpload}
                style={{margin: 10,
                  }}
                labelStyle={{fontSize: 15}}
                />
                <Link to='vortrag/2'>
                <FlatButton
                label="Zuschauen!"

                />
                </Link>
              </div>
              ]
    return (

      <div>

        <Dialog modal={true}
          open={this.state.open}
          actions={actions}
          actionsContainerStyle={{
            textAlign: 'center',
            padding: 15}}
          title='Willkommen bei Hombres!'
        >
          <br/>Was willst du tun?
        </Dialog>
      </div>
    );
  }
}

export default BegruesungsDialog;
