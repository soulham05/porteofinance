// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon, Drawer, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BalanceIcon from '@mui/icons-material/Balance';

const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Rapport CA', icon: <AssessmentIcon />, path: '/rapport-ca' },
    { text: 'P&L Synthétique', icon: <CandlestickChartIcon />, path: '/pl-synthetique' },
    { text: 'P&L Annuel', icon: <CandlestickChartIcon />, path: '/pl-annuel' },
    { text: 'P&L Mensuel', icon: <CandlestickChartIcon />, path: '/pl-mensuel' },
    { text: 'P&L détaillé', icon: <CandlestickChartIcon />, path: '/pl-detaille' },
    { text: 'Arborescence P&L', icon: <AccountTreeIcon />, path: '/pl-arborescence' },
    { text: 'Tableau des flux de trésorerie', icon: <MonetizationOnIcon />, path: '/tft-treso' },
    { text: 'Analyse trésorerie', icon: <MonetizationOnIcon />, path: '/analyse-treso' },
    { text: 'Paiements fournisseurs', icon: <ShoppingCartCheckoutIcon />, path: '/paiements-fournisseurs' },
    { text: 'Avance de fonds', icon: <MonetizationOnIcon />, path: '/avance-fonds' },
    { text: 'Grand livre comptable', icon: <MenuBookIcon />, path: '/gl-compta' },
    { text: 'Balance comptable', icon: <BalanceIcon />, path: '/balance-compta' },
    // Add additional items here as needed
];

const Sidebar = () => (
    <Drawer
        variant="permanent"
        sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
                width: 240,
                backgroundColor: '#1c1c1c',
                color: '#ffffff',
                boxSizing: 'border-box',
            },
        }}
    >
        <Typography variant="h6" align="center" sx={{ p: 2, color: '#ffffff' }}>
            GROUPE PORTEO Reporting Financier
        </Typography>
        <List>
            {menuItems.map(item => (
                <ListItem button key={item.text} component={Link} to={item.path}>
                    <ListItemIcon sx={{ color: '#ffffff' }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} sx={{ color: '#ffffff' }} />
                </ListItem>
            ))}
        </List>
    </Drawer>
);

export default Sidebar;

