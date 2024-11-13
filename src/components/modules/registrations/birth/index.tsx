"use client";
import React, { useState } from "react";
import "./style.scss";
import ProgressBar from "./progressBar";
import ChildDetails from "./childDetails";
import ChangePassword from "./changePassword";

const BirthRegistrationComponent = () => {
  const [stage, setStage] = useState(0);
  const [formData, setFormData] = useState({});

  console.log(formData);

  return (
    <div className="password">

      <ProgressBar stage={stage} setStage={setStage} />

      {stage === 0 && <ChildDetails setStage={setStage} setFormData={setFormData}/>}
      {stage === 1 && <ChildDetails setStage={setStage} setFormData={setFormData} formData={formData}/>}
      {stage === 2 && <ChangePassword setStage={setStage} setFormData={setFormData} formData={formData}/>}
      
    </div>
  );
};

export default BirthRegistrationComponent;
