import { useState } from "react";
import axios from "axios";
import "./DisasterForm.css";

function OfferHelpForm() {
  const [formData, setFormData] = useState({ name: "", skill: "", contact: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/users", formData);
    alert("✅ Volunteer registered!");
    setFormData({ name: "", skill: "", contact: "" });
  };

  return (
    <div className="form-container">
      <div className="info-box">
        <p>Offer help and register yourself as a volunteer to assist during disasters.</p>
      </div>
      <h2>Offer Help</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input name="skill" placeholder="Skill (Doctor, Driver, etc.)" value={formData.skill} onChange={handleChange} required />
        <input name="contact" placeholder="Contact Info" value={formData.contact} onChange={handleChange} required />
        <button type="submit">Register as Volunteer</button>
      </form>
    </div>
  );
}

export default OfferHelpForm;
