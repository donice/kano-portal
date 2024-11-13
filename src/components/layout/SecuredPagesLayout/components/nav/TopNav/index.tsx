"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { MainSmallLogo } from "@/src/components/common/Images";
import { PiUserCircleDuotone } from "react-icons/pi";
import { TbBellRinging } from "react-icons/tb";
import useIsBrower from "@/src/hooks/useIsBrower";
import LoaderSkeleton from "@/src/components/common/loader-skeleton";

const TopNav = () => {
  const [userData, setUserData] = useState<{
    name?: string;
    user_cat?: string;
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
    <div className="top-nav">
      <div className="top-nav_logo">
        <a href="/dashboard" className="logo" aria-label="Kano State AppAgents Logo">
          <MainSmallLogo />
        </a>
      </div>
      {/* <span className="settings">
        <TbBellRinging className="icon" />
      </span> */}
      <div className="top-nav_user">
        {!userData ? (
          <div className="top-nav_user_skeleton">
            <LoaderSkeleton width="70px" height="10px" />
            <LoaderSkeleton width="100px" height="10px" />
          </div>
        ) : (
          <div className="top-nav_user_data">
            <p>{userData?.name || "-"}</p>
            <span>{userData?.user_cat || "-"}</span>
          </div>
        )}

        <a href="/account" className="logo" aria-label="Kano State AppAgents Logo">
          <PiUserCircleDuotone className="icon" />
        </a>
      </div>
    </div>
  );
};

export default TopNav;
