import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Shell from "../components/Shell.jsx";
import { Field, Input, PrimaryBtn } from "../components/UI.jsx";
import { createAuthPresenter } from "../presenters/AuthPresenter.js";

const auth = createAuthPresenter();

export default function LoginView() {
  const nav = useNavigate();
  const { register, handleSubmit, formState:{ errors } } = useForm();

  const onSubmit = (data) => {
    const ok = auth.login(data.email, data.password);
    if (ok) nav("/dashboard");
    else alert("Email or PIN incorrect");
  };

  return (
    <Shell title="">
      <div className="space-y-5">
        <h2 className="text-2xl font-semibold">PowerLog</h2>

        <Field label="Company Name">
          <Input placeholder="Energy Queensland" {...register("company")} />
        </Field>

        <Field label="Your Name">
          <Input placeholder="Jane Contractor" {...register("name", { required:false })} />
        </Field>

        <Field label="Pin" error={errors.password && "Required"}>
          <Input type="password" placeholder="••••" {...register("password", { required:true })} />
          <div className="text-right mt-1">
            <Link to="/forgot-pin" className="pl-link text-sm">Forgot Pin?</Link>
          </div>
        </Field>

        <div className="grid gap-3">
          <PrimaryBtn onClick={handleSubmit(onSubmit)}>LOGIN</PrimaryBtn>
          <Link to="/signup" className="pl-btn-secondary text-center rounded-lg">SIGN UP</Link>
        </div>
      </div>
    </Shell>
  );
}
