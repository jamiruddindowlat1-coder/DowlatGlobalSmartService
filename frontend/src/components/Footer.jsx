import React from "react";
import dgssLogo from '../assets/dgss_logo.png';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={s.footer}>
      <div style={s.content}>
        <div style={s.branding}>
          <div style={s.brandName}>DOWLAT DIGITAL GLOBAL SERVICE</div>
          <div style={s.infoItem}>
            <FaMapMarkerAlt style={s.icon} /> 
            <span>Naju Monjil, 2nd Floor, Kwaza Road, Chandgaon, Chittagong-4212</span>
          </div>
          <div style={s.infoItem}>
            <FaPhoneAlt style={s.icon} /> 
            <span>+880 1715-487122</span>
          </div>
        </div>
      </div>

      <div style={s.bottomBar}>
        © {new Date().getFullYear()} Dowlat Digital Global Service. All rights reserved.
      </div>
    </footer>
  );
};

const s = {
  footer: {
    background: "#020a02",
    color: "#ffce00",
    padding: "30px 24px 15px",
    borderTop: "3px solid #ffce00",
    boxShadow: "0 -5px 15px rgba(255, 206, 0, 0.1)",
  },
  content: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px"
  },
  logoSide: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  logoCircle: {
    background: "#fff",
    padding: "5px",
    borderRadius: "50%",
    boxShadow: "0 0 15px rgba(255,206,0,0.3)",
  },
  logoImg: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    objectFit: "contain",
  },
  branding: {
    display: "flex",
    flexDirection: "column",
    gap: "5px"
  },
  brandName: {
    fontSize: "16px",
    fontWeight: "800",
    letterSpacing: "1px",
  },
  infoItem: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.8)",
    display: "flex",
    alignItems: "center",
    gap: "8px"
  },
  icon: {
    color: "#ffce00",
    fontSize: "14px"
  },
  bottomBar: {
    marginTop: "25px",
    paddingTop: "15px",
    borderTop: "1px solid rgba(255,206,0,0.2)",
    fontSize: "12px",
    textAlign: "center",
    color: "rgba(255,255,255,0.5)",
  }
};

export default Footer;