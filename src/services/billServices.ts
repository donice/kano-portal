import axiosInstance from "../lib/axiosInstance";
import useIsBrower from "../hooks/useIsBrower";
import { setToken } from "./setToken";

const url = process.env.NEXT_PUBLIC_BASE_URL;

const isToken =
  useIsBrower() && window.sessionStorage.getItem("TOKEN")
    ? window.sessionStorage.getItem("TOKEN")
    : null;
setToken(isToken);

export interface FetchBillPayload {
  bill_ref: string;
}

export interface BillPaymentPayload {
  notice_number: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  account_type: string;
}

export interface ConfirmInstantAccountPaymentPayload {
  notice_number: string;
}
export const fetchBills = async () => {
  try {
    const { data } = await axiosInstance.get(`${url}/collections`);
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching bills: ${error?.message}`);
  }
};

export const fetchBillPayment = async (requestBody: FetchBillPayload) => {
  try {
    const { data } = await axiosInstance.post(
      `${url}/payment/bill-payment`,
      requestBody
    );
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching bill payment: ${error?.message}`);
  }
};

export const fetchInstantAccount = async (requestBody: BillPaymentPayload) => {
  try {
    const { data } = await axiosInstance.post(
      `${url}/payment/instant-account`,
      requestBody
    );
    return data;
  } catch (error: any) {
    throw new Error(`Error creating instant account: ${error?.message}`);
  }
};

export const confirmInstantAccountPayment = async (
  requestBody: ConfirmInstantAccountPaymentPayload
) => {
  try {
    const { data } = await axiosInstance.post(
      `${url}/payment/check-instant-payment`,
      { notice_number: requestBody }
    );
    return data;
  } catch (error: any) {
    throw new Error(`Error confirming payment: ${error?.message}`);
  }
};
