import React, { useState, useMemo } from 'react';
import { GLOBAL_DATA } from '../data/GlobalData';

const SearchBar = ({ color = "#c5a059" }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Flatten data for searching
  const searchableItems = useMemo(() => {
    const list = [];
    Object.keys(GLOBAL_DATA).forEach(divKey => {
      const division = GLOBAL_DATA[divKey];
      division.categories.forEach(cat => {
        cat.items.forEach(item => {
          list.push({
            ...item,
            category: cat.name,
            division: division.name,
            divIcon: division.icon,
            divColor: division.color
          });
        });
      });
    });
    return list;
  }, []);

  const handleSearch = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val.length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const filtered = searchableItems.filter(item => 
      item.name.toLowerCase().includes(val.toLowerCase()) ||
      item.category.toLowerCase().includes(val.toLowerCase()) ||
      item.division.toLowerCase().includes(val.toLowerCase())
    ).slice(0, 10); // Limit to top 10

    setResults(filtered);
    setShowResults(true);
  };

  return (
    <div style={searchContainer}>
      <div style={inputWrapper}>
        <span style={searchIcon}>🔍</span>
        <input
          type="text"
          placeholder="আপনার প্রয়োজনীয় সেবাটি সরাসরি খুঁজুন (যেমন: সাভার হাসপাতাল)..."
          value={query}
          onChange={handleSearch}
          onFocus={() => setShowResults(query.length >= 2)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          style={{ ...inputStyle, border: `2px solid ${color}44` }}
        />
      </div>

      {showResults && results.length > 0 && (
        <div style={resultsDropdown}>
          {results.map((item, idx) => (
            <a key={idx} href={item.web} target="_blank" rel="noopener noreferrer" style={resultItem}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={itemName}>{item.name}</div>
                  <div style={itemCategory}>{item.category}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ ...divTag, background: item.divColor }}>{item.division}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const searchContainer = { position: 'relative', maxWidth: '800px', margin: '0 auto 40px', zIndex: 1000 };
const inputWrapper = { position: 'relative', display: 'flex', alignItems: 'center' };
const searchIcon = { position: 'absolute', left: '20px', fontSize: '20px', color: '#c5a059' };
const inputStyle = { width: '100%', padding: '16px 20px 16px 55px', borderRadius: '50px', background: '#fff', fontSize: '16px', outline: 'none', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', fontFamily: "'Noto Sans Bengali', sans-serif" };
const resultsDropdown = { position: 'absolute', top: '110%', left: 0, right: 0, background: '#fff', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', border: '1px solid #e2e8f0', overflow: 'hidden', animation: 'slideDown 0.3s ease' };
const resultItem = { display: 'block', padding: '15px 20px', textDecoration: 'none', borderBottom: '1px solid #f1f5f9', transition: 'background 0.2s' };
const itemName = { color: '#2e2e8e', fontWeight: '800', fontSize: '15px', marginBottom: '4px' };
const itemCategory = { color: '#64748b', fontSize: '12px' };
const divTag = { padding: '3px 10px', borderRadius: '20px', color: '#fff', fontSize: '10px', fontWeight: '800' };

export default SearchBar;
