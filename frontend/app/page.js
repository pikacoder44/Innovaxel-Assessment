"use client";

import { useState } from "react";
import rawEmployees from "@/assets/raw_employee_data";
export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  const simulateAccess = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/simaccess");
      const data = await res.json();
      setEmployees(data);
    } catch (err) {
      console.error("Error fetching access data:", err);
      alert("Failed to fetch access data. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-zinc-900 p-6 mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Access Simulator</h1>
      <div className="overflow-x-auto">
        <table className="min-w-[70%] border border-gray-300 divide-y divide-gray-200">
          <thead className="bg-zinc-800">
            <tr>
              <th className="px-4 py-2 border">Employee ID</th>
              <th className="px-4 py-2 border">Room</th>
              <th className="px-4 py-2 border">Access Level</th>
              <th className="px-4 py-2 border">Request Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-center">
            {rawEmployees.map((emp, idx) => (
              <tr
                key={idx}
                className="hover:bg-zinc-300 hover:text-black hover:border-black transition-all ease-in-out cursor-pointer"
              >
                <td className="px-4 py-2 border">{emp.id}</td>
                <td className="px-4 py-2 border">{emp.room}</td>
                <td className="px-4 py-2 border">{emp.access_level}</td>
                <td className="px-4 py-2 border">{emp.request_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center m-6">
        <button
          onClick={simulateAccess}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-800 transition cursor-pointer"
          disabled={loading}
        >
          {loading ? "Simulating..." : "Simulate Access"}
        </button>
      </div>
      <div
        className={`overflow-x-auto transition-opacity duration-500 ease-in-out ${
          employees.length > 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        <table className="min-w-full text-center border border-gray-300 divide-y divide-gray-200">
          <thead className="bg-zinc-800">
            <tr>
              <th className="px-4 py-2 border">Employee ID</th>
              <th className="px-4 py-2 border">Room</th>
              <th className="px-4 py-2 border">Access</th>
              <th className="px-4 py-2 border">Reason</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {employees.map((emp, idx) => (
              <tr
                key={idx}
                className="hover:bg-zinc-300 hover:text-black hover:border-black transition-all ease-in-out cursor-pointer"
              >
                <td className="px-4 py-2 border">{emp.employeeId}</td>
                <td className="px-4 py-2 border">{emp.room}</td>
                <td
                  className={`px-4 py-2 border font-semibold ${
                    emp.access === "Granted"
                      ? "text-green-600 border-white"
                      : "text-red-600 border-white"
                  }`}
                >
                  {emp.access}
                </td>
                <td className="px-4 py-2 border">{emp.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
