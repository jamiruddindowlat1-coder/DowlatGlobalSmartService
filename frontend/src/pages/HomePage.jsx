import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <header className="w-full max-w-6xl py-6 flex justify-between items-center border-b border-gray-800 mb-8">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          DowlatGlobal Smart Service
        </h1>
        <div className="space-x-4">
          <button className="text-sm border border-gray-600 px-4 py-1.5 rounded-full hover:bg-gray-800 transition">English</button>
          <button className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition">লগিন</button>
        </div>
      </header>

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Hind_Siliguri'] text-white tracking-tight">
          বাংলাদেশ সকল সেবা পোর্টাল
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          আপনার প্রয়োজনীয় সকল সরকারি ও বেসরকারি সেবা এখন এক জায়গায়।
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Service Card 1 */}
        <div className="bg-gray-800/50 backdrop-blur border border-gray-700 p-6 rounded-2xl shadow-xl hover:-translate-y-1 hover:border-blue-500 transition-all duration-300 group">
          <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-100">জাতীয় পরিচয়পত্র</h3>
          <p className="text-gray-400 mb-6 text-sm">NID কার্ডের সকল সেবা, নতুন আবেদন, হারানো কার্ড উত্তোলন এবং তথ্য সংশোধন</p>
          <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium w-full">
            সেবা গ্রহণ করুন 
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>

        {/* Service Card 2 */}
        <div className="bg-gray-800/50 backdrop-blur border border-gray-700 p-6 rounded-2xl shadow-xl hover:-translate-y-1 hover:emerald-500 transition-all duration-300 group">
          <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-100">জন্ম নিবন্ধন</h3>
          <p className="text-gray-400 mb-6 text-sm">জন্ম ও মৃত্যু নিবন্ধন সংক্রান্ত সকল তথ্য, আবেদন ও সার্টিফিকেট যাচাই</p>
          <a href="#" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium w-full">
            সেবা গ্রহণ করুন 
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>

        {/* Service Card 3 */}
        <div className="bg-gray-800/50 backdrop-blur border border-gray-700 p-6 rounded-2xl shadow-xl hover:-translate-y-1 hover:purple-500 transition-all duration-300 group">
          <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-100">ই-পাসপোর্ট সেবা</h3>
          <p className="text-gray-400 mb-6 text-sm">নতুন ই-পাসপোর্ট আবেদন, রিনিউ এবং স্ট্যাটাস চেকিং এর সুবিধা</p>
          <a href="#" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium w-full">
            সেবা গ্রহণ করুন 
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
