import React from "react";
import JobIcon  from '../assets/joblk.png'

const Profile = () => {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <img
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
        src="https://via.placeholder.com/400"
        alt="Profile Background"
      />
      <div style={{ padding: "24px", textAlign: "center" }}>
        <img
          style={{
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            marginTop: "-48px",
            border: "4px solid white",
          }}
          src={JobIcon}
          alt="Profile Avatar"
        />
        <h2 style={{ fontSize: "24px", fontWeight: "600", marginTop: "16px" }}>
          John Doe
        </h2>
        <p style={{ color: "#6B7280" }}>Software Developer</p>
        <p style={{ color: "#4B5563", marginTop: "16px" }}>
          Passionate developer with experience in React and modern web
          technologies. Loves to create beautiful UIs and interactive
          experiences.
        </p>
        <div style={{ marginTop: "24px", display: "flex", justifyContent: "center", gap: "16px" }}>
          <a
            href="#"
            style={{
              color: "#3B82F6",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#2563EB")}
            onMouseLeave={(e) => (e.target.style.color = "#3B82F6")}
          >
            LinkedIn
          </a>
          <a
            href="#"
            style={{
              color: "#3B82F6",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#2563EB")}
            onMouseLeave={(e) => (e.target.style.color = "#3B82F6")}
          >
            GitHub
          </a>
          <a
            href="#"
            style={{
              color: "#3B82F6",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#2563EB")}
            onMouseLeave={(e) => (e.target.style.color = "#3B82F6")}
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
