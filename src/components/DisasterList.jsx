import { useEffect, useState } from "react";
import axios from "axios";
import "./DisasterList.css";

function DisasterList() {
  const [helpRequests, setHelpRequests] = useState([]);
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/help").then(res => setHelpRequests(res.data));
    axios.get("http://localhost:5000/api/users").then(res => setVolunteers(res.data));
  }, []);

  return (
    <div className="list-container">
      <h2>🆘 Active Help Requests</h2>
      {helpRequests.length === 0 ? (
        <div className="card empty">No active requests. You can submit a request anytime!</div>
      ) : (
        helpRequests.map((req, i) => (
          <div className="card" key={i}>
            <b>{req.name}</b> needs <b>{req.need}</b> at <b>{req.location}</b>
          </div>
        ))
      )}

      <h2>🤝 Volunteers</h2>
      {volunteers.length === 0 ? (
        <div className="card empty">No volunteers registered yet. Register to help!</div>
      ) : (
        volunteers.map((vol, i) => (
          <div className="card volunteer" key={i}>
            <b>{vol.name}</b> ({vol.skill}) – {vol.contact}
          </div>
        ))
      )}
    </div>
  );
}

export default DisasterList;
