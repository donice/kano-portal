import React from "react";
import { CustomHeader } from "@/src/components/common/header";
import "./style.scss";
import BillsTable from "./billsTable";


const BillsComponent = () => {
  return (
    <div className="bills_comp">
      <header className="bills_comp_header">
        <CustomHeader
          title="Bills"
          desc="View your bills"
        />
      </header>
      {/* <TicketsWalletCard /> */}

      <div className="bills_comp_table">
        <BillsTable />
      </div>
    </div>
  );
};

export default BillsComponent;
