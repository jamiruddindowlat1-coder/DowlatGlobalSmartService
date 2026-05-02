import React from "react";
import dgssLogo from '../assets/dgss_logo.png';

const Header = () => {
  return (
    <div style={s.container}>
      <div style={s.logoWrapper}>
        <div style={s.logoCircle}>
          <img
            src={dgssLogo}
            alt="DGSS Logo"
            style={s.logoImg}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
      </div>

      <div style={s.textWrapper}>
        <div style={s.mainName}>DOWLAT GLOBAL SMART SERVICE</div>
        <div style={s.tagline}>ডিজিটাল বাংলাদেশের আধুনিক স্মার্ট সমাধান</div>
      </div>
    </div>
  );
};

const s = {
  container: {
    background: "linear-gradient(135deg, #000000 0%, #0d1a0d 100%)",
    textAlign: "center",
    padding: "25px 20px 20px", 
    borderBottom: "2px solid rgba(255, 17, 0, 0.94)",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px'
  },
  logoWrapper: { display: 'inline-block', position: 'relative' },
  logoCircle: {
    display: "inline-block",
    borderRadius: "50%",
    padding: "5px",
    background: "#fff",
    boxShadow: "0 0 20px rgba(255, 206, 0, 0.4)",
  },
  logoImg: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    objectFit: "contain",
    display: "block",
  },
  textWrapper: {
    textAlign: 'center'
  },
  mainName: {
    fontSize: "28px",
    fontWeight: "900",
    color: "#ffce00",
    letterSpacing: "1.5px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
  },
  tagline: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.8)",
    fontWeight: "500",
    marginTop: '5px'
  }
};

export default Header;