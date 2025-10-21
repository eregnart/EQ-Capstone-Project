import React from "react";
import { Link } from "react-router-dom";
import Shell from "../../components/Shell.jsx";
import { PrimaryBtn, SecondaryBtn } from "../../components/UI.jsx";

export default function SignupView() {
  return (
    <Shell title="Create your account" backTo="/">
      <div className="max-w-md space-y-6">
        <p className="text-slate-600">
          Choose how you’d like to sign up.
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          <Link to="/signup/personal">
            <PrimaryBtn className="w-full">Personal</PrimaryBtn>
          </Link>
          <Link to="/signup/company">
            <SecondaryBtn className="w-full">Company</SecondaryBtn>
          </Link>
        </div>

        <p className="text-sm text-gray-600">
          Already have an account? <Link to="/" className="underline">Log in</Link>
        </p>
      </div>
    </Shell>
  );
}
