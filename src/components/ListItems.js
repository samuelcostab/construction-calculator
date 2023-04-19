import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//import ListSubheader from '@mui/material/ListSubheader';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SettingsIcon from '@mui/icons-material/Settings';
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import PeopleIcon from '@mui/icons-material/People';
//import BarChartIcon from '@mui/icons-material/BarChart';
//import LayersIcon from '@mui/icons-material/Layers';
//import AssignmentIcon from '@mui/icons-material/Assignment';


export default function sideBarListItems({handleSelectOption}) {
  const items = [
    { name: "Orçamento", icon: function (){ return <LabelImportantIcon /> } }, 
    { name: "Configurações", icon: function (){ return <SettingsIcon /> }}
  ];

  return (
    items.map((item, index) =>
      <React.Fragment key={index}>
            <ListItemButton onClick={handleSelectOption}>
              <ListItemIcon>
               {item.icon()}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </React.Fragment>
    )
  );
}