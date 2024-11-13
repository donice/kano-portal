import axiosInstance from "../lib/axiosInstance";
import useIsBrower from "../hooks/useIsBrower";
import { setToken } from "./setToken";

const url = process.env.NEXT_PUBLIC_BASE_URL;

const isToken =
  useIsBrower() && window.sessionStorage.getItem("TOKEN")
    ? window.sessionStorage.getItem("TOKEN")
    : null;
setToken(isToken);

export interface FetchBulkPrintsPayload {
  category: string,
  lga: number,
  card_type: string,
  no_of_cards: 50,
  page: 1
}

export const fetchBulkPrintsData = async ( reqData: FetchBulkPrintsPayload )=> {
  try {
    const { data } = await axiosInstance.post(`${url}/enumeration/print`, reqData);
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching transactions: ${error?.message}`);
  }
};