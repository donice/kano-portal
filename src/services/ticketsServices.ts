import axiosInstance from "../lib/axiosInstance";
import useIsBrower from "../hooks/useIsBrower";
import { setToken } from "./setToken";
import { CreateGroupSportPayload, CreateIndividualSportPayload, CreateTicketPayload } from "../components/types/ticketTypes";

const url = process.env.NEXT_PUBLIC_BASE_URL;
const centralapi_url = process.env.NEXT_PUBLIC_CENTRAL_URL;

const isToken =
  useIsBrower() && window.sessionStorage.getItem("TOKEN")
    ? window.sessionStorage.getItem("TOKEN")
    : null;
setToken(isToken);

export interface Product {
  productCode: string;
  productName: string;
  dailyAmount: number;
  weeklyAmount: number;
  monthlyAmount: number;
}

export interface TransactionsTypes {
  page: number;
  limit: number;
}

export interface ResendSMSPayload {
  payment_ref: string;
}

export const createNewTicket = async (requestData: CreateTicketPayload) => {
  try {
    const { data } = await axiosInstance.post(
      `${url}/transport/create-ticket`,
      requestData
    );
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching transactions: ${error?.message}`);
  }
};

export const createIndividualSportTicket = async (requestData: CreateIndividualSportPayload) => {
  try {
    const { data } = await axiosInstance.post(
      `${url}/sport/create-individual-ticket`,
      requestData
    );
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching transactions: ${error?.message}`);
  }
};

export const createGroupSportTicket = async (requestData: CreateGroupSportPayload) => {
  try {
    const { data } = await axiosInstance.post(
      `${url}/sport/create-group-ticket`,
      requestData
    );
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching transactions: ${error?.message}`);
  }
};

export const resendSMS = async (requestData: ResendSMSPayload) => {
  try {
    const { data } = await axiosInstance.post(
      `${centralapi_url}/wallet/resend-sms`,
      requestData
    );
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching transactions: ${error?.message}`);
  }
};

export const fetchTransactions = async () => {
  try {
    const { data } = await axiosInstance.post(`${url}/transport/transactions`, {
      page: 1,
      limit: 200,
    });
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching transactions: ${error?.message}`);
  }
};

export const retryPayment = async (reqData: { payment_ref: string }) => {
  try {
    const { data } = await axiosInstance.post(
      `${url}/wallet/access-reproccess-debit`,
      { payment_ref: reqData?.payment_ref, merchant_key: process.env.NEXT_PUBLIC_MERCHANT_KEY }
    );
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching transactions: ${error?.message}`);
  }
};

export const fetchPlateNumberInfo = async (plate_number: string) => {
  try {
    const { data } = await axiosInstance.post(
      `${url}/transport/get-plate-number-info`,
      { plate_number: plate_number }
    );
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching transactions: ${error?.message}`);
  }
};
