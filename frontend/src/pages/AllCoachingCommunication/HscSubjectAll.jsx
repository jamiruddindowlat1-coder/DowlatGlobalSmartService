import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#0d6e3f';
const ICON = '🎓';

const subCategories = [
  {
    name: 'বাংলা',
    items: [
      // ── পোর্টাল ──
      { name: '📚 বাংলা ১ম পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/bangla-1st-paper/' },
      { name: '📚 বাংলা ২য় পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/bangla-2nd-paper/' },
      { name: '📚 বাংলা - Shikho', web: 'https://shikho.com/hsc/bangla' },
      { name: '📚 বাংলা - Bohubrihi', web: 'https://bohubrihi.com/course/hsc-bangla/' },
      // ── বাংলা ১ম পত্র গদ্য ──
      { name: '📖 বিভীষণের প্রতি মেঘনাদ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Bibhishoner+proti+Meghnath+lecture' },
      { name: '📖 সোনার তরী - Rabindranath - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Sonar+Tori+Rabindranath+bangla+lecture' },
      { name: '📖 আমার পথ - কাজী নজরুল ইসলাম - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Amar+Path+Nazrul+bangla+lecture' },
      { name: '📖 বিড়াল - বঙ্কিমচন্দ্র - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biral+Bankimchandra+bangla+lecture' },
      { name: '📖 চাষার দুক্ষু - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Chashar+Dukhu+bangla+lecture' },
      { name: '📖 জীবন ও বৃক্ষ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Jibon+O+Briksha+bangla+lecture' },
      { name: '📖 অপরিচিতা - রবীন্দ্রনাথ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Oporichita+Rabindranath+bangla+lecture' },
      { name: '📖 মাসি-পিসি - মানিক বন্দ্যোপাধ্যায় - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Mashi+Pishi+Manik+Bondhopadhyay+bangla' },
      { name: '📖 বায়ান্নর দিনগুলো - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Bayannor+Dingulo+bangla+lecture' },
      { name: '📖 রেইনকোট - আখতারুজ্জামান ইলিয়াস - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Raincoat+Akhteruzzaman+Elias+bangla' },
      { name: '📖 আহ্বান - মানিক বন্দ্যোপাধ্যায় - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Ahban+Manik+bangla+lecture' },
      // ── বাংলা ১ম পত্র কবিতা ──
      { name: '🎵 সোনার তরী কবিতা বিশ্লেষণ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Sonar+Tori+kobita+analysis+bangla' },
      { name: '🎵 আঠারো বছর বয়স - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Atharo+Bochor+Boyos+kobita+bangla' },
      { name: '🎵 ফেব্রুয়ারি ১৯৬৯ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+February+1969+kobita+bangla+lecture' },
      { name: '🎵 তাহারেই পড়ে মনে - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Taherei+pore+mone+kobita+bangla' },
      { name: '🎵 সেই অস্ত্র - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Sei+Ostro+kobita+bangla+lecture' },
      { name: '🎵 লোক-লোকান্তর - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Lok+Lokanthor+kobita+bangla' },
      { name: '🎵 নূরলদীনের কথা মনে পড়ে যায় - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Nuroldiner+katha+kobita+bangla' },
      { name: '🎵 রক্তে আমার অনাদি অস্থি - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Rokte+Amar+Anadi+Osthi+kobita+bangla' },
      // ── বাংলা ২য় পত্র ──
      { name: '✏️ বাংলা ২য় পত্র ব্যাকরণ সম্পূর্ণ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Bangla+2nd+paper+grammar+full+bangla' },
      { name: '✏️ সন্ধি - বাংলা ব্যাকরণ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Sandhi+bangla+grammar+lecture' },
      { name: '✏️ সমাস - বাংলা ব্যাকরণ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Samas+bangla+grammar+lecture' },
      { name: '✏️ কারক ও বিভক্তি - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Karak+Bibhakti+bangla+grammar' },
      { name: '✏️ প্রবন্ধ রচনা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Bangla+prabandha+rachana+lecture' },
      { name: '✏️ ভাব সম্প্রসারণ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Bhab+Samprasaron+bangla+lecture' },
      { name: '✏️ অনুচ্ছেদ রচনা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Onuchhed+rachana+bangla+lecture' },
      { name: '✏️ পত্র লেখা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Bangla+potro+lekha+lecture' },
      { name: '✏️ বিরাম চিহ্ন - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Bangla+biram+chinh+grammar' },
      { name: '✏️ ধ্বনি ও বর্ণ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Dhoni+Borno+bangla+grammar' },
      { name: '✏️ শব্দ ও পদ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Shobdo+Pod+bangla+grammar' },
      { name: '✏️ বাক্য গঠন ও রূপান্তর - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Bakyo+Gathan+Rupantor+bangla' },
      { name: '✏️ বাংলা ২য় পত্র - 10MS Full Playlist', web: 'https://www.youtube.com/results?search_query=HSC+Bangla+2nd+Paper+10+minute+school+playlist' },
    ],
  },

  {
    name: 'ইংরেজি',
    items: [
      // ── পোর্টাল ──
      { name: '📚 English 1st Paper - 10 Minute School', web: 'https://10minuteschool.com/hsc/english-1st-paper/' },
      { name: '📚 English 2nd Paper - 10 Minute School', web: 'https://10minuteschool.com/hsc/english-2nd-paper/' },
      { name: '📚 English - Shikho', web: 'https://shikho.com/hsc/english' },
      // ── English 1st Paper Reading ──
      { name: '📖 Reading Comprehension Techniques - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Reading+Comprehension+Bangladesh' },
      { name: '📖 Seen Passage Practice - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Seen+Passage+Bangladesh+lecture' },
      { name: '📖 Unseen Passage - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Unseen+Passage+Bangladesh' },
      { name: '📖 Summary Writing - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Summary+Writing+Bangladesh' },
      // ── English 1st Paper Writing ──
      { name: '✍️ Completing Story - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Completing+Story+Bangladesh+lecture' },
      { name: '✍️ Paragraph Writing - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Paragraph+Writing+Bangladesh' },
      { name: '✍️ Email / Letter Writing - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Email+Letter+Writing+Bangladesh' },
      { name: '✍️ Dialogue Writing - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Dialogue+Writing+Bangladesh' },
      { name: '✍️ Report Writing - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Report+Writing+Bangladesh' },
      { name: '✍️ CV / Application Writing - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+CV+Application+Writing+Bangladesh' },
      // ── English 2nd Paper Grammar ──
      { name: '📝 Parts of Speech - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Parts+of+Speech+Bangladesh' },
      { name: '📝 Tense - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Tense+Bangladesh+lecture' },
      { name: '📝 Voice Change - Active Passive - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Voice+Change+Active+Passive+Bangladesh' },
      { name: '📝 Narration / Direct Indirect - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Narration+Direct+Indirect+Bangladesh' },
      { name: '📝 Transformation of Sentences - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Transformation+Sentences+Bangladesh' },
      { name: '📝 Modifiers - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Modifiers+Bangladesh+lecture' },
      { name: '📝 Connectors - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Connectors+Bangladesh+lecture' },
      { name: '📝 Conditionals - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Conditionals+Bangladesh+lecture' },
      { name: '📝 Prepositions - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Prepositions+Bangladesh' },
      { name: '📝 Articles (a, an, the) - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Articles+a+an+the+Bangladesh' },
      { name: '📝 Subject-Verb Agreement - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Subject+Verb+Agreement+Bangladesh' },
      { name: '📝 Punctuation & Capitalization - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Punctuation+Capitalization+Bangladesh' },
      { name: '📝 Cloze Test (with / without clues) - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Cloze+Test+Bangladesh' },
      { name: '📝 Right Form of Verbs - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Right+Form+Verbs+Bangladesh' },
      // ── Vocabulary ──
      { name: '🔤 Vocabulary Building - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Vocabulary+Building+Bangladesh' },
      { name: '🔤 Synonyms & Antonyms - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Synonyms+Antonyms+Bangladesh' },
      { name: '🔤 Idioms & Phrases - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Idioms+Phrases+Bangladesh' },
      { name: '🔤 Word Formation - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Word+Formation+Bangladesh' },
      // ── Extra ──
      { name: '🌐 BBC Learning English', web: 'https://www.bbc.co.uk/learningenglish/' },
      { name: '🌐 British Council - English Skills', web: 'https://www.britishcouncil.org/exam/english' },
      { name: '🌐 English Writing Skills - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+writing+skills+Bangladesh' },
    ],
  },

  {
    name: 'গণিত',
    items: [
      // ── পোর্টাল ──
      { name: '📚 উচ্চতর গণিত ১ম পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/higher-math-1st-paper/' },
      { name: '📚 উচ্চতর গণিত ২য় পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/higher-math-2nd-paper/' },
      { name: '📚 উচ্চতর গণিত - Shikho', web: 'https://shikho.com/hsc/higher-math' },
      { name: '📚 গণিত - Bohubrihi', web: 'https://bohubrihi.com/course/hsc-math/' },
      // ── উচ্চতর গণিত ১ম পত্র অধ্যায়সমূহ ──
      { name: '📐 অধ্যায় ১ - ম্যাট্রিক্স ও নির্ণায়ক - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Higher+Math+Matrix+Determinant+Bangla' },
      { name: '📐 অধ্যায় ২ - ভেক্টর - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Higher+Math+Vector+Bangla+lecture' },
      { name: '📐 অধ্যায় ৩ - সরলরেখা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Higher+Math+Straight+Line+Bangla+lecture' },
      { name: '📐 অধ্যায় ৪ - বৃত্ত - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Higher+Math+Circle+Bangla+lecture' },
      { name: '📐 অধ্যায় ৫ - পরাবৃত্ত - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Higher+Math+Parabola+Bangla+lecture' },
      { name: '📐 অধ্যায় ৬ - ত্রিকোণমিতি - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Higher+Math+Trigonometry+Bangla+lecture' },
      { name: '📐 অধ্যায় ৭ - ইনভার্স ট্রিগোনোমেট্রি - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Higher+Math+Inverse+Trigonometry+Bangla' },
      { name: '📐 অধ্যায় ৮ - জটিল সংখ্যা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Higher+Math+Complex+Number+Bangla' },
      // ── উচ্চতর গণিত ২য় পত্র অধ্যায়সমূহ ──
      { name: '📊 অধ্যায় ১ - ফাংশন ও লিমিট - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Higher+Math+Function+Limit+Bangla' },
      { name: '📊 অধ্যায় ২ - অনুক্রম ও ধারা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Higher+Math+Sequence+Series+Bangla' },
      { name: '📊 অধ্যায় ৩ - অন্তরীকরণ (Differentiation) - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Higher+Math+Differentiation+Bangla' },
      { name: '📊 অধ্যায় ৪ - যোগজীকরণ (Integration) - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Higher+Math+Integration+Bangla+lecture' },
      { name: '📊 অধ্যায় ৫ - সম্ভাবনা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Higher+Math+Probability+Bangla' },
      { name: '📊 অধ্যায় ৬ - বিন্যাস ও সমাবেশ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Higher+Math+Permutation+Combination+Bangla' },
      { name: '📊 অধ্যায় ৭ - স্থিতিবিদ্যা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Higher+Math+Statics+Bangla+lecture' },
      { name: '📊 অধ্যায় ৮ - গতিবিদ্যা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Higher+Math+Dynamics+Bangla+lecture' },
      // ── সাধারণ গণিত ──
      { name: '🔢 সাধারণ গণিত - বীজগণিত - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+General+Math+Algebra+Bangla' },
      { name: '🔢 সাধারণ গণিত - জ্যামিতি - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+General+Math+Geometry+Bangla' },
      { name: '🔢 সাধারণ গণিত - পরিমিতি - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+General+Math+Mensuration+Bangla' },
      { name: '🔢 সাধারণ গণিত - পরিসংখ্যান - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+General+Math+Statistics+Bangla' },
      // ── Extra ──
      { name: '🌐 Khan Academy - Calculus', web: 'https://www.khanacademy.org/math/calculus-1' },
      { name: '🌐 Khan Academy বাংলা - গণিত', web: 'https://bn.khanacademy.org/math' },
      { name: '🌐 Wolfram Alpha (Math Solver)', web: 'https://www.wolframalpha.com/' },
    ],
  },

  {
    name: 'পদার্থবিজ্ঞান',
    items: [
      // ── পোর্টাল ──
      { name: '📚 পদার্থবিজ্ঞান ১ম পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/physics-1st-paper/' },
      { name: '📚 পদার্থবিজ্ঞান ২য় পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/physics-2nd-paper/' },
      { name: '📚 পদার্থবিজ্ঞান - Shikho', web: 'https://shikho.com/hsc/physics' },
      { name: '📚 পদার্থবিজ্ঞান - Khan Academy Bangla', web: 'https://bn.khanacademy.org/science/physics' },
      // ── ১ম পত্র অধ্যায়সমূহ ──
      { name: '⚛️ অধ্যায় ১ - ভৌত জগৎ ও পরিমাপ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Physical+World+Measurement+Bangla' },
      { name: '⚛️ অধ্যায় ২ - ভেক্টর - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Vector+Bangla+lecture' },
      { name: '⚛️ অধ্যায় ৩ - গতিবিদ্যা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Kinematics+Bangla+lecture' },
      { name: '⚛️ অধ্যায় ৪ - নিউটনের গতিসূত্র - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Newton+Laws+Motion+Bangla' },
      { name: '⚛️ অধ্যায় ৫ - কাজ, শক্তি ও ক্ষমতা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Work+Energy+Power+Bangla' },
      { name: '⚛️ অধ্যায় ৬ - মহাকর্ষ ও অভিকর্ষ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Gravitation+Bangla+lecture' },
      { name: '⚛️ অধ্যায় ৭ - পদার্থের গুণাগুণ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Properties+Matter+Bangla' },
      { name: '⚛️ অধ্যায় ৮ - পর্যাবৃত্ত গতি - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Periodic+Motion+SHM+Bangla' },
      { name: '⚛️ অধ্যায় ৯ - তরঙ্গ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Wave+Motion+Bangla+lecture' },
      { name: '⚛️ অধ্যায় ১০ - আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Ideal+Gas+Kinetic+Theory+Bangla' },
      { name: '⚛️ অধ্যায় ১১ - তাপগতিবিদ্যা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Thermodynamics+Bangla+lecture' },
      // ── ২য় পত্র অধ্যায়সমূহ ──
      { name: '🔌 অধ্যায় ১ - তাপ ও তাপমাত্রা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Heat+Temperature+Bangla' },
      { name: '🔌 অধ্যায় ২ - স্থির তড়িৎ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Electrostatics+Bangla+lecture' },
      { name: '🔌 অধ্যায় ৩ - চল তড়িৎ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Current+Electricity+Bangla' },
      { name: '🔌 অধ্যায় ৪ - তড়িৎ প্রবাহের চৌম্বক ক্রিয়া - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Magnetic+Effect+Current+Bangla' },
      { name: '🔌 অধ্যায় ৫ - তড়িৎচৌম্বক আবেশ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Electromagnetic+Induction+Bangla' },
      { name: '🔌 অধ্যায় ৬ - জ্যামিতিক আলোকবিজ্ঞান - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Geometric+Optics+Bangla' },
      { name: '🔌 অধ্যায় ৭ - ভৌত আলোকবিজ্ঞান - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Physical+Optics+Bangla' },
      { name: '🔌 অধ্যায় ৮ - আধুনিক পদার্থবিজ্ঞান - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Modern+Physics+Bangla' },
      { name: '🔌 অধ্যায় ৯ - পরমাণুর মডেল ও নিউক্লিয়ার পদার্থবিজ্ঞান - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Atomic+Model+Nuclear+Bangla' },
      { name: '🔌 অধ্যায় ১০ - সেমিকন্ডাক্টর ও ইলেকট্রনিক্স - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Physics+Semiconductor+Electronics+Bangla' },
      // ── Extra ──
      { name: '🌐 Khan Academy - Physics', web: 'https://www.khanacademy.org/science/physics' },
      { name: '🌐 PhET Simulations - পদার্থবিজ্ঞান ল্যাব', web: 'https://phet.colorado.edu/bn/simulations/category/physics' },
    ],
  },

  {
    name: 'রসায়ন',
    items: [
      // ── পোর্টাল ──
      { name: '📚 রসায়ন ১ম পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/chemistry-1st-paper/' },
      { name: '📚 রসায়ন ২য় পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/chemistry-2nd-paper/' },
      { name: '📚 রসায়ন - Shikho', web: 'https://shikho.com/hsc/chemistry' },
      { name: '📚 রসায়ন - Udvash Online', web: 'https://udvash.com/hsc-chemistry' },
      // ── ১ম পত্র অধ্যায়সমূহ ──
      { name: '🧪 অধ্যায় ১ - ল্যাবরেটরি নিরাপত্তা ও পরিচিতি - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Chemistry+Lab+Safety+Bangla' },
      { name: '🧪 অধ্যায় ২ - গুণগত রসায়ন - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Chemistry+Qualitative+Chemistry+Bangla' },
      { name: '🧪 অধ্যায় ৩ - মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Chemistry+Periodic+Table+Chemical+Bond+Bangla' },
      { name: '🧪 অধ্যায় ৪ - রাসায়নিক পরিবর্তন - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Chemistry+Chemical+Change+Bangla' },
      { name: '🧪 অধ্যায় ৫ - কর্মমুখী রসায়ন - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Chemistry+Applied+Chemistry+Bangla' },
      { name: '🧪 পরিমাণগত রসায়ন ও মোল ধারণা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Chemistry+Mole+Concept+Quantitative+Bangla' },
      { name: '🧪 গ্যাসের সূত্রসমূহ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Chemistry+Gas+Laws+Bangla+lecture' },
      { name: '🧪 তড়িৎ রসায়ন - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Chemistry+Electrochemistry+Bangla' },
      // ── ২য় পত্র অধ্যায়সমূহ ──
      { name: '⚗️ অধ্যায় ১ - পরিবেশ রসায়ন - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Chemistry+Environmental+Chemistry+Bangla' },
      { name: '⚗️ অধ্যায় ২ - জৈব রসায়ন - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Chemistry+Organic+Chemistry+Bangla' },
      { name: '⚗️ অধ্যায় ৩ - পলিমার - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Chemistry+Polymer+Bangla+lecture' },
      { name: '⚗️ অধ্যায় ৪ - ধাতু বিদ্যা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Chemistry+Metallurgy+Bangla' },
      { name: '⚗️ অধ্যায় ৫ - শিল্প রসায়ন - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Chemistry+Industrial+Chemistry+Bangla' },
      { name: '⚗️ হাইড্রোকার্বন - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Chemistry+Hydrocarbon+Bangla+lecture' },
      { name: '⚗️ অ্যালকোহল ও ইথার - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Chemistry+Alcohol+Ether+Bangla' },
      { name: '⚗️ অ্যামিন ও অ্যামাইড - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Chemistry+Amine+Amide+Bangla' },
      { name: '⚗️ কার্বোহাইড্রেট, প্রোটিন ও লিপিড - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Chemistry+Carbohydrate+Protein+Lipid+Bangla' },
      { name: '⚗️ অ্যাসিড-ক্ষার ও pH - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Chemistry+Acid+Base+pH+Bangla' },
      // ── Extra ──
      { name: '🌐 Khan Academy - Chemistry', web: 'https://www.khanacademy.org/science/chemistry' },
      { name: '🌐 PhET Simulations - Chemistry Lab', web: 'https://phet.colorado.edu/en/simulations/category/chemistry' },
    ],
  },

  {
    name: 'জীববিজ্ঞান',
    items: [
      // ── পোর্টাল ──
      { name: '📚 জীববিজ্ঞান ১ম পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/biology-1st-paper/' },
      { name: '📚 জীববিজ্ঞান ২য় পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/biology-2nd-paper/' },
      { name: '📚 জীববিজ্ঞান - Shikho', web: 'https://shikho.com/hsc/biology' },
      // ── ১ম পত্র (উদ্ভিদবিজ্ঞান) অধ্যায়সমূহ ──
      { name: '🌿 অধ্যায় ১ - কোষ ও কোষের গঠন - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Cell+Structure+Bangla' },
      { name: '🌿 অধ্যায় ২ - কোষ বিভাজন - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Cell+Division+Mitosis+Meiosis+Bangla' },
      { name: '🌿 অধ্যায় ৩ - শৈবাল - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Algae+Bangla+lecture' },
      { name: '🌿 অধ্যায় ৪ - ছত্রাক - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Fungi+Bangla+lecture' },
      { name: '🌿 অধ্যায় ৫ - ব্রায়োফাইটা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Bryophyta+Bangla' },
      { name: '🌿 অধ্যায় ৬ - টেরিডোফাইটা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Pteridophyta+Bangla' },
      { name: '🌿 অধ্যায় ৭ - নগ্নবীজী উদ্ভিদ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Gymnosperm+Bangla' },
      { name: '🌿 অধ্যায় ৮ - আবৃতবীজী উদ্ভিদ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Angiosperm+Bangla' },
      { name: '🌿 অধ্যায় ৯ - উদ্ভিদ শারীরতত্ত্ব - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Plant+Physiology+Bangla' },
      { name: '🌿 সালোকসংশ্লেষণ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Photosynthesis+Bangla+lecture' },
      { name: '🌿 শ্বসন (Respiration) - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Respiration+Bangla+lecture' },
      { name: '🌿 অধ্যায় ১০ - উদ্ভিদের প্রজনন - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Plant+Reproduction+Bangla' },
      { name: '🌿 অধ্যায় ১১ - জীবের পরিবেশ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Ecology+Bangla+lecture' },
      // ── ২য় পত্র (প্রাণিবিজ্ঞান) অধ্যায়সমূহ ──
      { name: '🐾 প্রাণিজগতের শ্রেণীবিন্যাস - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Animal+Classification+Bangla' },
      { name: '🐾 হাইড্রা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Hydra+Bangla+lecture' },
      { name: '🐾 ঘাসফড়িং - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Grasshopper+Bangla+lecture' },
      { name: '🐾 রুই মাছ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Rohu+Fish+Bangla+lecture' },
      { name: '🐾 ব্যাঙ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Frog+Bangla+lecture' },
      { name: '🐾 মানব শারীরতত্ত্ব - পরিপাক - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Human+Digestion+Bangla' },
      { name: '🐾 মানব শারীরতত্ত্ব - রক্ত সংবহন - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Human+Circulation+Bangla' },
      { name: '🐾 মানব শারীরতত্ত্ব - শ্বসনতন্ত্র - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Human+Respiratory+System+Bangla' },
      { name: '🐾 মানব শারীরতত্ত্ব - রেচনতন্ত্র - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Human+Excretory+System+Bangla' },
      { name: '🐾 মানব শারীরতত্ত্ব - স্নায়ুতন্ত্র - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Human+Nervous+System+Bangla' },
      { name: '🐾 মানব শারীরতত্ত্ব - অন্তঃক্ষরা গ্রন্থি - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Endocrine+Gland+Bangla' },
      { name: '🐾 জিনতত্ত্ব ও বংশগতি - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Genetics+Heredity+Bangla' },
      { name: '🐾 DNA ও RNA গঠন - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+DNA+RNA+Structure+Bangla' },
      { name: '🐾 বিবর্তন - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Biology+Evolution+Bangla+lecture' },
      // ── Extra ──
      { name: '🌐 Khan Academy - Biology', web: 'https://www.khanacademy.org/science/biology' },
      { name: '🌐 PhET Simulations - Biology', web: 'https://phet.colorado.edu/en/simulations/category/biology' },
    ],
  },

  {
    name: 'তথ্য ও যোগাযোগ প্রযুক্তি (ICT)',
    items: [
      // ── পোর্টাল ──
      { name: '📚 ICT - 10 Minute School', web: 'https://10minuteschool.com/hsc/ict/' },
      { name: '📚 ICT - Shikho', web: 'https://shikho.com/hsc/ict' },
      { name: '📚 ICT - Udvash Online', web: 'https://udvash.com/hsc-ict' },
      // ── অধ্যায় ১ ──
      { name: '💻 অধ্যায় ১ - তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Chapter+1+Global+Bangladesh+Bangla' },
      { name: '💻 বিশ্বগ্রাম (Global Village) - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Global+Village+Bangla+lecture' },
      { name: '💻 কৃত্রিম বুদ্ধিমত্তা (AI) - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Artificial+Intelligence+Bangla' },
      { name: '💻 রোবোটিক্স - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Robotics+Bangla+lecture' },
      { name: '💻 বায়োমেট্রিক্স - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Biometrics+Bangla+lecture' },
      { name: '💻 ন্যানোটেকনোলজি - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Nanotechnology+Bangla' },
      { name: '💻 ভার্চুয়াল রিয়েলিটি - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Virtual+Reality+Bangla' },
      { name: '💻 ক্রায়োসার্জারি - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Cryosurgery+Bangla' },
      // ── অধ্যায় ২ ──
      { name: '🔢 অধ্যায় ২ - কমিউনিকেশন সিস্টেমস ও নেটওয়ার্কিং - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Chapter+2+Communication+Networking+Bangla' },
      { name: '🔢 ডেটা কমিউনিকেশন - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Data+Communication+Bangla' },
      { name: '🔢 কম্পিউটার নেটওয়ার্ক (LAN, WAN, MAN) - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Computer+Network+LAN+WAN+Bangla' },
      { name: '🔢 টপোলজি - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Network+Topology+Bangla' },
      { name: '🔢 ক্লাউড কম্পিউটিং - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Cloud+Computing+Bangla' },
      { name: '🔢 সাইবার নিরাপত্তা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Cyber+Security+Bangla' },
      { name: '🔢 ওয়্যারলেস ও মোবাইল কমিউনিকেশন - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Wireless+Mobile+Communication+Bangla' },
      // ── অধ্যায় ৩ ──
      { name: '🔣 অধ্যায় ৩ - সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Chapter+3+Number+System+Bangla' },
      { name: '🔣 সংখ্যা পদ্ধতি (Binary, Octal, Hex) - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Number+System+Binary+Octal+Hex+Bangla' },
      { name: '🔣 সংখ্যা রূপান্তর - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Number+Conversion+Bangla+lecture' },
      { name: '🔣 বুলিয়ান অ্যালজেবরা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Boolean+Algebra+Bangla' },
      { name: '🔣 লজিক গেট - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Logic+Gates+Bangla+lecture' },
      { name: '🔣 এনকোডার ও ডিকোডার - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Encoder+Decoder+Bangla' },
      { name: '🔣 অ্যাডার সার্কিট - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Adder+Circuit+Bangla' },
      // ── অধ্যায় ৪ ──
      { name: '🌐 অধ্যায় ৪ - ওয়েব ডিজাইন পরিচিতি - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Chapter+4+Web+Design+Bangla' },
      { name: '🌐 HTML - ট্যাগ পরিচিতি - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+HTML+Tags+Bangla+lecture' },
      { name: '🌐 HTML - টেবিল ও ফর্ম - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+HTML+Table+Form+Bangla' },
      { name: '🌐 CSS - স্টাইলশিট - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+CSS+Stylesheet+Bangla' },
      // ── অধ্যায় ৫ ──
      { name: '📊 অধ্যায় ৫ - প্রোগ্রামিং ভাষা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Chapter+5+Programming+Language+Bangla' },
      { name: '📊 C প্রোগ্রামিং - মৌলিক ধারণা - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+C+Programming+Basic+Bangla' },
      { name: '📊 অ্যালগরিদম ও ফ্লোচার্ট - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Algorithm+Flowchart+Bangla' },
      { name: '📊 লুপ (for, while) - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Loop+for+while+C+Bangla' },
      { name: '📊 অ্যারে ও ফাংশন - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Array+Function+C+Bangla' },
      // ── অধ্যায় ৬ ──
      { name: '🗄️ অধ্যায় ৬ - ডেটাবেজ ম্যানেজমেন্ট - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Chapter+6+Database+Management+Bangla' },
      { name: '🗄️ ডেটাবেজ পরিচিতি - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Database+Introduction+Bangla' },
      { name: '🗄️ SQL কমান্ড - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+SQL+Commands+Bangla+lecture' },
      { name: '🗄️ রিলেশনাল ডেটাবেজ - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+ICT+Relational+Database+Bangla' },
      // ── Extra ──
      { name: '🌐 W3Schools - HTML/CSS/JavaScript', web: 'https://www.w3schools.com/' },
      { name: '🌐 ICT Full Course - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=HSC+ICT+full+course+Bangla+playlist' },
    ],
  },

  {
    name: 'অর্থনীতি',
    items: [
      { name: '📚 অর্থনীতি ১ম পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/economics-1st-paper/' },
      { name: '📚 অর্থনীতি ২য় পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/economics-2nd-paper/' },
      { name: '📚 অর্থনীতি - Shikho', web: 'https://shikho.com/hsc/economics' },
      { name: '📊 অর্থনীতি - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=HSC+Economics+lecture+Bangla' },
    ],
  },

  {
    name: 'হিসাববিজ্ঞান',
    items: [
      { name: '📚 হিসাববিজ্ঞান ১ম পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/accounting-1st-paper/' },
      { name: '📚 হিসাববিজ্ঞান ২য় পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/accounting-2nd-paper/' },
      { name: '📚 হিসাববিজ্ঞান - Shikho', web: 'https://shikho.com/hsc/accounting' },
      { name: '📊 হিসাববিজ্ঞান - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=HSC+Accounting+lecture+Bangla' },
    ],
  },

  {
    name: 'ব্যবসায় সংগঠন ও ব্যবস্থাপনা',
    items: [
      { name: '📚 ব্যবসায় সংগঠন ১ম পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/business-organization-1st-paper/' },
      { name: '📚 ব্যবসায় ব্যবস্থাপনা ২য় পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/business-organization-2nd-paper/' },
      { name: '📚 ব্যবসায় সংগঠন - Shikho', web: 'https://shikho.com/hsc/business-organization' },
      { name: '📊 ব্যবসায় - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=HSC+Business+Organization+Management+Bangla' },
    ],
  },

  {
    name: 'ফিন্যান্স, ব্যাংকিং ও বিমা',
    items: [
      { name: '📚 ফিন্যান্স ১ম পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/finance-banking-insurance-1st-paper/' },
      { name: '📚 ফিন্যান্স ২য় পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/finance-banking-insurance-2nd-paper/' },
      { name: '📚 ফিন্যান্স - Shikho', web: 'https://shikho.com/hsc/finance' },
      { name: '📊 ফিন্যান্স - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=HSC+Finance+Banking+Insurance+Bangla' },
    ],
  },

  {
    name: 'পৌরনীতি ও সুশাসন',
    items: [
      { name: '📚 পৌরনীতি ১ম পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/civics-1st-paper/' },
      { name: '📚 পৌরনীতি ২য় পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/civics-2nd-paper/' },
      { name: '📚 পৌরনীতি - Shikho', web: 'https://shikho.com/hsc/civics' },
      { name: '📊 পৌরনীতি - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=HSC+Civics+Good+Governance+Bangla' },
    ],
  },

  {
    name: 'ইতিহাস',
    items: [
      { name: '📚 ইতিহাস ১ম পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/history-1st-paper/' },
      { name: '📚 ইতিহাস ২য় পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/history-2nd-paper/' },
      { name: '📚 ইতিহাস - Shikho', web: 'https://shikho.com/hsc/history' },
      { name: '📊 ইতিহাস - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=HSC+History+lecture+Bangla' },
    ],
  },

  {
    name: 'ভূগোল',
    items: [
      { name: '📚 ভূগোল ১ম পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/geography-1st-paper/' },
      { name: '📚 ভূগোল ২য় পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/geography-2nd-paper/' },
      { name: '📚 ভূগোল - Shikho', web: 'https://shikho.com/hsc/geography' },
      { name: '📊 ভূগোল - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=HSC+Geography+lecture+Bangla' },
    ],
  },

  {
    name: 'সমাজবিজ্ঞান',
    items: [
      { name: '📚 সমাজবিজ্ঞান ১ম পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/sociology-1st-paper/' },
      { name: '📚 সমাজবিজ্ঞান ২য় পত্র - 10 Minute School', web: 'https://10minuteschool.com/hsc/sociology-2nd-paper/' },
      { name: '📚 সমাজবিজ্ঞান - Shikho', web: 'https://shikho.com/hsc/sociology' },
      { name: '📊 সমাজবিজ্ঞান - YouTube Playlist', web: 'https://www.youtube.com/results?search_query=HSC+Sociology+lecture+Bangla' },
    ],
  },

  {
    name: 'মনোবিজ্ঞান',
    items: [
      { name: '📚 মনোবিজ্ঞান ১ম পত্র - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Psychology+1st+paper+Bangla' },
      { name: '📚 মনোবিজ্ঞান ২য় পত্র - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Psychology+2nd+paper+Bangla' },
      { name: '📚 মনোবিজ্ঞান - 10 Minute School', web: 'https://10minuteschool.com/hsc/psychology/' },
    ],
  },

  {
    name: 'কৃষিশিক্ষা',
    items: [
      { name: '📚 কৃষিশিক্ষা ১ম পত্র - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Agriculture+1st+paper+Bangla' },
      { name: '📚 কৃষিশিক্ষা ২য় পত্র - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Agriculture+2nd+paper+Bangla' },
      { name: '📚 কৃষিশিক্ষা - 10 Minute School', web: 'https://10minuteschool.com/hsc/agriculture/' },
    ],
  },

  {
    name: 'গার্হস্থ্য বিজ্ঞান',
    items: [
      { name: '📚 গার্হস্থ্য বিজ্ঞান ১ম পত্র - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Home+Science+1st+paper+Bangla' },
      { name: '📚 গার্হস্থ্য বিজ্ঞান ২য় পত্র - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Home+Science+2nd+paper+Bangla' },
      { name: '📚 গার্হস্থ্য বিজ্ঞান - 10 Minute School', web: 'https://10minuteschool.com/hsc/home-science/' },
    ],
  },

  {
    name: 'ইসলাম শিক্ষা',
    items: [
      { name: '📚 ইসলাম শিক্ষা ১ম পত্র - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Islamic+Studies+1st+paper+Bangla' },
      { name: '📚 ইসলাম শিক্ষা ২য় পত্র - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Islamic+Studies+2nd+paper+Bangla' },
      { name: '📚 ইসলাম শিক্ষা - 10 Minute School', web: 'https://10minuteschool.com/hsc/islamic-studies/' },
      { name: '📚 ইসলাম শিক্ষা - Shikho', web: 'https://shikho.com/hsc/islamic-studies' },
    ],
  },

  {
    name: 'যুক্তিবিদ্যা',
    items: [
      { name: '📚 যুক্তিবিদ্যা ১ম পত্র - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Logic+1st+paper+Bangla' },
      { name: '📚 যুক্তিবিদ্যা ২য় পত্র - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Logic+2nd+paper+Bangla' },
      { name: '📚 যুক্তিবিদ্যা - 10 Minute School', web: 'https://10minuteschool.com/hsc/logic/' },
    ],
  },

  {
    name: 'পরিসংখ্যান',
    items: [
      { name: '📚 পরিসংখ্যান ১ম পত্র - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Statistics+1st+paper+Bangla' },
      { name: '📚 পরিসংখ্যান ২য় পত্র - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Statistics+2nd+paper+Bangla' },
      { name: '📚 পরিসংখ্যান - 10 Minute School', web: 'https://10minuteschool.com/hsc/statistics/' },
      { name: '📚 পরিসংখ্যান - Shikho', web: 'https://shikho.com/hsc/statistics' },
    ],
  },

  {
    name: 'সকল বিষয় (পোর্টাল)',
    items: [
      { name: '🌐 10 Minute School HSC', web: 'https://10minuteschool.com/hsc/' },
      { name: '🌐 Shikho HSC', web: 'https://shikho.com/hsc' },
      { name: '🌐 Udvash Online HSC', web: 'https://udvash.com/hsc' },
      { name: '🌐 Bohubrihi HSC', web: 'https://bohubrihi.com/hsc/' },
      { name: '🌐 Khan Academy Bangla', web: 'https://bn.khanacademy.org' },
      { name: '🌐 Muktopaath HSC', web: 'https://muktopaath.gov.bd' },
      { name: '🌐 YouTube HSC All Subjects', web: 'https://www.youtube.com/results?search_query=HSC+all+subjects+lecture+Bangla' },
    ],
  },
];

const HscSubjectAll = () => {
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
          title={`🎓 HSC - ${selectedSub.name}`}
          color={COLOR}
          icon={ICON}
          onClose={() => setSelectedSub(null)}
        />
      )}
    </div>
  );
};

export default HscSubjectAll;