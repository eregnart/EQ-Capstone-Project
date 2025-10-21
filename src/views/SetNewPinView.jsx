import React from "react";
import { useNavigate } from "react-router-dom";
import Shell from "../components/Shell.jsx";
import { Field, Input, PrimaryBtn } from "../components/UI.jsx";

export default function SetNewPinView(){
  const nav = useNavigate();
  const [pin1, setPin1] = React.useState("");
  const [pin2, setPin2] = React.useState("");

  const onConfirm = () => {
    if (pin1 !== pin2) return alert("Pins must match");
    const email = sessionStorage.getItem("resetEmail");
    const user = email ? JSON.parse(localStorage.getItem(email) || "null") : null;
    if (!user) return alert("No reset in progress");
    user.password = pin1;
    localStorage.setItem(email, JSON.stringify(user));
    nav("/pin-reset");
  };

  return (
    <Shell title="Set a New PIN" backTo={-1}>
      <div className="space-y-4">
        <p className="text-sm text-gray-600">Your email has been successfully verified. Click confirm to set a new PIN.</p>
        <Field label="Enter a new pin"><Input type="password" value={pin1} onChange={(e)=>setPin1(e.target.value)} placeholder="••••"/></Field>
        <Field label="Re-enter pin"><Input type="password" value={pin2} onChange={(e)=>setPin2(e.target.value)} placeholder="••••"/></Field>
        <PrimaryBtn onClick={onConfirm}>CONFIRM</PrimaryBtn>
      </div>
    </Shell>
  );
}
