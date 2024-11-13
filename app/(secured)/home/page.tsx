import React from "react";
import type { Metadata } from "next";
import HomeComponent from "@/src/components/modules/home";

export const metadata: Metadata = {
  title: "Agents Portal - Dashbaord",
  description: "Kano State for Agents Portal Dashboard",
};

const Home = () => {
  return (
    <div>
      <HomeComponent />
    </div>
  );
};

export default Home;
