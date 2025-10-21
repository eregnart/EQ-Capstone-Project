import React from "react";
import { useNavigate } from "react-router-dom";
import Shell from "../components/Shell.jsx";
import { Field, Input, PrimaryBtn, GhostBtn } from "../components/UI.jsx";
import { useForm } from "react-hook-form";
import { createJobPresenter } from "../presenters/JobPresenter.js";

const jobsApi = createJobPresenter();


export default function EditJobView(){
const nav = useNavigate();
const [jobs, setJobs] = React.useState([]);
const [selectedId, setSelectedId] = React.useState("");
const { register, handleSubmit, reset, watch, formState:{errors} } = useForm({ defaultValues:{ title:"", customer:"", address:"", serviceType:"", status:"planned", startDate:"", startTime:"", endDate:"", description:"" } });


React.useEffect(()=>{ setJobs(jobsApi.list()); },[]);


React.useEffect(()=>{
    if(!selectedId) return; const job = jobs.find(j=>j.id===selectedId); if(!job) return;
    const start = job.startAt? new Date(job.startAt): null; const startDate = start? start.toISOString().slice(0,10):""; const startTime = start? start.toTimeString().slice(0,5):"";
    const end = job.endAt? new Date(job.endAt): null; const endDate = end? end.toISOString().slice(0,10):"";
    reset({ title:job.title||"", customer:job.customer||"", address:job.address||"", serviceType:job.serviceType||"", status:job.status||"planned", startDate, startTime, endDate, description:job.description||"" });
},[selectedId, jobs, reset]);


const onSave = (data) => {
    if(!selectedId){ alert("Please select a job to edit."); return; }
    const patch = {
        title: data.title,
        customer: data.customer,
        address: data.address,
        serviceType: data.serviceType || null,
        description: data.description || "",
        status: data.status,
        startAt: data.startDate && data.startTime ? new Date(`${data.startDate}T${data.startTime}`) : null,
        endAt: data.endDate ? new Date(`${data.endDate}T23:59:59`) : null,
        updatedAt: new Date().toISOString(),
};
    jobsApi.update(selectedId, patch);
    alert("Job updated");
    nav("/manager");
};

    return (
        <Shell title="Edit Job" backTo={-1}>
            <Field label="Select Job">
                <select className="input" value={selectedId} onChange={(e)=>setSelectedId(e.target.value)}>
                    <option value="">Choose a job…</option>
                    {jobs.map(j=> <option key={j.id} value={j.id}>{j.title||"Untitled"}{j.customer?` — ${j.customer}`:""}</option>)}
                </select>
            </Field>

            {selectedId && (
            <form className="space-y-4" onSubmit={handleSubmit(onSave)}>
                <Field label="Job Title"><Input placeholder="e.g. Transformer inspection" {...register("title", { required: true })} /></Field>
                {errors.title && <p className="text-red-600 text-sm -mt-3">Title is required</p>}
                <Field label="Customer / Company"><Input placeholder="e.g. Energy Queensland" {...register("customer", { required: true })} /></Field>
                <Field label="Job Address"><Input placeholder="Street, Suburb, State" {...register("address", { required: true })} /></Field>
                <Field label="Service Type">
                    <select className="input" {...register("serviceType")}>
                        <option value="">Select…</option>
                        <option>Maintenance</option>
                        <option>Inspection</option>
                        <option>Installation</option>
                        <option>Repair</option>
                        <option>Emergency</option>
                    </select>
                </Field>
                <Field label="Status">
                    <select className="input" {...register("status")}>
                        <option value="planned">Planned</option>
                        <option value="in_progress">In progress</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </Field>
                <div className="grid grid-cols-2 gap-3">
                    <Field label="Start Date"><Input type="date" {...register("startDate", { required: true })} /></Field>
                    <Field label="Start Time"><Input type="time" {...register("startTime", { required: true })} /></Field>
                </div>
                {(errors.startDate || errors.startTime) && <p className="text-red-600 text-sm -mt-3">Start date & time are required</p>}
                <Field label="End Date (optional)"><Input type="date" {...register("endDate")} /></Field>
                <Field label="Scope / Notes"><textarea rows={4} placeholder="Update job scope or notes…" className="input" {...register("description")} /></Field>
                <div className="rounded-2xl border p-3 text-sm text-slate-600">
                    <div className="font-medium mb-1">Preview</div>
                    <div>{watch("title")}</div>
                    {watch("startDate") && watch("startTime") && <div>Starts: {watch("startDate")} {watch("startTime")}</div>}
                    {watch("status") && <div>Status: {watch("status")}</div>}
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <GhostBtn type="button" onClick={()=>nav(-1)}>Cancel</GhostBtn>
                    <PrimaryBtn type="submit">Save changes</PrimaryBtn>
                </div>
                </form>
            )}
        </Shell>
    );
}