import React from "react";
import { useNavigate } from "react-router-dom";
function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="error-title">
      <h1 id="error-title">Page Not Found</h1>
      <button
        id="error-btn"
        onClick={() => {
          navigate("/postClub");
        }}
      >
        Back to main page
      </button>
    </div>
  );
}

export default PageNotFound;
