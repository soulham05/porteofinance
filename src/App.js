// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Sidebar from './Sidebar';
import ReportPage from './ReportPage';
import Home from './Home';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#1976d2' },
        background: { default: '#121212', paper: '#1c1c1c' },
        text: { primary: '#ffffff', secondary: '#b0bec5' },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h6: { fontWeight: 'bold' }
    },
});


const App = () => {
  return (
      <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Router>
              <Box sx={{ display: 'flex' }}>
                  <Sidebar /> {/* Sidebar fixe en dehors des routes */}
                  <Box component="main" sx={{ flexGrow: 1, p: 3}}>
                      <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/dashboard" element={<ReportPage embedUrl="https://app.powerbi.com/reportEmbed?reportId=22b79504-05aa-488f-9d9d-25b82321755a&autoAuth=true&ctid=6542b2db-e8ac-4b24-8ef4-f8f00eccf8e5&pageName=ReportSectionc71790ecd55a7ea52358" />} />
                          <Route path="/rapport-ca" element={<ReportPage embedUrl="https://app.powerbi.com/reportEmbed?reportId=22b79504-05aa-488f-9d9d-25b82321755a&autoAuth=true&ctid=6542b2db-e8ac-4b24-8ef4-f8f00eccf8e5&pageName=ReportSection3da097152bdc35433453" />} />
                          <Route path="/pl-synthetique" element={<ReportPage embedUrl="https://app.powerbi.com/reportEmbed?reportId=22b79504-05aa-488f-9d9d-25b82321755a&autoAuth=true&ctid=6542b2db-e8ac-4b24-8ef4-f8f00eccf8e5&pageName=ReportSectionaf25bb91ab18ab152358" />} />
                          <Route path="/pl-annuel" element={<ReportPage embedUrl="https://app.powerbi.com/reportEmbed?reportId=22b79504-05aa-488f-9d9d-25b82321755a&autoAuth=true&ctid=6542b2db-e8ac-4b24-8ef4-f8f00eccf8e5&pageName=752a138fee1ce1c91dab" />} />
                          <Route path="/pl-mensuel" element={<ReportPage embedUrl="https://app.powerbi.com/reportEmbed?reportId=22b79504-05aa-488f-9d9d-25b82321755a&autoAuth=true&ctid=6542b2db-e8ac-4b24-8ef4-f8f00eccf8e5&pageName=9df478c53ed797054a4e" />} />
                          <Route path="/pl-detaille" element={<ReportPage embedUrl="https://app.powerbi.com/reportEmbed?reportId=22b79504-05aa-488f-9d9d-25b82321755a&autoAuth=true&ctid=6542b2db-e8ac-4b24-8ef4-f8f00eccf8e5&pageName=ReportSection" />} />
                          <Route path="/pl-arborescence" element={<ReportPage embedUrl="https://app.powerbi.com/reportEmbed?reportId=22b79504-05aa-488f-9d9d-25b82321755a&autoAuth=true&ctid=6542b2db-e8ac-4b24-8ef4-f8f00eccf8e5&pageName=ReportSection74f441920540b1e22925" />} />
                          <Route path="/tft-treso" element={<ReportPage embedUrl="https://app.powerbi.com/reportEmbed?reportId=22b79504-05aa-488f-9d9d-25b82321755a&autoAuth=true&ctid=6542b2db-e8ac-4b24-8ef4-f8f00eccf8e5&pageName=ReportSectionf69af3cb12716486ce76" />} />
                          <Route path="/analyse-treso" element={<ReportPage embedUrl="https://app.powerbi.com/reportEmbed?reportId=22b79504-05aa-488f-9d9d-25b82321755a&autoAuth=true&ctid=6542b2db-e8ac-4b24-8ef4-f8f00eccf8e5&pageName=ReportSection21dcbbb1dcd938b1ee5d" />} />
                          <Route path="/paiements-fournisseurs" element={<ReportPage embedUrl="https://app.powerbi.com/reportEmbed?reportId=22b79504-05aa-488f-9d9d-25b82321755a&autoAuth=true&ctid=6542b2db-e8ac-4b24-8ef4-f8f00eccf8e5&pageName=ReportSectionc4a5880fd8db8650289b" />} />
                          <Route path="/avance-fonds" element={<ReportPage embedUrl="https://app.powerbi.com/reportEmbed?reportId=22b79504-05aa-488f-9d9d-25b82321755a&autoAuth=true&ctid=6542b2db-e8ac-4b24-8ef4-f8f00eccf8e5&pageName=0739a98c48787751a665" />} />
                          <Route path="/gl-compta" element={<ReportPage embedUrl="https://app.powerbi.com/reportEmbed?reportId=22b79504-05aa-488f-9d9d-25b82321755a&autoAuth=true&ctid=6542b2db-e8ac-4b24-8ef4-f8f00eccf8e5&pageName=ReportSection5fe436827a067b880ad7" />} />
                          <Route path="/balance-compta" element={<ReportPage embedUrl="https://app.powerbi.com/reportEmbed?reportId=22b79504-05aa-488f-9d9d-25b82321755a&autoAuth=true&ctid=6542b2db-e8ac-4b24-8ef4-f8f00eccf8e5&pageName=ReportSection4f1e4528926400624853" />} />
                          {/* Ajoutez d’autres routes pour chaque page de rapport ici */}
                      </Routes>
                  </Box>
              </Box>
          </Router>
      </ThemeProvider>
  );
};

export default App;

