import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = "#1abc9c";
const ICON = "🏛️";

const subCategories = [
  // ===================== সরকারি স্কুল (জেলা অনুযায়ী) =====================
  {
    name: "সরকারি স্কুল (খুলনা)",
    items: [
      { name: "খুলনা জিলা স্কুল", web: "https://khulnazillaschool.jessoreboard.gov.bd/" }, // ✅
      { name: "খুলনা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://khulnagovtgirlshighschool.jessoreboard.gov.bd/" }, // ✅ FB
      { name: "খুলনা সরকারি করোনেশন মাধ্যমিক বিদ্যালয়", web: "https://www.facebook.com/Govt.CoronationGirlsHighSchoolKhulnaa" }, // ✅ FB
      { name: "সুন্দরবন আদর্শ মাধ্যমিক বিদ্যালয় (খুলনা)", web: "https://sundarbanadarshasecondaryschool.jessoreboard.gov.bd/" }, // fallback
    ]
  },
  {
    name: "সরকারি স্কুল (বাগেরহাট)",
    items: [
      { name: "বাগেরহাট জিলা স্কুল", web: "https://bagerhatgovtsecondaryschool.jessoreboard.gov.bd" }, // ✅
      { name: "বাগেরহাট সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://bagerhatgovtgirlshighschool.jessoreboard.gov.bd" }, // ✅
      { name: "মোড়েলগঞ্জ পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.facebook.com/aclahaschool/" }, // fallback
    ]
  },
  {
    name: "সরকারি স্কুল (সাতক্ষীরা)",
    items: [
      { name: "সাতক্ষীরা জিলা স্কুল", web: "https://satkhiragovthighschool.jessoreboard.gov.bd" }, // ✅
      { name: "সাতক্ষীরা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://satkhiragovtgirlshighschool.jessoreboard.gov.bd" }, // ✅
      { name: "কালীগঞ্জ পাইলট মাধ্যমিক বিদ্যালয়", web: "https://govtkaliganjsecondaryschool.jessoreboard.gov.bd/" }, // fallback
    ]
  },
  {
    name: "সরকারি স্কুল (যশোর)",
    items: [
      { name: "যশোর জিলা স্কুল", web: "https://jashorezillaschool.jessoreboard.gov.bd" }, // ✅
      { name: "যশোর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://www.jessoregovtgirlshighschool.edu.bd" }, // ✅
      { name: "অভয়নগর পাইলট মাধ্যমিক বিদ্যালয়", web: "https://service.scouts.gov.bd/unit-details/8748" }, // fallback
      { name: "চৌগাছা পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.cgspmss.edu.bd/" }, // fallback
    ]
  },
  {
    name: "সরকারি স্কুল (নড়াইল)",
    items: [
      { name: "নড়াইল জিলা স্কুল", web: "https://narailgovtsecondaryschool.jessoreboard.gov.bd" }, // ✅
      { name: "নড়াইল সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://narailgovtgirlshighschool.jessoreboard.gov.bd" }, // ✅
      { name: "লোহাগড়া পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.facebook.com/LGPHS.EDU.1902" }, // ✅ FB
    ]
  },
  {
    name: "সরকারি স্কুল (মাগুরা)",
    items: [
      { name: "মাগুরা সরকারি উচ্চ বিদ্যালয়", web: "https://maguragovthighschool.jessoreboard.gov.bd" }, // ✅
      { name: "মাগুরা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://maguragovtgirlshighschool.jessoreboard.gov.bd" }, // ✅
      { name: "শালিখা পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.facebook.com/100053698703999/posts/1727691690805702/https://www.dshe.gov.bd" }, // fallback
    ]
  },
  {
    name: "সরকারি স্কুল (ঝিনাইদহ)",
    items: [
      { name: "ঝিনাইদহ সরকারি উচ্চ বিদ্যালয়", web: "https://jhenidahgovtsecondaryschool.jessoreboard.gov.bd" }, // ✅
      { name: "ঝিনাইদহ সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://jhenidahgovtsecondarygirlsschool.jessoreboard.gov.bd" }, // ✅
      { name: "কালীগঞ্জ পাইলট মাধ্যমিক বিদ্যালয় (ঝিনাইদহ)", web: "https://spgss.edu.bd/" }, // fallback
    ]
  },
  {
    name: "সরকারি স্কুল (কুষ্টিয়া)",
    items: [
      { name: "কুষ্টিয়া জিলা স্কুল", web: "https://kushtiazillaschool.edu.bd" }, // ✅
      { name: "কুষ্টিয়া সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://kushtiagovtsecondarygirlsschool.jessoreboard.gov.bd" }, // ✅
      { name: "কুমারখালী পাইলট মাধ্যমিক বিদ্যালয়", web: "https://kumarkhalimnsecondaryschool.jessoreboard.gov.bd" }, // ✅
    ]
  },
  {
    name: "সরকারি স্কুল (চুয়াডাঙ্গা)",
    items: [
      { name: "চুয়াডাঙ্গা সরকারি উচ্চ বিদ্যালয়", web: "https://vjghs.edu.bd" }, // ✅ (ভিক্টোরিয়া জুবিলি)
      { name: "চুয়াডাঙ্গা সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://chuadangagovtgirlshighschool.jessoreboard.gov.bd" }, // ✅
      { name: "আলমডাঙ্গা পাইলট মাধ্যমিক বিদ্যালয়", web: "https://agsc.edu.bd/" }, // fallback
    ]
  },
  {
    name: "সরকারি স্কুল (মেহেরপুর)",
    items: [
      { name: "মেহেরপুর সরকারি উচ্চ বিদ্যালয়", web: "https://meherpurgovthighschool.jessoreboard.gov.bd" }, // ✅
      { name: "মেহেরপুর সরকারি বালিকা উচ্চ বিদ্যালয়", web: "https://meherpurgovtgirlsschool.jessoreboard.gov.bd" }, // ✅
      { name: "গাংনী পাইলট মাধ্যমিক বিদ্যালয়", web: "https://www.facebook.com/100064235195937" }, // ✅ FB
    ]
  },

  // ===================== বেসরকারি স্কুল =====================
  {
    name: "বেসরকারি স্কুল",
    items: [
      { name: "খুলনা পাবলিক কলেজ", web: "https://www.kpcbd.edu.bd" }, // ✅
      { name: "বিএল কলেজ (খুলনা)", web: "https://www.blcollege.edu.bd" }, // ✅
      { name: "দাউদ পাবলিক স্কুল এন্ড কলেজ (যশোর)", web: "https://dpsc.edu.bd/" }, // ✅
      { name: "কুষ্টিয়া ইসলামিয়া কলেজ", web: "https://kic.edu.bd" }, // ✅
      { name: "ধুমঘাট আদর্শ উচ্চ বিদ্যালয়, শ্যামনগর, সাতক্ষীরা", web: "https://service.scouts.gov.bd/group-details/35754" }, // fallback
      { name: "পলাশপোল আর্দশ উচ্চ বিদ্যালয়, সাতক্ষীরা,", web: "https://www.facebook.com/polashpolehighschool/?locale=bn_IN" },
    ]
  },

  // ===================== সরকারি কলেজ =====================
  {
    name: "খুলনা জেলা",
    items: [
      { name: "খুলনা সরকারি কলেজ", web: "http://www.khlgcedubd.org" }, // ✅
      { name: "খুলনা সরকারি বি.এল. কলেজ", web: "https://www.blcollege.edu.bd" }, // ✅
      { name: "সরকারি আজম খান কমার্স কলেজ", web: "https://www.akcc.gov.bd/" }, // fallback
      { name: "খুলনা সরকারি মহিলা কলেজ", web: "https://kgmc.ac.bd/" }, // fallback
    ]
  },
  {
    name: "যশোর জেলা",
    items: [
      { name: "যশোর সরকারি মাইকেল মধুসূদন কলেজ", web: "https://www.mmcollege.edu.bd" }, // ✅
      { name: "যশোর সরকারি মহিলা কলেজ", web: "http://www.jgmc.gov.bd" }, // ✅
      { name: "যশোর সরকারি সিটি কলেজ", web: "https://www.facebook.com/Jashore.Government.CityCollege/https://www.dshe.gov.bd" }, // fallback
    ]
  },
  {
    name: "কুষ্টিয়া জেলা",
    items: [
      { name: "কুষ্টিয়া সরকারি কলেজ", web: "https://kushtiagovcollege.edu.bd/" }, // fallback
      { name: "কুষ্টিয়া সরকারি মহিলা কলেজ", web: "https://kmc.edu.bd/" }, // fallback
      { name: "খোকসা সরকারি কলেজ", web: "https://kgck.edu.bd" }, // ✅
    ]
  },
  {
    name: "সাতক্ষীরা জেলা",
    items: [
      { name: "সাতক্ষীরা সরকারি কলেজ", web: "https://www.satkhiragovtcollege.edu.bd/" }, // fallback
      { name: "সাতক্ষীরা সরকারি মহিলা কলেজ", web: "https://satkhiragovernmentmohilacollege.jessoreboard.gov.bd/" }, // fallback
      { name: "তালা সরকারি কলেজ", web: "https://talagovernmentcollege.jessoreboard.gov.bd/" }, // fallback
      { name: "কালারোয়া সরকারি কলেজ", web: "https://www.kalaroagc.edu.bd/ems/" }, // fallback
    ]
  },
  {
    name: "বাগেরহাট জেলা",
    items: [
      { name: "বাগেরহাট সরকারি পিসি কলেজ", web: "https://www.dshe.gov.bd" }, // fallback
      { name: "বাগেরহাট সরকারি মহিলা কলেজ", web: "https://www.dshe.gov.bd" }, // fallback
      { name: "মংলা সরকারি কলেজ", web: "https://www.dshe.gov.bd" }, // fallback
    ]
  },
  {
    name: "ঝিনাইদহ জেলা",
    items: [
      { name: "ঝিনাইদহ সরকারি কে.সি. কলেজ", web: "https://www.kccollege.edu.bd/" }, // fallback
      { name: "ঝিনাইদহ সরকারি মহিলা কলেজ", web: "https://nurunnaharmohilacollege.edu.bd/" }, // fallback
      { name: "সরকারি বীরশ্রেষ্ঠ শহীদ হামিদুর রহমান কলেজ", web: "http://www.gbshrdc.edu.bd" }, // ✅
    ]
  },
  {
    name: "নড়াইল জেলা",
    items: [
      { name: "নড়াইল সরকারি ভিক্টোরিয়া কলেজ", web: "https://ngvc.college.gov.bd/" }, // fallback
      { name: "নড়াইল সরকারি মহিলা কলেজ", web: "https://ngmcollege.edu.bd/" }, // fallback
    ]
  },
  {
    name: "মাগুরা জেলা",
    items: [
      { name: "মাগুরা সরকারি হোসেন শহীদ সোহরাওয়ার্দী কলেজ", web: "https://gssc.college.gov.bd/" }, // fallback
      { name: "মাগুরা সরকারি মহিলা কলেজ", web: "https://maguragovtmahilacollege.jessoreboard.gov.bd/" }, // fallback
    ]
  },
  {
    name: "চুয়াডাঙ্গা জেলা",
    items: [
      { name: "চুয়াডাঙ্গা সরকারি কলেজ", web: "https://cgc.college.gov.bd/" }, // fallback
      { name: "চুয়াডাঙ্গা সরকারি মহিলা কলেজ", web: "https://amcchuadanga.gov.bd/" }, // fallback
    ]
  },
  {
    name: "মেহেরপুর জেলা",
    items: [
      { name: "মেহেরপুর সরকারি কলেজ", web: "https://www.mgc.edu.bd/" }, // fallback
      { name: "মেহেরপুর সরকারি মহিলা কলেজ", web: "https://mgmcollege.edu.bd/" }, // fallback
    ]
  },

  // ===================== বেসরকারি কলেজ =====================
  {
    name: "বেসরকারি কলেজ (খুলনা বিভাগ)",
    items: [
      { name: "খুলনা আজম খান কমার্স কলেজ", web: "https://www.akcc.gov.bd/" }, // fallback
      { name: "দৌলতপুর মুসলিম পাইলট কলেজ", web: "https://www.facebook.com/dpghs117529/?locale=bn_INhttps://www.dshe.gov.bd" }, // fallback
      { name: "যশোর ক্যান্টনমেন্ট কলেজ", web: "https://ccj.edu.bd/bn/home-bn/" }, // ✅
      { name: "কুষ্টিয়া সিটি কলেজ", web: "https://kushtiacitycollege.jessoreboard.gov.bd/" }, // fallback
      { name: "সাতক্ষীরা মডেল কলেজ", web: "https://www.facebook.com/srmsc.bd/" }, // fallback
      { name: "খুলনা পাবলিক কলেজ", web: "https://www.khulnapubliccollege.edu.bd" }, // ✅
      { name: "বাগেরহাট আইডিয়াল কলেজ", web: "https://sii.edu.bd/page/home" }, // fallback
      { name: "যশোর আইডিয়াল কলেজ", web: "https://www.facebook.com/profile.php?id=100069912731135#" }, // fallback
      { name: "ঝিনাইদহ আইডিয়াল কলেজ", web: "https://www.facebook.com/Jhenaidahidealnursinginstitute/" }, // fallback
      { name: "মাগুরা আইডিয়াল কলেজ", web: "https://www.facebook.com/p/%E0%A6%AE%E0%A6%BE%E0%A6%97%E0%A7%81%E0%A6%B0%E0%A6%BE-%E0%A6%86%E0%A6%87%E0%A6%A1%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%B2-%E0%A6%9F%E0%A7%87%E0%A6%95%E0%A6%A8%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2-%E0%A6%AC%E0%A6%BF%E0%A6%8F%E0%A6%AE-%E0%A6%95%E0%A6%B2%E0%A7%87%E0%A6%9C-100063855278498/" }, // fallback
    ]
  },

  // ===================== মাদ্রাসা =====================
  {
    name: "মাদ্রাসা (খুলনা বিভাগ)",
    items: [
      { name: "খুলনা সরকারি আলিয়া মাদ্রাসা", web: "https://kakm.edu.bd/" }, // ✅ official board
      { name: "যশোর সরকারি কামিল (এম.এ.) মাদ্রাসা", web: "https://116052.ebmeb.gov.bd/" }, // ✅
      { name: "কুষ্টিয়া সরকারি আলিয়া মাদ্রাসা", web: "https://www.facebook.com/kushtiaaliamadrasah/?locale=bn_IN" }, // ✅
      { name: "কুষ্টিয়া সরকারি কামিল মাদ্রাসা", web: "https://www.kuatulislam.edu.bd/" }, // ✅
      { name: "সাতক্ষীরা সরকারি আলিয়া মাদ্রাসা", web: "https://dme.gov.bd/pages/notices/691998c681fc96cef9e5fcb2" }, // ✅
      { name: "বাগেরহাট সরকারি আলিয়া মাদ্রাসা", web: "https://114809.ebmeb.gov.bd/" }, // ✅
      { name: "ঝিনাইদহ সরকারি কেসি কামিল মাদ্রাসা", web: "https://www.kccollege.edu.bd/" }, // ✅
      { name: "নড়াইল ইসলামীয়া ফাজিল মাদ্রাসা", web: "https://www.facebook.com/Nifmc/" }, // ✅
      { name: "আলাইপুর আলিম মাদ্রাসা", web: "http://alaipuram.edu.bd/site-section-view.php?page_id=8" }, // ✅
      { name: "চুয়াডাঙ্গা কামিল মাদ্রাসা", web: "https://www.facebook.com/groups/756983732872518/" }, // ✅
      { name: "মেহেরপুর সরকারি আলিয়া মাদ্রাসা", web: "https://www.facebook.com/Alia.Madrasha.Meherpur/" }, // ✅
    ]
  },

  // ===================== সরকারি বিশ্ববিদ্যালয় =====================
  {
    name: "সরকারি বিশ্ববিদ্যালয় (খুলনা বিভাগ)",
    items: [
      { name: "খুলনা বিশ্ববিদ্যালয়", web: "https://ku.ac.bd/" }, // ✅
      { name: "খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (KUET)", web: "https://www.kuet.ac.bd" }, // ✅
      { name: "ইসলামী বিশ্ববিদ্যালয়, কুষ্টিয়া", web: "https://www.iu.ac.bd" }, // ✅
    ]
  },
  {
    name: "সরকারি মেডিকেল কলেজ (খুলনা বিভাগ)",
    items: [
      { name: "খুলনা মেডিকেল কলেজ", web: "https://kmc.college.gov.bd/" }, // fallback
      { name: "শেখ হাসিনা মেডিকেল কলেজ, যশোর", web: "https://shmc.portal.gov.bd/" }, // fallback
      { name: "কুষ্টিয়া মেডিকেল কলেজ", web: "https://www.kumc.edu.bd/" }, // fallback
      { name: "সাতক্ষীরা মেডিকেল কলেজ", web: "https://satkhiramc.gov.bd/" }, // fallback
    ]
  },

  // ===================== বেসরকারি বিশ্ববিদ্যালয় =====================
  {
    name: "বেসরকারি বিশ্ববিদ্যালয় (খুলনা বিভাগ)",
    items: [
      { name: "নর্দার্ন ইউনিভার্সিটি অব বিজনেস এন্ড টেকনোলজি, খুলনা", web: "https://www.nubtkhulna.ac.bd" }, // ✅
      { name: "খুলনা ইন্টারন্যাশনাল ইউনিভার্সিটি", web: "https://www.kiu.ac.bd" }, // ✅
      { name: "নর্থ ওয়েস্টার্ন ইউনিভার্সিটি, খুলনা", web: "https://www.nwu.ac.bd" }, // ✅
    ]
  },

  // ===================== উপজেলা =====================
  {
    name: "উপজেলা (খুলনা বিভাগ)",
    items: [
      // ───── খুলনা ─────
      { name: "খুলনা সদর উপজেলা", web: "https://sadar.khulna.gov.bd" }, // ✅
      { name: "বটিয়াঘাটা উপজেলা", web: "https://batiaghata.khulna.gov.bd" }, // ✅
      { name: "ডুমুরিয়া উপজেলা", web: "https://dumuria.khulna.gov.bd" }, // ✅
      { name: "দিঘলিয়া উপজেলা", web: "https://dighalia.khulna.gov.bd" }, // ✅
      { name: "পাইকগাছা উপজেলা", web: "https://paikgacha.khulna.gov.bd" }, // ✅
      { name: "ফুলতলা উপজেলা", web: "https://phultala.khulna.gov.bd" }, // ✅
      { name: "তেরখাদা উপজেলা", web: "https://terokhada.khulna.gov.bd" }, // ✅
      { name: "দাকোপ উপজেলা", web: "https://dacope.khulna.gov.bd" }, // ✅
      { name: "কয়রা উপজেলা", web: "https://koyra.khulna.gov.bd" }, // ✅
      // ───── যশোর ─────
      { name: "যশোর সদর উপজেলা", web: "https://sadar.jashore.gov.bd" }, // ✅
      { name: "অভয়নগর উপজেলা", web: "https://abhaynagar.jashore.gov.bd" }, // ✅
      { name: "বাঘারপাড়া উপজেলা", web: "https://bagherpara.jashore.gov.bd" }, // ✅
      { name: "চৌগাছা উপজেলা", web: "https://chougachha.jashore.gov.bd" }, // ✅
      { name: "ঝিকরগাছা উপজেলা", web: "https://jhikargacha.jashore.gov.bd" }, // ✅
      { name: "কেশবপুর উপজেলা", web: "https://keshabpur.jashore.gov.bd" }, // ✅
      { name: "মনিরামপুর উপজেলা", web: "https://manirampur.jashore.gov.bd" }, // ✅
      { name: "শার্শা উপজেলা", web: "https://sharsa.jashore.gov.bd" }, // ✅
      // ───── কুষ্টিয়া ─────
      { name: "কুষ্টিয়া সদর উপজেলা", web: "https://sadar.kushtia.gov.bd" }, // ✅
      { name: "কুমারখালী উপজেলা", web: "https://kumarkhali.kushtia.gov.bd" }, // ✅
      { name: "খোকসা উপজেলা", web: "https://khoksa.kushtia.gov.bd" }, // ✅
      { name: "দৌলতপুর উপজেলা", web: "https://daulatpur.kushtia.gov.bd" }, // ✅
      { name: "মিরপুর উপজেলা", web: "https://mirpur.kushtia.gov.bd" }, // ✅
      { name: "ভেড়ামারা উপজেলা", web: "https://bheramara.kushtia.gov.bd" }, // ✅
      // ───── সাতক্ষীরা ─────
      { name: "সাতক্ষীরা সদর উপজেলা", web: "https://sadar.satkhira.gov.bd" }, // ✅
      { name: "আশাশুনি উপজেলা", web: "https://assasuni.satkhira.gov.bd" }, // ✅
      { name: "দেবহাটা উপজেলা", web: "https://debhata.satkhira.gov.bd" }, // ✅
      { name: "কালিগঞ্জ উপজেলা", web: "https://kaliganj.satkhira.gov.bd" }, // ✅
      { name: "কলারোয়া উপজেলা", web: "https://kalaroa.satkhira.gov.bd" }, // ✅
      { name: "শ্যামনগর উপজেলা", web: "https://shyamnagar.satkhira.gov.bd" }, // ✅
      { name: "তালা উপজেলা", web: "https://tala.satkhira.gov.bd" }, // ✅
      // ───── বাগেরহাট ─────
      { name: "বাগেরহাট সদর উপজেলা", web: "https://sadar.bagerhat.gov.bd" }, // ✅
      { name: "ফকিরহাট উপজেলা", web: "https://fakirhat.bagerhat.gov.bd" }, // ✅
      { name: "মোংলা উপজেলা", web: "https://mongla.bagerhat.gov.bd" }, // ✅
      { name: "মোরেলগঞ্জ উপজেলা", web: "https://morrelganj.bagerhat.gov.bd" }, // ✅
      { name: "রামপাল উপজেলা", web: "https://rampal.bagerhat.gov.bd" }, // ✅
      { name: "শরণখোলা উপজেলা", web: "https://sarankhola.bagerhat.gov.bd" }, // ✅
      // ───── ঝিনাইদহ ─────
      { name: "ঝিনাইদহ সদর উপজেলা", web: "https://sadar.jhenaidah.gov.bd" }, // ✅
      { name: "কালীগঞ্জ উপজেলা", web: "https://kaliganj.jhenaidah.gov.bd" }, // ✅
      { name: "কোটচাঁদপুর উপজেলা", web: "https://kotchandpur.jhenaidah.gov.bd" }, // ✅
      { name: "মহেশপুর উপজেলা", web: "https://maheshpur.jhenaidah.gov.bd" }, // ✅
      { name: "শৈলকুপা উপজেলা", web: "https://shailkupa.jhenaidah.gov.bd" }, // ✅
      { name: "হরিণাকুন্ডু উপজেলা", web: "https://harinakundu.jhenaidah.gov.bd" }, // ✅
      // ───── নড়াইল ─────
      { name: "নড়াইল সদর উপজেলা", web: "https://narailsadar.narail.gov.bd/" }, // ✅
      { name: "লোহাগড়া উপজেলা", web: "https://lohagara.narail.gov.bd" }, // ✅
      { name: "কালিয়া উপজেলা", web: "https://kalia.narail.gov.bd" }, // ✅
      // ───── মাগুরা ─────
      { name: "মাগুরা সদর উপজেলা", web: "https://sadar.magura.gov.bd" }, // ✅
      { name: "শালিখা উপজেলা", web: "https://shalikha.magura.gov.bd" }, // ✅
      { name: "শ্রীপুর উপজেলা", web: "https://sreepur.magura.gov.bd" }, // ✅
      { name: "মোহাম্মদপুর উপজেলা", web: "https://mohammadpur.magura.gov.bd" }, // ✅
      // ───── চুয়াডাঙ্গা ─────
      { name: "চুয়াডাঙ্গা সদর উপজেলা", web: "https://sadar.chuadanga.gov.bd" }, // ✅
      { name: "আলমডাঙ্গা উপজেলা", web: "https://alamdanga.chuadanga.gov.bd" }, // ✅
      { name: "দামুড়হুদা উপজেলা", web: "https://damurhuda.chuadanga.gov.bd" }, // ✅
      { name: "জীবননগর উপজেলা", web: "https://jibanagar.chuadanga.gov.bd" }, // ✅
      // ───── মেহেরপুর ─────
      { name: "মেহেরপুর সদর উপজেলা", web: "https://sadar.meherpur.gov.bd" }, // ✅
      { name: "গাংনী উপজেলা", web: "https://gangni.meherpur.gov.bd" }, // ✅
      { name: "মুজিবনগর উপজেলা", web: "https://mujibnagar.meherpur.gov.bd" }, // ✅
    ]
  },

  // ===================== থানা =====================
  {
    name: "থানা (খুলনা বিভাগ)",
    items: [
      { name: "খুলনা সদর থানা", web: "https://kmp.police.gov.bd/range-units/khulna%20Sadar" },
      { name: "সোনাডাঙ্গা থানা", web: "https://bn.banglapedia.org/index.php?title=%E0%A6%B8%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%A1%E0%A6%BE%E0%A6%99%E0%A7%8D%E0%A6%97%E0%A6%BE_%E0%A6%A5%E0%A6%BE%E0%A6%A8%E0%A6%BE" },
      { name: "খালিশপুর থানা", web: "https://bn.banglapedia.org/index.php?title=%E0%A6%96%E0%A6%BE%E0%A6%B2%E0%A6%BF%E0%A6%B6%E0%A6%AA%E0%A7%81%E0%A6%B0_%E0%A6%A5%E0%A6%BE%E0%A6%A8%E0%A6%BE" },
      { name: "দৌলতপুর থানা", web: "https://police.daulatpur.manikganj.gov.bd/" },
      { name: "রূপসা থানা", web: "https://police.rupsha.khulna.gov.bd/" },
      { name: "বটিয়াঘাটা থানা", web: "https://police.botiaghata.khulna.gov.bd/" },
      { name: "ডুমুরিয়া থানা", web: "https://police.dumuria.khulna.gov.bd/" },
      { name: "পাইকগাছা থানা", web: "https://police.paikgasa.khulna.gov.bd/" },
      { name: "কয়রা থানা", web: "https://police.koyra.khulna.gov.bd/" },
      { name: "তেরখাদা থানা", web: "https://terokhada.khulna.gov.bd/" },
      { name: "দিঘলিয়া থানা", web: "https://police.digholia.khulna.gov.bd/" },
      { name: "যশোর কোতয়ালি থানা", web: "https://www.facebook.com/KotwaliModelPS/" },
      { name: "অভয়নগর থানা", web: "https://abhaynagar.jessore.gov.bd/" },
      { name: "বাঘারপাড়া থানা", web: "https://bagherpara.jessore.gov.bd/" },
      { name: "চৌগাছা থানা", web: "https://police.chougachha.jessore.gov.bd/" },
      { name: "ঝিকরগাছা থানা", web: "https://jhikargacha.jessore.gov.bd/" },
      { name: "কেশবপুর থানা", web: "https://police.keshabpur.jessore.gov.bd/" },
      { name: "মনিরামপুর থানা", web: "https://police.manirampur.jessore.gov.bd/" },
      { name: "শার্শা থানা", web: "https://www.police.gov.bd" },
      { name: "কুষ্টিয়া কোতয়ালি থানা", web: "https://bn.wikipedia.org/wiki/%E0%A6%95%E0%A7%8B%E0%A6%A4%E0%A7%8B%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B2%E0%A7%80_%E0%A6%A5%E0%A6%BE%E0%A6%A8%E0%A6%BE" },
      { name: "কুমারখালী থানা", web: "https://police.kumarkhali.kushtia.gov.bd/" },
      { name: "খোকসা থানা", web: "https://police.khoksa.kushtia.gov.bd/" },
      { name: "মিরপুর থানা", web: "https://police.mirpur.kushtia.gov.bd/" },
      { name: "দৌলতপুর থানা (কুষ্টিয়া)", web: "https://police.daulatpur.kushtia.gov.bd/" },
      { name: "ভেড়ামারা থানা", web: "https://police.bheramara.kushtia.gov.bd/" },
      { name: "সাতক্ষীরা সদর থানা", web: "https://police.satkhirasadar.satkhira.gov.bd/" },
      { name: "তালা থানা", web: "https://tala.satkhira.gov.bd/" },
      { name: "কালিগঞ্জ থানা", web: "https://police.kaliganj.lalmonirhat.gov.bd/" },
      { name: "শ্যামনগর থানা", web: "https://police.shyamnagar.satkhira.gov.bd/" },
      { name: "দেবহাটা থানা", web: "https://debhata.satkhira.gov.bd/" },
      { name: "আশাশুনি থানা", web: "https://police.assasuni.satkhira.gov.bd/" },
      { name: "কলারোয়া থানা", web: "https://kalaroa.satkhira.gov.bd/" },
      { name: "বাগেরহাট সদর থানা", web: "https://sadar.bagerhat.gov.bd/" },
      { name: "মোড়েলগঞ্জ থানা", web: "https://police.morrelganj.bagerhat.gov.bd/" },
      { name: "শরণখোলা থানা", web: "https://sarankhola.bagerhat.gov.bd/" },
      { name: "কচুয়া থানা", web: "https://kachua.chandpur.gov.bd/" },
      { name: "ফকিরহাট থানা", web: "https://police.fakirhat.bagerhat.gov.bd/" },
      { name: "মোল্লাহাট থানা", web: "https://police.mollahat.bagerhat.gov.bd/" },
      { name: "চিতলমারী থানা", web: "https://chitalmari.bagerhat.gov.bd/" },
      { name: "রামপাল থানা", web: "https://rampal.bagerhat.gov.bd/" },
      { name: "মোংলা থানা", web: "https://mongla.bagerhat.gov.bd/" },
      { name: "ঝিনাইদহ সদর থানা", web: "https://sadar.jhenaidah.gov.bd/" },
      { name: "কালীগঞ্জ থানা (ঝিনাইদহ)", web: "https://police.kaliganj.jhenaidah.gov.bd/" },
      { name: "কোটচাঁদপুর থানা", web: "https://kotchandpur.jhenaidah.gov.bd/" },
      { name: "মহেশপুর থানা", web: "https://police.moheshpur.jhenaidah.gov.bd/" },
      { name: "শৈলকূপা থানা", web: "https://shailkupa.jhenaidah.gov.bd/" },
      { name: "হরিণাকুন্ডু থানা", web: "https://harinakundu.jhenaidah.gov.bd/" },
      { name: "নড়াইল সদর থানা", web: "https://police.narailsadar.narail.gov.bd/" },
      { name: "লোহাগড়া থানা", web: "https://lohagara.narail.gov.bd/" },
      { name: "কালিয়া থানা", web: "https://kalia.narail.gov.bd/" },
      { name: "মাগুরা সদর থানা", web: "https://police.magurasadar.magura.gov.bd/https://www.police.gov.bd" },
      { name: "শালিখা থানা", web: "https://police.shalikha.magura.gov.bd/" },
      { name: "শ্রীপুর থানা", web: "https://police.sreepur.magura.gov.bd/" },
      { name: "মোহাম্মদপুর থানা", web: "https://police.mohammadpur.magura.gov.bd/" },
      { name: "চুয়াডাঙ্গা সদর থানা", web: "https://police.chuadangasadar.chuadanga.gov.bd/" },
      { name: "আলমডাঙ্গা থানা", web: "https://alamdanga.chuadanga.gov.bd/" },
      { name: "দামুড়হুদা থানা", web: "https://police.damurhuda.chuadanga.gov.bd/" },
      { name: "জীবননগর থানা", web: "https://police.jibannagar.chuadanga.gov.bd/" },
      { name: "মেহেরপুর সদর থানা", web: "https://police.meherpursadar.meherpur.gov.bd/" },
      { name: "গাংনী থানা", web: "https://police.gangni.meherpur.gov.bd/" },
      { name: "মুজিবনগর থানা", web: "https://police.mujibnagar.meherpur.gov.bd/" },
    ]
  },

  // ===================== ব্যাংক =====================
  {
    name: "ব্যাংক (বাংলাদেশ)",
    items: [
      { name: "সোনালী ব্যাংক", web: "https://www.sonalibank.com.bd" }, // ✅
      { name: "জনতা ব্যাংক", web: "https://www.jb.com.bd" }, // ✅
      { name: "অগ্রণী ব্যাংক", web: "https://www.agranibank.org" }, // ✅
      { name: "রূপালী ব্যাংক", web: "https://www.rupalibank.org" }, // ✅
      { name: "বাংলাদেশ ডেভেলপমেন্ট ব্যাংক", web: "https://www.bdbank.org.bd" }, // ✅
      { name: "বাংলাদেশ কৃষি ব্যাংক", web: "https://www.krishibank.org.bd" }, // ✅
      { name: "রাজশাহী কৃষি উন্নয়ন ব্যাংক (RAKUB)", web: "https://www.rakub.org.bd" }, // ✅
      { name: "ইসলামী ব্যাংক বাংলাদেশ", web: "https://www.islamibankbd.com" }, // ✅
      { name: "ডাচ-বাংলা ব্যাংক", web: "https://www.dutchbanglabank.com" }, // ✅
      { name: "ব্র্যাক ব্যাংক", web: "https://www.bracbank.com" }, // ✅
      { name: "প্রাইম ব্যাংক", web: "https://www.primebank.com.bd" }, // ✅
      { name: "ব্যাংক এশিয়া", web: "https://www.bankasia-bd.com" }, // ✅
      { name: "ইউনাইটেড কমার্শিয়াল ব্যাংক (UCB)", web: "https://www.ucb.com.bd" }, // ✅
      { name: "সিটি ব্যাংক", web: "https://www.thecitybank.com" }, // ✅
      { name: "ইস্টার্ন ব্যাংক (EBL)", web: "https://www.ebl.com.bd" }, // ✅
      { name: "সাউথইস্ট ব্যাংক", web: "https://www.southeastbank.com.bd" }, // ✅
      { name: "মার্কেন্টাইল ব্যাংক", web: "https://www.mblbd.com" }, // ✅
      { name: "স্ট্যান্ডার্ড ব্যাংক", web: "https://www.standardbankbd.com" }, // ✅
      { name: "ন্যাশনাল ব্যাংক", web: "https://www.nblbd.com" }, // ✅
      { name: "IFIC ব্যাংক", web: "https://www.ificbank.com.bd" }, // ✅
      { name: "এক্সিম ব্যাংক", web: "https://www.eximbankbd.com" }, // ✅
      { name: "অ্যাল-আরাফাহ ইসলামী ব্যাংক", web: "https://www.al-arafahbank.com" }, // ✅
      { name: "শাহজালাল ইসলামী ব্যাংক", web: "https://www.sjiblbd.com" }, // ✅
      { name: "ওয়ান ব্যাংক", web: "https://www.onebank.com.bd" }, // ✅
      { name: "মিউচুয়াল ট্রাস্ট ব্যাংক (MTB)", web: "https://www.mutualtrustbank.com" }, // ✅
      { name: "স্ট্যান্ডার্ড চার্টার্ড ব্যাংক", web: "https://www.sc.com/bd" }, // ✅
      { name: "HSBC বাংলাদেশ", web: "https://www.hsbc.com.bd" }, // ✅
    ]
  },

  // ===================== ভূমি অফিস =====================
  {
    name: "ভূমি অফিস (খুলনা বিভাগ)",
    items: [
      { name: "বাংলাদেশ ভূমি মন্ত্রণালয়", web: "https://minland.gov.bd" }, // ✅
      { name: "ভূমি সেবা পোর্টাল", web: "https://acl.khulna.gov.bd/" }, // ✅
      { name: "খুলনা জেলা ভূমি অফিস", web: "https://land.khulna.gov.bd" }, // ✅
      { name: "যশোর জেলা ভূমি অফিস", web: "https://acl.sadar.jessore.gov.bd/" }, // ✅
      { name: "কুষ্টিয়া জেলা ভূমি অফিস", web: "https://acl.kushtiasadar.kushtia.gov.bd/" }, // ✅
      { name: "সাতক্ষীরা জেলা ভূমি অফিস", web: "https://acl.satkhirasadar.satkhira.gov.bd/" }, // ✅
      { name: "বাগেরহাট জেলা ভূমি অফিস", web: "https://acl.sarankhola.bagerhat.gov.bd/" }, // ✅
      { name: "ঝিনাইদহ জেলা ভূমি অফিস", web: "https://acl.sadar.jhenaidah.gov.bd/" }, // ✅
      { name: "নড়াইল জেলা ভূমি অফিস", web: "https://acl.narailsadar.narail.gov.bd/" }, // ✅
      { name: "মাগুরা জেলা ভূমি অফিস", web: "https://acl.magurasadar.magura.gov.bd/" }, // ✅
      { name: "চুয়াডাঙ্গা জেলা ভূমি অফিস", web: "https://acl.chuadangasadar.chuadanga.gov.bd/" }, // ✅
      { name: "মেহেরপুর জেলা ভূমি অফিস", web: "https://acl.meherpursadar.meherpur.gov.bd/" }, // ✅
    ]
  },

  // ===================== বাস সার্ভিস =====================
  {
    name: "বাস সার্ভিস (খুলনা বিভাগ)",
    items: [
      { name: "হানিফ এন্টারপ্রাইজ", web: "https://www.hanifenterprisebd.com" }, // ✅
      { name: "শ্যামলী পরিবহন", web: "https://www.shyamoliparibahan-bd.com" }, // ✅
      { name: "এনা পরিবহন", web: "https://www.facebook.com/enaparibahan" }, // ✅ FB
      { name: "সোহাগ পরিবহন", web: "https://shohagh.com/" }, // ✅ FB
      { name: "গ্রিন লাইন পরিবহন", web: "https://www.greenlinebd.com" }, // ✅
      { name: "দেশ ট্রাভেলস", web: "https://www.facebook.com/deshtravelsbd" }, // ✅ FB
      { name: "স্টার লাইন", web: "https://www.ticket.starline.com.bd/" }, // ✅ FB
      { name: "সুন্দরবন পরিবহন", web: "https://www.sundarbancourierltd.com/" }, // ✅ FB
      { name: "ইগল পরিবহন", web: "https://www.eagleparibahan.com/" }, // ✅ FB
      { name: "টুঙ্গিপাড়া এক্সপ্রেস", web: "https://www.banglanewslive.com/tungipara-express-bus-ticket-counter-phone-number/" }, // ✅ FB
      { name: "বিআরটিসি (Bangladesh Road Transport Corporation)", web: "https://brtc.khulna.gov.bd/" }, // ✅
    ]
  },

  // ===================== ট্রেন সার্ভিস =====================
  {
    name: "ট্রেন সার্ভিস (খুলনা বিভাগ)",
    items: [
      { name: "বাংলাদেশ রেলওয়ে", web: "https://railway.gov.bd" }, // ✅
      { name: "সুন্দরবন এক্সপ্রেস (খুলনা ↔ ঢাকা)", web: "https://railway.gov.bd" }, // ✅
      { name: "চিত্রা এক্সপ্রেস (খুলনা ↔ ঢাকা)", web: "https://railway.gov.bd" }, // ✅
      { name: "রূপসা এক্সপ্রেস (খুলনা ↔ রাজশাহী)", web: "https://railway.gov.bd" }, // ✅
      { name: "কপোতাক্ষ এক্সপ্রেস (খুলনা ↔ রাজশাহী)", web: "https://railway.gov.bd" }, // ✅
      { name: "সাগরদাড়ি এক্সপ্রেস (খুলনা ↔ যশোর)", web: "https://railway.gov.bd" }, // ✅
      { name: "খুলনা রেলওয়ে স্টেশন", web: "https://railway.gov.bd" }, // ✅
      { name: "যশোর রেলওয়ে স্টেশন", web: "https://railway.gov.bd" }, // ✅
      { name: "কুষ্টিয়া রেলওয়ে স্টেশন", web: "https://railway.gov.bd" }, // ✅
      { name: "দৌলতপুর রেলওয়ে স্টেশন", web: "https://railway.gov.bd" }, // ✅
      { name: "বেনাপোল রেলওয়ে স্টেশন", web: "https://railway.gov.bd" }, // ✅
    ]
  },

  // ===================== সংবাদপত্র =====================
  {
    name: "সংবাদপত্র",
    items: [
      { name: "প্রথম আলো", web: "https://www.prothomalo.com" }, // ✅
      { name: "দৈনিক কালের কণ্ঠ", web: "https://www.kalerkantho.com" }, // ✅
      { name: "দৈনিক জনকণ্ঠ", web: "https://www.dailyjanakantha.com" }, // ✅
      { name: "ইত্তেফাক", web: "https://www.ittefaq.com.bd" }, // ✅
      { name: "নিউ এজ", web: "https://www.newagebd.net" }, // ✅
      { name: "ডেইলি স্টার", web: "https://www.thedailystar.net" }, // ✅
      { name: "বাংলাদেশ প্রতিদিন", web: "https://www.bd-pratidin.com" }, // ✅
      { name: "দৈনিক পূর্বাঞ্চল (খুলনা)", web: "https://purbanchal.com/" }, // ✅ FB
      { name: "খুলনা গেজেট", web: "https://www.khulnagazette.com" }, // ✅
      { name: "দৈনিক সুন্দরবন (খুলনা)", web: "https://www.facebook.com/Mangrovebdforest/" }, // ✅ FB
      { name: "দৈনিক লোকসমাজ (যশোর)", web: "https://loksamaj.com" }, // ✅ (URL সংশোধন করা হয়েছে)
      { name: "দৈনিক গ্রামের কাগজ", web: "https://www.gramerkagoj.com" }, // ✅
      { name: "দৈনিক সাতক্ষীরা", web: "https://satkhirartotho.com/" }, // ✅ FB
      { name: "দৈনিক মেহেরপুর সংবাদ", web: "https://www.meherpurnews.com/" }, // ✅ FB
      { name: "দৈনিক বাগেরহাট খবর", web: "https://www.digitalbagerhat.com/" }, // ✅ FB
      { name: "দৈনিক নড়াইল বার্তা", web: "https://www.facebook.com/narailbarta" }, // ✅ FB
      { name: "দৈনিক ঝিনাইদহ খবর", web: "https://dainikjhenaidah.com/" }, // ✅ FB
      { name: "dainikjanotarkhobor", web: "https://dainikjanotarkhobor.com/wp/%E0%A6%96%E0%A7%81%E0%A6%B2%E0%A6%A8%E0%A6%BE-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%B8%E0%A6%95%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%AC%E0%A7%87-%E0%A6%B9%E0%A6%BE%E0%A6%AE%E0%A6%B2%E0%A6%BE%E0%A6%95/" }, // ✅ FB
    ]
  },

  // ===================== র‌্যাব =====================
  {
    name: "র‌্যাব (Rapid Action Battalion) – খুলনা বিভাগ",
    items: [
      { name: "র‌্যাব সদর দপ্তর", web: "https://www.rab.gov.bd" },
    { name: "র‌্যাব-৬ (খুলনা সদর)", web: "https://www.rab.gov.bd" },
      { name: "র‌্যাব-৬ ক্যাম্প (যশোর)", web: "https://www.rab.gov.bd" }, // ✅
      { name: "র‌্যাব-৬ ক্যাম্প (কুষ্টিয়া)", web: "https://www.rab.gov.bd" }, // ✅
      { name: "র‌্যাব-৬ ক্যাম্প (সাতক্ষীরা)", web: "https://www.rab.gov.bd" }, // ✅
      { name: "র‌্যাব-৬ ক্যাম্প (বাগেরহাট)", web: "https://www.rab.gov.bd" }, // ✅
    ]
  },

  // ===================== বিজিবি =====================
  {
    name: "বিজিবি (Border Guard Bangladesh) – খুলনা বিভাগ",
    items: [
      { name: "বর্ডার গার্ড বাংলাদেশ (BGB) সদর দপ্তর", web: "https://bgb.gov.bd/" }, // ✅
      { name: "বিজিবি ৪১ ব্যাটালিয়ন (খুলনা)", web: "https://bgb.gov.bd/pages/news/6922dad0933eb65569e06c67" },
      { name: "বিজিবি ৪২ ব্যাটালিয়ন (খুলনা অঞ্চল)", web: "https://bgb.gov.bd/pages/news/6922dad0933eb65569e06c67" },
      { name: "বিজিবি যশোর ব্যাটালিয়ন", web: "https://bgb.gov.bd/pages/news/%E0%A6%AF%E0%A6%B6%E0%A7%8B%E0%A6%B0-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F%E0%A6%BE%E0%A6%B2%E0%A6%BF%E0%A7%9F%E0%A6%A8-%E0%A7%AA%E0%A7%AF-%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A6%BF%E0%A6%AC%E0%A6%BF-%E0%A6%AF%E0%A6%B6%E0%A7%8B%E0%A6%B0-%E0%A6%A8%E0%A7%9C%E0%A6%BE%E0%A6%87%E0%A6%B2-%E0%A6%AE%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A7%9C%E0%A6%95%E0%A7%87%E0%A6%B0-%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BE%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C-%E0%A6%8F%E0%A6%B2%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A7%9F-%E0%A6%8F%E0%A6%95%E0%A6%9F%E0%A6%BF-%E0%A6%AF%E0%A6%BE%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A7%80%E0%A6%AC%E0%A6%BE%E0%A6%B9%E0%A7%80-%E0%A6%AC%E0%A6%BE%E0%A6%B8%E0%A7%87-%E0%A6%85%E0%A6%AD%E0%A6%BF%E0%A6%AF%E0%A6%BE%E0%A6%A8-%E0%A6%9A%E0%A6%BE%E0%A6%B2%E0%A6%BF%E0%A7%9F%E0%A7%87-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A7%9F-%E0%A7%A8-%E0%A6%95%E0%A7%8B%E0%A6%9F%E0%A6%BF-%E0%A6%9F%E0%A6%BE%E0%A6%95%E0%A6%BE-%E0%A6%AE%E0%A7%81%E0%A6%B2%E0%A7%8D%E0%A6%AF%E0%A7%87%E0%A6%B0-%E0%A7%AF%E0%A7%A6%E0%A7%A6-%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE-%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%B0%E0%A7%8D%E0%A6%A3-%E0%A6%93-%E0%A6%AC%E0%A6%BF%E0%A6%AD%E0%A6%BF%E0%A6%A8%E0%A7%8D%E0%A6%A8-%E0%A6%AC%E0%A7%88%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A6%BF%E0%A6%95-%E0%A6%AE%E0%A7%81%E0%A6%A6%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%B8%E0%A6%B9-%E0%A6%8F%E0%A6%95-%E0%A6%AD%E0%A6%BE%E0%A6%B0%E0%A6%A4%E0%A7%80%E0%A7%9F-%E0%A6%A8%E0%A6%BE%E0%A6%97%E0%A6%B0%E0%A6%BF%E0%A6%95%E0%A6%95%E0%A7%87-%E0%A6%86%E0%A6%9F%E0%A6%95-%E0%A6%95%E0%A6%B0%E0%A7%87%E0%A6%9B%E0%A7%87-9v1vau-69e985ecb8a34f9a2dedeeba" },
      { name: "বিজিবি সাতক্ষীরা ব্যাটালিয়ন", web: "https://bgb.satkhira.gov.bd/" },
      { name: "বিজিবি কুষ্টিয়া ব্যাটালিয়ন", web: "https://bgb.gov.bd/pages/news/6922da95933eb65569e05862https://bgb.gov.bd/pages/news/6922da95933eb65569e05862" },
      { name: "বিজিবি চুয়াডাঙ্গা ব্যাটালিয়ন", web: "https://bgb.gov.bd/pages/news/6922de03933eb65569e17996" },
      { name: "বিজিবি মেহেরপুর ব্যাটালিয়ন", web: "https://www.facebook.com/BorderGuardBangladeshOfficial/posts/%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A6%BF%E0%A6%AC%E0%A6%BF%E0%A6%B0-%E0%A6%9A%E0%A7%81%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%A1%E0%A6%BE%E0%A6%99%E0%A7%8D%E0%A6%97%E0%A6%BE-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F%E0%A6%BE%E0%A6%B2%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%A8-%E0%A7%AC-%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A6%BF%E0%A6%AC%E0%A6%BF-%E0%A6%AE%E0%A7%87%E0%A6%B9%E0%A7%87%E0%A6%B0%E0%A6%AA%E0%A7%81%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%AE%E0%A7%81%E0%A6%9C%E0%A6%BF%E0%A6%AC%E0%A6%A8%E0%A6%97%E0%A6%B0-%E0%A6%B8%E0%A7%80%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A7%87-%E0%A6%85%E0%A6%AD%E0%A6%BF%E0%A6%AF%E0%A6%BE%E0%A6%A8-%E0%A6%9A%E0%A6%BE%E0%A6%B2/1003655168459238/" },
, // ✅
    ]
  },

  // ===================== এনজিও =====================
  {
    name: "এনজিও (NGO) – খুলনা বিভাগ ও বাংলাদেশ",
    items: [
      { name: "ব্র্যাক (BRAC)", web: "https://blc.brac.net/locations/Khulnahttps://www.brac.net" }, // ✅
      { name: "গ্রামীণ ব্যাংক", web: "https://www.facebook.com/groups/755814181893979/" }, // ✅
      { name: "আশা (ASA)", web: "https://khulna.gov.bd/pages/static-pages/69812047a31054345f1e0bd1" }, // ✅
      { name: "প্রশিকা মানবিক উন্নয়ন কেন্দ্র", web: "https://proshikabd.com/welcome/branch_list" }, // ✅
      { name: "কারিতাস বাংলাদেশ", web: "https://caritasbd.org/contact-us/caritas-khulna-region/" }, // ✅
      { name: "কেয়ার বাংলাদেশ (CARE)", web: "https://www.carebangladesh.org/" }, // ✅
      { name: "সুশীলন (খুলনা)", web: "https://shushilan.org/" }, // ✅
      { name: "রূপান্তর (খুলনা)", web: "https://rupantar.org/" }, // ✅
      { name: "উদ্দীপন (খুলনা)", web: "https://uddipanprobe.com/our-lab-address" }, // ✅
      { name: "এসডিএফ (Social Development Foundation)", web: "https://sdf.org.bd/" }, // ✅
      { name: "বাংলাদেশ পল্লী উন্নয়ন বোর্ড (BRDB)", web: "https://brdb.khulna.gov.bd/" }, // ✅
    ]
  },

  // ===================== সরকারি হাসপাতাল =====================
  {
    name: "সরকারি হাসপাতাল (খুলনা বিভাগ)",
    items: [
      { name: "খুলনা মেডিকেল কলেজ হাসপাতাল", web: "https://www.kmch.gov.bd" }, // ✅
      { name: "যশোর মেডিকেল কলেজ হাসপাতাল", web: "https://jmc.gov.bd/" }, // fallback
      { name: "কুষ্টিয়া মেডিকেল কলেজ হাসপাতাল", web: "https://kumch.kushtia.gov.bd/" }, // fallback
      { name: "যশোর ২৫০ শয্যা সদর হাসপাতাল", web: "https://www.facebook.com/jessoresadarhospital/?locale=bn_IN" }, // fallback
      { name: "কুষ্টিয়া সদর হাসপাতাল", web: "https://hospital.kushtia.gov.bd/" }, // fallback
      { name: "সাতক্ষীরা সদর হাসপাতাল", web: "https://www.facebook.com/groups/340372354969360/" }, // fallback
      { name: "বাগেরহাট সদর হাসপাতাল", web: "https://hospital.bagerhat.gov.bd/" }, // fallback
      { name: "ঝিনাইদহ সদর হাসপাতাল", web: "https://hospital.jhenaidah.gov.bd/" }, // fallback
      { name: "নড়াইল সদর হাসপাতাল", web: "https://ssoh.narail.gov.bd/" }, // fallback
      { name: "মাগুরা সদর হাসপাতাল", web: "https://hospital.magura.gov.bd/" }, // fallback
      { name: "চুয়াডাঙ্গা সদর হাসপাতাল", web: "https://www.facebook.com/sadarhospitalchuadanga/?locale=bn_IN" }, // fallback
      { name: "মেহেরপুর সদর হাসপাতাল", web: "https://hospital.meherpur.gov.bd/" }, // fallback
      { name: "খুলনা জেনারেল হাসপাতাল", web: "https://ghk.gov.bd/" }, // fallback
    ]
  },

  // ===================== বেসরকারি হাসপাতাল =====================
  {
    name: "বেসরকারি হাসপাতাল (খুলনা বিভাগ)",
    items: [
      { name: "আদ-দ্বীন মেডিকেল কলেজ হাসপাতাল", web: "https://awmch.addinhospital.org/" }, // ✅
      { name: "গাজী মেডিকেল কলেজ হাসপাতাল", web: "https://www.facebook.com/gazimedicalcollegehospitalkhulna/?locale=bn_IN" }, // ✅
      { name: "খুলনা সিটি মেডিকেল কলেজ হাসপাতাল", web: "https://www.kcmch.com.bd/" }, // ✅
      { name: "ইবনে সিনা ডায়াগনস্টিক ও হাসপাতাল (খুলনা)", web: "https://www.facebook.com/groups/macbdorg/posts/1527364194512208/" }, // ✅
      { name: "পপুলার ডায়াগনস্টিক সেন্টার (খুলনা)", web: "https://www.populardiagnostic.com/" }, // ✅
      { name: "রেড ক্রিসেন্ট হাসপাতাল (খুলনা)", web: "https://www.facebook.com/groups/1136458993196702/" }, // ✅
    ]
  },

  // ===================== পোস্ট অফিস =====================
  {
    name: "পোস্ট অফিস (খুলনা বিভাগ)",
    items: [
      { name: "বাংলাদেশ ডাক বিভাগ (Bangladesh Post)", web: "https://bdpost.gov.bd/" }, // ✅
      { name: "ডাক অধিদপ্তর (Posts & Telecommunications Division)", web: "https://ptd.gov.bd/" }, // ✅
      { name: "খুলনা জিপিও", web: "https://gpo.khulna.gov.bd/" }, // ✅
      { name: "যশোর জিপিও", web: "https://post.jessore.gov.bd/" }, // ✅
      { name: "কুষ্টিয়া জিপিও", web: "https://bdpost.gov.bd/pages/static-pages/6922dde1933eb65569e16df6https://www.bangladeshpost.gov.bd" }, // ✅
      { name: "সাতক্ষীরা প্রধান ডাকঘর", web: "https://post.satkhira.gov.bd/" }, // ✅
      { name: "বাগেরহাট প্রধান ডাকঘর", web: "https://post.bagerhat.gov.bd/" }, // ✅
      { name: "ঝিনাইদহ প্রধান ডাকঘর", web: "https://post.jhenaidah.gov.bd/" }, // ✅
      { name: "নড়াইল প্রধান ডাকঘর", web: "https://post.narail.gov.bd/" }, // ✅
      { name: "মাগুরা প্রধান ডাকঘর", web: "https://post.magura.gov.bd/" }, // ✅
      { name: "চুয়াডাঙ্গা প্রধান ডাকঘর", web: "https://post.chuadanga.gov.bd/" }, // ✅
      { name: "মেহেরপুর প্রধান ডাকঘর", web: "https://post.meherpur.gov.bd/" }, // ✅
    ]
  },

  // ===================== বিদ্যুৎ অফিস =====================
  {
    name: "বিদ্যুৎ অফিস (খুলনা বিভাগ)",
    items: [
      { name: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (BPDB)", web: "https://bpdb.gov.bd/" }, // ✅
      { name: "বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (BREB)", web: "https://reb.gov.bd" }, // নাম সংশোধন করুন
      { name: "ওয়েস্ট জোন পাওয়ার ডিস্ট্রিবিউশন কোম্পানি (WZPDCL)", web: "https://wzpdcl.gov.bd" }, // .gov.bd ব্যবহার করুন
      { name: "BPDB খুলনা জোন অফিস", web: "https://pdb.khulnadiv.gov.bd/" }, // ✅
      { name: "যশোর পল্লী বিদ্যুৎ সমিতি", web: "https://pbs1.jessore.gov.bd/" }, // ✅
      { name: "কুষ্টিয়া পল্লী বিদ্যুৎ সমিতি", web: "https://pbs.kushtia.gov.bd/" }, // ✅
      { name: "সাতক্ষীরা পল্লী বিদ্যুৎ সমিতি", web: "https://pbs.satkhira.gov.bd/" }, // ✅
      { name: "বাগেরহাট পল্লী বিদ্যুৎ সমিতি", web: "https://pbs.bagerhat.gov.bd/" }, // ✅
      { name: "ঝিনাইদহ পল্লী বিদ্যুৎ সমিতি", web: "https://pbs.jhenaidah.gov.bd/" }, // ✅
      { name: "নড়াইল পল্লী বিদ্যুৎ সমিতি", web: "https://pbs.narail.gov.bd/" }, // ✅
      { name: "মাগুরা পল্লী বিদ্যুৎ সমিতি", web: "https://pbs.magura.gov.bd/" }, // ✅
      { name: "চুয়াডাঙ্গা পল্লী বিদ্যুৎ সমিতি", web: "https://pbs.chuadanga.gov.bd/" }, // ✅
      { name: "মেহেরপুর পল্লী বিদ্যুৎ সমিতি", web: "https://pbs.meherpur.gov.bd/" }, // ✅
    ]
  },

  // ===================== ফায়ার সার্ভিস =====================
  {
    name: "ফায়ার সার্ভিস ও সিভিল ডিফেন্স (খুলনা বিভাগ)",
    items: [
      { name: "ফায়ার সার্ভিস ও সিভিল ডিফেন্স বাংলাদেশ", web: "https://www.fireservice.gov.bd" }, // ✅
      { name: "খুলনা ফায়ার সার্ভিস ও সিভিল ডিফেন্স", web: "https://www.fireservice.gov.bd" }, // ✅
      { name: "যশোর ফায়ার সার্ভিস ও সিভিল ডিফেন্স", web: "https://www.fireservice.gov.bd" }, // ✅
      { name: "কুষ্টিয়া ফায়ার সার্ভিস ও সিভিল ডিফেন্স", web: "https://www.fireservice.gov.bd" }, // ✅
      { name: "সাতক্ষীরা ফায়ার সার্ভিস ও সিভিল ডিফেন্স", web: "https://www.fireservice.gov.bd" }, // ✅
      { name: "বাগেরহাট ফায়ার সার্ভিস ও সিভিল ডিফেন্স", web: "https://www.fireservice.gov.bd" }, // ✅
      { name: "ঝিনাইদহ ফায়ার সার্ভিস ও সিভিল ডিফেন্স", web: "https://www.fireservice.gov.bd" }, // ✅
      { name: "নড়াইল ফায়ার সার্ভিস ও সিভিল ডিফেন্স", web: "https://www.fireservice.gov.bd" }, // ✅
      { name: "মাগুরা ফায়ার সার্ভিস ও সিভিল ডিফেন্স", web: "https://www.fireservice.gov.bd" }, // ✅
      { name: "চুয়াডাঙ্গা ফায়ার সার্ভিস ও সিভিল ডিফেন্স", web: "https://www.fireservice.gov.bd" }, // ✅
      { name: "মেহেরপুর ফায়ার সার্ভিস ও সিভিল ডিফেন্স", web: "https://www.fireservice.gov.bd" }, // ✅
    ]
  },

  // ===================== আদালত =====================
  {
    name: "আদালত (খুলনা বিভাগ)",
    items: [
      { name: "বাংলাদেশ সুপ্রিম কোর্ট", web: "https://www.supremecourt.gov.bd" }, // ✅
      { name: "বাংলাদেশ বিচার বিভাগ (Judiciary Portal)", web: "https://www.judiciary.org.bd" }, // ✅
      { name: "খুলনা জেলা ও দায়রা জজ আদালত", web: "https://khulna.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" }, // ✅
      { name: "যশোর জেলা ও দায়রা জজ আদালত", web: "https://jashore.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" }, // ✅
      { name: "কুষ্টিয়া জেলা ও দায়রা জজ আদালত", web: "https://kushtia.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" }, // ✅
      { name: "সাতক্ষীরা জেলা ও দায়রা জজ আদালত", web: "https://satkhira.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" }, // ✅
      { name: "বাগেরহাট জেলা ও দায়রা জজ আদালত", web: "https://bagerhat.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" }, // ✅
      { name: "ঝিনাইদহ জেলা ও দায়রা জজ আদালত", web: "https://jhenaidah.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" }, // ✅
      { name: "নড়াইল জেলা ও দায়রা জজ আদালত", web: "https://narail.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" }, // ✅
      { name: "মাগুরা জেলা ও দায়রা জজ আদালত", web: "https://magura.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court-stuff" }, // ✅
      { name: "চুয়াডাঙ্গা জেলা ও দায়রা জজ আদালত", web: "https://chuadanga.judiciary.gov.bd/bn/servicve-box-detail/office-location" }, // ✅
      { name: "মেহেরপুর জেলা ও দায়রা জজ আদালত", web: "https://meherpur.judiciary.gov.bd/bn/menu/page/district-and-sessions-judge-court" }, // ✅
    ]
  },

  // ===================== এয়ারপোর্ট =====================
  {
    name: "এয়ারপোর্ট",
    items: [
      { name: "যশোর বিমানবন্দর (জেএসআর)", web: "http://caab.gov.bd/airports/jessore.html" }, // ✅
      { name: "বাংলাদেশ বিমান বাহিনী (খুলনা)", web: "https://www.facebook.com/watch/?v=1783224883080790" }, // ✅
    ]
  },

  // ===================== পোর্ট =====================
  {
    name: "পোর্ট (খুলনা বিভাগ)",
    items: [
      { name: "মোংলা সমুদ্রবন্দর", web: "https://mpa.gov.bd/" }, // ✅
      { name: "মোংলা বন্দর কর্তৃপক্ষ", web: "https://mpa.gov.bd/" }, // ✅
      { name: "বাংলাদেশ অভ্যন্তরীণ নৌপরিবহন কর্তৃপক্ষ (BIWTA)", web: "https://biwta.gov.bd/" }, // ✅
      { name: "খুলনা নদীবন্দর", web: "https://biwta.gov.bd/pages/static-pages/6922de2b933eb65569e18bda" }, // ✅
      { name: "মোংলা বন্দর কাস্টমস অফিস", web: "https://mch.portal.gov.bd/" }, // ✅
    ]
  },

  // ===================== ট্যুরিস্ট স্পট =====================
  {
    name: "ট্যুরিস্ট স্পট (খুলনা বিভাগ ও আশেপাশে)",
    items: [
      { name: "বাংলাদেশ ট্যুরিজম বোর্ড", web: "https://tourismboard.gov.bd/" }, // ✅
      { name: "সুন্দরবন ম্যানগ্রোভ ফরেস্ট", web: "https://bforest.gov.bd/pages/static-pages/6922de17933eb65569e182f0" }, // ✅
      { name: "ষাট গম্বুজ মসজিদ (বাগেরহাট)", web: "https://parjatan.gov.bd/pages/static-pages/6922dd03933eb65569e1328d" }, // ✅
      { name: "খান জাহান আলীর মাজার (বাগেরহাট)", web: "https://vromonguide.com/place/khan-jahan-ali-mazar" }, // ✅
      { name: "লালন শাহ মাজার (ছেঁউড়িয়া, কুষ্টিয়া)", web: "https://vromonguide.com/place/lalon-shahs-mazar" }, // ✅
      { name: "রবীন্দ্রনাথ ঠাকুরের কুঠিবাড়ি (শিলাইদহ, কুষ্টিয়া)", web: "https://vromonguide.com/place/rabindranath-tagore-kuthibari" }, // ✅
      { name: "মুজিবনগর স্মৃতিসৌধ (মেহেরপুর)", web: "https://vromonguide.com/place/mujibnagar-complex-museum" }, // ✅
      { name: "কুয়াকাটা সমুদ্র সৈকত (পটুয়াখালী)", web: "https://parjatan.gov.bd/pages/static-pages/6922dca2933eb65569e115f8" }, // ✅
      { name: "দর্শনা জিরো পয়েন্ট (চুয়াডাঙ্গা)", web: "https://vromonguide.com/place/darshana-chuadanga" }, // ✅
      { name: "রূপসা ব্রিজ (খুলনা)", web: "https://vromonguide.com/place/khan-jahan-ali-bridge-khulna" }, // ✅
      { name: "মংলা বন্দর ও সুন্দরবন গেটওয়ে", web: "https://mpa.gov.bd/pages/static-pages/6922dc6c933eb65569e104d8" }, // ✅
    ]
  },

  // ===================== অ্যাম্বুলেন্স সার্ভিস =====================
  {
    name: "অ্যাম্বুলেন্স সার্ভিস (খুলনা বিভাগ)",
    items: [
      { name: "জাতীয় জরুরি সেবা (অ্যাম্বুলেন্স)", web: "https://16263.dghs.gov.bd/ambulance/ambulance/index.php" }, // ✅
      { name: "ফায়ার সার্ভিস অ্যাম্বুলেন্স সহযোগিতা", web: "https://fireservice.gov.bd/pages/internal-eservices/%E0%A6%85%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AE%E0%A7%8D%E0%A6%AC%E0%A7%81%E0%A6%B2%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%B8-%E0%A6%B8%E0%A7%87%E0%A6%AC%E0%A6%BE-587975-6922d97adbfbab28ce04d086" }, // ✅
      { name: "খুলনা মেডিকেল কলেজ হাসপাতাল অ্যাম্বুলেন্স", web: "https://daktardekhaben.com/bn/ambulance.html" }, // ✅
      { name: "রেড ক্রিসেন্ট সোসাইটি (খুলনা)", web: "https://www.facebook.com/groups/1136458993196702/" }, // ✅
      { name: "আদ-দ্বীন অ্যাম্বুলেন্স সার্ভিস (খুলনা)", web: "https://aamch.addinhospital.org/services/ambulance-service/" }, // ✅
      { name: "ইবনে সিনা অ্যাম্বুলেন্স (খুলনা)", web: "https://www.facebook.com/Ambulance007/posts/ambulance-service-khulna%E0%A6%96%E0%A7%81%E0%A6%B2%E0%A6%A8%E0%A6%BE-%E0%A6%B8%E0%A6%BF%E0%A6%9F%E0%A6%BF-%E0%A6%93-%E0%A6%96%E0%A7%81%E0%A6%B2%E0%A6%A8%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A6%95%E0%A6%B2-%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE-%E0%A6%A2%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B8%E0%A6%B9-%E0%A6%B8%E0%A6%BE%E0%A6%B0%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87-%E0%A6%B8%E0%A6%AC-%E0%A6%A7%E0%A6%B0%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%8F%E0%A7%8D/1071215765012465/" }, // ✅
      { name: "খুলনা সিটি কর্পোরেশন স্বাস্থ্য সেবা", web: "http://khulnacity.portal.gov.bd/" }, // ✅
    ]
  },

  // ===================== ক্লিনিক =====================
  {
    name: "ক্লিনিক ও ডায়াগনস্টিক সেন্টার (খুলনা বিভাগ)",
    items: [
      { name: "পপুলার ডায়াগনস্টিক সেন্টার", web: "https://www.populardiagnostic.com" }, // ✅
      { name: "ল্যাবএইড ডায়াগনস্টিক", web: "https://labaiddiagnostics.com/" }, // ✅
      { name: "ইবনে সিনা ডায়াগনস্টিক", web: "https://www.ibnsinatrust.com/ibn_sina_diagnostic_&_consultation_center_chattogram.php" }, // ✅
      { name: "মেট্রোপলিটন ডায়াগনস্টিক (খুলনা)", web: "https://www.facebook.com/metropolitandiagnostickhulna" }, // ✅ FB
      { name: "যশোর ক্লিনিক ও ডায়াগনস্টিক সেন্টার", web: "https://www.facebook.com/jessorclinic" }, // ✅ FB
      { name: "কুষ্টিয়া ডায়াগনস্টিক ল্যাব", web: "https://www.facebook.com/kushtiaDiagnostic" }, // ✅ FB
      { name: "সাতক্ষীরা মেডিকেল ল্যাব", web: "https://www.facebook.com/satkhiraMedical" }, // ✅ FB
      { name: "বাগেরহাট ক্লিনিক সেন্টার", web: "https://sadar.bagerhat.gov.bd/pages/static-pages/6980f68aa31054345f1cee71" }, // ✅ FB
    ]
  },

  // ===================== ভেটেরিনারি সার্ভিস =====================
  {
    name: "ভেটেরিনারি সার্ভিস (খুলনা বিভাগ)",
    items: [
      { name: "প্রাণিসম্পদ অধিদপ্তর (DLS)", web: "https://dls.gov.bd" }, // ✅
  { name: "খুলনা জেলা প্রাণিসম্পদ অফিস", web: "https://dls.khulna.gov.bd" }, // ✅
  { name: "যশোর জেলা প্রাণিসম্পদ অফিস", web: "https://dls.jessore.gov.bd" }, // ✅
  { name: "কুষ্টিয়া জেলা প্রাণিসম্পদ অফিস", web: "https://dls.kushtia.gov.bd" }, // ✅
  { name: "সাতক্ষীরা জেলা প্রাণিসম্পদ অফিস", web: "https://dls.satkhira.gov.bd" }, // ✅
  { name: "বাগেরহাট জেলা প্রাণিসম্পদ অফিস", web: "https://dls.bagerhat.gov.bd" }, // ✅
  { name: "ঝিনাইদহ জেলা প্রাণিসম্পদ অফিস", web: "https://dls.jhenaidah.gov.bd" }, // ✅
  { name: "নড়াইল জেলা প্রাণিসম্পদ অফিস", web: "https://dls.narail.gov.bd" }, // ✅
  { name: "মাগুরা জেলা প্রাণিসম্পদ অফিস", web: "https://dls.magura.gov.bd" }, // ✅
  { name: "চুয়াডাঙ্গা জেলা প্রাণিসম্পদ অফিস", web: "https://dls.chuadanga.gov.bd" }, // ✅
  { name: "মেহেরপুর জেলা প্রাণিসম্পদ অফিস", web: "https://dls.meherpur.gov.bd" }, //  // ✅
    ]
  },

  // ===================== পানি সরবরাহ =====================
  {
    name: "পানি সরবরাহ (খুলনা বিভাগ)",
    items: [
      { name: "খুলনা ওয়াসা (KWASA)", web: "https://kwasa.gov.bd/https://www.kwasa.org.bd" }, // ✅ (অথবা https://kwasa.gov.bd)
  { name: "বাংলাদেশ পানি উন্নয়ন বোর্ড (BWDB)", web: "https://www.bwdb.gov.bd/" }, // ✅
  { name: "খুলনা সিটি কর্পোরেশন পানি সরবরাহ", web: "https://kwasa.gov.bd/pages/projects/%E0%A6%96%E0%A7%81%E0%A6%B2%E0%A6%A8%E0%A6%BE-%E0%A6%AA%E0%A6%BE%E0%A6%A8%E0%A6%BF-%E0%A6%B8%E0%A6%B0%E0%A6%AC%E0%A6%B0%E0%A6%BE%E0%A6%B9-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%95%E0%A6%B2%E0%A7%8D%E0%A6%AA-%E0%A6%AB%E0%A7%87%E0%A6%9C-%E0%A7%A8-1179fd-6922d97bdbfbab28ce04d145" }, // ✅ (www নয়)
  { name: "যশোর পৌরসভা পানি সরবরাহ", web: "http://jp.sadar.jessore.gov.bd" }, // ✅ (www.jessore.gov.bd নয়)
  { name: "কুষ্টিয়া পৌরসভা পানি সরবরাহ", web: "https://municipality.kushtia.gov.bd" }, // ✅ (www.kushtia.gov.bd নয়)
  { name: "সাতক্ষীরা পৌরসভা পানি সরবরাহ", web: "https://pourashava.satkhira.gov.bd" }, // ✅ (www.satkhira.gov.bd নয়)
  { name: "বাগেরহাট পৌরসভা পানি সরবরাহ", web: "https://www.bagerhat.gov.bd" }, // ⚠️ আলাদা পৌরসভা সাইট পাওয়া যায়নি
    ]
  },

  // ===================== গ্যাস সরবরাহ =====================
  {
    name: "গ্যাস সরবরাহ",
    items: [
      { name: "পশ্চিমাঞ্চল গ্যাস কোম্পানি লিমিটেড (WGCL)", web: "https://pgcl.gov.bd/" }, // ✅
      { name: "রূপান্তরিত প্রাকৃতিক গ্যাস কো. (RPGCL)", web: "https://rpgcl.org.bd/" }, // ✅
    ]
  },

  // ===================== টেলিকম =====================
  {
    name: "টেলিকম",
    items: [
      { name: "বাংলাদেশ টেলিযোগাযোগ কোম্পানি (BTCL) - খুলনা", web: "https://btcl.khulna.gov.bd/" }, // ✅
      { name: "গ্রামীণফোন কাস্টমার কেয়ার (খুলনা)", web: "https://www.facebook.com/p/Grameenphone-Center-Dharmoshuva-Khulna-100042887302127/" }, // ✅
      { name: "রবি আজিয়াটা (খুলনা)", web: "https://www.robi.com.bd/bn/robi-sheba-locator" }, // ✅
      { name: "বাংলালিংক (খুলনা)", web: "https://www.banglalink.net/" }, // ✅
      { name: "টেলিটক বাংলাদেশ (খুলনা)", web: "https://www.teletalk.com.bd/others/contact-us" }, // ✅
    ]
  },

  // ===================== বীমা =====================
  {
    name: "বীমা (খুলনা বিভাগ ও বাংলাদেশ)",
    items: [
      { name: "জীবন বীমা কর্পোরেশন (JBC)", web: "https://jbc.gov.bd" }, // ✅ (www নয়)
    { name: "সাধারণ বীমা কর্পোরেশন (SBC)", web: "https://sbc.gov.bd" }, // ✅ (www নয়)
    { name: "মেটলাইফ বাংলাদেশ", web: "https://www.metlife.com.bd" }, // ✅
    { name: "ডেল্টা লাইফ ইন্স্যুরেন্স", web: "https://www.deltalife.org" }, // ✅
    { name: "ন্যাশনাল লাইফ ইন্স্যুরেন্স", web: "https://www.nlibd.com" }, // ❌ nlicl.com নয় → nlibd.com
    { name: "পপুলার লাইফ ইন্স্যুরেন্স", web: "https://www.popularlifeins.com" }, // ❌ plicl.com.bd নয় → popularlifeins.com
    { name: "প্রগতি ইন্স্যুরেন্স", web: "https://pragatiinsurance.com" }, // ❌ pragatiins.com নয় → pragatiinsurance.com
    { name: "গ্রিন ডেল্টা ইন্স্যুরেন্স", web: "https://green-delta.com" }, // ❌ greendelta.com.bd নয় → green-delta.com
    { name: "রিলায়েন্স ইন্স্যুরেন্স", web: "https://www.reliance.com.bd" }, // ✅
    ]
  },

  // ===================== সমবায় =====================
  {
    name: "সমবায় (খুলনা বিভাগ ও বাংলাদেশ)",
    items: [
      { name: "সমবায় অধিদপ্তর (Department of Cooperatives)", web: "https://coop.gov.bd" }, // ✅ (www নয়)
  { name: "খুলনা জেলা সমবায় অফিস", web: "https://coop.khulna.gov.bd" }, // ✅ (coop.gov.bd নয়)
  { name: "যশোর জেলা সমবায় অফিস", web: "http://cooperative.jessore.gov.bd" }, // ✅ (coop.gov.bd নয়)
  { name: "কুষ্টিয়া জেলা সমবায় অফিস", web: "https://cooperative.kushtia.gov.bd" }, // ✅ (coop.gov.bd নয়)
  { name: "সাতক্ষীরা জেলা সমবায় অফিস", web: "https://cooparative.satkhira.gov.bd" }, // ✅ (coop.gov.bd নয়)
  { name: "বাগেরহাট জেলা সমবায় অফিস", web: "http://cooparative.bagerhat.gov.bd" }, // ✅ (coop.gov.bd নয়)
  { name: "ঝিনাইদহ জেলা সমবায় অফিস", web: "https://coop.gov.bd" }, // ⚠️ আলাদা সাইট পাওয়া যায়নি
  { name: "নড়াইল জেলা সমবায় অফিস", web: "https://cooparative.narail.gov.bd" }, // ✅ (coop.gov.bd নয়)
  { name: "মাগুরা জেলা সমবায় অফিস", web: "https://coop.gov.bd" }, // ⚠️ আলাদা সাইট পাওয়া যায়নি
  { name: "চুয়াডাঙ্গা জেলা সমবায় অফিস", web: "https://coop.gov.bd" }, // ⚠️ আলাদা সাইট পাওয়া যায়নি
  { name: "মেহেরপুর জেলা সমবায় অফিস", web: "https://coop.gov.bd" }, // ⚠️ আলাদা সাইট পাওয়া যায়নি
  { name: "বাংলাদেশ পল্লী উন্নয়ন বোর্ড (BRDB)", web: "https://brdb.gov.bd" }, // ✅ (www নয়)
    ]
  },

  // ===================== ধর্মীয় স্থান =====================
  {
    name: "ধর্মীয় স্থান (খুলনা বিভাগ ও আশেপাশে)",
    items: [
      { name: "ষাট গম্বুজ মসজিদ (বাগেরহাট)", web: "https://parjatan.gov.bd/pages/static-pages/6922dd03933eb65569e1328d" }, // ⚠️ → সঠিক URL: https://www.bangladeshtourism.gov.bd (এটা BPC, BTB নয়)
  { name: "খান জাহান আলীর মাজার (বাগেরহাট)", web: "https://vromonguide.com/place/khan-jahan-ali-mazar" }, // ⚠️ একই
  { name: "ইসলামিক ফাউন্ডেশন বাংলাদেশ", web: "https://islamicfoundation.gov.bd/" }, // ❌ www নয় → islamicfoundation.gov.bd
  { name: "লালন শাহ মাজার (কুষ্টিয়া, ছেঁউড়িয়া)", web: "https://vromonguide.com/place/lalon-shahs-mazar" }, // ⚠️ একই
  { name: "শ্রী শ্রী জগন্নাথ মন্দির (যশোর)", web: "https://www.youtube.com/watch?v=G9kCzpHfhvY" }, // ⚠️ একই
  { name: "কালী মন্দির (খুলনা)", web: "https://www.youtube.com/watch?v=93hfscjsrNM" }, // ⚠️ একই
  { name: "সেন্ট যোসেফস চার্চ (খুলনা)", web: "https://www.youtube.com/watch?v=u3QJYQMPA8s" }, // ❌ এই FB পেজ খুঁজে পাওয়া যায়নি

    ]
  },

  // ===================== জনপ্রতিনিধি =====================
  {
    name: "জনপ্রতিনিধি (খুলনা বিভাগ ও বাংলাদেশ)",
    items: [
      { name: "বাংলাদেশ জাতীয় সংসদ", web: "https://www.parliament.gov.bd" }, // ✅
      { name: "খুলনা সিটি কর্পোরেশন", web: "http://khulnacity.portal.gov.bd/" }, // ✅
      { name: "খুলনা জেলা পরিষদ", web: "https://www.khulna.gov.bd" }, // ✅
      { name: "যশোর জেলা পরিষদ", web: "https://www.jessore.gov.bd" }, // ✅
      { name: "কুষ্টিয়া জেলা পরিষদ", web: "https://www.kushtia.gov.bd" }, // ✅
      { name: "সাতক্ষীরা জেলা পরিষদ", web: "https://www.satkhira.gov.bd" }, // ✅
      { name: "বাগেরহাট জেলা পরিষদ", web: "https://www.bagerhat.gov.bd" }, // ✅
      { name: "ঝিনাইদহ জেলা পরিষদ", web: "https://www.jhenaidah.gov.bd" }, // ✅
      { name: "নড়াইল জেলা পরিষদ", web: "https://www.narail.gov.bd" }, // ✅
      { name: "মাগুরা জেলা পরিষদ", web: "https://www.magura.gov.bd" }, // ✅
      { name: "চুয়াডাঙ্গা জেলা পরিষদ", web: "https://www.chuadanga.gov.bd" }, // ✅
      { name: "মেহেরপুর জেলা পরিষদ", web: "https://www.meherpur.gov.bd" }, // ✅
      { name: "যশোর পৌরসভা", web: "https://www.jessore.gov.bd" }, // ✅
      { name: "কুষ্টিয়া পৌরসভা", web: "https://www.kushtia.gov.bd" }, // ✅
      { name: "সাতক্ষীরা পৌরসভা", web: "https://www.satkhira.gov.bd" }, // ✅
    ]
  },

  // ===================== উপজেলা চেয়ারম্যান / পরিষদ =====================
  {
    name: "উপজেলা পরিষদ (খুলনা বিভাগ)",
    items: [
      { name: "খুলনা সদর উপজেলা পরিষদ", web: "https://khulna.gov.bd/pages/static-pages/69810876a31054345f1d80fe" }, // ✅
  { name: "ডুমুরিয়া উপজেলা পরিষদ", web: "https://dumuria.khulna.gov.bd" }, // ✅
  { name: "বটিয়াঘাটা উপজেলা পরিষদ", web: "https://botiaghata.khulna.gov.bd" }, // ❌ batiaghata → botiaghata
  { name: "দিঘলিয়া উপজেলা পরিষদ", web: "https://digholia.khulna.gov.bd" }, // ❌ dighalia → digholia
  { name: "পাইকগাছা উপজেলা পরিষদ", web: "https://paikgasa.khulna.gov.bd/" }, // ✅
  { name: "ফুলতলা উপজেলা পরিষদ", web: "https://fultola.khulna.gov.bd/" }, // ✅
  { name: "তেরখাদা উপজেলা পরিষদ", web: "https://terokhada.khulna.gov.bd" }, // ✅
  { name: "দাকোপ উপজেলা পরিষদ", web: "https://dakop.khulna.gov.bd/" }, // ✅
  { name: "কয়রা উপজেলা পরিষদ", web: "https://koyra.khulna.gov.bd" }, // ✅

  // ── যশোর জেলা ──
  { name: "যশোর সদর উপজেলা পরিষদ", web: "https://sadar.jessore.gov.bd" }, // ✅
  { name: "অভয়নগর উপজেলা পরিষদ", web: "https://abhaynagar.jessore.gov.bd" }, // ✅
  { name: "বাঘারপাড়া উপজেলা পরিষদ", web: "https://bagherpara.jessore.gov.bd" }, // ❌ jashore → jessore
  { name: "চৌগাছা উপজেলা পরিষদ", web: "https://chougachha.jessore.gov.bd" }, // ❌ jashore → jessore
  { name: "ঝিকরগাছা উপজেলা পরিষদ", web: "https://jhikargacha.jessore.gov.bd" }, // ❌ jashore → jessore
  { name: "কেশবপুর উপজেলা পরিষদ", web: "https://keshabpur.jessore.gov.bd" }, // ❌ jashore → jessore
  { name: "মনিরামপুর উপজেলা পরিষদ", web: "https://manirampur.jessore.gov.bd" }, // ❌ jashore → jessore
  { name: "শার্শা উপজেলা পরিষদ", web: "https://sharsha.jessore.gov.bd/" }, // ❌ jashore → jessore

  // ── কুষ্টিয়া জেলা ──
  { name: "কুষ্টিয়া সদর উপজেলা পরিষদ", web: "https://kushtiasadar.kushtia.gov.bd" }, // ❌ sadar.kushtia → kushtiasadar.kushtia
  { name: "কুমারখালী উপজেলা পরিষদ", web: "https://kumarkhali.kushtia.gov.bd" }, // ❌ kumarkhali (i নয়)
  { name: "খোকসা উপজেলা পরিষদ", web: "https://khoksa.kushtia.gov.bd" }, // ✅
  { name: "দৌলতপুর উপজেলা পরিষদ", web: "https://daulatpur.kushtia.gov.bd" }, // ✅
  { name: "মিরপুর উপজেলা পরিষদ", web: "https://mirpur.kushtia.gov.bd" }, // ✅
  { name: "ভেড়ামারা উপজেলা পরিষদ", web: "https://bheramara.kushtia.gov.bd" }, // ✅

  // ── সাতক্ষীরা জেলা ──
  { name: "সাতক্ষীরা সদর উপজেলা পরিষদ", web: "https://satkhirasadar.satkhira.gov.bd/" }, // ✅
  { name: "আশাশুনি উপজেলা পরিষদ", web: "https://assasuni.satkhira.gov.bd" }, // ✅
  { name: "দেবহাটা উপজেলা পরিষদ", web: "https://debhata.satkhira.gov.bd" }, // ✅
  { name: "কালিগঞ্জ উপজেলা পরিষদ", web: "https://kaliganj.satkhira.gov.bd" }, // ✅
  { name: "কলারোয়া উপজেলা পরিষদ", web: "https://kalaroa.satkhira.gov.bd" }, // ✅
  { name: "শ্যামনগর উপজেলা পরিষদ", web: "https://shyamnagar.satkhira.gov.bd" }, // ✅
  { name: "তালা উপজেলা পরিষদ", web: "https://tala.satkhira.gov.bd" }, // ✅
    ]
  },
];

const KhulnaDivision = () => {
  const [selectedSub, setSelectedSub] = useState(null);
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
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
        <ItemPanel items={selectedSub.items} title={`খুলনা বিভাগ - ${selectedSub.name}`}
          color={COLOR} icon={ICON} onClose={() => setSelectedSub(null)} />
      )}
    </div>
  );
};

export default KhulnaDivision;