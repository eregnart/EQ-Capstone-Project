import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Shell from "../../components/Shell.jsx";
import { Field, Input, PrimaryBtn, SecondaryBtn, FormError } from "../../components/UI.jsx";

export default function PersonalView() {
  const nav = useNavigate();
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } =
    useForm({ defaultValues: { name: "", email: "", phone: "", company: "", pin: "", confirmPin: "" } });

  const pin = watch("pin");

  const onSubmit = (values) => {
    sessionStorage.setItem("signup.personal", JSON.stringify(values));

    // also seed localStorage for your current Login prototype
    const authRecord = {
      name: values.name,
      company: values.company,
      password: values.pin,
      email: values.email,
      phone: values.phone,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem(values.email, JSON.stringify(authRecord));

    nav("/signup/company");
  };

  return (
    <Shell title="Sign up — Personal" backTo="/signup">
      <form className="max-w-md space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Field label="Full name" error={errors.name && "Please enter your name"}>
          <Input type="text" placeholder="Jane Doe" {...register("name", { required: true, minLength: 2 })} />
        </Field>

        <Field label="Email" error={errors.email && "Enter a valid email"}>
          <Input type="email" placeholder="jane@company.com"
                 {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
        </Field>

        <Field label="Phone (optional)">
          <Input type="tel" placeholder="0400 000 000" {...register("phone")} />
        </Field>

        <Field label="Company" error={errors.company && "Company is required"}>
          <Input type="text" placeholder="Energy Queensland" {...register("company", { required: true })} />
        </Field>

        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="PIN" error={errors.pin && "Min 4 digits"}>
            <Input type="password" inputMode="numeric" placeholder="••••"
                   {...register("pin", { required: true, minLength: 4 })} />
          </Field>

          <Field label="Confirm PIN"
                 error={watch("confirmPin") && watch("confirmPin") !== pin ? "PINs must match" : ""}>
            <Input type="password" inputMode="numeric" placeholder="••••"
                   {...register("confirmPin", { required: true, validate: v => v === pin })} />
          </Field>
        </div>

        <FormError>{errors.root?.message}</FormError>

        <div className="flex gap-3 pt-2">
          <SecondaryBtn type="button" onClick={() => nav(-1)}>Back</SecondaryBtn>
          <PrimaryBtn type="submit" disabled={isSubmitting}>Continue to Company</PrimaryBtn>
        </div>

        <p className="text-sm text-gray-600">
          Already have an account? <Link to="/" className="underline">Log in</Link>
        </p>
      </form>
    </Shell>
  );
}
