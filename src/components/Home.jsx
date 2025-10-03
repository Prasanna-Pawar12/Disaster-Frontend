import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h2>Welcome to Disaster Relief System</h2>
      <p>📢 Connect people in need with volunteers offering help.</p>
      <p>Use the menu above to Request Help, Offer Help, or View Dashboard.</p>

      <div className="home-info">
        <h3>Disaster Awareness</h3>
        <p>
          Natural disasters affect millions each year. This platform helps victims quickly connect with volunteers.
        </p>
        <p>
          Even if no requests are active now, you can prepare to help or submit a request anytime!
        </p>
      </div>
    </div>
  );
}

export default Home;
