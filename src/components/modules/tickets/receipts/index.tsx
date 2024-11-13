import React from "react";
import { CustomHeader } from "@/src/components/common/header";
import "./style.scss";
import ReceiptsTable from "./receiptsTable";


const ReceiptsComponent = () => {
  return (
    <div className="receipts_comp">
      <header className="receipts_comp_header">
        <CustomHeader
          title="Receipts"
          desc="View your receipts"
        />
      </header>
      {/* <TicketsWalletCard /> */}

      <div className="receipts_comp_table">
        <ReceiptsTable />
      </div>
    </div>
  );
};

export default ReceiptsComponent;
