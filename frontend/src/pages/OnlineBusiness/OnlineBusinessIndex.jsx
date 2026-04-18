import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const PORTAL_NAME = 'অনলাইন ব্যবসা';
const COLOR = '#27ae60';
const ICON = '🛒';

const categories = [
  {
    name: 'ই-কমার্স মার্কেটপ্লেস',
    items: [
      { name: 'Daraz BD', web: 'https://www.daraz.com.bd' },
      { name: 'Chaldal', web: 'https://chaldal.com' },
      { name: 'Shajgoj', web: 'https://www.shajgoj.com' },
      { name: 'Rokomari', web: 'https://www.rokomari.com' },
      { name: 'Pickaboo', web: 'https://www.pickaboo.com' },
      { name: 'Othoba', web: 'https://www.othoba.com' },
      { name: 'Bagdoom', web: 'https://www.bagdoom.com' },
      { name: 'Sheba.xyz', web: 'https://sheba.xyz' },
    ],
  },
  {
    name: 'ফ্যাশন ও পোশাক',
    items: [
      { name: 'Aarong', web: 'https://www.aarong.com' },
      { name: 'Yellow', web: 'https://www.yellow.com.bd' },
      { name: 'Cats Eye', web: 'https://www.catseye.com.bd' },
      { name: 'Sailor', web: 'https://www.sailor.com.bd' },
      { name: 'Richman', web: 'https://www.richman.com.bd' },
      { name: 'Rang Bangladesh', web: 'https://www.rang-bd.com' },
      { name: 'Dorjibari', web: 'https://dorjibari.com' },
    ],
  },
  {
    name: 'খাদ্য ও ডেলিভারি',
    items: [
      { name: 'Foodpanda BD', web: 'https://www.foodpanda.com.bd' },
      { name: 'Shohoz Food', web: 'https://www.shohoz.com/food' },
      { name: 'HungryNaki', web: 'https://www.hungrynaki.com' },
      { name: 'Khaas Food', web: 'https://khaas.com.bd' },
      { name: 'Meal Box BD', web: 'https://mealboxbd.com' },
    ],
  },
  {
    name: 'ফ্রিল্যান্সিং প্ল্যাটফর্ম',
    items: [
      { name: 'Freelancer BD', web: 'https://www.freelancer.com' },
      { name: 'Fiverr', web: 'https://www.fiverr.com' },
      { name: 'Upwork', web: 'https://www.upwork.com' },
      { name: 'Kajki', web: 'https://www.kajki.com.bd' },
      { name: 'BDJobs', web: 'https://www.bdjobs.com' },
      { name: 'Kormo Jobs', web: 'https://kormo.google.com' },
    ],
  },
  {
    name: 'ডিজিটাল পেমেন্ট',
    items: [
      { name: 'bKash', web: 'https://www.bkash.com' },
      { name: 'Nagad', web: 'https://nagad.com.bd' },
      { name: 'Rocket (DBBL)', web: 'https://www.dutchbanglabank.com/rocket' },
      { name: 'Upay', web: 'https://www.upaybd.com' },
      { name: 'MYCash', web: 'https://www.mycash.com.bd' },
      { name: 'iPay', web: 'https://www.ipaybd.com' },
    ],
  },
  {
    name: 'রিয়েল এস্টেট',
    items: [
      { name: 'Bproperty', web: 'https://www.bproperty.com' },
      { name: 'Bikroy.com', web: 'https://bikroy.com' },
      { name: 'Lamudi BD', web: 'https://www.lamudi.com.bd' },
      { name: 'Property BD', web: 'https://propertybd.com' },
    ],
  },
  {
    name: 'ট্রাভেল ও পর্যটন',
    items: [
      { name: 'Shohoz', web: 'https://www.shohoz.com' },
      { name: 'ShareTrip', web: 'https://www.sharetrip.net' },
      { name: 'GoZayaan', web: 'https://www.gozayaan.com' },
      { name: 'BDTickets', web: 'https://bdtickets.com' },
      { name: 'Flyhigh BD', web: 'https://flyhighbd.com' },
    ],
  },
  {
    name: 'স্বাস্থ্যসেবা অনলাইন',
    items: [
      { name: 'Praava Health', web: 'https://www.praavahealth.com' },
      { name: 'DocTime', web: 'https://www.doctime.com.bd' },
      { name: 'Tonic', web: 'https://www.tonic.com.bd' },
      { name: 'Shasthya Sheba', web: 'https://shasthyasheba.com.bd' },
      { name: 'Medinova Online', web: 'https://www.medinovabd.com' },
    ],
  },
  {
    name: 'শিক্ষা ও ই-লার্নিং',
    items: [
      { name: '10 Minute School', web: 'https://10minuteschool.com' },
      { name: 'Shikho', web: 'https://shikho.com' },
      { name: 'Bohubrihi', web: 'https://www.bohubrihi.com' },
      { name: 'Mojaru', web: 'https://mojaru.com' },
      { name: 'Codemen', web: 'https://codemen.org' },
    ],
  },
  {
    name: 'লজিস্টিক্স ও ডেলিভারি',
    items: [
      { name: 'Pathao', web: 'https://pathao.com' },
      { name: 'Shohoz', web: 'https://www.shohoz.com' },
      { name: 'Paperfly', web: 'https://www.paperfly.com.bd' },
      { name: 'RedX', web: 'https://redx.com.bd' },
      { name: 'eCourier', web: 'https://www.ecourier.com.bd' },
      { name: 'Sundarban Courier', web: 'https://www.sundarbancourier.com' },
    ],
  },
];

const OnlineBusinessPortal = () => {
  const [selectedSub, setSelectedSub] = useState(null);
  if (!categories) return null;
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
        {categories.map((sub, idx) => (
          <button key={idx}
            onClick={() => setSelectedSub(selectedSub?.name === sub.name ? null : sub)}
            style={{
              padding: '7px 13px',
              background: selectedSub?.name === sub.name ? COLOR : '#1a3a5c',
              border: `1px solid ${COLOR}55`, borderRadius: '6px',
              color: '#c5a059', cursor: 'pointer',
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              fontSize: '13px', transition: 'background 0.2s',
            }}>
            {sub.name}
          </button>
        ))}
      </div>
      {selectedSub && (
        <ItemPanel items={selectedSub.items} title={`${PORTAL_NAME} - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default OnlineBusinessPortal;