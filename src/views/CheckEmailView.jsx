import React from "react";
import { useNavigate } from "react-router-dom";
import Shell from "../components/Shell.jsx";
import { PrimaryBtn, SecondaryBtn } from "../components/UI.jsx";

export default function CheckEmailView() {
  const nav = useNavigate();
  const [email, setEmail] = React.useState(() => sessionStorage.getItem("resetEmail") || "");

  const handleContinue = () => {
    // Simulate sending a verification code
    console.log("Verification code sent to:", email);
    sessionStorage.setItem("resetCode", "123456"); // simulate email code
    nav("/set-new-pin");
  };

  return (
    <Shell title="Check your email" backTo="/forgot-pin">
      <div className="max-w-md space-y-5">
        <p className="text-slate-600">
          We’ve sent a 6-digit verification code to{" "}
          <span className="font-semibold">{email || "your email address"}</span>.
          Please check your inbox and enter the code below to reset your PIN.
        </p>

        <div className="flex gap-3 justify-between">
          <SecondaryBtn onClick={() => nav(-1)}>Back</SecondaryBtn>
          <PrimaryBtn onClick={handleContinue}>Continue</PrimaryBtn>
        </div>

        <p className="text-xs text-gray-500 text-center">
          Didn’t get an email? Check your spam folder or try again later.
        </p>
      </div>
    </Shell>
  );
}
