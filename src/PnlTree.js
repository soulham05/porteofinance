import React from "react";
import "./Pages.css";

const PnlTree = () => {
  return (
    <div className="page-container">
      <iframe
        title="Arborescence P&L"
        className="report-iframe"
        src="https://app.powerbi.com/reportEmbed?reportId=22b79504-05aa-488f-9d9d-25b82321755a&autoAuth=true&ctid=6542b2db-e8ac-4b24-8ef4-f8f00eccf8e5&pageName=ReportSection74f441920540b1e22925"
      ></iframe>
    </div>
  );
};

export default PnlTree;