import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#1a7a4a';
const ICON = '📚';

const subCategories = [
  {
    name: 'বাংলা',
    items: [
      // ── পোর্টাল ──
      { name: '📚 বাংলা ১ম পত্র - 10 Minute School', web: 'https://10minuteschool.com/ssc/bangla-1st-paper/' },
      { name: '📚 বাংলা ২য় পত্র - 10 Minute School', web: 'https://10minuteschool.com/ssc/bangla-2nd-paper/' },
      { name: '📚 বাংলা - Shikho', web: 'https://shikho.com/ssc/bangla' },
      { name: '📚 বাংলা - Bohubrihi', web: 'https://bohubrihi.com/course/ssc-bangla/' },
      // ── গদ্য ──
      { name: '📖 সুভা - রবীন্দ্রনাথ ঠাকুর - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Subha+Rabindranath+bangla+lecture' },
      { name: '📖 একটি তুলসী গাছের কাহিনী - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Ekti+Tulsi+Gacher+Kahini+bangla+lecture' },
      { name: '📖 আমার বাংলা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Amar+Bangla+prose+lecture' },
      { name: '📖 বইপড়া - প্রমথ চৌধুরী - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Boi+Pora+Pramatha+Chowdhury+bangla' },
      { name: '📖 মমতাদি - মানিক বন্দ্যোপাধ্যায় - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Momotadi+Manik+Bondhopadhyay+bangla' },
      { name: '📖 পল্লীজননী - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Pallijhanani+bangla+lecture' },
      { name: '📖 মানুষ মুহম্মদ (স.) - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Manush+Muhammad+bangla+lecture' },
      { name: '📖 শিক্ষা ও মনুষ্যত্ব - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Shikkha+O+Monushshotto+bangla' },
      { name: '📖 প্রবাস বন্ধু - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Probash+Bondhu+bangla+lecture' },
      { name: '📖 নিমগাছ - বনফুল - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Nimgach+Bonphul+bangla+lecture' },
      // ── কবিতা ──
      { name: '🎵 বঙ্গবাণী - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Bangabani+kobita+bangla+lecture' },
      { name: '🎵 কপোতাক্ষ নদ - মাইকেল - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Kopotakkho+Nod+Michael+kobita+bangla' },
      { name: '🎵 জীবন সঙ্গীত - হেমচন্দ্র - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Jibon+Sangit+Hemchandra+kobita+bangla' },
      { name: '🎵 মানুষ - কাজী নজরুল ইসলাম - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Manush+Nazrul+kobita+bangla+lecture' },
      { name: '🎵 পল্লীজননী কবিতা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Pallijhanani+kobita+bangla' },
      { name: '🎵 আমার পরিচয় - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Amar+Porichoy+kobita+bangla' },
      { name: '🎵 দুই বিঘা জমি - রবীন্দ্রনাথ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Dui+Bigha+Jomi+kobita+bangla' },
      { name: '🎵 আবার আসিব ফিরে - জীবনানন্দ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Abar+Ashibo+Fire+Jibonanondo+bangla' },
      { name: '🎵 স্বাধীনতা, এই শব্দটি কীভাবে আমাদের হলো - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Shadhinota+Ei+Shabdoti+kobita+bangla' },
      { name: '🎵 তোমাকে পাওয়ার জন্যে হে স্বাধীনতা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Tomake+Pawar+Jonno+He+Shadhinota+bangla' },
      // ── উপন্যাস ──
      { name: '📕 লালসালু উপন্যাস - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Lalsalu+Novel+bangla+lecture' },
      // ── বাংলা ২য় পত্র ──
      { name: '✏️ বাংলা ব্যাকরণ - সন্ধি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Bangla+Sandhi+grammar+lecture' },
      { name: '✏️ বাংলা ব্যাকরণ - সমাস - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Bangla+Samas+grammar+lecture' },
      { name: '✏️ কারক ও বিভক্তি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Bangla+Karak+Bibhakti+grammar' },
      { name: '✏️ শব্দের শ্রেণীবিভাগ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Bangla+Shobdo+Shrenibibaag+grammar' },
      { name: '✏️ বিরাম চিহ্ন - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Bangla+Biram+Chinh+grammar' },
      { name: '✏️ অনুচ্ছেদ রচনা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Bangla+Onuchhed+rachana+lecture' },
      { name: '✏️ রচনা লেখা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Bangla+rachana+lekha+lecture' },
      { name: '✏️ পত্র লেখা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Bangla+potro+lekha+lecture' },
      { name: '✏️ ভাব সম্প্রসারণ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Bangla+Bhab+Samprasaron+lecture' },
      { name: '✏️ সারাংশ ও সারমর্ম - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Bangla+Sarangsho+Saromormoo+lecture' },
    ],
  },

  {
    name: 'ইংরেজি',
    items: [
      // ── পোর্টাল ──
      { name: '📚 English 1st Paper - 10 Minute School', web: 'https://10minuteschool.com/ssc/english-1st-paper/' },
      { name: '📚 English 2nd Paper - 10 Minute School', web: 'https://10minuteschool.com/ssc/english-2nd-paper/' },
      { name: '📚 English - Shikho', web: 'https://shikho.com/ssc/english' },
      // ── Reading ──
      { name: '📖 Reading Comprehension - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Reading+Comprehension+Bangladesh' },
      { name: '📖 Seen Passage - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Seen+Passage+Bangladesh' },
      { name: '📖 Unseen Passage - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Unseen+Passage+Bangladesh' },
      // ── Writing ──
      { name: '✍️ Paragraph Writing - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Paragraph+Writing+Bangladesh' },
      { name: '✍️ Completing Story - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Completing+Story+Bangladesh' },
      { name: '✍️ Letter / Email Writing - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Letter+Email+Writing+Bangladesh' },
      { name: '✍️ Dialogue Writing - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Dialogue+Writing+Bangladesh' },
      { name: '✍️ Report Writing - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Report+Writing+Bangladesh' },
      { name: '✍️ Summary Writing - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Summary+Writing+Bangladesh' },
      // ── Grammar ──
      { name: '📝 Parts of Speech - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Parts+of+Speech+Bangladesh' },
      { name: '📝 Tense - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Tense+Bangladesh+lecture' },
      { name: '📝 Right Form of Verbs - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Right+Form+Verbs+Bangladesh' },
      { name: '📝 Voice Change (Active/Passive) - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Voice+Change+Active+Passive+Bangladesh' },
      { name: '📝 Narration (Direct/Indirect) - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Narration+Direct+Indirect+Bangladesh' },
      { name: '📝 Transformation of Sentences - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Transformation+Sentences+Bangladesh' },
      { name: '📝 Connectors - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Connectors+Bangladesh' },
      { name: '📝 Prepositions - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Prepositions+Bangladesh' },
      { name: '📝 Articles (a, an, the) - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Articles+a+an+the+Bangladesh' },
      { name: '📝 Cloze Test - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Cloze+Test+Bangladesh' },
      { name: '📝 Punctuation - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Punctuation+Bangladesh' },
      { name: '📝 Subject-Verb Agreement - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Subject+Verb+Agreement+Bangladesh' },
      { name: '📝 Conditionals - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Conditionals+Bangladesh' },
      { name: '📝 Modifiers - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Modifiers+Bangladesh' },
      { name: '🔤 Vocabulary - Synonyms & Antonyms - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Vocabulary+Synonyms+Antonyms+Bangladesh' },
      { name: '🔤 Idioms & Phrases - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Idioms+Phrases+Bangladesh' },
      { name: '🌐 BBC Learning English', web: 'https://www.bbc.co.uk/learningenglish/' },
    ],
  },

  {
    name: 'গণিত',
    items: [
      // ── পোর্টাল ──
      { name: '📚 গণিত - 10 Minute School', web: 'https://10minuteschool.com/ssc/math/' },
      { name: '📚 গণিত - Shikho', web: 'https://shikho.com/ssc/math' },
      { name: '📚 গণিত - Bohubrihi', web: 'https://bohubrihi.com/course/ssc-math/' },
      { name: '📚 গণিত - Khan Academy Bangla', web: 'https://bn.khanacademy.org/math' },
      // ── অধ্যায়সমূহ ──
      { name: '🔢 অধ্যায় ১ - বাস্তব সংখ্যা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Math+Real+Numbers+Bangla+lecture' },
      { name: '🔢 অধ্যায় ২ - সেট ও ফাংশন - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Math+Set+Function+Bangla+lecture' },
      { name: '🔢 অধ্যায় ৩ - বীজগাণিতিক রাশি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Math+Algebraic+Expression+Bangla' },
      { name: '🔢 অধ্যায় ৪ - সূচক ও লগারিদম - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Math+Exponent+Logarithm+Bangla' },
      { name: '🔢 অধ্যায় ৫ - এক চলকবিশিষ্ট সমীকরণ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Math+One+Variable+Equation+Bangla' },
      { name: '🔢 অধ্যায় ৬ - রেখা, কোণ ও ত্রিভুজ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Math+Line+Angle+Triangle+Bangla' },
      { name: '🔢 অধ্যায় ৭ - ব্যবহারিক জ্যামিতি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Math+Practical+Geometry+Bangla' },
      { name: '🔢 অধ্যায় ৮ - বৃত্ত - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Math+Circle+Bangla+lecture' },
      { name: '🔢 অধ্যায় ৯ - ত্রিকোণমিতি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Math+Trigonometry+Bangla+lecture' },
      { name: '🔢 অধ্যায় ১০ - দ্বিঘাত সমীকরণ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Math+Quadratic+Equation+Bangla' },
      { name: '🔢 অধ্যায় ১১ - সরল সমীকরণ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Math+Simple+Equation+Bangla' },
      { name: '🔢 অধ্যায় ১২ - পরিমিতি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Math+Mensuration+Bangla+lecture' },
      { name: '🔢 অধ্যায় ১৩ - পরিসংখ্যান - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Math+Statistics+Bangla+lecture' },
      { name: '🔢 অধ্যায় ১৪ - সম্ভাবনা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Math+Probability+Bangla+lecture' },
      { name: '🔢 অনুপাত ও সমানুপাত - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Math+Ratio+Proportion+Bangla' },
      { name: '🔢 ঐকিক নিয়ম - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Math+Unitary+Method+Bangla' },
      { name: '🔢 লাভ-ক্ষতি ও সুদকষা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Math+Profit+Loss+Interest+Bangla' },
      { name: '🌐 Wolfram Alpha (Math Solver)', web: 'https://www.wolframalpha.com/' },
    ],
  },

  {
    name: 'উচ্চতর গণিত',
    items: [
      { name: '📚 উচ্চতর গণিত - 10 Minute School', web: 'https://10minuteschool.com/ssc/higher-math/' },
      { name: '📚 উচ্চতর গণিত - Shikho', web: 'https://shikho.com/ssc/higher-math' },
      { name: '📚 উচ্চতর গণিত - Udvash Online', web: 'https://udvash.com/ssc-higher-math' },
      { name: '📐 অধ্যায় ১ - ম্যাট্রিক্স ও নির্ণায়ক - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Higher+Math+Matrix+Determinant+Bangla' },
      { name: '📐 অধ্যায় ২ - বিন্যাস ও সমাবেশ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Higher+Math+Permutation+Combination+Bangla' },
      { name: '📐 অধ্যায় ৩ - সম্ভাবনা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Higher+Math+Probability+Bangla' },
      { name: '📐 অধ্যায় ৪ - ভেক্টর - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Higher+Math+Vector+Bangla' },
      { name: '📐 অধ্যায় ৫ - সরলরেখা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Higher+Math+Straight+Line+Bangla' },
      { name: '📐 অধ্যায় ৬ - বৃত্ত - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Higher+Math+Circle+Bangla' },
      { name: '📐 অধ্যায় ৭ - ত্রিকোণমিতি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Higher+Math+Trigonometry+Bangla' },
      { name: '📐 অধ্যায় ৮ - জটিল সংখ্যা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Higher+Math+Complex+Number+Bangla' },
      { name: '📐 অধ্যায় ৯ - অন্তরীকরণ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Higher+Math+Differentiation+Bangla' },
      { name: '📐 অধ্যায় ১০ - যোগজীকরণ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Higher+Math+Integration+Bangla' },
      { name: '🌐 Khan Academy - Algebra', web: 'https://www.khanacademy.org/math/algebra' },
    ],
  },

  {
    name: 'বিজ্ঞান',
    items: [
      { name: '📚 বিজ্ঞান - 10 Minute School', web: 'https://10minuteschool.com/ssc/science/' },
      { name: '📚 বিজ্ঞান - Shikho', web: 'https://shikho.com/ssc/science' },
      { name: '📚 বিজ্ঞান - Bohubrihi', web: 'https://bohubrihi.com/course/ssc-science/' },
      { name: '📚 বিজ্ঞান - Khan Academy Bangla', web: 'https://bn.khanacademy.org/science' },
      { name: '🔬 অধ্যায় ১ - উন্নত জীবনের জন্য বিজ্ঞান - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Science+Chapter+1+Better+Life+Bangla' },
      { name: '🔬 অধ্যায় ২ - জীবনের জন্য পানি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Science+Water+Life+Chapter+2+Bangla' },
      { name: '🔬 অধ্যায় ৩ - হাজারো পদার্থের উৎস - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Science+Organic+Chemistry+Chapter+3+Bangla' },
      { name: '🔬 অধ্যায় ৪ - বায়ু - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Science+Air+Chapter+4+Bangla' },
      { name: '🔬 অধ্যায় ৫ - খাদ্য ও পুষ্টি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Science+Food+Nutrition+Chapter+5+Bangla' },
      { name: '🔬 অধ্যায় ৬ - পদার্থের অবস্থা ও চাপ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Science+State+Matter+Pressure+Bangla' },
      { name: '🔬 অধ্যায় ৭ - তাপ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Science+Heat+Chapter+7+Bangla' },
      { name: '🔬 অধ্যায় ৮ - আলো - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Science+Light+Chapter+8+Bangla' },
      { name: '🔬 অধ্যায় ৯ - শব্দের কথা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Science+Sound+Chapter+9+Bangla' },
      { name: '🔬 অধ্যায় ১০ - স্থির তড়িৎ ও চল তড়িৎ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Science+Electricity+Chapter+10+Bangla' },
      { name: '🔬 অধ্যায় ১১ - পরমাণুর গঠন - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Science+Atomic+Structure+Chapter+11+Bangla' },
      { name: '🔬 অধ্যায় ১২ - মহাবিশ্ব ও আমাদের পৃথিবী - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Science+Universe+Earth+Chapter+12+Bangla' },
      { name: '🔬 অধ্যায় ১৩ - জীবনের বিকাশ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Science+Life+Development+Chapter+13+Bangla' },
      { name: '🔬 অধ্যায় ১৪ - জীবন রক্ষাকারী প্রযুক্তি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Science+Life+Saving+Technology+Bangla' },
      { name: '🌐 PhET Simulations - বিজ্ঞান ল্যাব', web: 'https://phet.colorado.edu/bn/simulations/category/physics' },
    ],
  },

  {
    name: 'পদার্থবিজ্ঞান',
    items: [
      { name: '📚 পদার্থবিজ্ঞান - 10 Minute School', web: 'https://10minuteschool.com/ssc/physics/' },
      { name: '📚 পদার্থবিজ্ঞান - Shikho', web: 'https://shikho.com/ssc/physics' },
      { name: '📚 পদার্থবিজ্ঞান - Udvash Online', web: 'https://udvash.com/ssc-physics' },
      { name: '📚 পদার্থবিজ্ঞান - Khan Academy Bangla', web: 'https://bn.khanacademy.org/science/physics' },
      { name: '⚛️ অধ্যায় ১ - ভৌত রাশি ও পরিমাপ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Physics+Chapter+1+Physical+Quantity+Measurement+Bangla' },
      { name: '⚛️ অধ্যায় ২ - গতি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Physics+Chapter+2+Motion+Bangla' },
      { name: '⚛️ অধ্যায় ৩ - বল - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Physics+Chapter+3+Force+Bangla' },
      { name: '⚛️ অধ্যায় ৪ - কাজ, ক্ষমতা ও শক্তি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Physics+Chapter+4+Work+Power+Energy+Bangla' },
      { name: '⚛️ অধ্যায় ৫ - পদার্থের অবস্থা ও চাপ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Physics+Chapter+5+State+Matter+Pressure+Bangla' },
      { name: '⚛️ অধ্যায় ৬ - বস্তুর উপর তাপের প্রভাব - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Physics+Chapter+6+Heat+Effect+Bangla' },
      { name: '⚛️ অধ্যায় ৭ - তরঙ্গ ও শব্দ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Physics+Chapter+7+Wave+Sound+Bangla' },
      { name: '⚛️ অধ্যায় ৮ - আলোর প্রতিফলন - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Physics+Chapter+8+Reflection+Light+Bangla' },
      { name: '⚛️ অধ্যায় ৯ - আলোর প্রতিসরণ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Physics+Chapter+9+Refraction+Light+Bangla' },
      { name: '⚛️ অধ্যায় ১০ - স্থির তড়িৎ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Physics+Chapter+10+Electrostatics+Bangla' },
      { name: '⚛️ অধ্যায় ১১ - চল তড়িৎ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Physics+Chapter+11+Current+Electricity+Bangla' },
      { name: '⚛️ অধ্যায় ১২ - তড়িতের চৌম্বক ক্রিয়া - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Physics+Chapter+12+Magnetic+Effect+Bangla' },
      { name: '⚛️ অধ্যায় ১৩ - আধুনিক পদার্থবিজ্ঞান ও ইলেকট্রনিক্স - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Physics+Chapter+13+Modern+Physics+Electronics+Bangla' },
      { name: '⚛️ অধ্যায় ১৪ - জীবন বাঁচাতে পদার্থবিজ্ঞান - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Physics+Chapter+14+Life+Saving+Physics+Bangla' },
      { name: '🌐 PhET Simulations - পদার্থবিজ্ঞান ল্যাব', web: 'https://phet.colorado.edu/bn/simulations/category/physics' },
    ],
  },

  {
    name: 'রসায়ন',
    items: [
      { name: '📚 রসায়ন - 10 Minute School', web: 'https://10minuteschool.com/ssc/chemistry/' },
      { name: '📚 রসায়ন - Shikho', web: 'https://shikho.com/ssc/chemistry' },
      { name: '📚 রসায়ন - Udvash Online', web: 'https://udvash.com/ssc-chemistry' },
      { name: '📚 রসায়ন - Bohubrihi', web: 'https://bohubrihi.com/course/ssc-chemistry/' },
      { name: '🧪 অধ্যায় ১ - রসায়নের ধারণা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Chemistry+Chapter+1+Introduction+Bangla' },
      { name: '🧪 অধ্যায় ২ - পদার্থের অবস্থা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Chemistry+Chapter+2+State+Matter+Bangla' },
      { name: '🧪 অধ্যায় ৩ - পদার্থের গঠন - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Chemistry+Chapter+3+Structure+Matter+Bangla' },
      { name: '🧪 অধ্যায় ৪ - পর্যায় সারণি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Chemistry+Chapter+4+Periodic+Table+Bangla' },
      { name: '🧪 অধ্যায় ৫ - রাসায়নিক বন্ধন - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Chemistry+Chapter+5+Chemical+Bond+Bangla' },
      { name: '🧪 অধ্যায় ৬ - মোলের ধারণা ও রাসায়নিক গণনা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Chemistry+Chapter+6+Mole+Concept+Bangla' },
      { name: '🧪 অধ্যায় ৭ - রাসায়নিক বিক্রিয়া - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Chemistry+Chapter+7+Chemical+Reaction+Bangla' },
      { name: '🧪 অধ্যায় ৮ - রসায়ন ও শক্তি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Chemistry+Chapter+8+Energy+Bangla' },
      { name: '🧪 অধ্যায় ৯ - এসিড-ক্ষার সমতা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Chemistry+Chapter+9+Acid+Base+Balance+Bangla' },
      { name: '🧪 অধ্যায় ১০ - খনিজ সম্পদ: ধাতু-অধাতু - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Chemistry+Chapter+10+Mineral+Metal+Nonmetal+Bangla' },
      { name: '🧪 অধ্যায় ১১ - খনিজ সম্পদ: জীবাশ্ম - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Chemistry+Chapter+11+Fossil+Fuel+Bangla' },
      { name: '🧪 অধ্যায় ১২ - আমাদের জীবনে রসায়ন - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Chemistry+Chapter+12+Chemistry+Life+Bangla' },
      { name: '🌐 PhET Simulations - Chemistry Lab', web: 'https://phet.colorado.edu/en/simulations/category/chemistry' },
      { name: '🌐 Khan Academy - Chemistry', web: 'https://www.khanacademy.org/science/chemistry' },
    ],
  },

  {
    name: 'জীববিজ্ঞান',
    items: [
      { name: '📚 জীববিজ্ঞান - 10 Minute School', web: 'https://10minuteschool.com/ssc/biology/' },
      { name: '📚 জীববিজ্ঞান - Shikho', web: 'https://shikho.com/ssc/biology' },
      { name: '📚 জীববিজ্ঞান - Udvash Online', web: 'https://udvash.com/ssc-biology' },
      { name: '📚 জীববিজ্ঞান - Khan Academy Bangla', web: 'https://bn.khanacademy.org/science/biology' },
      { name: '🌿 অধ্যায় ১ - জীবন পাঠ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Biology+Chapter+1+Life+Science+Bangla' },
      { name: '🌿 অধ্যায় ২ - জীবকোষ ও টিস্যু - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Biology+Chapter+2+Cell+Tissue+Bangla' },
      { name: '🌿 অধ্যায় ৩ - কোষ বিভাজন - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Biology+Chapter+3+Cell+Division+Bangla' },
      { name: '🌿 অধ্যায় ৪ - জীবনীশক্তি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Biology+Chapter+4+Bioenergy+Photosynthesis+Bangla' },
      { name: '🌿 সালোকসংশ্লেষণ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Biology+Photosynthesis+Bangla+lecture' },
      { name: '🌿 শ্বসন (Respiration) - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Biology+Respiration+Bangla+lecture' },
      { name: '🌿 অধ্যায় ৫ - খাদ্য, পুষ্টি ও পরিপাক - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Biology+Chapter+5+Food+Nutrition+Digestion+Bangla' },
      { name: '🌿 অধ্যায় ৬ - জীবনের সাথে পরিবেশের সম্পর্ক - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Biology+Chapter+6+Environment+Bangla' },
      { name: '🌿 অধ্যায় ৭ - গ্যাসীয় বিনিময় - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Biology+Chapter+7+Gaseous+Exchange+Bangla' },
      { name: '🌿 অধ্যায় ৮ - রক্ত ও সংবহন - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Biology+Chapter+8+Blood+Circulation+Bangla' },
      { name: '🌿 অধ্যায় ৯ - দৃঢ়তা প্রদান ও চলন - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Biology+Chapter+9+Locomotion+Bangla' },
      { name: '🌿 অধ্যায় ১০ - সমন্বয় ও নিঃসরণ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Biology+Chapter+10+Coordination+Excretion+Bangla' },
      { name: '🌿 অধ্যায় ১১ - জীবের প্রজনন - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Biology+Chapter+11+Reproduction+Bangla' },
      { name: '🌿 অধ্যায় ১২ - জীবনের ধারাবাহিকতা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Biology+Chapter+12+Continuity+Life+Genetics+Bangla' },
      { name: '🌿 অধ্যায় ১৩ - জীবের পরিবেশ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Biology+Chapter+13+Ecology+Bangla' },
      { name: '🌿 মানবদেহের তন্ত্রসমূহ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Biology+Human+Body+Systems+Bangla' },
      { name: '🌐 Khan Academy - Biology', web: 'https://www.khanacademy.org/science/biology' },
    ],
  },

  {
    name: 'তথ্য ও যোগাযোগ প্রযুক্তি (ICT)',
    items: [
      { name: '📚 ICT - 10 Minute School', web: 'https://10minuteschool.com/ssc/ict/' },
      { name: '📚 ICT - Shikho', web: 'https://shikho.com/ssc/ict' },
      { name: '📚 ICT - Udvash Online', web: 'https://udvash.com/ssc-ict' },
      // ── অধ্যায় ১ ──
      { name: '💻 অধ্যায় ১ - তথ্য ও যোগাযোগ প্রযুক্তি পরিচিতি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+Chapter+1+Introduction+Bangla' },
      { name: '💻 কম্পিউটারের ইতিহাস ও প্রজন্ম - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+Computer+History+Generation+Bangla' },
      { name: '💻 হার্ডওয়্যার ও সফটওয়্যার - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+Hardware+Software+Bangla' },
      { name: '💻 অপারেটিং সিস্টেম - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+Operating+System+Bangla' },
      // ── অধ্যায় ২ ──
      { name: '🌐 অধ্যায় ২ - কম্পিউটার নেটওয়ার্ক - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+Chapter+2+Computer+Network+Bangla' },
      { name: '🌐 ইন্টারনেট পরিচিতি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+Internet+Introduction+Bangla' },
      { name: '🌐 ই-মেইল ও সোশ্যাল মিডিয়া - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+Email+Social+Media+Bangla' },
      { name: '🌐 সাইবার নিরাপত্তা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+Cyber+Security+Bangla' },
      // ── অধ্যায় ৩ ──
      { name: '🔣 অধ্যায় ৩ - সংখ্যা পদ্ধতি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+Chapter+3+Number+System+Bangla' },
      { name: '🔣 বাইনারি সংখ্যা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+Binary+Number+Bangla+lecture' },
      { name: '🔣 অক্টাল ও হেক্সাডেসিমেল - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+Octal+Hexadecimal+Bangla' },
      { name: '🔣 সংখ্যা রূপান্তর - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+Number+Conversion+Bangla' },
      { name: '🔣 লজিক গেট - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+Logic+Gates+Bangla+lecture' },
      // ── অধ্যায় ৪ ──
      { name: '🌍 অধ্যায় ৪ - ওয়েব পরিচিতি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+Chapter+4+Web+Introduction+Bangla' },
      { name: '🌍 HTML - মৌলিক ট্যাগ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+HTML+Basic+Tags+Bangla' },
      { name: '🌍 HTML - টেবিল - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+HTML+Table+Bangla+lecture' },
      { name: '🌍 HTML - ফর্ম - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+HTML+Form+Bangla+lecture' },
      { name: '🌍 CSS - স্টাইলশিট - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+CSS+Stylesheet+Bangla' },
      // ── অধ্যায় ৫ ──
      { name: '📊 অধ্যায় ৫ - প্রোগ্রামিং - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+Chapter+5+Programming+Bangla' },
      { name: '📊 অ্যালগরিদম ও ফ্লোচার্ট - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+Algorithm+Flowchart+Bangla' },
      { name: '📊 স্যুডোকোড - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+Pseudocode+Bangla+lecture' },
      // ── অধ্যায় ৬ ──
      { name: '🗄️ অধ্যায় ৬ - ডেটাবেজ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+Chapter+6+Database+Bangla' },
      { name: '🗄️ স্প্রেডশিট - Microsoft Excel - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+ICT+Spreadsheet+Excel+Bangla' },
      { name: '🌐 W3Schools - HTML/CSS', web: 'https://www.w3schools.com/' },
    ],
  },

  {
    name: 'বাংলাদেশ ও বিশ্বপরিচয়',
    items: [
      { name: '📚 বাংলাদেশ ও বিশ্বপরিচয় - 10 Minute School', web: 'https://10minuteschool.com/ssc/bangladesh-world-introduction/' },
      { name: '📚 বাংলাদেশ ও বিশ্বপরিচয় - Shikho', web: 'https://shikho.com/ssc/bangladesh-world-introduction' },
      { name: '📚 বাংলাদেশ ও বিশ্বপরিচয় - Bohubrihi', web: 'https://bohubrihi.com/course/ssc-bangladesh-world/' },
      { name: '🗺️ অধ্যায় ১ - পূর্ব বাংলায় উপনিবেশ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+BGS+Chapter+1+Colonial+Bangladesh+Bangla' },
      { name: '🗺️ অধ্যায় ২ - ব্রিটিশ শাসন ও আন্দোলন - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+BGS+Chapter+2+British+Rule+Movement+Bangla' },
      { name: '🗺️ অধ্যায় ৩ - পাকিস্তান আন্দোলন - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+BGS+Pakistan+Movement+Bangla+lecture' },
      { name: '🗺️ অধ্যায় ৪ - ভাষা আন্দোলন ও পরবর্তী ঘটনাপ্রবাহ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+BGS+Language+Movement+1952+Bangla' },
      { name: '🗺️ অধ্যায় ৫ - মুক্তিযুদ্ধ ও স্বাধীনতা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+BGS+Liberation+War+1971+Bangla' },
      { name: '🗺️ অধ্যায় ৬ - বাংলাদেশের সরকার ব্যবস্থা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+BGS+Bangladesh+Government+System+Bangla' },
      { name: '🗺️ অধ্যায় ৭ - বাংলাদেশের অর্থনীতি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+BGS+Bangladesh+Economy+Bangla' },
      { name: '🗺️ অধ্যায় ৮ - বাংলাদেশের ভূপ্রকৃতি ও জলবায়ু - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+BGS+Bangladesh+Geography+Climate+Bangla' },
      { name: '🗺️ অধ্যায় ৯ - বাংলাদেশের জনসংখ্যা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+BGS+Bangladesh+Population+Bangla' },
      { name: '🗺️ অধ্যায় ১০ - বাংলাদেশের সংস্কৃতি - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+BGS+Bangladesh+Culture+Bangla' },
      { name: '🗺️ অধ্যায় ১১ - বাংলাদেশের সমাজ ও পরিবেশ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+BGS+Bangladesh+Society+Environment+Bangla' },
      { name: '🗺️ অধ্যায় ১২ - উন্নয়নশীল বিশ্ব - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+BGS+Developing+World+Bangla' },
      { name: '🗺️ অধ্যায় ১৩ - আন্তর্জাতিক সংস্থা (UN, SAARC) - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+BGS+International+Organizations+UN+SAARC+Bangla' },
      { name: '🗺️ অধ্যায় ১৪ - বৈশ্বিক সমস্যা - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+BGS+Global+Problems+Bangla+lecture' },
    ],
  },

  {
    name: 'ভূগোল ও পরিবেশ',
    items: [
      { name: '📚 ভূগোল ও পরিবেশ - 10 Minute School', web: 'https://10minuteschool.com/ssc/geography/' },
      { name: '📚 ভূগোল ও পরিবেশ - Shikho', web: 'https://shikho.com/ssc/geography' },
      { name: '📚 ভূগোল ও পরিবেশ - Udvash Online', web: 'https://udvash.com/ssc-geography' },
      { name: '🌍 ভূগোল - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=SSC+Geography+Environment+lecture+Bangla' },
    ],
  },

  {
    name: 'পৌরনীতি ও নাগরিকতা',
    items: [
      { name: '📚 পৌরনীতি ও নাগরিকতা - 10 Minute School', web: 'https://10minuteschool.com/ssc/civics/' },
      { name: '📚 পৌরনীতি ও নাগরিকতা - Shikho', web: 'https://shikho.com/ssc/civics' },
      { name: '📚 পৌরনীতি ও নাগরিকতা - Bohubrihi', web: 'https://bohubrihi.com/course/ssc-civics/' },
      { name: '🏛️ পৌরনীতি - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=SSC+Civics+Citizenship+lecture+Bangla' },
    ],
  },

  {
    name: 'ইতিহাস',
    items: [
      { name: '📚 ইতিহাস - 10 Minute School', web: 'https://10minuteschool.com/ssc/history/' },
      { name: '📚 ইতিহাস - Shikho', web: 'https://shikho.com/ssc/history' },
      { name: '📚 ইতিহাস - Udvash Online', web: 'https://udvash.com/ssc-history' },
      { name: '📜 ইতিহাস - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=SSC+History+lecture+Bangla' },
    ],
  },

  {
    name: 'অর্থনীতি',
    items: [
      { name: '📚 অর্থনীতি - 10 Minute School', web: 'https://10minuteschool.com/ssc/economics/' },
      { name: '📚 অর্থনীতি - Shikho', web: 'https://shikho.com/ssc/economics' },
      { name: '📚 অর্থনীতি - Bohubrihi', web: 'https://bohubrihi.com/course/ssc-economics/' },
      { name: '📊 অর্থনীতি - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=SSC+Economics+lecture+Bangla' },
    ],
  },

  {
    name: 'হিসাববিজ্ঞান',
    items: [
      { name: '📚 হিসাববিজ্ঞান - 10 Minute School', web: 'https://10minuteschool.com/ssc/accounting/' },
      { name: '📚 হিসাববিজ্ঞান - Shikho', web: 'https://shikho.com/ssc/accounting' },
      { name: '📚 হিসাববিজ্ঞান - Udvash Online', web: 'https://udvash.com/ssc-accounting' },
      { name: '📊 হিসাববিজ্ঞান - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=SSC+Accounting+lecture+Bangla' },
    ],
  },

  {
    name: 'ব্যবসায় উদ্যোগ',
    items: [
      { name: '📚 ব্যবসায় উদ্যোগ - 10 Minute School', web: 'https://10minuteschool.com/ssc/business-entrepreneurship/' },
      { name: '📚 ব্যবসায় উদ্যোগ - Shikho', web: 'https://shikho.com/ssc/business-entrepreneurship' },
      { name: '📚 ব্যবসায় উদ্যোগ - Bohubrihi', web: 'https://bohubrihi.com/course/ssc-business/' },
      { name: '📊 ব্যবসায় উদ্যোগ - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=SSC+Business+Entrepreneurship+lecture+Bangla' },
    ],
  },

  {
    name: 'কৃষিশিক্ষা',
    items: [
      { name: '📚 কৃষিশিক্ষা - 10 Minute School', web: 'https://10minuteschool.com/ssc/agriculture/' },
      { name: '📚 কৃষিশিক্ষা - Shikho', web: 'https://shikho.com/ssc/agriculture' },
      { name: '📚 কৃষিশিক্ষা - Muktopaath', web: 'https://muktopaath.gov.bd' },
      { name: '🌾 কৃষিশিক্ষা - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=SSC+Agriculture+lecture+Bangla' },
    ],
  },

  {
    name: 'গার্হস্থ্য বিজ্ঞান',
    items: [
      { name: '📚 গার্হস্থ্য বিজ্ঞান - 10 Minute School', web: 'https://10minuteschool.com/ssc/home-science/' },
      { name: '📚 গার্হস্থ্য বিজ্ঞান - Shikho', web: 'https://shikho.com/ssc/home-science' },
      { name: '📚 গার্হস্থ্য বিজ্ঞান - Muktopaath', web: 'https://muktopaath.gov.bd' },
      { name: '🏠 গার্হস্থ্য বিজ্ঞান - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=SSC+Home+Science+lecture+Bangla' },
    ],
  },

  {
    name: 'ইসলাম ও নৈতিক শিক্ষা',
    items: [
      { name: '📚 ইসলাম ও নৈতিক শিক্ষা - 10 Minute School', web: 'https://10minuteschool.com/ssc/islamic-studies/' },
      { name: '📚 ইসলাম ও নৈতিক শিক্ষা - Shikho', web: 'https://shikho.com/ssc/islamic-studies' },
      { name: '📚 ইসলাম ও নৈতিক শিক্ষা - Muktopaath', web: 'https://muktopaath.gov.bd' },
      // ── অধ্যায়সমূহ ──
      { name: '🕌 অধ্যায় ১ - আকাইদ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Islamic+Studies+Aqidah+Bangla+lecture' },
      { name: '🕌 তাওহিদ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Islamic+Studies+Tawhid+Bangla' },
      { name: '🕌 রিসালাত ও নবুয়্যত - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Islamic+Studies+Risalat+Nubuwwat+Bangla' },
      { name: '🕌 আখিরাত - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Islamic+Studies+Akhirat+Bangla' },
      { name: '🕌 অধ্যায় ২ - ইবাদত - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Islamic+Studies+Ibadah+Bangla+lecture' },
      { name: '🕌 সালাত (নামাজ) - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Islamic+Studies+Salat+Namaz+Bangla' },
      { name: '🕌 সাওম (রোজা) - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Islamic+Studies+Sawm+Roza+Bangla' },
      { name: '🕌 যাকাত - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Islamic+Studies+Zakat+Bangla+lecture' },
      { name: '🕌 হজ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Islamic+Studies+Hajj+Bangla+lecture' },
      { name: '🕌 অধ্যায় ৩ - কুরআন মজিদ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Islamic+Studies+Quran+Bangla+lecture' },
      { name: '🕌 কুরআন তিলাওয়াত ও তাফসির - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Islamic+Studies+Quran+Tilawat+Tafsir+Bangla' },
      { name: '🕌 অধ্যায় ৪ - হাদিস শরিফ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Islamic+Studies+Hadith+Bangla+lecture' },
      { name: '🕌 অধ্যায় ৫ - সিরাতুন্নবী (স.) - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Islamic+Studies+Siratunnabi+Prophet+Life+Bangla' },
      { name: '🕌 অধ্যায় ৬ - ইসলামি নৈতিকতা ও মূল্যবোধ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Islamic+Studies+Islamic+Morality+Values+Bangla' },
      { name: '🕌 অধ্যায় ৭ - ইসলাম ও সমাজ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Islamic+Studies+Islam+Society+Bangla' },
      { name: '🕌 আখলাক ও চরিত্র গঠন - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Islamic+Studies+Akhlaq+Character+Bangla' },
      { name: '🕌 ইসলামি ইতিহাস - খলিফাগণ - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Islamic+Studies+History+Caliphs+Bangla' },
    ],
  },

  {
    name: 'হিন্দুধর্ম ও নৈতিক শিক্ষা',
    items: [
      { name: '📚 হিন্দুধর্ম ও নৈতিক শিক্ষা - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=SSC+Hindu+Religion+Ethics+lecture+Bangla' },
      { name: '📚 হিন্দুধর্ম ও নৈতিক শিক্ষা - 10 Minute School', web: 'https://10minuteschool.com/ssc/hindu-studies/' },
      { name: '📚 হিন্দুধর্ম ও নৈতিক শিক্ষা - Muktopaath', web: 'https://muktopaath.gov.bd' },
    ],
  },

  {
    name: 'চারু ও কারুকলা',
    items: [
      { name: '📚 চারু ও কারুকলা - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=SSC+Fine+Arts+lecture+Bangla' },
      { name: '📚 চারু ও কারুকলা - 10 Minute School', web: 'https://10minuteschool.com/ssc/arts-crafts/' },
      { name: '📚 চারু ও কারুকলা - Muktopaath', web: 'https://muktopaath.gov.bd' },
    ],
  },

  {
    name: 'শারীরিক শিক্ষা ও স্বাস্থ্য',
    items: [
      { name: '📚 শারীরিক শিক্ষা ও স্বাস্থ্য - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=SSC+Physical+Education+Health+lecture+Bangla' },
      { name: '📚 শারীরিক শিক্ষা ও স্বাস্থ্য - 10 Minute School', web: 'https://10minuteschool.com/ssc/physical-education/' },
      { name: '📚 শারীরিক শিক্ষা ও স্বাস্থ্য - Muktopaath', web: 'https://muktopaath.gov.bd' },
    ],
  },

  {
    name: 'সকল বিষয় (পোর্টাল)',
    items: [
      { name: '🌐 10 Minute School SSC', web: 'https://10minuteschool.com/ssc/' },
      { name: '🌐 Shikho SSC', web: 'https://shikho.com/ssc' },
      { name: '🌐 Udvash Online SSC', web: 'https://udvash.com/ssc' },
      { name: '🌐 Bohubrihi SSC', web: 'https://bohubrihi.com/ssc/' },
      { name: '🌐 Khan Academy Bangla', web: 'https://bn.khanacademy.org' },
      { name: '🌐 Muktopaath SSC', web: 'https://muktopaath.gov.bd' },
      { name: '🌐 YouTube SSC All Subjects', web: 'https://www.youtube.com/results?search_query=SSC+all+subjects+lecture+Bangla' },
    ],
  },
];

const SscSubjectAll = () => {
  const [selectedSub, setSelectedSub] = useState(subCategories[0]);

  return (
    <div>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '16px',
      }}>
        {subCategories.map((sub, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedSub(selectedSub?.name === sub.name ? null : sub)}
            style={{
              padding: '7px 13px',
              background: selectedSub?.name === sub.name ? COLOR : '#1a3a5c',
              border: `1px solid ${COLOR}55`,
              borderRadius: '6px',
              color: '#fff',
              cursor: 'pointer',
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              fontSize: '13px',
              transition: 'background 0.2s',
            }}
          >
            {sub.name}
          </button>
        ))}
      </div>

      {selectedSub && (
        <ItemPanel
          items={selectedSub.items}
          title={`📚 SSC - ${selectedSub.name}`}
          color={COLOR}
          icon={ICON}
          onClose={() => setSelectedSub(null)}
        />
      )}
    </div>
  );
};

export default SscSubjectAll;