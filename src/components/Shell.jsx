import React from "react";
import { useNavigate } from "react-router-dom";
import { GhostBtn } from "./UI.jsx";
import logo from "../assets/logo.svg?url"; // optional; falls back to text

export default function Shell({ title="", backTo, showLogout=false, onLogout, children }) {
  const nav = useNavigate();
  return (
    <div className="pl-page">
      <div className="pl-container">
        {/* Header */}
        <div className="pl-hero">
          <div className="flex items-center gap-2">
            {typeof backTo !== "undefined" && (
              <GhostBtn onClick={() => (typeof backTo === "number" ? nav(backTo) : nav(backTo))}>← Back</GhostBtn>
            )}
          </div>
          <div className="flex items-center gap-2">
            {logo
              ? <img src={logo} alt="logo" className="h-6 w-auto" onError={(e)=>{e.currentTarget.replaceWith(document.createTextNode("PowerLog"))}}/>
              : <span className="font-semibold">PowerLog</span>}
          </div>
          <div>
            {showLogout && <GhostBtn onClick={onLogout ?? (()=>nav("/"))}>Logout</GhostBtn>}
          </div>
        </div>

        {/* Content card */}
        <div className="pl-card">
          {title && <h1 className="pl-title mb-3">{title}</h1>}
          {children}
        </div>
      </div>
    </div>
  );
}
