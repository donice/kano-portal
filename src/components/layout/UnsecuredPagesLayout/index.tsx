import React from "react";
import "./style.scss";
import { MainLogo } from "../../common/Images";

const UnsecuredPagesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (

    <div className="unsecured-main">
      <a href="/dashboard" className="logo" aria-label="Kano State AppAgents Logo">
        <MainLogo />
      </a>
      <div className="unsecured-main_container">{children}</div>
      <footer >
      © 2024 Kano State Government. <br /> All rights reserved.
      </footer>
    </div>
  );
}

export default UnsecuredPagesLayout;
