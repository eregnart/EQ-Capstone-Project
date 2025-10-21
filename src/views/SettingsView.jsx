import React from "react";

export default function SettingsView() {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h2 className="text-2xl font-bold">Settings</h2>

      <ul className="text-gray-700 space-y-2">
        <li>Light / Dark mode</li>
        <li>Notifications</li>
        <li>Text Size</li>
        <li>Brightness</li>
      </ul>

      <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded">
        Back to Home
      </button>
    </div>
  );
}