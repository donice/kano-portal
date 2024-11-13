import React from "react";
import "./style.scss";
import { TbFolders, TbCash, TbReceipt } from "react-icons/tb";
import { useRouter } from "next/navigation";

interface props {
  icon?: string;
  name: string;
  amount: string;
  link?: string;
}
const EnforcerCard = ({ name, amount, link }: props) => {
  const router = useRouter();
  return (
    <div
      className={"enforcer-card"}
      onClick={() => (link ? router.push(link) : console.log(""))}
    >
      <div className="enforcer-card_summ">
        <span>
          {name == "Bills" ? (
            <TbCash className="icon" />
          ) : name === "Receipts" ? (
            <TbReceipt className="icon" />
          ) : (
            <TbFolders className="icon" />
          )}
        </span>
      </div>

      <div className="enforcer-card_amount">
        <p>Total {name}</p>
        <span>{amount} Items</span>
      </div>
    </div>
  );
};

export default EnforcerCard;