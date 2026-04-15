import React from "react";
import { Link } from "react-router";

const FriendsCard = ({ friend }) => {
  // Define exact colors from Figma/Requirements
  const getStatusBadge = (status) => {
    // Normalize status to lowercase and handle spaces/hyphens
    const s = status?.toLowerCase().trim().replace(/\s+/g, "-");

    if (s === "overdue") return "bg-[#FF4D4D] text-white";
    if (s === "almost-due") return "bg-[#FDBA74] text-white"; 
    if (s === "on-track") return "bg-[#244D3F] text-white";

    return "bg-gray-200 text-[#64748B]"; // Default fallback
  };

  return (
    <Link to={`/friendDetails/${friend.id}`}>
      <div className="w-[260px] h-[254px] cursor-pointer ...">
        <div className="w-65 h-62 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center p-6 transition-all hover:shadow-md">
          {/* Profile Picture: 80px center */}
          <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name: h3, 20px, semibold (Gap-12px is handled by mb-3 and text-center) */}
          <div className="text-center">
            <h3 className="text-[20px] font-semibold text-[#1F2937] leading-tight">
              {friend.name}
            </h3>
            {/* Days since contact */}
            <p className="text-[14px] text-[#64748B] mt-1">
              {friend.days_since_contact} days ago
            </p>
          </div>

          {/* Badges Section */}
          <div className="flex flex-col items-center gap-2 mt-auto w-full">
            {/* Category Badge: #CBFADB */}
            <span className="bg-[#CBFADB] text-[#244D3F] text-[12px] px-3 py-1 rounded-full font-medium uppercase tracking-wide">
              {friend.tags[0]}
            </span>

            {/* Dynamic Status Badge */}
            <span
              className={`${getStatusBadge(friend.status)} text-[12px] px-4 py-1 rounded-full font-medium capitalize w-max`}
            >
              {friend.status.replace("-", " ")}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FriendsCard;
