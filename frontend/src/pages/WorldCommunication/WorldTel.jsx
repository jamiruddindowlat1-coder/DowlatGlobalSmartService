import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const PORTAL_NAME = 'বিশ্ব টেলিযোগাযোগ';
const COLOR = '#8e44ad';
const ICON = '📞';

const categories = [
  {
    name: 'বাংলাদেশ টেলিকম',
    items: [
      { name: 'গ্রামীণফোন', web: 'https://www.grameenphone.com' },
      { name: 'রবি', web: 'https://www.robi.com.bd' },
      { name: 'বাংলালিংক', web: 'https://www.banglalink.net' },
      { name: 'টেলিটক', web: 'https://www.teletalk.com.bd' },
      { name: 'BTCL', web: 'https://www.btcl.gov.bd' },
    ],
  },
  {
    name: 'ভারত টেলিকম',
    items: [
      { name: 'Jio', web: 'https://www.jio.com' },
      { name: 'Airtel India', web: 'https://www.airtel.in' },
      { name: 'Vi (Vodafone Idea)', web: 'https://www.myvi.in' },
      { name: 'BSNL', web: 'https://www.bsnl.co.in' },
      { name: 'MTNL', web: 'https://www.mtnl.net.in' },
    ],
  },
  {
    name: 'যুক্তরাষ্ট্র টেলিকম',
    items: [
      { name: 'AT&T', web: 'https://www.att.com' },
      { name: 'Verizon', web: 'https://www.verizon.com' },
      { name: 'T-Mobile', web: 'https://www.t-mobile.com' },
      { name: 'Sprint', web: 'https://www.sprint.com' },
      { name: 'US Cellular', web: 'https://www.uscellular.com' },
    ],
  },
  {
    name: 'যুক্তরাজ্য টেলিকম',
    items: [
      { name: 'BT Group', web: 'https://www.bt.com' },
      { name: 'Vodafone UK', web: 'https://www.vodafone.co.uk' },
      { name: 'O2 UK', web: 'https://www.o2.co.uk' },
      { name: 'EE', web: 'https://ee.co.uk' },
      { name: 'Three UK', web: 'https://www.three.co.uk' },
    ],
  },
  {
    name: 'ইউরোপ টেলিকম',
    items: [
      { name: 'Deutsche Telekom', web: 'https://www.telekom.com' },
      { name: 'Orange', web: 'https://www.orange.com' },
      { name: 'Telefonica', web: 'https://www.telefonica.com' },
      { name: 'Swisscom', web: 'https://www.swisscom.ch' },
      { name: 'Telenor', web: 'https://www.telenor.com' },
      { name: 'Telia', web: 'https://www.telia.com' },
    ],
  },
  {
    name: 'চীন ও পূর্ব এশিয়া',
    items: [
      { name: 'China Mobile', web: 'https://www.chinamobile.com' },
      { name: 'China Unicom', web: 'https://www.chinaunicom.com' },
      { name: 'China Telecom', web: 'https://www.chinatelecom.com.cn' },
      { name: 'NTT Docomo (Japan)', web: 'https://www.docomo.ne.jp' },
      { name: 'SoftBank (Japan)', web: 'https://www.softbank.jp' },
      { name: 'SK Telecom (Korea)', web: 'https://www.sktelecom.com' },
      { name: 'KT Corporation (Korea)', web: 'https://www.kt.com' },
    ],
  },
  {
    name: 'মধ্যপ্রাচ্য টেলিকম',
    items: [
      { name: 'STC (Saudi)', web: 'https://www.stc.com.sa' },
      { name: 'Etisalat (UAE)', web: 'https://www.etisalat.ae' },
      { name: 'du (UAE)', web: 'https://www.du.ae' },
      { name: 'Zain', web: 'https://www.zain.com' },
      { name: 'Ooredoo', web: 'https://www.ooredoo.com' },
      { name: 'Mobily', web: 'https://www.mobily.com.sa' },
    ],
  },
  {
    name: 'আফ্রিকা টেলিকম',
    items: [
      { name: 'MTN Group', web: 'https://www.mtn.com' },
      { name: 'Airtel Africa', web: 'https://www.airtelafrica.com' },
      { name: 'Vodacom', web: 'https://www.vodacom.com' },
      { name: 'Safaricom', web: 'https://www.safaricom.co.ke' },
      { name: 'Glo Mobile', web: 'https://www.gloworld.com' },
    ],
  },
  {
    name: 'দক্ষিণ-পূর্ব এশিয়া',
    items: [
      { name: 'Telkomsel (Indonesia)', web: 'https://www.telkomsel.com' },
      { name: 'Globe Telecom (Philippines)', web: 'https://www.globe.com.ph' },
      { name: 'PLDT (Philippines)', web: 'https://www.pldt.com' },
      { name: 'AIS (Thailand)', web: 'https://www.ais.th' },
      { name: 'Maxis (Malaysia)', web: 'https://www.maxis.com.my' },
      { name: 'Singtel (Singapore)', web: 'https://www.singtel.com' },
    ],
  },
  {
    name: 'স্যাটেলাইট টেলিকম',
    items: [
      { name: 'Starlink', web: 'https://www.starlink.com' },
      { name: 'Intelsat', web: 'https://www.intelsat.com' },
      { name: 'SES', web: 'https://www.ses.com' },
      { name: 'Iridium', web: 'https://www.iridium.com' },
      { name: 'Bangabandhu Satellite', web: 'https://www.bscl.gov.bd' },
      { name: 'ViaSat', web: 'https://www.viasat.com' },
    ],
  },
  {
    name: 'ভিওআইপি / ইন্টারনেট কল',
    items: [
      { name: 'Skype', web: 'https://www.skype.com' },
      { name: 'WhatsApp', web: 'https://www.whatsapp.com' },
      { name: 'Viber', web: 'https://www.viber.com' },
      { name: 'Zoom', web: 'https://zoom.us' },
      { name: 'Google Meet', web: 'https://meet.google.com' },
      { name: 'Microsoft Teams', web: 'https://www.microsoft.com/microsoft-teams' },
      { name: 'Telegram', web: 'https://telegram.org' },
    ],
  },
];

const WorldTelPortal = () => {
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

export default WorldTelPortal;