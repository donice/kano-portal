import React, { type ReactElement } from "react";
import type { Metadata } from "next";
import { CustomHeader } from "@/src/components/common/header";
import {
  FcShipped,
  FcInTransit,
  FcAcceptDatabase,
  FcMoneyTransfer,
  FcDiploma2,
  FcAutomatic,
  FcSportsMode,
} from "react-icons/fc";
import Link from "next/link";
import "./style.scss";
import TicketsWalletCards from "@/src/components/modules/tickets/ticketsWalletCards";

export const metadata: Metadata = {
  title: "Manage Ticket",
  description: "Agents Portal Tickets Page",
};

interface TicketsProps {
  name: string;
  title: string;
  desc: string;
  icon: ReactElement;
}

const tickets: TicketsProps[] = [
  {
    name: "tickets/transport/add",
    title: "Transport Tickets",
    desc: "Create transport ticket",
    icon: <FcShipped className="icon" />,
  },
  {
    name: "tickets/sport",
    title: "Sport Tickets",
    desc: "Create Sport Sticket",
    icon: <FcSportsMode className="icon" />,
  },
  {
    name: "tickets/transport/loading-offloading",
    title: "Loading & Offloading",
    desc: "Register Loading & Offloading Vehicles",
    icon: <FcInTransit className="icon" />,
  },
  {
    name: "tickets/transport/flying-revenue",
    title: "Flying Revenue",
    desc: "Register Flying Revenue Vehicles",
    icon: <FcAutomatic className="icon" />,
  },
  {
    name: "tickets/transport/emblem",
    title: "Transport Emblem",
    desc: "Create transport emblem",
    icon: <FcDiploma2 className="icon" />,
  },
  {
    name: "tickets/transport",
    title: "Transaction History",
    desc: "View your tickets transactions history",
    icon: <FcAcceptDatabase className="icon" />,
  },
  {
    name: "transfers",
    title: "Transfer History",
    desc: "View your wallet transfer history",
    icon: <FcMoneyTransfer className="icon" />,
  },
];

const TicketPage = () => {
  return (
    <div className="ticketspage">
      <CustomHeader title="Tickets Dashboard" desc={"Manage your tickets"} />

      <div className="ticketspage_container">
        <TicketsWalletCards />

        <div className="ticketspage_items">
          {tickets.map((item) => (
            <Link
              href={`/${item.name}`}
              key={item.name}
              className={"ticketspage_item"}
            >
              <div>
                {" "}
                <span>{item.icon}</span>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
