import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Student = () => {
  // Student specific data
  const notices = [
    { title: "Exam schedule released", type: "Important" },
    { title: "New course 'AI Basics' added", type: "Info" },
  ];

  const upcomingExamsList = [
    { course: "Mathematics", date: new Date("2025-08-22T09:00:00") },
    { course: "Computer Science", date: new Date("2025-08-22T14:30:00") },
    { course: "Physics", date: new Date("2025-08-25T11:00:00") },
  ];

  const [examCountdowns, setExamCountdowns] = useState([]);

  // Countdown calculation
  const calcCountdown = (date) => {
    const diff = date - new Date();
    if (diff <= 0) return "Started";
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    return `${d}d ${h}h ${m}m ${s}s`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setExamCountdowns(
        upcomingExamsList.map((exam) => ({
          ...exam,
          remaining: calcCountdown(exam.date),
        }))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const today = new Date();
  const todayExams = examCountdowns.filter(
    (e) => e.date.toDateString() === today.toDateString()
  );

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="welcome">
          <h1>Student Dashboard</h1>
          <p>View your upcoming exams and notices</p>
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

        {/* Upcoming Exams */}
        <div className="upcoming-exams">
          <h3>Upcoming Exams (Live Countdown)</h3>
          <ul>
            {examCountdowns.map((e, i) => (
              <li key={i}>
                {e.course} - {e.remaining}
              </li>
            ))}
          </ul>
        </div>

        {/* Today's Exams */}
        <div className="today-exams">
          <h3>Today's Exams</h3>
          {todayExams.length ? (
            <ul>
              {todayExams.map((e, i) => (
                <li key={i}>
                  {e.course} - {e.remaining}
                </li>
              ))}
            </ul>
          ) : (
            <p>No exams today</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Student;
