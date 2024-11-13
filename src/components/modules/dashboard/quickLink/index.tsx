import React from "react";
import "./style.scss";
import { TbChevronRight } from "react-icons/tb";
import { useRouter } from "next/navigation";
import Image from "next/image";
import badge from "./assets/badge.png";
import {
  FcRules,
  FcNews,
  FcPrint,
  FcAutomotive,
  FcDeleteDatabase,
  FcDiploma2,
  FcBusinessContact,
} from "react-icons/fc";

const QuickLinks = ({
  name,
  link,
  comingSoon,
}: {
  name:
    | "ABSSAA"
    | "Identity"
    | "Enforcement"
    | "Bills"
    | "Bulk Prints"
    | "Receipts"
    | "Verify Vehicle Status"
    | "Traffic Offence Ticket"
    | "Ticket Fines";
  link: string;
  comingSoon?: boolean;
}) => {
  const router = useRouter();
  return (
    <div
      className="quicklink"
      onClick={() => (comingSoon ? null : router.push(link))}
    >
      <div className="quicklink_name">
        {" "}
        {name == "Bulk Prints" ? (
          <FcPrint className="icon" />
        ) : name == "ABSSAA" ? (
          <FcBusinessContact className="icon" />
        ) : name == "Bills" ? (
          <FcNews className="icon" />
        ) : name == "Receipts" ? (
          <FcRules className="icon" />
        ) : name == "Verify Vehicle Status" ? (
          <FcAutomotive className="icon" />
        ) : name == "Traffic Offence Ticket" ? (
          <FcDeleteDatabase className="icon" />
        ) : name == "Ticket Fines" ? (
          <FcDiploma2 className="icon" />
        ) : (
          <Image src={badge} alt="badge" className="icon" />
        )}
        <span>{name}</span>
      </div>
      {comingSoon ? (
        <span className="coming-soon">Coming Soon</span>
      ) : (
        <TbChevronRight />
      )}
    </div>
  );
};

export default QuickLinks;
