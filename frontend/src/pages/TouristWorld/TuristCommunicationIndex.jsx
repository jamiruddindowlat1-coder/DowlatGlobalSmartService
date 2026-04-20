import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#009688';
const ICON = '🌍✈️';

const subCategories = [

  // ================= AIRLINES =================
  {
    name: '✈️ আন্তর্জাতিক এয়ারলাইনস (Global)',
    items: [
      { name: 'Emirates', web: 'https://www.emirates.com' },
      { name: 'Qatar Airways', web: 'https://www.qatarairways.com' },
      { name: 'Turkish Airlines', web: 'https://www.turkishairlines.com' },
      { name: 'Singapore Airlines', web: 'https://www.singaporeair.com' },
      { name: 'Etihad Airways', web: 'https://www.etihad.com' },
      { name: 'British Airways', web: 'https://www.britishairways.com' },
      { name: 'Lufthansa', web: 'https://www.lufthansa.com' },
      { name: 'Air France', web: 'https://www.airfrance.com' },
      { name: 'KLM', web: 'https://www.klm.com' },
      { name: 'Delta Airlines', web: 'https://www.delta.com' },
      { name: 'American Airlines', web: 'https://www.aa.com' },
      { name: 'Qantas (Australia)', web: 'https://www.qantas.com' },
      { name: 'Cathay Pacific', web: 'https://www.cathaypacific.com' },
      { name: 'Japan Airlines', web: 'https://www.jal.co.jp' },
    ],
  },

  // ================= LOW COST AIRLINES =================
  {
    name: '💸 Low Cost Airlines',
    items: [
      { name: 'AirAsia', web: 'https://www.airasia.com' },
      { name: 'Ryanair (Europe)', web: 'https://www.ryanair.com' },
      { name: 'EasyJet', web: 'https://www.easyjet.com' },
      { name: 'IndiGo', web: 'https://www.goindigo.in' },
      { name: 'Scoot', web: 'https://www.flyscoot.com' },
    ],
  },

  // ================= BUS =================
  {
    name: '🚌 আন্তর্জাতিক বাস',
    items: [
      { name: 'FlixBus (Europe)', web: 'https://www.flixbus.com' },
      { name: 'Greyhound (USA)', web: 'https://www.greyhound.com' },
      { name: 'Megabus', web: 'https://www.megabus.com' },
      { name: 'RedBus (India)', web: 'https://www.redbus.in' },
    ],
  },

  // ================= TRAIN =================
  {
    name: '🚆 বিশ্ব ট্রেন সার্ভিস',
    items: [
      { name: 'Amtrak (USA)', web: 'https://www.amtrak.com' },
      { name: 'EuroRail Pass', web: 'https://www.eurail.com' },
      { name: 'DB Bahn (Germany)', web: 'https://www.bahn.com' },
      { name: 'JR Japan Rail', web: 'https://www.japanrailpass.net' },
      { name: 'Indian Railways', web: 'https://www.irctc.co.in' },
      { name: 'Renfe (Spain)', web: 'https://www.renfe.com' },
      { name: 'SBB (Switzerland)', web: 'https://www.sbb.ch' },
    ],
  },

  // ================= FERRY / SHIP =================
  {
    name: '🛳️ Ferry / Cruise / Sea Travel',
    items: [
      { name: 'MSC Cruises', web: 'https://www.msccruises.com' },
      { name: 'Royal Caribbean', web: 'https://www.royalcaribbean.com' },
      { name: 'Carnival Cruise', web: 'https://www.carnival.com' },
      { name: 'Norwegian Cruise', web: 'https://www.ncl.com' },
      { name: 'FerryHopper (Greece)', web: 'https://www.ferryhopper.com' },
    ],
  },

  // ================= CAR =================
  {
    name: '🚗 Car Rental / Taxi',
    items: [
      { name: 'Uber', web: 'https://www.uber.com' },
      { name: 'Lyft', web: 'https://www.lyft.com' },
      { name: 'Bolt', web: 'https://bolt.eu' },
      { name: 'Hertz', web: 'https://www.hertz.com' },
      { name: 'Avis', web: 'https://www.avis.com' },
      { name: 'Sixt', web: 'https://www.sixt.com' },
    ],
  },

  // ================= HOTELS =================
  {
    name: '🏨 হোটেল বুকিং (Global)',
    items: [
      { name: 'Booking.com', web: 'https://www.booking.com' },
      { name: 'Agoda', web: 'https://www.agoda.com' },
      { name: 'Expedia', web: 'https://www.expedia.com' },
      { name: 'Hotels.com', web: 'https://www.hotels.com' },
      { name: 'Airbnb', web: 'https://www.airbnb.com' },
      { name: 'Hostelworld', web: 'https://www.hostelworld.com' },
    ],
  },

  // ================= TOUR =================
  {
    name: '🧳 ট্যুর প্ল্যান / গাইড',
    items: [
      { name: 'TripAdvisor', web: 'https://www.tripadvisor.com' },
      { name: 'Lonely Planet', web: 'https://www.lonelyplanet.com' },
      { name: 'GetYourGuide', web: 'https://www.getyourguide.com' },
      { name: 'Viator', web: 'https://www.viator.com' },
      { name: 'Klook', web: 'https://www.klook.com' },
    ],
  },

  // ================= MAP =================
  {
    name: '🗺️ ম্যাপ / নেভিগেশন',
    items: [
      { name: 'Google Maps', web: 'https://maps.google.com' },
      { name: 'Waze', web: 'https://www.waze.com' },
      { name: 'OpenStreetMap', web: 'https://www.openstreetmap.org' },
    ],
  },

  // ================= VISA =================
  {
    name: '🛂 ভিসা / ইমিগ্রেশন',
    items: [
      { name: 'US Visa', web: 'https://travel.state.gov' },
      { name: 'UK Visa', web: 'https://www.gov.uk/visa-immigration' },
      { name: 'Schengen Visa', web: 'https://www.schengenvisainfo.com' },
      { name: 'Canada Immigration', web: 'https://www.canada.ca/en/immigration.html' },
      { name: 'Australia Visa', web: 'https://immi.homeaffairs.gov.au' },
      { name: 'Japan Visa Info', web: 'https://www.mofa.go.jp' },
    ],
  },

  // ================= WORLD TOUR =================
  {
    name: '🌏 World Travel Guide',
    items: [
      { name: 'National Geographic Travel', web: 'https://www.nationalgeographic.com/travel' },
      { name: 'BBC Travel', web: 'https://www.bbc.com/travel' },
      { name: 'World Tourism Organization', web: 'https://www.unwto.org' },
    ],
  },
];

const TouristCommunicationIndex = () => {
  const [selectedSub, setSelectedSub] = useState(null);

  return (
    <div>

      {/* Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
        {subCategories.map((sub, idx) => (
          <button
            key={idx}
            onClick={() =>
              setSelectedSub(selectedSub === sub.name ? null : sub.name)
            }
            style={{
              padding: '8px 14px',
              background: selectedSub === sub.name ? COLOR : '#1a3a5c',
              border: `1px solid ${COLOR}55`,
              borderRadius: '6px',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '13px',
            }}
          >
            {sub.name}
          </button>
        ))}
      </div>

      {/* Panel */}
      {selectedSub && (
        <ItemPanel
          items={subCategories.find(s => s.name === selectedSub)?.items || []}
          title={`🌍 WORLD TRAVEL - ${selectedSub}`}
          color={COLOR}
          icon={ICON}
          onClose={() => setSelectedSub(null)}
        />
      )}
    </div>
  );
};

export default TouristCommunicationIndex;