import React, { useState, useEffect } from "react";
import DisasterForm from "./DisasterForm";
import DisasterList from "./DisasterList";
import axios from "axios";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  const [requests, setRequests] = useState([]);
  const token = localStorage.getItem("token");

  // Fetch all disaster requests
  const fetchRequests = async () => {
    try {
      const res = await axios.get("http://localhost:5000/disasters", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRequests(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching requests. Make sure you are logged in.");
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // Add new request to state
  const addRequest = (newReq) => {
    setRequests([newReq, ...requests]);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>🚨 Disaster Relief App</h1>
        <nav>
          <button onClick={handleLogout}>Logout</button>
          <a href="https://www.instagram.com/_prasanna_pawar_3366" target="_blank"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/prasanna-pawar-31580428a" target="_blank"><FaLinkedin /></a>
        </nav>
      </header>

      <main>
        <section className="info-section">
          <h2>Emergency Tips & Notes</h2>
          <ul>
            <li>Always have a disaster kit ready.</li>
            <li>Follow evacuation routes in case of floods or fire.</li>
            <li>Stay informed with local emergency alerts.</li>
            <li>Keep important documents in a safe place.</li>
          </ul>
        </section>

        <section className="form-section">
          <DisasterForm addRequest={addRequest} />
        </section>

        <section className="list-section">
          <DisasterList requests={requests} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
