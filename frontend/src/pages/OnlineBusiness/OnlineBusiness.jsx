import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#ff9800';
const ICON = '💼';

const subCategories = [
  {
    name: 'ই-কমার্স',
    items: [
      { name: 'Daraz Bangladesh', web: 'https://www.daraz.com.bd' },
      { name: 'Shajgoj', web: 'https://www.shajgoj.com' },
      { name: 'Chaldal', web: 'https://www.chaldal.com' },
      { name: 'Pathao Shop', web: 'https://pathao.com/shop/' },
      { name: 'Priyoshop', web: 'https://priyoshopretail.com/' },
      { name: 'AjkerDeal', web: 'https://ajkerdeal-online-shopping-bd.en.softonic.com/android' },
    ],
  },
  {     
    name: 'ফ্রিল্যান্সিং',
    items: [
      { name: 'Fiverr', web: 'https://www.fiverr.com' },
      { name: 'Upwork', web: 'https://www.upwork.com' },
      { name: 'Freelancer.com', web: 'https://www.freelancer.com' },
      { name: 'Toptal', web: 'https://www.toptal.com' },
      { name: 'PeoplePerHour', web: 'https://www.peopleperhour.com' },
    ],
  },
  {
    name: 'ডিজিটাল মার্কেটিং',
    items: [
      { name: 'Google Ads', web: 'https://ads.google.com' },
      { name: 'Facebook Ads', web: 'https://www.facebook.com/business/ads' },
      { name: 'SEMrush', web: 'https://www.semrush.com' },
      { name: 'Ahrefs', web: 'https://ahrefs.com' },
      { name: 'Mailchimp', web: 'https://mailchimp.com' },
    ],
  },
  {
    name: 'ড্রপশিপিং',
    items: [
      { name: 'AliExpress', web: 'https://www.aliexpress.com' },
      { name: 'Shopify', web: 'https://www.shopify.com' },
      { name: 'WooCommerce', web: 'https://woocommerce.com' },
      { name: 'CJdropshipping', web: 'https://cjdropshipping.com' },
    ],
  },
  {
    name: 'অ্যাফিলিয়েট মার্কেটিং',
    items: [
      { name: 'Amazon Associates', web: 'https://affiliate-program.amazon.com' },
      { name: 'ClickBank', web: 'https://www.clickbank.com' },
      { name: 'CJ Affiliate', web: 'https://www.cj.com' },
      { name: 'ShareASale', web: 'https://www.shareasale.com' },
    ],
  },
  {
    name: 'কন্টেন্ট ক্রিয়েশন',
    items: [
      { name: 'YouTube Studio', web: 'https://studio.youtube.com' },
      { name: 'Canva', web: 'https://www.canva.com' },
      { name: 'Adobe Express', web: 'https://www.adobe.com/express' },
      { name: 'Blogspot', web: 'https://www.blogger.com' },
      { name: 'WordPress', web: 'https://wordpress.com' },
    ],
  },
  {
    name: 'পেমেন্ট গেটওয়ে',
    items: [
      { name: 'bKash', web: 'https://www.bkash.com' },
      { name: 'Nagad', web: 'https://nagad.com.bd' },
      { name: 'Rocket', web: 'https://www.dutchbanglabank.com/rocket/rocket.html' },
      { name: 'PayPal', web: 'https://www.paypal.com' },
      { name: 'Payoneer', web: 'https://www.payoneer.com' },
      { name: 'Wise', web: 'https://wise.com' },
    ],
  },
];

const OnlineBusinessPortal = () => {
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
        <ItemPanel items={selectedSub.items} title={`অনলাইন বিজনেস - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default OnlineBusinessPortal;