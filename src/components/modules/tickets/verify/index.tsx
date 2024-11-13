"use client";
import React, { useEffect, useState } from "react";
import { CustomHeader } from "@/src/components/common/header";
import VerifyTicketsFrom from "./form";
import "./style.scss";
import useIsBrower from "@/src/hooks/useIsBrower";
import Empty from "@/src/components/common/empty";
import { CamelCaseToTitleCase } from "@/src/utils/helper";
import { formatDate } from "@/src/utils/formatDate";

interface DetailsType {
  response_code?: string;
  [key: string]: any;
}

const VerifyTicketsComponent = () => {
  const [details, setDetails] = useState<DetailsType>({});
  const displayDetails = details;
  const [userData, setUserData] = useState<{
    name?: string;
    email?: string;
  } | null>(null);

  useEffect(() => {
    if (useIsBrower()) {
      const data = window.sessionStorage.getItem("USER_DATA");
      if (data) {
        try {
          setUserData(JSON.parse(data));
        } catch (e) {
          console.error("Error parsing JSON data:", e);
          setUserData({});
        }
      }
    }
  }, []);

  const displayKeys = [
    "vehicle_type",
    "no_of_days",
    "driver_phone",
    "last_ticket_ref",
    "last_ticket_purchase",
  ];

  return (
    <section className="verify-tickets">
      <div className="verify-tickets-comp">
        <header className="verify-tickets-comp_header">
          <CustomHeader
            title="Verify Ticket"
            desc="Check for your Ticket's validity"
          />
        </header>

        <div className="verify-tickets-comp_form">
          <VerifyTicketsFrom userData={userData} setDetails={setDetails} />
        </div>
      </div>

      <div className="verify-tickets-comp_details">
        {displayDetails !== null &&
        displayDetails !== undefined &&
        Object.keys(displayDetails).length <
          1 ? null : (displayDetails?.response_code &&
            displayDetails?.response_code == "00") ||
          (displayDetails?.response_code &&
            displayDetails?.response_code == "97") ? (
          <div>
            <div className="line-items">
              <p>Status:</p>
              {displayDetails?.response_code == "00" ? (
                <p className="success">Valid Ticket</p>
              ) : (
                <p className="failure">Invalid Ticket</p>
              )}
            </div>
            {Object.entries(displayDetails)
              .filter(([key]) => displayKeys.includes(key))
              .map(([key, value]) => (
                <div key={key} className="line-items">
                  <p>{CamelCaseToTitleCase(key)}:</p>
                  <p>
                    {key === "no_of_days"
                      ? CamelCaseToTitleCase(value)
                      : key === "last_ticket_purchase"
                      ? formatDate(value)
                      : value}
                  </p>
                </div>
              ))}
          </div>
        ) : (
          <Empty text="No matching vehicle found" />
        )}
      </div>
    </section>
  );
};

export default VerifyTicketsComponent;
