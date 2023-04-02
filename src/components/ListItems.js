import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//import ListSubheader from '@mui/material/ListSubheader';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import PeopleIcon from '@mui/icons-material/People';
//import BarChartIcon from '@mui/icons-material/BarChart';
//import LayersIcon from '@mui/icons-material/Layers';
//import AssignmentIcon from '@mui/icons-material/Assignment';


export const mainListItems = () => {
  const items = [{ name: "Home" }, { name: "Dashboard" }];
  return items.map((item) => {
    return (
        <React.Fragment>
          <ListItemButton>
            <ListItemIcon>
              <LabelImportantIcon />
            </ListItemIcon>
            <ListItemText key={item.name} primary={item.name} />
          </ListItemButton>
        </React.Fragment>
    );
    
  });
}

export const secondaryListItems = [] //(
  /* <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
  */
//);