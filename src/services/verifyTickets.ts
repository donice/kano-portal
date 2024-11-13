import { https } from "../lib/axiosInstance";

const base_url = process.env.NEXT_PUBLIC_APP_URL;
const ibm = process.env.NEXT_PUBLIC_APIC_KEY;

export interface VerifyTicketPayload {
  agentEmail: string;
  referenceID: string;
}

export const verifyTicket = async (requestData: VerifyTicketPayload) => {
  try {
    const res = await https(
      `${base_url}verifyTicket`,
      {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: {
          "Content-Type": "application/json",
          "X-IBM-Client-Id": ibm as string,
        },
      }
    );

    return res;
  } catch (error: any) {
    return {
      error: error.data
    }
  }
};

