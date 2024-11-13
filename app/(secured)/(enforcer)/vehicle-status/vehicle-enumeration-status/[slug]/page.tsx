"use client";
import { usePathname, useRouter } from "next/navigation";
import { getLastPathSegment } from "@/src/utils/getLastPathSegment";
import React, { useEffect, useState } from "react";
import { SelectInput } from "@/src/components/common/input";
import { BackButton, Button } from "@/src/components/common/button";
import "./style.scss";
import { formatAmount } from "@/src/utils/formatAmount";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateTicketPayload } from "@/src/components/types/ticketTypes";
import { getCurrentDateTime } from "@/src/utils/getCurrentDateTime";
import { randomInvoiceGenerator } from "@/src/utils/randomInvoiceGenerator";
import { useMutation } from "@tanstack/react-query";
import { createNewTicket } from "@/src/services/ticketsServices";
import toast from "react-hot-toast";
import { getErrorMessages } from "@/src/utils/helper";
import useIsBrower from "@/src/hooks/useIsBrower";

const Dynamic = () => {
  const router = useRouter();
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

  const path = usePathname();
  const [show, setShow] = useState({
    mode: false,
    state: "",
    message: "",
  });
  const segment = getLastPathSegment(path);
  let fetched_data = sessionStorage.getItem("TICKETS_DATA");
  const data = fetched_data && JSON.parse(fetched_data);

  const ticket = data?.filter(
    (ticket: any) => ticket.PlateNumber == segment
  );


  return (
    <div className="ticket-details">
      <h1>Enumeration Details</h1>
      <div className="ticket-details_comp">
  <div>
    <p>Enumeration ID</p>
    <p>{ticket[0]?.EnumerationID}</p>
  </div>

  <div>
    <p>Taxpayer ID</p>
    <p>{ticket[0]?.TaxpayerID}</p>
  </div>

  <div>
    <p>Taxpayer Name</p>
    <p>{ticket[0]?.TaxpayerName}</p>
  </div>

  <div>
    <p>Plate Number</p>
    <p>{ticket[0]?.PlateNumber}</p>
  </div>

  <div>
    <p>Revenue Year</p>
    <p>{ticket[0]?.RevenueYear}</p>
  </div>

  <div>
    <p>Location</p>
    <p>{ticket[0]?.Location}</p>
  </div>

  <div>
    <p>Income Category</p>
    <p>{ticket[0]?.IncomeCategory}</p>
  </div>

  <div>
    <p>Monthly Income</p>
    <p>{ticket[0]?.MonthlyIncome}</p>
  </div>

  <div>
    <p>Income Amount</p>
    <p>{ticket[0]?.IncomeAmount}</p>
  </div>

  <div>
    <p>Enumeration Fee</p>
    <p>{ticket[0]?.EnumerationFee}</p>
  </div>

  <div>
    <p>Status</p>
    <p>{ticket[0]?.Status}</p>
  </div>

  <div>
    <p>Created By</p>
    <p>{ticket[0]?.CreatedBy}</p>
  </div>

  <div>
    <p>Creation Time</p>
    <p>{new Date(ticket[0]?.CreateTime).toLocaleString()}</p>
  </div>
</div>


      <Button text={"Cancel"} onClick={() => router.back()} />
    </div>
  );
};

export default Dynamic;
