// ReportPage.js
import React from 'react';
import { Box } from '@mui/material';

const ReportPage = ({ embedUrl }) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: 'calc(100vh - 64px)',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
                backgroundColor: '#2e2e2e',
            }}
        >
            <iframe
                title="Power BI Report"
                width="100%"
                height="100%"
                src={embedUrl}
                frameBorder="0"
                allowFullScreen={true}
                style={{
                    border: 'none',
                    borderRadius: '8px',
                }}
            ></iframe>
        </Box>
    );
};

export default ReportPage;

