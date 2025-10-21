import React from "react";
import { useNavigate } from "react-router-dom";
import Shell from "../components/Shell.jsx";
import { PrimaryBtn } from "../components/UI.jsx";

export default function PinResetView(){
  const nav = useNavigate();
  return (
    <Shell title="PIN Reset" backTo={-1}>
      <div className="space-y-4 text-center">
        <p className="text-gray-700">Your PIN has been successfully updated.</p>
        <PrimaryBtn onClick={()=>nav("/")}>CONTINUE</PrimaryBtn>
      </div>
    </Shell>
  );
}
