import React from 'react';

const ServicePage = ({ onBack }) => {
  return (
    <div style={{ padding: '40px', textAlign: 'center', background: '#020a02', color: '#ffce00', minHeight: '100vh' }}>
      <h1>Service Details</h1>
      <p>সেবা সম্পর্কিত বিস্তারিত তথ্য এখানে দেখা যাবে।</p>
      <button 
        onClick={onBack}
        style={{ padding: '10px 20px', background: '#ffce00', color: '#020a02', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        ফিরে যান
      </button>
    </div>
  );
};

export default ServicePage;
