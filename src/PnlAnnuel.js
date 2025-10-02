import React from "react";
import "./Pages.css";

const PnlAnnuel = () => {
  return (
    <div className="page-container">
      <iframe
        title="P&L Annuel"
        src="https://app.powerbi.com/reportEmbed?reportId=22b79504-05aa-488f-9d9d-25b82321755a&autoAuth=true&ctid=6542b2db-e8ac-4b24-8ef4-f8f00eccf8e5&pageName=752a138fee1ce1c91dab"
        className="report-iframe"
      ></iframe>
    </div>
  );
};

export default PnlAnnuel;