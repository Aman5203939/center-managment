import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";

const About = () => {
  return (
    <>
      {/* Navbar sabhi pages ke liye common hoga */}
      <Navbar />

      {/* About page ka main container */}
      <div className="about-container">
        {/* Page Heading */}
        <h1 className="about-heading">About Us</h1>

        {/* Intro Paragraph */}
        <p className="about-text">
          Welcome to the <b>Exam Centre Management System</b>. 
          This is a web-based application designed to simplify the process of managing exam centres, courses, and student allocations. 
          Our goal is to reduce manual errors and speed up the entire management workflow.
        </p>

        {/* Features Section */}
        <h2 className="about-subheading">Key Features</h2>
        <ul className="about-list">
          <li>Easy management of <b>courses</b> and <b>sections</b>.</li>
          <li>Maintaining exam hall capacity and seating arrangements.</li>
          <li>Facility to assign students to specific courses and sections.</li>
          <li>Ability to generate section-wise seating plans quickly.</li>
        </ul>

        {/* Mission Section */}
        <h2 className="about-subheading">Our Mission</h2>
        <p className="about-text">
          Our mission is to make exam centre management hassle-free and transparent. 
          With this system, exam authorities can save time, work more efficiently, 
          and ensure smooth exam operations with minimal effort.
        </p>

        {/* Developer Info */}
        <h2 className="about-subheading">Developed By</h2>
        <p className="about-text">
          Project: <b>Exam Centre Management</b> <br />
          Developed by: <b>BCA Student</b>
        </p>

        {/* Govt-like Disclaimer Section */}
        <div className="disclaimer-box">
          <p className="disclaimer-text">
            <b>Disclaimer:</b> This project is developed for academic purposes only. 
            It is not an official government portal. 
            For any official examination-related information, please refer to 
            the respective education board/university notifications.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
