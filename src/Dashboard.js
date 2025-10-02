import React from "react";
import "./Pages.css";

const Dashboard = () => {
  return (
    <div className="page-container">
      <iframe
        title="Dashboard"
        className="report-iframe"
        src="https://app.powerbi.com/reportEmbed?reportId=22b79504-05aa-488f-9d9d-25b82321755a&autoAuth=true&ctid=6542b2db-e8ac-4b24-8ef4-f8f00eccf8e5&pageName=ReportSectionc71790ecd55a7ea52358"
      ></iframe>
    </div>
  );
};

export default Dashboard;