import React, { useState } from "react";

/* =========================
   DATA
========================= */
const SHARE_CATEGORIES = [
  {
    category: "📘 সোশ্যাল মিডিয়া শেয়ার",
    color: "#1877f2",
    items: [
      { name: "Facebook",   url: "https://www.facebook.com/sharer/sharer.php", icon: "📘", desc: "বিশ্বের সবচেয়ে বড় সোশ্যাল নেটওয়ার্কে শেয়ার করুন" },
      { name: "Twitter / X", url: "https://twitter.com/intent/tweet",          icon: "🐦", desc: "X (Twitter)-এ মতামত ও লিঙ্ক শেয়ার করুন" },
      { name: "LinkedIn",   url: "https://www.linkedin.com/sharing/share-offsite", icon: "💼", desc: "প্রফেশনাল নেটওয়ার্কে শেয়ার করুন" },
      { name: "WhatsApp",   url: "https://api.whatsapp.com/send?text=",        icon: "💬", desc: "WhatsApp-এ বন্ধু ও পরিবারকে পাঠান" },
    ],
  },
  {
    category: "📁 ফাইল শেয়ারিং",
    color: "#f39c12",
    items: [
      { name: "Google Drive",  url: "https://drive.google.com",          icon: "🗂️", desc: "Google Drive-এ ফাইল আপলোড ও শেয়ার করুন" },
      { name: "Dropbox",       url: "https://www.dropbox.com",           icon: "📦", desc: "ক্লাউডে ফাইল সংরক্ষণ ও শেয়ারিং" },
      { name: "WeTransfer",    url: "https://wetransfer.com",            icon: "🚀", desc: "বড় ফাইল সহজেই পাঠান (২ GB পর্যন্ত)" },
      { name: "MediaFire",     url: "https://www.mediafire.com",         icon: "🔥", desc: "বিনামূল্যে ফাইল হোস্টিং ও শেয়ারিং" },
    ],
  },
  {
    category: "🎬 ভিডিও শেয়ার",
    color: "#e74c3c",
    items: [
      { name: "YouTube",    url: "https://www.youtube.com/upload",      icon: "▶️", desc: "ভিডিও আপলোড ও শেয়ার করুন" },
      { name: "TikTok",     url: "https://www.tiktok.com/upload",       icon: "🎵", desc: "শর্ট ভিডিও শেয়ার করুন" },
      { name: "Vimeo",      url: "https://vimeo.com",                   icon: "🎞️", desc: "হাই-কোয়ালিটি ভিডিও হোস্টিং" },
      { name: "Dailymotion",url: "https://www.dailymotion.com",         icon: "📹", desc: "বিকল্প ভিডিও প্ল্যাটফর্ম" },
    ],
  },
  {
    category: "🖼️ ছবি শেয়ার",
    color: "#9b59b6",
    items: [
      { name: "Imgur",      url: "https://imgur.com/upload",            icon: "🖼️", desc: "দ্রুত ছবি আপলোড ও শেয়ার করুন" },
      { name: "Pinterest",  url: "https://www.pinterest.com",           icon: "📌", desc: "ছবি সংগ্রহ ও শেয়ারিং" },
      { name: "Flickr",     url: "https://www.flickr.com",              icon: "📷", desc: "ফটোগ্রাফি কমিউনিটিতে শেয়ার করুন" },
      { name: "ImgBB",      url: "https://imgbb.com",                   icon: "🌅", desc: "বিনামূল্যে ইমেজ হোস্টিং সার্ভিস" },
    ],
  },
  {
    category: "💻 কোড শেয়ার",
    color: "#27ae60",
    items: [
      { name: "GitHub",     url: "https://github.com",                  icon: "🐙", desc: "কোড রিপোজিটরি ও প্রজেক্ট শেয়ারিং" },
      { name: "CodePen",    url: "https://codepen.io",                  icon: "✏️", desc: "HTML/CSS/JS সরাসরি শেয়ার করুন" },
      { name: "Pastebin",   url: "https://pastebin.com",                icon: "📋", desc: "টেক্সট ও কোড পেস্ট করে শেয়ার করুন" },
      { name: "JSFiddle",   url: "https://jsfiddle.net",                icon: "🎻", desc: "লাইভ JS কোড শেয়ার ও টেস্ট করুন" },
    ],
  },
  {
    category: "🔗 লিঙ্ক শর্টনার",
    color: "#16a085",
    items: [
      { name: "Bitly",      url: "https://bitly.com",                   icon: "✂️", desc: "লিঙ্ক ছোট করুন ও ট্র্যাক করুন" },
      { name: "TinyURL",    url: "https://tinyurl.com",                 icon: "🔗", desc: "দ্রুত লিঙ্ক শর্ট করার টুল" },
      { name: "Rebrandly",  url: "https://www.rebrandly.com",           icon: "🏷️", desc: "কাস্টম শর্ট লিঙ্ক তৈরি করুন" },
      { name: "Short.io",   url: "https://short.io",                    icon: "📎", desc: "ব্র্যান্ডেড লিঙ্ক শর্টনিং" },
    ],
  },
];

/* =========================
   COMPONENT
========================= */
const ShareWorld = () => {
  const [activeTab, setActiveTab]   = useState("all");
  const [search, setSearch]         = useState("");
  const [copied, setCopied]         = useState("");

  const tabs = [
    { key: "all",     label: "🌐 সব" },
    { key: "social",  label: "📘 সোশ্যাল" },
    { key: "file",    label: "📁 ফাইল" },
    { key: "video",   label: "🎬 ভিডিও" },
    { key: "image",   label: "🖼️ ছবি" },
    { key: "code",    label: "💻 কোড" },
    { key: "link",    label: "🔗 লিঙ্ক" },
  ];

  const tabMap = {
    all:    null,
    social: "📘 সোশ্যাল মিডিয়া শেয়ার",
    file:   "📁 ফাইল শেয়ারিং",
    video:  "🎬 ভিডিও শেয়ার",
    image:  "🖼️ ছবি শেয়ার",
    code:   "💻 কোড শেয়ার",
    link:   "🔗 লিঙ্ক শর্টনার",
  };

  const filtered = SHARE_CATEGORIES
    .filter(cat => activeTab === "all" || cat.category === tabMap[activeTab])
    .map(cat => ({
      ...cat,
      items: cat.items.filter(i =>
        i.name.toLowerCase().includes(search.toLowerCase()) ||
        i.desc.includes(search)
      ),
    }))
    .filter(cat => cat.items.length > 0);

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(url);
      setTimeout(() => setCopied(""), 2000);
    });
  };

  return (
    <div style={s.wrapper}>

      {/* ── BANNER ── */}
      <div style={s.banner}>
        <div style={s.bannerTitle}>🔗 শেয়ার ওয়ার্ল্ড</div>
        <div style={s.bannerSub}>যেকোনো কিছু যেকোনো জায়গায় শেয়ার করুন</div>
      </div>

      {/* ── SEARCH ── */}
      <input
        type="text"
        placeholder="🔍 সার্ভিস খুঁজুন..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={s.search}
      />

      {/* ── TABS ── */}
      <div style={s.tabRow}>
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{ ...s.tab, ...(activeTab === tab.key ? s.tabActive : {}) }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── CARDS ── */}
      {filtered.length === 0 && (
        <div style={{ textAlign: "center", color: "#999", padding: "30px 0", fontSize: 15 }}>
          ❌ কোনো ফলাফল পাওয়া যায়নি
        </div>
      )}

      {filtered.map((cat, ci) => (
        <div key={ci} style={s.catBlock}>
          <h3 style={{ ...s.catTitle, borderLeftColor: cat.color, color: cat.color }}>
            {cat.category}
          </h3>
          <div style={s.cardGrid}>
            {cat.items.map((item, ii) => (
              <div key={ii} style={s.card}
                onMouseOver={e => { e.currentTarget.style.borderColor = cat.color; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseOut={e  => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {/* Icon + Name */}
                <div style={s.cardHeader}>
                  <span style={s.cardIcon}>{item.icon}</span>
                  <span style={s.cardName}>{item.name}</span>
                </div>
                <p style={s.cardDesc}>{item.desc}</p>

                {/* Buttons */}
                <div style={s.btnRow}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ ...s.btn, background: cat.color, color: "#fff" }}
                  >
                    ভিজিট →
                  </a>
                  <button
                    onClick={() => handleCopy(item.url)}
                    style={{ ...s.btn, background: "#f0f4ff", color: cat.color, border: `1px solid ${cat.color}` }}
                  >
                    {copied === item.url ? "✅ Copied!" : "🔗 লিঙ্ক কপি"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
};

/* =========================
   STYLES
========================= */
const s = {
  wrapper:    { fontFamily: "'Noto Sans Bengali', sans-serif", padding: "10px 0" },
  banner:     { background: "linear-gradient(135deg, #2e2e8e, #1a1a5e)", borderRadius: 10, padding: "24px", textAlign: "center", marginBottom: 20 },
  bannerTitle:{ color: "#c5a059", fontSize: 26, fontWeight: "900", letterSpacing: 1, marginBottom: 6 },
  bannerSub:  { color: "#ffffff", fontSize: 14, opacity: 0.85 },
  search:     { width: "100%", padding: "10px 14px", border: "1px solid #ddd", borderRadius: 6, fontSize: 14, marginBottom: 14, boxSizing: "border-box", outline: "none" },
  tabRow:     { display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 },
  tab:        { padding: "7px 14px", border: "2px solid #e2e8f0", borderRadius: 6, cursor: "pointer", background: "#f8f9ff", color: "#555", fontSize: 12, fontWeight: "700", transition: "all 0.2s" },
  tabActive:  { background: "#2e2e8e", color: "#c5a059", border: "2px solid #2e2e8e" },
  catBlock:   { marginBottom: 28 },
  catTitle:   { fontSize: 15, fontWeight: "800", marginBottom: 12, borderLeft: "4px solid", paddingLeft: 10 },
  cardGrid:   { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 12 },
  card:       { padding: "16px", border: "1px solid #e2e8f0", borderRadius: 8, background: "#fff", transition: "all 0.2s", boxShadow: "0 2px 6px rgba(0,0,0,0.04)" },
  cardHeader: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8 },
  cardIcon:   { fontSize: 20 },
  cardName:   { color: "#1a1a2e", fontSize: 14, fontWeight: "800" },
  cardDesc:   { color: "#666", fontSize: 12, lineHeight: "1.5", margin: "0 0 12px 0" },
  btnRow:     { display: "flex", gap: 6 },
  btn:        { padding: "6px 12px", borderRadius: 5, fontSize: 12, fontWeight: "700", cursor: "pointer", textDecoration: "none", border: "none", transition: "opacity 0.2s" },
};

export default ShareWorld;