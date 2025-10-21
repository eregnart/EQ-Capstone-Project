import React from "react";
import { useNavigate } from "react-router-dom";
import Shell from "../../components/Shell.jsx";
import { PrimaryBtn, SecondaryBtn, Card, CardHeader, CardContent, CardFooter } from "../../components/UI.jsx";

export default function ManagerDashboardView() {
  const nav = useNavigate();

  // Example data — replace with real data fetching later
  const [contractors] = React.useState([
    { id: 1, name: "Ethan Regnart", company: "EQ Powerlog", status: "On Site" },
    { id: 2, name: "Molly Brown", company: "EnergyQ", status: "Clocked Out" },
    { id: 3, name: "Hai Nguyen", company: "EQ Powerlog", status: "On Break" },
  ]);

  return (
    <Shell title="Manager Dashboard">
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Summary header */}
        <div className="flex flex-wrap justify-between items-center gap-3">
          <h2 className="text-2xl font-bold text-gray-900">Active Contractors</h2>
          <PrimaryBtn onClick={() => nav("/dashboard")}>Go to Contractor View</PrimaryBtn>
        </div>

        {/* Contractor list */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contractors.map((c) => (
            <Card key={c.id}>
              <CardHeader>
                <h3 className="font-semibold">{c.name}</h3>
                <p className="text-sm text-gray-500">{c.company}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Status:{" "}
                  <span
                    className={`font-medium ${
                      c.status === "On Site"
                        ? "text-green-600"
                        : c.status === "On Break"
                        ? "text-yellow-600"
                        : "text-gray-500"
                    }`}
                  >
                    {c.status}
                  </span>
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <SecondaryBtn onClick={() => alert(`Viewing ${c.name}`)}>
                  View
                </SecondaryBtn>
                <PrimaryBtn onClick={() => alert(`Editing ${c.name}`)}>
                  Edit
                </PrimaryBtn>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Footer buttons */}
        <div className="flex gap-3 justify-end">
          <SecondaryBtn onClick={() => nav("/settings")}>Settings</SecondaryBtn>
          <PrimaryBtn onClick={() => nav("/")}>Log Out</PrimaryBtn>
        </div>
      </div>
    </Shell>
  );
}
