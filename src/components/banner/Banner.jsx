import React from 'react';

const Banner = () => {
  // Data for the 4 info cards
  const stats = [
    { value: "10", label: "Total Friends" },
    { value: "3", label: "On Track" },
    { value: "6", label: "Need Attention" },
    { value: "12", label: "Interactions This Month" },
  ];

  return (
    <section className="mt-20 mb-20 px-4">
      <div className="container mx-auto max-w-400 flex flex-col items-center">
        
        {/* Title Section */}
        <h2 className="text-[48px] font-bold text-[#1F2937] text-center leading-tight">
          Friends to keep close in your life
        </h2>

        {/* Description Section (Gap-4) */}
        <p className="mt-4 text-[16px] text-[#64748B] text-center max-w-162 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the 
          relationships that matter most.
        </p>

        {/* Action Button (Gap-8) */}
        <div className="mt-8">
          <button className="bg-[#244D3F] text-white w-35 h-11 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1a3a30] transition-colors font-medium">
            <span className="text-xl">+</span> Add a Friend
          </button>
        </div>

        {/* Stats Cards Grid (Gap-10 after button) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="w-65 h-34 bg-white border border-[#F3F4F6] shadow-sm rounded-xl flex flex-col items-center justify-center"
            >
              <span className="text-[32px] font-bold text-[#244D3F] mb-1">
                {stat.value}
              </span>
              <span className="text-[16px] text-[#64748B]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Banner;