import React from "react";
import { useNavigate } from "react-router-dom";
import Shell from "../components/Shell.jsx";
import { Field, Input, PrimaryBtn } from "../components/UI.jsx";
import { useForm } from "react-hook-form";
import { createJobPresenter } from "../presenters/JobPresenter.js";

const jobs = createJobPresenter();

export default function AddJobView(){
    const nav = useNavigate();
    const { register, handleSubmit, formState:{errors}, watch } = useForm({ defaultValues:{ title:"", customer:"", address:"", serviceType:"", startDate:"", startTime:"", endDate:"", description:"" } });


    const onSubmit = (data) => {
        const payload = {
            title: data.title,
            customer: data.customer,
            address: data.address,
            serviceType: data.serviceType || null,
            description: data.description || "",
            status: "planned",
            startAt: data.startDate && data.startTime ? new Date(`${data.startDate}T${data.startTime}`) : null,
            endAt: data.endDate ? new Date(`${data.endDate}T23:59:59`) : null,
            createdAt: new Date().toISOString(),
        };
        jobs.add(payload);
        alert("Job created");
        nav("/manager");
    };


    return (
        <Shell title="Add Job" backTo={-1}>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Field label="Job Title"><Input placeholder="e.g. Transformer inspection" {...register("title", { required: true })} /></Field>
            {errors.title && <p className="text-red-600 text-sm -mt-3">Title is required</p>}
            <Field label="Customer / Company"><Input placeholder="e.g. Energy Queensland" {...register("customer", { required: true })} /></Field>
            <Field label="Job Address"><Input placeholder="Street, Suburb, State" {...register("address", { required: true })} /></Field>
            <Field label="Service Type">
                <select className="input" {...register("serviceType")}> <option value="">Select…</option><option>Maintenance</option><option>Inspection</option><option>Installation</option><option>Repair</option><option>Emergency</option></select>
            </Field>
            <div className="grid grid-cols-2 gap-3">
            <Field label="Start Date"><Input type="date" {...register("startDate", { required: true })} /></Field>
            <Field label="Start Time"><Input type="time" {...register("startTime", { required: true })} /></Field>
            </div>
            {(errors.startDate || errors.startTime) && <p className="text-red-600 text-sm -mt-3">Start date & time are required</p>}
            <Field label="End Date (optional)"><Input type="date" {...register("endDate")} /></Field>
            <Field label="Scope / Notes"><textarea rows={4} placeholder="Briefly describe the job scope…" className="input" {...register("description")} /></Field>
            {watch("title") && (
                <div className="rounded-2xl border p-3 text-sm text-slate-600">
                    <div className="font-medium mb-1">Preview</div>
                        <div>{watch("title")}</div>
                        {watch("startDate") && watch("startTime") && <div>Starts: {watch("startDate")} {watch("startTime")}</div>}
                </div>
            )}
            <PrimaryBtn type="submit">Create</PrimaryBtn>
            </form>
        </Shell>
    );
}