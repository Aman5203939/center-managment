import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Section = () => {
  // Sections ka data store karne ke liye state
  const [sections, setSections] = useState([]);

  // Form inputs ke liye state
  const [sectionName, setSectionName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [course, setCourse] = useState("");

  // Naya section add karne ka function
  const handleAddSection = () => {
    // Agar koi input empty hai to alert dikhao
    if (!sectionName || !capacity || !course) {
      alert("Please fill all fields!");
      return;
    }
    // Naya section object banaya
    const newSection = {
      id: Date.now(), // unique id ke liye timestamp
      name: sectionName,
      capacity: capacity,
      course: course,
    };
    // Purane sections ke sath naya section add kar diya
    setSections([...sections, newSection]);

    // Form inputs reset kar diye
    setSectionName("");
    setCapacity("");
    setCourse("");
  };

  // Delete section function
  const handleDelete = (id) => {
    // Filter use karke jis id ka section delete karna hai usko hata diya
    setSections(sections.filter((s) => s.id !== id));
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Section / Hall Management</h1>

      {/* Form to add new section */}
      <div style={{ margin: "20px auto", width: "400px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Section / Hall Name"
          value={sectionName}
          onChange={(e) => setSectionName(e.target.value)}
          style={{ margin: "5px", padding: "8px" }}
        />
        <input
          type="number"
          placeholder="Capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          style={{ margin: "5px", padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Course Assigned"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          style={{ margin: "5px", padding: "8px" }}
        />
        <button onClick={handleAddSection} style={{ padding: "8px 15px" }}>
          Add Section
        </button>
      </div>

      {/* Table to show sections */}
      <table border="1" style={{ margin: "20px auto", width: "80%" }}>
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th>ID</th>
            <th>Section / Hall Name</th>
            <th>Capacity</th>
            <th>Course Assigned</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Har section ek row me show hoga */}
          {sections.map((s, index) => (
            <tr key={s.id}>
              <td>{index + 1}</td>
              <td>{s.name}</td>
              <td>{s.capacity}</td>
              <td>{s.course}</td>
              <td>
                <button
                  onClick={() => handleDelete(s.id)}
                  style={{ color: "red" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {/* Agar koi section add nahi hua hai to ye message show hoga */}
          {sections.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No sections added yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Section;
