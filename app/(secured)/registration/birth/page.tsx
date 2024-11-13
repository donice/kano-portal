import ChangePasswordComponent from "@/src/components/modules/user/settings/change-password";
import { Metadata } from "next/types";
import React from "react";
import "./style.scss";
import { CustomFormHeader } from "@/src/components/common/header";
import BirthRegistrationComponent from "@/src/components/modules/registrations/birth";

export const metadata: Metadata = {
  title: "Birth Regsitration",
  description: "Create a Birth Regsitration",
};

const BirthRegistrationPage = () => {
  return (
    <div>
      <CustomFormHeader title="Birth Regsitration" desc="Enter details to register for local government certificate of birth" />
      <div className="reg">
        <BirthRegistrationComponent />
      </div>
    </div>
  );
};

export default BirthRegistrationPage;
