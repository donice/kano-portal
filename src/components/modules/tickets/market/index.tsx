import React from "react";
import TicketsWalletCard from "../ticketsStatsCard";
import { SecondaryButton } from "@/src/components/common/button";
import { CustomHeader } from "@/src/components/common/header";
import CustomTable from "@/src/components/common/table";
import "./style.scss";

const data = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  // Add more data as needed
  { id: 3, name: "Michael Brown", email: "michael@example.com" },
  { id: 4, name: "Chris Johnson", email: "chris@example.com" },
  { id: 5, name: "Patricia Williams", email: "patricia@example.com" },
  { id: 6, name: "Linda Martinez", email: "linda@example.com" },
  { id: 7, name: "Barbara Davis", email: "barbara@example.com" },
  { id: 8, name: "Richard Wilson", email: "richard@example.com" },
  { id: 9, name: "Joseph Anderson", email: "joseph@example.com" },
  { id: 10, name: "Susan Taylor", email: "susan@example.com" },
  { id: 11, name: "Margaret Thomas", email: "margaret@example.com" },
  { id: 12, name: "Robert Jackson", email: "robert@example.com" },
  // Add more data as needed
];

const MarketTicketComponent = () => {
  return (
    <div className="market">
      <header className="market_header">
        <CustomHeader
          title="Market Ticket"
          desc="Manage/Create Market Ticket"
        />
        <div className="market_header_buttons">
          <SecondaryButton text="Add Ticket" link="/tickets/market/add" />
        </div>
      </header>
      <TicketsWalletCard />

      <div className="market_table">
        <CustomTable data={data} />
      </div>
    </div>
  );
};

export default MarketTicketComponent;
