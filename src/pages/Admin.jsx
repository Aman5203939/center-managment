import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Admin = () => {
  // Admin specific data
  const stats = [
    { title: "Total Courses", value: 12 },
    { title: "Total Sections", value: 25 },
    { title: "Registered Students", value: 350 },
  ];

  const recentActivities = [
    "Added new course 'Data Science Basics'",
    "Section 2 timing updated",
    "Approved student registrations"
  ];

  const notices = [
    { title: "Exam schedule released", type: "Important" },
    { title: "New course 'AI Basics' added", type: "Info" },
    { title: "Section 3 rescheduled", type: "Update" },
  ];

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="welcome">
          <h1>Admin Dashboard</h1>
          <p>Manage your exam center efficiently</p>
        </div>

        {/* Stats */}
        <div className="stats-container">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <h3>{s.title}</h3>
              <p>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Notices */}
        <div className="notices">
          <h3>Notices</h3>
          <ul>
            {notices.map((n, i) => (
              <li key={i}>
                <strong>[{n.type}]</strong> {n.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Activities */}
        <div className="recent-activities">
          <h3>Recent Activities</h3>
          <ul>
            {recentActivities.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Admin;
