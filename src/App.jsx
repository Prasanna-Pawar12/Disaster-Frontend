import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import DisasterForm from "./components/DisasterForm";
import OfferHelpForm from "./components/offerHelpForm";
import DisasterList from "./components/DisasterList";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h1>🌍 Disaster Relief App</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/request-help">Request Help</Link>
          <Link to="/offer-help">Offer Help</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request-help" element={<DisasterForm />} />
        <Route path="/offer-help" element={<OfferHelpForm />} />
        <Route path="/dashboard" element={<DisasterList />} />
      </Routes>
    </Router>
  );
}

export default App;
