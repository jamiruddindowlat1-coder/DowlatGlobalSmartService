import React, { useState } from "react";

const ItemPanel = ({ items, title, color, icon, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      style={{
        background: "#fff",
        border: `2px solid ${isOpen ? color : '#eee'}`,
        borderRadius: "12px",
        padding: "0",
        marginTop: "5px",
        overflow: "hidden",
        boxShadow: isOpen ? `0 12px 30px ${color}44` : "0 4px 10px rgba(0,0,0,0.05)",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        transform: isOpen ? "scale(1.02)" : "scale(1)",
        zIndex: isOpen ? 100 : 1,
        position: 'relative'
      }}
    >
      {/* Header Button */}
      <div 
        style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          padding: "12px 18px",
          background: isOpen ? color : "#f8f9fa",
          color: isOpen ? "#fff" : "#333",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "15px",
          transition: "0.3s"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "18px" }}>{icon}</span>
          <span>{title}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <span style={{ fontSize: "12px", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }}>▼</span>
        </div>
      </div>

      {/* Drop Content */}
      <div style={{ 
        maxHeight: isOpen ? "1200px" : "0", 
        opacity: isOpen ? 1 : 0,
        overflow: "hidden",
        transition: "all 0.5s ease-in-out",
        background: "#fff",
        padding: isOpen ? "15px" : "0 15px"
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: "8px" }}>
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.web}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "8px 12px",
                background: "#f1f1f1",
                border: `1px solid #ddd`,
                borderRadius: "6px",
                color: "#2e2e8e",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = color; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = color; }}
              onMouseOut={(e) => { e.currentTarget.style.background = "#f1f1f1"; e.currentTarget.style.color = "#2e2e8e"; e.currentTarget.style.borderColor = "#ddd"; }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemPanel;