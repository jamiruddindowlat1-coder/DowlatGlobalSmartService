import React, { useState, useRef } from 'react';
import YouTube from 'react-youtube';

const songs = [
   { name: 'Manush jonmer pore Mrittur', id: 'bXg0ne6onBo' },
  { name: 'Ek sekend er nai vorosha', id: 'qLicGgtHHPc' },
  { name: 'Doyal tomar ajob lila', id: 'SsO2mjSeM5U' },
  { name: 'Keo robena chirodin', id: 'kDSkuOCyLL0' },
  { name: 'Polash Futeche', id: 'SCNGEuUAC8c' },
  { name: 'Amar shopno dekha raj konna takhe', id: 'fTvpt_Y67w8' },
  { name: 'Sei meyati', id: 'mVO-83NpH3c' },
  { name: 'Keno ei nishongata', id: 'ojhGlFY6iAk' },
  { name: 'Jare ami satro vabhi', id: 'sls1_pXeA_U' },
  { name: 'Tomi Roz bikele', id: '6iBlseVa66Q' },
  { name: 'Tomare legche eto valo', id: 'Ow0_yD6ZP44' },
  { name: 'Chineci Chinechi', id: 'R63d3WFxOng' },
  { name: 'O Amar mon Jamuna', id: 'vMm7eeMdmQs' },
  { name: 'O amar mon jamuna ', id: 'Ki6AMstN6b4' },
  { name: 'Ei meghla dine ekla', id: 'aFEPYpcmkEM' },
  { name: 'Ado alo chayate', id: 'tBfSnLqnJ0U' },
  { name: 'Duti Mon aar nei dujona', id: 'rqTWSBBuKWU' },
  { name: 'Akashe to meghla jeona ekla', id: 'yF_iOZMIFT4' },
  { name: 'Sundori go duhai duhai', id: '9NT5s6Y6_Rw' },
  { name: 'Jadi tumai ami chand boli', id: 'ebqRo0RzKWc' },
  { name: 'Sraboner megh golo akashe', id: '82mqRS5JcxI' },
  { name: 'Daripala', id: 'CWucUjM6_ac' },
  { name: 'Kato din dekhini tumare', id: 'g_T4r7lGdQ0' },
  { name: 'Jar chaya poreche moner o aynate', id: 'Be836cPJ-LI' },
  { name: 'Onek Bristy jhore tumi ele', id: 'JvRL_UGoN_8' },
  { name: 'Ei mon tumake dilam', id: 'P3ugNIwwueM' },
  { name: 'Ami eto je tumai valobesechi', id: 'mVqhVR8GlDM' },
  { name: 'Ke jasre ke jas', id: 'LH2wUU4QIuY' },
  { name: 'Jadi himaloy alposer', id: 'ESbE8rHhOHA' },
  { name: 'Amay prosno karo nil drovo tara', id: 'ln2Ly1BTjTw' },
  { name: 'Nirbachoner Sarkas', id: '0xfr1x1upwE' },
  { name: 'Akasher oi mitimiti tarar sathe', id: '2RubMqzsqN8' },
  { name: 'Aai khukhu aai', id: 'GmjhBEm-gdo' },
  { name: 'Hazar kbita bekar sobita', id: '2SsglpexdZM' },
  { name: 'Jakhon samoy daray', id: '3TZvO1CjON0' },
  { name: 'Sarkari kormochari', id: 'paeKdLAdpqY' },
];

const PlaylistPlayer = () => {
  const [index, setIndex] = useState(0);
  const playerRef = useRef(null);

  const onReady = (event) => {
    playerRef.current = event.target;
  };

  // 🔥 AUTO NEXT FIXED (ONLY THIS CONTROL)
  const onEnd = () => {
    setIndex((prev) => (prev + 1) % songs.length);
  };

  return (
    <div style={{ padding: '20px' }}>

      <h3>🎵 {songs[index].name}</h3>

      <YouTube
        videoId={songs[index].id}
        opts={{
          width: '100%',
          height: '260',
          playerVars: {
            autoplay: 1,
            controls: 1,
          },
        }}
        onReady={onReady}
        onEnd={onEnd}
      />

      {/* manual controls */}
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => setIndex((p) => (p - 1 + songs.length) % songs.length)}>
          ◀ Prev
        </button>

        <button onClick={() => setIndex((p) => (p + 1) % songs.length)}>
          Next ▶
        </button>
      </div>

    </div>
  );
};

export default PlaylistPlayer;