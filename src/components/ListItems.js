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
import { Link } from 'react-router-dom';
import styles from './index.module.css';


export default function sideBarListItems() {
  const items = [
    { name: "Home", to:"/", icon: function (){ return <LabelImportantIcon /> } },
    { name: "Orçamento", to:"orcamento", icon: function (){ return <LabelImportantIcon /> } }, 
    { name: "Configurações", to:"/", icon: function (){ return <SettingsIcon /> }}
  ];

  return (
    items.map((item, index) =>
      <React.Fragment key={index}>
        <Link to={item.to} className={styles.link}>
          <ListItemButton key={item.name}>
            <ListItemIcon>
              {item.icon()}
              </ListItemIcon>
            <ListItemText primary={item.name}/>
          </ListItemButton>
        </Link>
      </React.Fragment>
    )
  );
}