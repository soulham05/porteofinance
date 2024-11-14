// Home.js (if needed, else add this in App.js for the "/" route)
import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            color: '#b0bec5',
            textAlign: 'center',
        }}
    >
        <Typography variant="h4">
            PORTEO GROUP - Reporting Financier
        </Typography>
    </Box>
);

export default Home;
