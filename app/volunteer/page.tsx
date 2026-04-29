"use client";
import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Volunteer() {
  const [form, setForm] = useState({
    name: "",
    skill: "",
    location: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await addDoc(collection(db, "volunteers"), form);
    alert("✅ Volunteer Registered!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Volunteer Registration</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        /><br /><br />

        <input
          placeholder="Skill (Food/Medical/Education)"
          onChange={(e) => setForm({ ...form, skill: e.target.value })}
        /><br /><br />

        <input
          placeholder="Location"
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        /><br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}