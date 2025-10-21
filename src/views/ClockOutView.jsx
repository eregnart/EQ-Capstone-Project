import React from "react";
import { useNavigate } from "react-router-dom";
import Shell from "../components/Shell.jsx";
import { Field, Input, Textarea, PrimaryBtn, SecondaryBtn } from "../components/UI.jsx";

export default function ClockOutView() {
  const nav = useNavigate();
  const [notes, setNotes] = React.useState("");
  const [images, setImages] = React.useState([]);

  const onConfirm = () => {
    // Simulate saving a clock-out record
    const record = {
      at: new Date().toISOString(),
      notes,
      imagesCount: images.length,
    };
    console.log("Clocked out:", record);
    sessionStorage.setItem("lastClockOut", JSON.stringify(record));
    nav("/dashboard");
  };

  return (
    <Shell title="Clock Out" backTo="/dashboard">
      <div className="space-y-4 max-w-lg">
        <Field label="Other Information">
          <Textarea
            placeholder="Add any site notes…"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Field>

        <Field label="After Site Images">
          <Input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setImages(Array.from(e.target.files || []))}
          />
          <p className="text-xs text-gray-500 mt-1">
            {images.length ? `${images.length} file(s) selected` : "Optional"}
          </p>
        </Field>

        <div className="flex gap-3">
          <PrimaryBtn onClick={onConfirm}>Confirm</PrimaryBtn>
          <SecondaryBtn onClick={() => nav("/dashboard")}>Cancel</SecondaryBtn>
        </div>
      </div>
    </Shell>
  );
}
