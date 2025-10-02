import React from "react";
import "./Pages.css";

const PnlDetail = () => {
  return (
    <div className="page-container">
      <iframe
        title="PNL détaillé"
        className="report-iframe"
        src="https://app.powerbi.com/reportEmbed?reportId=22b79504-05aa-488f-9d9d-25b82321755a&autoAuth=true&ctid=6542b2db-e8ac-4b24-8ef4-f8f00eccf8e5&pageName=ReportSection"
      ></iframe>
    </div>
  );
};

export default PnlDetail;