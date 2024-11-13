import axiosInstance from "../lib/axiosInstance";
import useIsBrower from "../hooks/useIsBrower";
import { setToken } from "./setToken";

const url = process.env.NEXT_PUBLIC_BASE_URL;

const isToken =
  useIsBrower() && window.sessionStorage.getItem("TOKEN")
    ? window.sessionStorage.getItem("TOKEN")
    : null;
setToken(isToken);

export interface verifyVehicleEnumrationPayload {
  plate_number: string;
}

export interface verifyVehicleStatusPayload {
  ref: string;
}
export const verifyVehicleStatus = async (requestData: verifyVehicleStatusPayload) => {
  try {
    // const { data } = await axiosInstance.post(`${url}/transport/verify-ticket`, requestData);
    const { data } = await axiosInstance.post(`https://sandboxportalapi.abiapay.ng/api/v1/assets/get-vehicle`, requestData);
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching transactions: ${error?.message}`);
  }
};


export const verifyVehicleEnumeration = async (requestData: verifyVehicleEnumrationPayload) => {
  try {
    const { data } = await axiosInstance.post(`${url}/enumeration/enumeration-details`, requestData);
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching transactions: ${error?.message}`);
  }
};
