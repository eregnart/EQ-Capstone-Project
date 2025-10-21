import React from "react";
import { useNavigate } from "react-router-dom";
import Shell from "../components/Shell.jsx";
import { Field, Input, PrimaryBtn } from "../components/UI.jsx";
import { createAuthPresenter } from "../presenters/AuthPresenter.js";

const auth = createAuthPresenter();

export default function ForgotPin(){
const nav = useNavigate();
const [email, setEmail] = React.useState("");
return (
<Shell title="Forgot PIN" backTo={-1}>
<p className="text-sm text-slate-600 mb-4">Enter your email and we'll send a code to reset your PIN.</p>
<Field label="Email"><Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="name@company.com"/></Field>
<PrimaryBtn onClick={()=>{ /* simulate */ sessionStorage.setItem("resetEmail", email); nav("/check-email"); }}>Send Code</PrimaryBtn>
</Shell>
);
}