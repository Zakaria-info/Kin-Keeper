import React from "react";

const Banner = ({ dynamicStats }) => {
  const displayStats = [
    { value: dynamicStats?.totalFriends || "10", label: "Total Friends" },
    { value: dynamicStats?.onTrack || "3", label: "On Track" },
    { value: dynamicStats?.needAttention || "6", label: "Need Attention" },
    {
      value: dynamicStats?.interactions || "12",
      label: "Interactions This Month",
    },
  ];

  return (
    // Section spacing: mt-20 mb-20. px-4 ensures content doesn't touch screen edges on mobile.
    <section className="mt-10 md:mt-20 mb-10 md:mb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-400 flex flex-col items-center">
        {/* Title Section - Responsive Font Size */}
        <h2 className="text-[32px] md:text-[48px] font-bold text-[#1F2937] text-center leading-tight">
          Friends to keep close in your life
        </h2>

        {/* Description Section - Gap-4 (mt-4) */}
        <p className="mt-4 text-[14px] md:text-[16px] text-[#64748B] text-center max-w-160 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Action Button - Gap-8 (mt-8) */}
        <div className="mt-8">
          <button className="bg-[#244D3F] text-white w-35 h-11 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1a3a30] transition-all active:scale-95 font-medium">
            <span className="text-xl">+</span> Add a Friend
          </button>
        </div>

        {/* Stats Cards Grid - Gap-10 (mt-10) */}
        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center">
          {displayStats.map((stat, index) => (
            <div
              key={index}
              className="w-full max-w-65 h-33 bg-white border border-[#F3F4F6] shadow-sm rounded-xl flex flex-col items-center justify-center transition-transform hover:shadow-md"
            >
              <span className="text-[28px] md:text-[32px] font-bold text-[#244D3F] mb-1">
                {stat.value}
              </span>
              <span className="text-[14px] md:text-[16px] text-[#64748B] text-center px-2">
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
