import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#f39c12';
const ICON = '📋';

const subCategories = [
  {
    name: 'নিয়ন্ত্রক সংস্থা ও এক্সচেঞ্জ',
    items: [
      { name: 'বাংলাদেশ সিকিউরিটিজ কমিশন (BSEC)', web: 'https://www.sec.gov.bd' },
      { name: 'ঢাকা স্টক এক্সচেঞ্জ - IPO', web: 'https://www.dse.com.bd/ipo.php' },
      { name: 'চট্টগ্রাম স্টক এক্সচেঞ্জ (CSE)', web: 'https://www.cse.com.bd' },
      { name: 'CDBL - BO অ্যাকাউন্ট', web: 'https://www.cdbl.com.bd' },
      { name: 'বাংলাদেশ ব্যাংক', web: 'https://www.bb.org.bd' },
    ],
  },
  {
    name: 'IPO আবেদন - সরকারি ব্যাংক',
    items: [
      { name: 'সোনালী ব্যাংক', web: 'https://www.sonalibank.com.bd' },
      { name: 'জনতা ব্যাংক', web: 'https://www.janatabank-bd.com' },
      { name: 'অগ্রণী ব্যাংক', web: 'https://www.agranibank.org' },
      { name: 'রূপালী ব্যাংক', web: 'https://www.rupalibank.org' },
    ],
  },
  {
    name: 'IPO আবেদন - বেসরকারি ব্যাংক',
    items: [
      { name: 'Dutch Bangla Bank', web: 'https://www.dutchbanglabank.com' },
      { name: 'BRAC Bank', web: 'https://www.bracbank.com' },
      { name: 'City Bank', web: 'https://www.thecitybank.com' },
      { name: 'Eastern Bank (EBL)', web: 'https://www.ebl.com.bd' },
      { name: 'Mutual Trust Bank', web: 'https://www.mutualtrustbank.com' },
      { name: 'Prime Bank', web: 'https://www.primebank.com.bd' },
      { name: 'Southeast Bank', web: 'https://www.southeastbank.com.bd' },
      { name: 'Standard Chartered Bangladesh', web: 'https://www.sc.com/bd' },
      { name: 'UCB', web: 'https://www.ucb.com.bd' },
      { name: 'One Bank', web: 'https://www.onebankbd.com' },
      { name: 'Dhaka Bank', web: 'https://www.dhakabankltd.com' },
      { name: 'Bank Asia', web: 'https://www.bankasia-bd.com' },
      { name: 'IFIC Bank', web: 'https://www.ificbankbd.com' },
      { name: 'Mercantile Bank', web: 'https://www.mblbd.com' },
      { name: 'National Bank', web: 'https://www.nblbd.com' },
      { name: 'AB Bank', web: 'https://www.abbank.com.bd' },
      { name: 'Trust Bank', web: 'https://www.trustbank.com.bd' },
      { name: 'NRB Bank', web: 'https://www.nrbbankbd.com' },
      { name: 'Midland Bank', web: 'https://www.midlandbankbd.net' },
      { name: 'NCC Bank', web: 'https://www.nccbank.com.bd' },
      { name: 'Exim Bank', web: 'https://www.eximbankbd.com' },
      { name: 'Jamuna Bank', web: 'https://www.jamunabankbd.com' },
      { name: 'Bangladesh Commerce Bank', web: 'https://www.bcblbd.com' },
    ],
  },
  {
    name: 'IPO আবেদন - ইসলামী ব্যাংক',
    items: [
      { name: 'Islami Bank Bangladesh', web: 'https://www.islamibankbd.com' },
      { name: 'Al-Arafah Islami Bank', web: 'https://www.al-arafahbank.com' },
      { name: 'Shahjalal Islami Bank', web: 'https://www.sjiblbd.com' },
      { name: 'Social Islami Bank', web: 'https://www.siblbd.com' },
    ],
  },
];

const ShareNewsIPOBD = () => {
  const [selectedSub, setSelectedSub] = useState(subCategories[0]);
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px', justifyContent: 'center' }}>
        {subCategories.map((sub, idx) => (
          <button key={idx}
            onClick={() => setSelectedSub(selectedSub?.name === sub.name ? null : sub)}
            style={{
              padding: '7px 13px',
              background: selectedSub?.name === sub.name ? COLOR : '#1a3a5c',
              border: `1px solid ${COLOR}55`, borderRadius: '6px',
              color: '#fff', cursor: 'pointer',
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              fontSize: '13px', transition: 'background 0.2s',
            }}>
            {sub.name}
          </button>
        ))}
      </div>
      {selectedSub && (
        <ItemPanel items={selectedSub.items} title={`IPO বাংলাদেশ - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default ShareNewsIPOBD;