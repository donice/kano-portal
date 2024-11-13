"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "@/src/components/common/loader/redirecting";
import "./style.scss";
import Empty from "@/src/components/common/empty";
import { formatAmount } from "@/src/utils/formatAmount";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { fetchCompletedTransportEnumeration } from "@/src/services/transportEnumerationService";

const TransportEnumerationTable: React.FC = () => {
  const router = useRouter();
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["fetchCompletedTransportEnumeration"],
    queryFn: fetchCompletedTransportEnumeration,
  });

  const fetced_data = data?.data || [];

  if (isLoading) {
    return (
      <div className={"loading"}>
        <Loading />
      </div>
    );
  }

  if (isError) {
    toast.error(error instanceof Error ? error.message : "Unknown error");
  }

  if (!data || data.length === 0) {
    return (
      <div className={"empty"}>
        <Empty />
      </div>
    );
  }

  console.log(fetced_data);

  return (
    <section className="main-table">
      {fetced_data.length > 0 ? (
        <div className="main-table_form_tickets_container">
          <div className="tickets">
            {fetced_data.map((transaction: any) => (
              <div
                key={transaction.idagent_transactions}
                className="ticket"
                onClick={() =>
                  router.push(
                    `/enumeration/transport/view/${transaction.EnumerationID}`
                  )
                }
              >
                <div>
                  <p>Enumeration ID: {transaction.EnumerationID}</p>

                  <p>{new Date(transaction.CreateTime).toLocaleString()}</p>
                  {/* <p>{addEllipses(transaction?.reference, 20)}</p> */}
                  <p>Taxpayer: {transaction.TaxpayerName }, {transaction.TaxpayerID}</p>
                  <p>Plate Number: {transaction.PlateNumber}</p>

                </div>
                <div>
                  <p>Asset Code: {transaction.assetCode}</p>
                  <p>₦{formatAmount(transaction.IncomeAmount)}</p>
                  <p>{transaction.IncomeCategory}</p>
                  <p>{transaction.UnionName}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Empty text="No tickets found" />
      )}
    </section>
  );
};

export default TransportEnumerationTable;
