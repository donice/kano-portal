import React from "react";
import { CustomHeader } from "@/src/components/common/header";
import "./style.scss";
import { GoBackButton } from "@/src/components/common/button";
import AddMarketTicketForm from "./form";

const AddMarketTicketComponent = () => {
  return (
    <section className="market_add">
      <GoBackButton link="/tickets/market" />
      <div className="market-comp">
        <header className="market-comp_header">
          <CustomHeader
            title="Add Transport Ticket"
            desc="Manage/Create Transaction"
          />
        </header>

        <div className="market-comp_form">
          <AddMarketTicketForm />
        </div>
      </div>
    </section>
  );
};

export default AddMarketTicketComponent;
