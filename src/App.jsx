// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginView from "./views/LoginView.jsx";
import ForgotPin from "./views/ForgotPinView.jsx";
import CheckEmail from "./views/CheckEmailView.jsx";
import SetNewPin from "./views/SetNewPinView.jsx";
import PinReset from "./views/PinResetView.jsx";

import SignupView from "./views/signup/SignupView.jsx";
import SignupPersonal from "./views/signup/PersonalView.jsx";
import SignupCompany from "./views/signup/CompanyView.jsx";
import SignupDone from "./views/signup/Done.jsx";

import DashboardView from "./views/DashboardView.jsx";
import AddJobView from "./views/AddJobView.jsx";        
import EditJobView from "./views/EditJobsView.jsx";     
import SettingsView from "./views/SettingsView.jsx";
import ClockOutView from "./views/ClockOutView.jsx";
import ManagerDashboardView from "./views/manager/ManagerDashboardView.jsx";
  
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginView />} />
      <Route path="/forgot-pin" element={<ForgotPin />} />
      <Route path="/check-email" element={<CheckEmail />} />
      <Route path="/set-new-pin" element={<SetNewPin />} />
      <Route path="/pin-reset" element={<PinReset />} />

      <Route path="/signup" element={<SignupView />} />
      <Route path="/signup/personal" element={<SignupPersonal />} />
      <Route path="/signup/company"  element={<SignupCompany />} />
      <Route path="/signup/done"     element={<SignupDone />} />

      <Route path="/manager" element={<ManagerDashboardView />} />

      <Route path="/dashboard" element={<DashboardView />} />
      <Route path="/job/add" element={<AddJobView />} />
      <Route path="/job/edit" element={<EditJobView />} />
      <Route path="/settings" element={<SettingsView />} />
      <Route path="/clock-out" element={<ClockOutView />} />
    </Routes>
  );
}