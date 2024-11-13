"use client";
import React from "react";
import { FormTextInput, SelectInput } from "@/src/components/common/input";
import { Button } from "@/src/components/common/button";
import {
  verifyTicket,
  VerifyTicketPayload,
} from "@/src/services/verifyTickets";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import "./style.scss";
import toast from "react-hot-toast";

const VerifyTicketsFrom = ({ userData, setDetails }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<VerifyTicketPayload>({
    defaultValues: {
      // agentEmail: userData?.email,
      referenceID: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: VerifyTicketPayload) => verifyTicket(data),
    onSuccess: (data: any) => {
      if ("error" in data) {
        // console.log(data.error);
        data.error.response_code == "99" &&
          setDetails(null) &&
          toast.error(data.error.response_message);
        data.error.response_code == "97" &&
          setDetails(data.error) &&
          toast.error("No ticket for today");
      } else {
        setDetails(data);
        toast.success("Ticket verified successfully");
      }
      reset();
      return;
    },
    onError: (error: any) => {
      toast.error(error);
      setDetails(error.data);
      console.log(error);
      return error;
    },
  });

  const onSubmit = (data: VerifyTicketPayload) => {
    mutation.mutate({ ...data, agentEmail: userData?.email });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="verify-tickets-form">
      <SelectInput
        label="Reference Type"
        name="ref_type"
        id="ref_type"
        options={[
          { label: "Plate Number", value: "plate_number" },
          { label: "Payment Reference", value: "payment_ref" },
        ]}
        placeholder="Select Reference Type"
      />
      <FormTextInput
        label="Reference Number"
        type="text"
        name="referenceID"
        placeholder="Enter Reference Number"
        register={register}
        validation={{
          required: true,
          minLength: {
            value: 7,
            message: "Length must be above 11 characters",
          },
        }}
        error={errors.referenceID}
      />
      <Button text="Verify Ticket" loading={mutation.isPending} />
    </form>
  );
};

export default VerifyTicketsFrom;
