import React from "react";
import AdSlot from "../../AdManager";

const ItemPanel = ({ items, title, color, icon, onClose }) => (
  <div style={{ background: "#fff", border: `2px solid ${color}`, borderRadius: "10px", padding: "20px", marginTop: "10px", position: 'relative' }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
      <h3 style={{ color, margin: 0 }}>{icon} {title}</h3>
      <button onClick={onClose} style={{ background: "transparent", border: "none", fontSize: "20px", cursor: "pointer" }}>✕</button>
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {items.map((item, idx) => (
        <a key={idx} href={item.web} target="_blank" rel="noopener noreferrer"
          style={{ padding: "8px 14px", background: "#f8f9fa", borderRadius: "6px", color: "#2e2e8e", textDecoration: "none", fontSize: "13px", fontWeight: "600" }}>
          {item.name}
        </a>
      ))}
    </div>
    <AdSlot category={title} />
  </div>
);

export default ItemPanel;
