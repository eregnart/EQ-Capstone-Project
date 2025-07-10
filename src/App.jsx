import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import SignupView from "./views/SignupView";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginView />} />
      <Route path="/signup" element={<SignupView />} />
    </Routes>
  );
}
