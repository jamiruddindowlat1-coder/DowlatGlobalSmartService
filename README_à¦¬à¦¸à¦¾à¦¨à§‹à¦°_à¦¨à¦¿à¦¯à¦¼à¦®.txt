DGSS SEO প্যাচ — কীভাবে বসাবেন
================================
এই ফোল্ডারে শুধু বদলানো বা নতুন ফাইল আছে। প্রজেক্ট ব্যাকআপ নিয়ে (বা Git কমিট করে) নিচের ফাইলগুলো একই পাথে কপি করুন (ওভাররাইট করুন):

নতুন ফাইল
  frontend/src/components/Seo.jsx
  frontend/src/seoConfig.js
  frontend/src/seoData.js          <- সব সার্ভিস পেজের বাংলা SEO title/description
  frontend/vite.config.js          <- আসল ডোমেইন থাকলে robots.txt ও sitemap.xml তৈরি করে

বদলানো ফাইল
  frontend/index.html              <- প্রাথমিক Meta ও noscript
  frontend/src/pages/Home.jsx      <- URL-চালিত সেকশন, ক্রলযোগ্য লিংক, প্রতি পেজে Title/Description

এরপর করণীয়
  1) ডোমেইন কেনা/কনফিগার করার পর Cloudflare Pages-এর build settings-এ:
     - Root directory: frontend
     - Build command: npm run build
     - Build output directory: dist
     - Environment variable: VITE_SITE_URL=https://আপনার-আসল-ডোমেইন (HTTPS origin, শেষে / নয়)
  2) cd frontend && npm run dev চালিয়ে পরীক্ষা করুন:
     - মেনুতে ক্লিক করলে ঠিকানা বদলায় (যেমন /service/dhaka)
     - ঠিকানা সরাসরি ব্রাউজারে দিলে ওই সেকশন খোলে
     - ট্যাবের Title প্রতিটি সেকশনে আলাদা হয়
     - মেনুর রঙ ও স্টাইল আগের মতোই আছে কি না দেখুন (<div> এর বদলে <a> ব্যবহার হয়েছে)
  3) আসল VITE_SITE_URL সেট করে npm run build চালান; dist-এ robots.txt ও sitemap.xml তৈরি হবে
  4) হোস্ট করার সময় সার্ভারে SPA fallback (অজানা পাথে index.html) দিন
  5) Google Search Console-এ সাইট verify করে https://আপনার-আসল-ডোমেইন/sitemap.xml submit করুন
     এবং URL Inspection-এর Live Test দিয়ে home ও service URL যাচাই করুন।

নোট: React SPA-তে route-এর title/description browser-এ JavaScript চালানোর পর বদলায়।
View Source-এ প্রতিটি route-এর আলাদা metadata দরকার হলে prerendering বা SSR যুক্ত করতে হবে;
Google Search Console-এ live URL পরীক্ষা না করে indexing নিশ্চিত বলা যাবে না।
