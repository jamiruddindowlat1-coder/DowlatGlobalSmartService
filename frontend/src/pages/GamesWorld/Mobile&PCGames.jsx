import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#f44336';
const ICON = '🎮';

const subCategories = [
  {
    name: 'মোবাইল গেমস',
    items: [
      { name: 'PUBG Mobile', web: 'https://www.pubgmobile.com' },
      { name: 'Free Fire', web: 'https://ff.garena.com' },
      { name: 'Mobile Legends', web: 'https://m.mobilelegends.com' },
      { name: 'Call of Duty Mobile', web: 'https://www.callofduty.com/mobile' },
      { name: 'Clash of Clans', web: 'https://clashofclans.com' },
      { name: 'Clash Royale', web: 'https://clashroyale.com' },
      { name: 'Brawl Stars', web: 'https://brawlstars.com' },
      { name: 'Genshin Impact', web: 'https://genshin.hoyoverse.com' },
      { name: 'Honor of Kings', web: 'https://www.honorofkings.com' },
      { name: 'Arena of Valor', web: 'https://www.arenaofvalor.com' },
      { name: 'Pokémon GO', web: 'https://pokemongolive.com' },
      { name: 'Stumble Guys', web: 'https://www.stumbleguys.com' },
      { name: 'Warzone Mobile', web: 'https://www.callofduty.com/warzonemobile' },
      { name: 'Garena AOV', web: 'https://aov.garena.com' },
    ],
  },
  {
    name: 'PC গেমস',
    items: [
      { name: 'Steam', web: 'https://store.steampowered.com' },
      { name: 'Epic Games', web: 'https://www.epicgames.com' },
      { name: 'EA Games', web: 'https://www.ea.com' },
      { name: 'Ubisoft', web: 'https://www.ubisoft.com' },
      { name: 'Battle.net', web: 'https://www.blizzard.com' },
      { name: 'GOG', web: 'https://www.gog.com' },
      { name: 'Origin', web: 'https://www.ea.com/ea-app' },
      { name: 'Rockstar Games', web: 'https://www.rockstargames.com' },
      { name: '2K Games', web: 'https://2k.com' },
      { name: 'Bethesda', web: 'https://bethesda.net' },
      { name: 'Xbox Game Pass (PC)', web: 'https://www.xbox.com/en-US/xbox-game-pass/pc-game-pass' },
      { name: 'Humble Bundle', web: 'https://www.humblebundle.com' },
    ],
  },
  {
    name: 'কনসোল গেমস',
    items: [
      { name: 'PlayStation', web: 'https://www.playstation.com' },
      { name: 'Xbox', web: 'https://www.xbox.com' },
      { name: 'Nintendo', web: 'https://www.nintendo.com' },
      { name: 'PlayStation Store', web: 'https://store.playstation.com' },
      { name: 'Xbox Store', web: 'https://www.xbox.com/en-US/games/store' },
      { name: 'Nintendo eShop', web: 'https://www.nintendo.com/store' },
    ],
  },
  {
    name: 'অনলাইন গেমস',
    items: [
      { name: 'Roblox', web: 'https://www.roblox.com' },
      { name: 'Minecraft', web: 'https://www.minecraft.net' },
      { name: 'Among Us', web: 'https://www.innersloth.com/games/among-us/' },
      { name: 'Miniclip', web: 'https://www.miniclip.com' },
      { name: 'Fortnite', web: 'https://www.fortnite.com' },
      { name: 'Valorant', web: 'https://playvalorant.com' },
      { name: 'League of Legends', web: 'https://www.leagueoflegends.com' },
      { name: 'Dota 2', web: 'https://www.dota2.com' },
      { name: 'Counter-Strike 2', web: 'https://www.counter-strike.net' },
      { name: 'Apex Legends', web: 'https://www.ea.com/games/apex-legends' },
      { name: 'Overwatch 2', web: 'https://overwatch.blizzard.com' },
      { name: 'World of Warcraft', web: 'https://worldofwarcraft.blizzard.com' },
      { name: 'GTA Online', web: 'https://www.rockstargames.com/GTAOnline' },
      { name: 'FIFA Online', web: 'https://www.ea.com/games/ea-sports-fc' },
      { name: 'eFootball', web: 'https://www.konami.com/efootball' },
      { name: 'Poki', web: 'https://poki.com' },
      { name: 'CrazyGames', web: 'https://www.crazygames.com' },
      { name: 'Y8 Games', web: 'https://www.y8.com' },
    ],
  },
  {
    name: 'ক্যাজুয়াল গেমস',
    items: [
      { name: 'Candy Crush', web: 'https://www.king.com/game/candycrush' },
      { name: 'Subway Surfers', web: 'https://subwaysurfers.com' },
      { name: 'Angry Birds', web: 'https://www.rovio.com' },
      { name: 'Temple Run', web: 'https://www.imangistudios.com' },
      { name: 'Gardenscapes', web: 'https://playrix.com/games/gardenscapes' },
      { name: 'Homescapes', web: 'https://playrix.com/games/homescapes' },
      { name: 'Township', web: 'https://playrix.com/township' },
      { name: 'Ludo King', web: 'https://ludoking.com' },
      { name: 'My Talking Tom', web: 'https://outfit7.com/my-talking-tom' },
      { name: 'Hill Climb Racing', web: 'https://www.fingersoft.com' },
      { name: 'Fruit Ninja', web: 'https://halfbrick.com/fruit-ninja' },
      { name: 'Cut the Rope', web: 'https://www.crazygames.com/game/cut-the-rope-ebx' },
      { name: 'Wordle', web: 'https://www.nytimes.com/games/wordle' },
      { name: '8 Ball Pool', web: 'https://www.miniclip.com/games/8-ball-pool' },
    ],
  },
  {
    name: 'ব্রাউজার গেমস',
    items: [
      { name: 'Poki', web: 'https://poki.com' },
      { name: 'CrazyGames', web: 'https://www.crazygames.com' },
      { name: 'Armor Games', web: 'https://armorgames.com' },
      { name: 'Kongregate', web: 'https://www.kongregate.com' },
      { name: 'Newgrounds', web: 'https://www.newgrounds.com' },
      { name: 'Coolmath Games', web: 'https://www.coolmathgames.com' },
      { name: 'Friv', web: 'https://friv.com' },
      { name: 'GameFlare', web: 'https://gameflare.com' },
      { name: 'Addicting Games', web: 'https://www.addictinggames.com' },
      { name: 'Kizi', web: 'https://kizi.com' },
    ],
  },
  {
    name: 'গেমিং প্ল্যাটফর্ম',
    items: [
      { name: 'Steam', web: 'https://store.steampowered.com' },
      { name: 'Epic Games Store', web: 'https://www.epicgames.com/store' },
      { name: 'Google Play Games', web: 'https://play.google.com/store/games' },
      { name: 'Apple Arcade', web: 'https://www.apple.com/apple-arcade' },
      { name: 'Xbox Game Pass', web: 'https://www.xbox.com/xbox-game-pass' },
      { name: 'PlayStation Plus', web: 'https://www.playstation.com/ps-plus' },
      { name: 'Nintendo Switch Online', web: 'https://www.nintendo.com/switch/online' },
      { name: 'GeForce NOW', web: 'https://www.nvidia.com/geforcenow' },
      { name: 'Xbox Cloud Gaming', web: 'https://www.xbox.com/cloud-gaming' },
      { name: 'Amazon Luna', web: 'https://luna.amazon.com' },
    ],
  },
  {
    name: 'eSports',
    items: [
      { name: 'ESL Gaming', web: 'https://www.esl.com' },
      { name: 'FACEIT', web: 'https://www.faceit.com' },
      { name: 'Battlefy', web: 'https://battlefy.com' },
      { name: 'Liquipedia', web: 'https://liquipedia.net' },
      { name: 'HLTV (CS)', web: 'https://www.hltv.org' },
      { name: 'Dotabuff', web: 'https://www.dotabuff.com' },
      { name: 'OP.GG (LoL)', web: 'https://www.op.gg' },
      { name: 'PUBG Esports', web: 'https://pubgesports.com' },
      { name: 'Free Fire Esports', web: 'https://esports.freefire.com' },
      { name: 'Twitch', web: 'https://www.twitch.tv' },
      { name: 'AfreecaTV', web: 'https://www.afreecatv.com' },
    ],
  },
  {
    name: 'গেমিং নিউজ',
    items: [
      { name: 'IGN', web: 'https://www.ign.com' },
      { name: 'GameSpot', web: 'https://www.gamespot.com' },
      { name: 'Kotaku', web: 'https://kotaku.com' },
      { name: 'PCGamer', web: 'https://www.pcgamer.com' },
      { name: 'Eurogamer', web: 'https://www.eurogamer.net' },
      { name: 'Polygon', web: 'https://www.polygon.com' },
      { name: 'VG247', web: 'https://www.vg247.com' },
      { name: 'Rock Paper Shotgun', web: 'https://www.rockpapershotgun.com' },
      { name: 'Destructoid', web: 'https://www.destructoid.com' },
      { name: 'Game Rant', web: 'https://gamerant.com' },
      { name: 'TheGamer', web: 'https://www.thegamer.com' },
      { name: 'Dexerto', web: 'https://www.dexerto.com' },
    ],
  },
  {
    name: 'গেমিং ইউটিউব',
    items: [
      { name: 'Markiplier', web: 'https://www.youtube.com/@markiplier' },
      { name: 'PewDiePie', web: 'https://www.youtube.com/@PewDiePie' },
      { name: 'Ninja', web: 'https://www.youtube.com/@Ninja' },
      { name: 'Jacksepticeye', web: 'https://www.youtube.com/@jacksepticeye' },
      { name: 'Dream', web: 'https://www.youtube.com/@Dream' },
      { name: 'MrBeast Gaming', web: 'https://www.youtube.com/@MrBeastGaming' },
      { name: 'Valkyrae', web: 'https://www.youtube.com/@Valkyrae' },
      { name: 'Pokimane', web: 'https://www.youtube.com/@pokimane' },
      { name: 'Shroud', web: 'https://www.youtube.com/@shroud' },
      { name: 'Typical Gamer', web: 'https://www.youtube.com/@TypicalGamer' },
    ],
  },
  {
    name: 'গেমিং টুলস',
    items: [
      { name: 'Discord', web: 'https://discord.com' },
      { name: 'GameTracker', web: 'https://www.gametracker.com' },
      { name: 'SteamDB', web: 'https://steamdb.info' },
      { name: 'IsThereAnyDeal', web: 'https://isthereanydeal.com' },
      { name: 'HowLongToBeat', web: 'https://howlongtobeat.com' },
      { name: 'Metacritic Games', web: 'https://www.metacritic.com/game' },
      { name: 'OpenCritic', web: 'https://opencritic.com' },
      { name: 'ProtonDB', web: 'https://www.protondb.com' },
      { name: 'Can You Run It', web: 'https://www.systemrequirementslab.com/cyri' },
      { name: 'Medal.tv', web: 'https://medal.tv' },
    ],
  },
];

export default function GamesWorldPortal() {
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
        <ItemPanel items={selectedSub.items} title={`গেমস ওয়ার্ল্ড - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
}