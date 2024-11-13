"use client";
import { CustomHeader } from "@/src/components/common/header";
import useIsBrower from "@/src/hooks/useIsBrower";
import React, { useEffect, useState } from "react";

const HomeHeader = () => {
  const [userData, setUserData] = useState<{
    name?: string;
    user_cat?: string;
    mda_name?: string;
    mda?: string;
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

  return (
    <header className="dashboard_header">
      <CustomHeader
        title={`Welcome${userData?.name && `, ${userData?.name}`}`}
        desc={
          userData?.user_cat == "MdaUser"
            ? `${userData?.mda_name} Dashboard`
            : "Overview of your dashboard"
        }
      />
    </header>
  );
};

export default HomeHeader;
