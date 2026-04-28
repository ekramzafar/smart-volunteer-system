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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
  <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
    
    <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
      Smart Volunteer System
    </h1>

    <p className="text-center text-gray-500 mb-6">
      Report community issues and get help faster 🚀
    </p>

    <form onSubmit={handleSubmit} className="space-y-4">
      
      <input
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Issue Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <textarea
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Describe the problem..."
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <input
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Location"
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />

      <button
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200 font-semibold"
      >
        Submit Issue
      </button>
    </form>
  </div>
</div>
  );
}