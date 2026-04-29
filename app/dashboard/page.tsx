"use client";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../components/Navbar";
export default function Dashboard() {
  const [issues, setIssues] = useState<any[]>([]);
  const [volunteers, setVolunteers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const issueSnap = await getDocs(collection(db, "issues"));
      const volSnap = await getDocs(collection(db, "volunteers"));

      setIssues(issueSnap.docs.map(doc => doc.data()));
      setVolunteers(volSnap.docs.map(doc => doc.data()));
    };

    fetchData();
  }, []);

  const matchVolunteer = (issue: any) => {
    return volunteers.find(v =>
      issue.aiResult?.toLowerCase().includes(v.skill.toLowerCase()) &&
      issue.location.toLowerCase() === v.location.toLowerCase()
    );
  };

  return (
    <>
    <Navbar />

    <div style={{ padding: 20 }}>
      <h1>📊 Dashboard</h1>

      {issues.map((issue, i) => {
        const vol = matchVolunteer(issue);

        return (
          <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            📊 Community Dashboard
          </h1>
        
          <div className="grid md:grid-cols-2 gap-6">
            {issues.map((issue, i) => {
              const vol = matchVolunteer(issue);
        
              return (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition">
        
                  <h2 className="text-xl font-semibold text-gray-800">
                    {issue.title}
                  </h2>
        
                  <p className="text-gray-600 mt-2">
                    {issue.description}
                  </p>
        
                  <div className="flex justify-between items-center mt-4 text-sm">
                    <span className="text-gray-500">📍 {issue.location}</span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-md text-xs">
                      {issue.aiResult}
                    </span>
                  </div>
        
                  <div className="mt-4">
                    {vol ? (
                      <p className="text-green-600 font-medium">
                        ✅ Assigned: {vol.name}
                      </p>
                    ) : (
                      <p className="text-gray-400">
                        ❌ No volunteer yet
                      </p>
                    )}
                  </div>
        
                </div>
              );
            })}
          </div>
        </div>
        );
      })}
    </div>
    </>
  );
}