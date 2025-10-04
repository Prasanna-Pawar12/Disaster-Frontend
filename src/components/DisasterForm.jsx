// src/components/DisasterForm.jsx
import { useState } from "react";
import axios from "axios";
import "./DisasterForm.css";

// 🔹 Replace this with your actual Render backend URL
const BASE_URL = "https://your-backend-name.onrender.com";

function DisasterForm() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    need: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/api/help`, formData);
      alert("✅ Help request submitted!");
      setFormData({ name: "", location: "", need: "" });
    } catch (error) {
      console.error("Error submitting help request:", error);
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <div className="info-box">
        <p>Fill out this form to request help during disasters. Every request helps!</p>
      </div>
      <h2>Request Help</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          name="need"
          placeholder="What help do you need?"
          value={formData.need}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default DisasterForm;
