import React from 'react';

import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import './FolienGrid.css'


// Dummy-Komponente für die eigentliche Zuschauersicht
// Chris, das hier mit deinem ersetzen
const styles = {

}

const tilesData = []; //tbd
function FolienGrid(props) {
  return (
    <div>
      <Paper id="FolienGrid" zDepth={3}
        style={{maxHeight: "25em", overflow: 'auto'}}>
        <List>
           <ListItem primaryText="${this.props.folien.value}" leftIcon={<ContentInbox />} />
           <ListItem primaryText="Folie 2" leftIcon={<ContentInbox />} />
           <ListItem primaryText="Folie 3" leftIcon={<ContentInbox />} />
           <ListItem primaryText="Folie 4" leftIcon={<ContentInbox />} />
           <ListItem primaryText="Folie 5" leftIcon={<ContentInbox />} />
           <ListItem primaryText="Folie 6" leftIcon={<ContentInbox />} />
           <ListItem primaryText="Folie 7" leftIcon={<ContentInbox />} />
           <ListItem primaryText="Folie 8" leftIcon={<ContentInbox />} />
           <ListItem primaryText="Folie 9" leftIcon={<ContentInbox />} />
           <ListItem primaryText="Folie 10" leftIcon={<ContentInbox />} />
           <ListItem primaryText="Folie 11" leftIcon={<ContentInbox />} />
           <ListItem primaryText="Folie 12" leftIcon={<ContentInbox />} />
           <ListItem primaryText="Folie 13" leftIcon={<ContentInbox />} />
           <ListItem primaryText="Folie 14" leftIcon={<ContentInbox />} />
           <ListItem primaryText="Folie 15" leftIcon={<ContentInbox />} />
       </List>
      </Paper>
    </div>
  );
}

export default FolienGrid;
