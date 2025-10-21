import React from "react";
import { useNavigate } from "react-router-dom";
import Shell from "../components/Shell.jsx";
import { PrimaryBtn, SecondaryBtn } from "../components/UI.jsx";
import { createAuthPresenter } from "../presenters/AuthPresenter.js";

const auth = createAuthPresenter();

export default function DashboardView(){
  const nav = useNavigate();
  const user = auth.currentUser();

  return (
    <Shell title="Dashboard" showLogout onLogout={()=>{ auth.logout?.(); nav("/"); }}>
      <div className="space-y-5">
        <div className="text-sm text-gray-600">Welcome{user ? `, ${user.name}` : ""}</div>

        <div className="grid grid-cols-2 gap-3">
          <div className="pl-tile">
            <div className="pl-stat">00</div>
            <div className="pl-stat-label">Contractors On-site</div>
          </div>
          <div className="pl-tile">
            <div className="pl-stat">00</div>
            <div className="pl-stat-label">Pending Reports</div>
          </div>
        </div>

        <div className="grid gap-3">
          <PrimaryBtn onClick={() => nav("/manager")}>VIEW ALL REPORTS</PrimaryBtn>
          <SecondaryBtn onClick={() => nav("/settings")}>SETTINGS</SecondaryBtn>
        </div>
      </div>
    </Shell>
  );
}
