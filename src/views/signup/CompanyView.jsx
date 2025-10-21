import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Shell from "../../components/Shell.jsx";
import { Field, Input, PrimaryBtn, SecondaryBtn, FormError } from "../../components/UI.jsx";

export default function CompanyView() {
  const nav = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm({ defaultValues: { companyName: "", abn: "", siteLocation: "", workEmail: "" } });

  const personal = React.useMemo(() => {
    try { return JSON.parse(sessionStorage.getItem("signup.personal") || "{}"); }
    catch { return {}; }
  }, []);

  const onSubmit = (values) => {
    const all = { personal, company: values };
    sessionStorage.setItem("signup.all", JSON.stringify(all));
    nav("/signup/done");
  };

  return (
    <Shell title="Sign up — Company" backTo="/signup">
      <form className="max-w-md space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Field label="Company name" error={errors.companyName && "Company name is required"}>
          <Input type="text" placeholder="Energy Queensland" {...register("companyName", { required: true })} />
        </Field>

        <Field label="ABN (optional)">
          <Input type="text" placeholder="12 345 678 901" {...register("abn")} />
        </Field>

        <Field label="Work email (optional)">
          <Input type="email" placeholder="you@company.com" {...register("workEmail")} />
        </Field>

        <Field label="Primary site / location (optional)">
          <Input type="text" placeholder="Brisbane CBD" {...register("siteLocation")} />
        </Field>

        <FormError>{errors.root?.message}</FormError>

        <div className="flex gap-3 pt-2">
          <SecondaryBtn type="button" onClick={() => nav(-1)}>Back</SecondaryBtn>
          <PrimaryBtn type="submit" disabled={isSubmitting}>Complete signup</PrimaryBtn>
        </div>

        <p className="text-sm text-gray-600">
          Already registered? <Link to="/" className="underline">Log in</Link>
        </p>
      </form>
    </Shell>
  );
}
