"use client";
import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import Navbar from "../components/Navbar";

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
    <>
      <Navbar />
  
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
  
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
            👥 Volunteer Registration
          </h1>
  
          <form onSubmit={handleSubmit} className="space-y-4">
  
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
  
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Skill (Food / Medical / Education)"
              onChange={(e) => setForm({ ...form, skill: e.target.value })}
            />
  
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Location"
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />
  
            <button
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200 font-semibold"
            >
              Register
            </button>
  
          </form>
        </div>
      </div>
    </>
  );
  
}