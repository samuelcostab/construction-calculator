import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { Link } from 'react-router-dom';
import styles from './index.module.css';


export default function sideBarListItems() {
  const items = [
    { name: "Home", to:"/", icon: function (){ return <HomeIcon /> } },
    { name: "Orçamento", to:"orcamento", icon: function (){ return <SummarizeIcon /> } }, 
    { name: "Configurações", to:"/", icon: function (){ return <SettingsIcon /> }}
  ];

  return (
    items.map((item, index) =>
      <React.Fragment key={index}>
        <Link to={item.to} className={styles.link} style={{ textDecoration: 'none', color: 'black' }}>
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