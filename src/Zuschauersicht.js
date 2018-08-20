import React, {Component} from 'react';
import ActionBar from './ActionBar';
import Facecam from './Facecam';
import PraesentationFolie from './PraesentationFolie';
import Sichten from './Sichten';
import './Presentation.css'
// Dummy-Komponente für die eigentliche Zuschauersicht
// Chris, das hier mit deinem ersetzen
function Zuschauersicht(props) {
  return (
    <div>
        <ActionBar title="Home Presentation!"/>
       <div  className="PresentationView">
      	 <div className="viewerFoil">
      	  <PraesentationFolie/>
    	 </div>
       	<div className ="viewerChat">
        	<Facecam/>
         </div>
      </div>
    </div>
  );
}

export default Zuschauersicht;
