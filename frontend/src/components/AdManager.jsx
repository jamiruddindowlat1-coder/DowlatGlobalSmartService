import React, { createContext, useContext, useState, useEffect } from "react";

// --- Context & Provider ---
const AdContext = createContext();

export const AdProvider = ({ children }) => {
  const [ads, setAds] = useState(() => {
    const savedAds = localStorage.getItem("dgss_ads");
    return savedAds ? JSON.parse(savedAds) : [];
  });
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    localStorage.setItem("dgss_ads", JSON.stringify(ads));
  }, [ads]);

  const addAd = (ad) => setAds(prev => [...prev, { ...ad, id: Date.now() }]);
  const removeAd = (id) => setAds(prev => prev.filter(ad => ad.id !== id));

  return (
    <AdContext.Provider value={{ ads, addAd, removeAd, showAdmin, setShowAdmin }}>
      {children}
    </AdContext.Provider>
  );
};

export const useAds = () => useContext(AdContext);

// --- Admin Modal Component ---
export const AdminModal = ({ onClose }) => {
  const { ads, addAd, removeAd } = useAds();
  const [form, setForm] = useState({ title: "", link: "", body: "", imageUrl: "https://via.placeholder.com/300x150?text=Your+Ad+Here" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.link) return alert("Title and Link are required!");
    addAd(form);
    setForm({ title: "", link: "", body: "", imageUrl: "https://via.placeholder.com/300x150?text=Your+Ad+Here" });
  };

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.8)", zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: "#1a3a5c", padding: "30px", maxWidth: "600px", width: '90%', borderRadius: "12px", border: '1px solid #27718f', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', color: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0, color: '#00d2ff' }}>🚀 Ad Admin Panel</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' }}>×</button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input placeholder="Ad Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} style={inputStyle} />
          <input placeholder="Website Link (https://...)" value={form.link} onChange={e => setForm({...form, link: e.target.value})} style={inputStyle} />
          <input placeholder="Image URL" value={form.imageUrl} onChange={e => setForm({...form, imageUrl: e.target.value})} style={inputStyle} />
          <textarea placeholder="Ad Body/Description" value={form.body} onChange={e => setForm({...form, body: e.target.value})} style={{...inputStyle, height: '80px'}} />
          <button type="submit" style={{ padding: '12px', background: '#27718f', border: 'none', color: '#fff', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Add Advertisement</button>
        </form>

        <div style={{ marginTop: '30px', maxHeight: '300px', overflowY: 'auto' }}>
          <h3 style={{ borderBottom: '1px solid #27718f55', paddingBottom: '10px' }}>Current Ads ({ads.length})</h3>
          {ads.map(ad => (
            <div key={ad.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#132a44', padding: '10px', borderRadius: '6px', marginBottom: '8px' }}>
              <div>
                <div style={{ fontWeight: 'bold' }}>{ad.title}</div>
                <div style={{ fontSize: '11px', color: '#888' }}>{ad.link}</div>
              </div>
              <button onClick={() => removeAd(ad.id)} style={{ padding: '5px 10px', background: '#ff4d4d', border: 'none', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: '12px',
  background: '#132a44',
  border: '1px solid #27718f55',
  borderRadius: '6px',
  color: '#fff',
  outline: 'none'
};

// --- Ad Slot Component ---
export const AdSlot = ({ category }) => {
  const { ads } = useAds();
  
  // For now, we show a random ad or the latest one
  const displayAd = ads.length > 0 ? ads[ads.length - 1] : null;

  if (!displayAd) return null;

  return (
    <div style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
      <div style={{ fontSize: '10px', color: '#888', marginBottom: '8px', letterSpacing: '1px', textTransform: 'uppercase' }}>Sponsored</div>
      <a href={displayAd.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ display: 'flex', gap: '15px', background: '#fdfdfd', border: '1px solid #efefef', borderRadius: '8px', padding: '12px', transition: 'transform 0.2s', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' }}
             onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
             onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
          <img src={displayAd.imageUrl} alt={displayAd.title} style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
          <div>
            <div style={{ fontWeight: 'bold', color: '#1a3a5c', fontSize: '14px', marginBottom: '4px' }}>{displayAd.title}</div>
            <div style={{ fontSize: '12px', color: '#555', lineHeight: '1.4' }}>{displayAd.body}</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AdSlot;