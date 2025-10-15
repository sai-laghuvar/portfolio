import React from "react";
import JobForm from "./JobForm";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Apply for a Job</h1>
      <JobForm />
    </div>
  );
}

export default App;