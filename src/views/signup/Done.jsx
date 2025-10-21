import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Shell from "../../components/Shell.jsx";
import { PrimaryBtn, SecondaryBtn } from "../../components/UI.jsx";

export default function Done() {
  const nav = useNavigate();

  const all = React.useMemo(() => {
    try { return JSON.parse(sessionStorage.getItem("signup.all") || "{}"); }
    catch { return {}; }
  }, []);

  const finish = () => {
    sessionStorage.removeItem("signup.personal");
    sessionStorage.removeItem("signup.all");
    nav("/");
  };

  const name = all?.personal?.name || "your account";

  return (
    <Shell title="Signup complete">
      <div className="max-w-md space-y-4">
        <h2 className="text-2xl font-bold">You're all set 🎉</h2>
        <p className="text-slate-700">
          Thanks, <span className="font-semibold">{name}</span>. Your account has been created.
          You can now log in using your email and PIN.
        </p>

        <div className="flex gap-3">
          <PrimaryBtn onClick={finish}>Go to Login</PrimaryBtn>
          <SecondaryBtn as={Link} to="/dashboard">Open Dashboard</SecondaryBtn>
        </div>
      </div>
    </Shell>
  );
}
