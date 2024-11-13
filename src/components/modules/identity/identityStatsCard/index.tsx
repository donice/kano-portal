"use client";
import React from "react";
import "./style.scss";
import { useQuery } from "@tanstack/react-query";
import LoaderSkeleton from "@/src/components/common/loader-skeleton";
import { fetchABSSINStats } from "@/src/services/identityService";

const IdentityStatsCard = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["ticketsWalletData"],
    queryFn: fetchABSSINStats,
  });

  if (isLoading) {
    return (
      <div>
        <LoaderSkeleton height="100px" />
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <p>Error</p>
      </div>
    );
  }



  return (
    <>
      {data ? (
        <figure className="identity-stats">
          <div className="identity-stats-card">
            <div className="ticket_container">
              <div className="identity-stats-card_balance">
                <span>Today's ABSSIN</span>
                <span>{data && data?.response_data?.tp_indv?.thisDay || "0"}</span>
              </div>

              <div className="identity-stats-card_image"></div>

              <div className="identity-stats-card_balance">
                <span>This Month's ABSSIN</span>
                <span>{data && data?.response_data?.tp_indv?.thisMonth || ""}</span>
              </div>
            </div>
          </div>
          {/* <div className="identity-stats-card">
            <div className="ticket_container">
              <div className="identity-stats-card_balance">
                <span>Week's Collections</span>
                <span>
                  ₦{formatAmount(data.data?.[0].total_amount_monthly)}
                </span>
              </div>

              <div className="identity-stats-card_image"></div>

              <div className="identity-stats-card_balance">
                <span>Month's Collection</span>
                <span>{data.data?.[0].total_transaction_weekly}</span>
              </div>
            </div>
          </div> */}
        </figure>
      ) : (
        <LoaderSkeleton height="200px" />
      )}
    </>
  );
};

export default IdentityStatsCard;
