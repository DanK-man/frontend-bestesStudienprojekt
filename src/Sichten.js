import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import Editorsicht from './Editorsicht';
import PraesentationsSicht from './PraesentationsSicht';

// Diese Klasse implementiert die zwei Tabs und das wechseln zwischen diesen.
// Die Implementierung von SwipeableViews folgt dem Beispiel auf:
// http://www.material-ui.com/#/components/tabs

class Sichten extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange = (value) => {
    this.setState({slideIndex: value});
  };

  render() {
    return (
      <div>
        <Tabs onChange={this.handleChange}
          value={this.state.slideIndex}
        //Tabs hat keine zDepth property, hardcoded bis bessere Lösung
          tabItemContainerStyle={{boxShadow: '0 5px 8px rgba(0,0,0,0.12), 0 5px 9px rgba(0,0,0,0.12)'}}
          >
          <Tab label='Editor'
            value={0}
            buttonStyle={{height: 40}}
            />
          <Tab label='Präsentieren!'
            value={1}
            buttonStyle={{height: 40}}
            />
        </Tabs>
        <SwipeableViews index={this.state.slideIndex}
          onChangeIndex={this.handleChange}>
          <div>
            <Editorsicht folien={this.props.folien}
              neueFolie={this.props.neueFolie}
              onChange={this.props.onChange}/>
          </div>
          <div>
            <PraesentationsSicht/>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default Sichten;
