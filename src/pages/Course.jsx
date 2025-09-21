import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Course = () => {
  // Courses ka data store karne ke liye state
  const [courses, setCourses] = useState([]);

  // Form ke input values ke liye state
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [duration, setDuration] = useState("");

  // Naya course add karne ka function
  const handleAddCourse = () => {
    // Agar koi input empty hai to alert dikhao
    if (!courseName || !courseCode || !duration) {
      alert("Please fill all fields!");
      return;
    }
    // Naya course object banaya
    const newCourse = {
      id: Date.now(), // unique id ke liye timestamp
      name: courseName,
      code: courseCode,
      duration: duration,
    };
    // Purane courses ke sath naya course add kar diya
    setCourses([...courses, newCourse]);

    // Form inputs reset kar diye
    setCourseName("");
    setCourseCode("");
    setDuration("");
  };

  // Delete course function
  const handleDelete = (id) => {
    // Filter use karke jis id ka course delete karna hai usko hata diya
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Course Management</h1>

      {/* Form to add new course */}
      <div style={{ margin: "20px auto", width: "400px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          style={{ margin: "5px", padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Course Code"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          style={{ margin: "5px", padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Duration (e.g. 3 Years)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          style={{ margin: "5px", padding: "8px" }}
        />
        <button onClick={handleAddCourse} style={{ padding: "8px 15px" }}>
          Add Course
        </button>
      </div>

      {/* Table to show courses */}
      <table border="1" style={{ margin: "20px auto", width: "80%" }}>
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th>ID</th>
            <th>Course Name</th>
            <th>Course Code</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Har course ek row me show hoga */}
          {courses.map((c, index) => (
            <tr key={c.id}>
              <td>{index + 1}</td>
              <td>{c.name}</td>
              <td>{c.code}</td>
              <td>{c.duration}</td>
              <td>
                <button
                  onClick={() => handleDelete(c.id)}
                  style={{ color: "red" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {/* Agar koi course add nahi hua hai to ye message show hoga */}
          {courses.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No courses added yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Course;
