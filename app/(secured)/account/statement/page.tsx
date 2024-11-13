"use client";
import React from "react";
import { Button } from "@/src/components/common/button";
import "./style.scss";
import { useQuery } from "@tanstack/react-query";
import { CustomHeader } from "@/src/components/common/header";
import { fetchAccountStatement } from "@/src/services/accountServices";
import { Loading } from "@/src/components/common/loader/redirecting";
import { formatAmount } from "@/src/utils/formatAmount";
import { useRouter } from "next/navigation";

const Dynamic = () => {
  const router = useRouter();
  const { data, isPending } = useQuery({
    queryKey: ["my-statement"],
    queryFn: fetchAccountStatement,
  });

  return (
    <>
      {" "}
      <CustomHeader
        title={"Account Statement"}
        desc={"Account Statement Details"}
      />
      {isPending ? (
        <Loading />
      ) : (
        <div className="statement">
          <div className="statement_comp">
            <div>
              <p>Full name</p>
              <p>{data?.data?.fullname || "-"}</p>
            </div>

            <div>
              <p>User Category</p>
              <p>{data?.data?.user_cat || "-"}</p>
            </div>

            <div>
              <p>Agent Code</p>
              <p>{data?.data?.agent_code || "-"} </p>
            </div>

            <div>
              <p>Email</p>
              <p>{data?.data?.email || "-"} </p>
            </div>

            <div>
              <p>L.G.A</p>
              <p>{data?.data?.lga || "-"} </p>
            </div>

            <div>
              <p>Account Status</p>
              <p>{data?.data?.account_status || "-"} </p>
            </div>
            <div>
              <p>Pending Transactions</p>
              <p>
                ₦{formatAmount(data?.data?.pending_transactions) || "-"} /{" "}
                {data?.data?.pending_transactions_count || "0"}{" "}
              </p>
            </div>
            <div>
              <p>Total Transactions</p>
              <p>
                ₦{formatAmount(data?.data?.total_transactions) || "-"} /{" "}
                {data?.data?.total_transactions_count || "0"}{" "}
              </p>
            </div>
            <div>
              <p>Total Transactions Today</p>
              <p>
                ₦{formatAmount(data?.data?.total_transactions_today) || "-"} /{" "}
                {data?.data?.total_transactions_today_count || "0"}{" "}
              </p>
            </div>
            <div>
              <p>Wallet Balance</p>
              <p>₦{formatAmount(data?.data?.wallet_balance) || "-"} </p>
            </div>
            <div>
              <p>Total Wallet Credit </p>
              <p>₦{formatAmount(data?.data?.total_wallet_credit) || "-"} </p>
            </div>
            <div>
              <p>Earnings </p>
              <p>₦{formatAmount(data?.data?.earning) || "-"} </p>
            </div>
            <div>
              <p>Total Earnings</p>
              <p>₦{formatAmount(data?.data?.total_earning) || "-"} </p>
            </div>
            <div className="creation_date">
              <p>Creation Date </p>
              <p> {data?.data?.creation_date || "-"}</p>
            </div>
          </div>

          <div className="statement_cta">
            <div className="statement_cta_info">
              <p>
                Payout requests will be activated when your current earnings are
                N100, and above
              </p>
            </div>
            <Button
            // disabled={true}
              text={"Fidelity Cashout"}
              onClick={() => {
                router.push("/account/statement/fidelity");
              }}
            />
            <Button
              text={"Access Cashout"}
              onClick={() => {
                router.push("/account/statement/access");
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Dynamic;
