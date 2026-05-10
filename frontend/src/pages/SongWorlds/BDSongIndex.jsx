import React, { useState, useEffect, useRef } from 'react';

const COLOR = '#e91e63';
const ICON = '🎵';

const songs = [
  { name: 'Manush jonmer pore Mrittur', web: 'https://www.youtube.com/watch?v=bXg0ne6onBo' },
  { name: 'Ek sekend er nai vorosha', web: 'https://www.youtube.com/watch?v=qLicGgtHHPc' },
  { name: 'Doyal tomar ajob lila', web: 'https://www.youtube.com/watch?v=SsO2mjSeM5U' },
  { name: 'Keo robena chirodin', web: 'https://www.youtube.com/watch?v=kDSkuOCyLL0' },
  { name: 'Polash Futeche', web: 'https://www.youtube.com/watch?v=SCNGEuUAC8c' },
  { name: 'Amar shopno dekha raj konna takhe', web: 'https://www.youtube.com/watch?v=fTvpt_Y67w8' },
  { name: 'Sei meyati', web: 'https://www.youtube.com/watch?v=mVO-83NpH3c' },
  { name: 'Keno ei nishongata', web: 'https://www.youtube.com/watch?v=ojhGlFY6iAk' },
  { name: 'Apon Satro', web: 'https://www.youtube.com/watch?v=sls1_pXeA_U' },
  { name: 'Tomi Roz bikele', web: 'https://www.youtube.com/watch?v=6iBlseVa66Q' },
  { name: 'Tomare legche eto valo', web: 'https://www.youtube.com/watch?v=Ow0_yD6ZP44' },
  { name: 'Chineci Chinechi', web: 'https://www.youtube.com/watch?v=R63d3WFxOng' },
  { name: 'O Amar mon Jamuna', web: 'https://www.youtube.com/watch?v=vMm7eeMdmQs' },
  { name: '', web: '' },
  { name: 'Ei meghla dine ekla', web: 'https://www.youtube.com/watch?v=aFEPYpcmkEM' },
  { name: 'Ado alo chayate', web: 'https://www.youtube.com/watch?v=tBfSnLqnJ0U' },
  { name: 'Amar Shopno dekha Rajkonna', web: 'https://www.youtube.com/watch?v=fTvpt_Y67w8' },
  { name: 'Duti Mon aar nei dujona', web: 'https://www.youtube.com/watch?v=rqTWSBBuKWU' },
  { name: 'Akashe to meghla jeona ekla', web: 'https://www.youtube.com/watch?v=yF_iOZMIFT4' },
  { name: 'Sundori go duhai duhai', web: 'https://www.youtube.com/watch?v=9NT5s6Y6_Rw' },
  { name: 'Jadi tumai ami chand boli', web: 'https://www.youtube.com/watch?v=ebqRo0RzKWc' },
  { name: 'Sraboner megh golo akashe', web: 'https://www.youtube.com/watch?v=82mqRS5JcxI' },
  { name: 'Daripala', web: 'https://www.youtube.com/watch?v=CWucUjM6_ac' },
  { name: 'Kato din dekhini tumare', web: 'https://www.youtube.com/watch?v=g_T4r7lGdQ0' },
  { name: 'Jar chaya poreche moner o aynate', web: 'https://www.youtube.com/watch?v=Be836cPJ-LI' },
  { name: 'Onek Bristy jhore tumi ele', web: 'https://www.youtube.com/watch?v=JvRL_UGoN_8' },
  { name: 'Ei mon tumake dilam', web: 'https://www.youtube.com/watch?v=P3ugNIwwueM' },
  { name: 'Ami eto je tumai valobesechi', web: 'https://www.youtube.com/watch?v=mVqhVR8GlDM' },
  { name: 'Ke jasre ke jas', web: 'https://www.youtube.com/watch?v=LH2wUU4QIuY' },
  { name: 'Jadi himaloy alposer', web: 'https://www.youtube.com/watch?v=ESbE8rHhOHA' },
  { name: 'Amay prosno karo nil drovo tara', web: 'https://www.youtube.com/watch?v=ln2Ly1BTjTw' },
  { name: 'Nirbachoner Sarkas', web: 'https://www.youtube.com/watch?v=0xfr1x1upwE' },
  { name: 'Akasher oi mitimiti tarar sathe', web: 'https://www.youtube.com/watch?v=2RubMqzsqN8' },
  { name: 'Aai khukhu aai', web: 'https://www.youtube.com/watch?v=GmjhBEm-gdo' },
  { name: 'Hazar kbita bekar sobita', web: 'https://www.youtube.com/watch?v=2SsglpexdZM' },
  { name: 'Jakhon samoy daray', web: 'https://www.youtube.com/watch?v=3TZvO1CjON0' },
  { name: 'Sarkari kormochari', web: 'https://www.youtube.com/watch?v=paeKdLAdpqY' },
];

const AUTO_INTERVAL_MS = 10 * 1000; // 10 seconds

const PlaylistPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const autoTimerRef = useRef(null);
  const winRef = useRef(null);
  const listRef = useRef(null);

  const currentSong = songs[currentIndex];

  const openSong = (index) => {
    const song = songs[index];
    if (winRef.current && !winRef.current.closed) {
      winRef.current.location.href = song.web;
    } else {
      winRef.current = window.open(song.web, '_blank');
    }
  };

  const startAutoTimer = () => {
    clearAutoTimer();
    autoTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % songs.length;
        openSong(next);
        return next;
      });
    }, AUTO_INTERVAL_MS);
  };

  const clearAutoTimer = () => {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => clearAutoTimer();
  }, []);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector('.active-song');
      if (activeEl) activeEl.scrollIntoView({ block: 'nearest' });
    }
  }, [currentIndex]);

  const handleTogglePlay = () => {
    if (!playing) {
      setPlaying(true);
      openSong(currentIndex);
      startAutoTimer();
    } else {
      setPlaying(false);
      clearAutoTimer();
    }
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
    if (playing) {
      openSong(index);
      startAutoTimer();
    }
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % songs.length;
    setCurrentIndex(next);
    if (playing) openSong(next);
  };

  const handlePrev = () => {
    const prev = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentIndex(prev);
    if (playing) openSong(prev);
  };

  const handleOpen = () => {
    openSong(currentIndex);
  };

  return (
    <div>
      {/* Now Playing Card */}
      <div
        style={{
          background: '#0d2137',
          border: `1px solid ${COLOR}44`,
          borderRadius: '10px',
          padding: '16px',
          marginBottom: '14px',
        }}
      >
        <div
          style={{
            fontSize: '11px',
            color: '#c5a059',
            marginBottom: '6px',
            fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
          }}
        >
          {ICON} এখন বাজছে
        </div>
        <div
          style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#fff',
            marginBottom: '4px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
          }}
        >
          {currentSong.name}
        </div>
        <div
          style={{
            fontSize: '12px',
            color: '#c5a059',
            marginBottom: '14px',
            fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
          }}
        >
          {currentIndex + 1} / {songs.length}
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={handlePrev}
            style={{
              padding: '7px 14px',
              background: '#1a3a5c',
              border: `1px solid ${COLOR}55`,
              borderRadius: '6px',
              color: '#c5a059',
              cursor: 'pointer',
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              fontSize: '13px',
            }}
          >
            ◀◀ আগের
          </button>

          <button
            onClick={handleTogglePlay}
            style={{
              padding: '7px 18px',
              background: playing ? COLOR : '#1a3a5c',
              border: `1px solid ${COLOR}`,
              borderRadius: '6px',
              color: '#fff',
              cursor: 'pointer',
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              fontSize: '13px',
              fontWeight: 600,
              transition: 'background 0.2s',
            }}
          >
            {playing ? '⏸ থামাও' : '▶ চালু'}
          </button>

          <button
            onClick={handleNext}
            style={{
              padding: '7px 14px',
              background: '#1a3a5c',
              border: `1px solid ${COLOR}55`,
              borderRadius: '6px',
              color: '#c5a059',
              cursor: 'pointer',
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              fontSize: '13px',
            }}
          >
            পরের ▶▶
          </button>

          {playing && (
            <span
              style={{
                padding: '7px 10px',
                background: '#0f4c2e',
                border: '1px solid #1a8a5c55',
                borderRadius: '6px',
                color: '#4ecb8d',
                fontSize: '11px',
                display: 'flex',
                alignItems: 'center',
                fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              }}
            >
              অটো চালু
            </span>
          )}
        </div>

        <button
          onClick={handleOpen}
          style={{
            marginTop: '10px',
            width: '100%',
            padding: '8px',
            background: 'transparent',
            border: `1px solid ${COLOR}55`,
            borderRadius: '6px',
            color: COLOR,
            cursor: 'pointer',
            fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
            fontSize: '13px',
            transition: 'background 0.2s',
          }}
        >
          YouTube-এ খুলুন ↗
        </button>
      </div>

      {/* Song List */}
      <div
        ref={listRef}
        style={{
          maxHeight: '340px',
          overflowY: 'auto',
          border: `1px solid ${COLOR}33`,
          borderRadius: '8px',
        }}
      >
        {songs.map((song, idx) => (
          <div
            key={idx}
            className={idx === currentIndex ? 'active-song' : ''}
            onClick={() => handleSelect(idx)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '9px 14px',
              borderBottom: idx < songs.length - 1 ? `1px solid ${COLOR}22` : 'none',
              cursor: 'pointer',
              background: idx === currentIndex ? `${COLOR}22` : 'transparent',
              transition: 'background 0.15s',
            }}
          >
            <span
              style={{
                fontSize: '12px',
                color: idx === currentIndex ? COLOR : '#c5a059',
                minWidth: '24px',
                fontFamily: 'monospace',
              }}
            >
              {String(idx + 1).padStart(2, '0')}
            </span>
            <span
              style={{
                fontSize: '13px',
                color: idx === currentIndex ? '#fff' : '#c5a059',
                fontWeight: idx === currentIndex ? 600 : 400,
                flex: 1,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              }}
            >
              {song.name}
            </span>
            {idx === currentIndex && playing && (
              <span style={{ color: COLOR, fontSize: '12px' }}>▶</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistPlayer;