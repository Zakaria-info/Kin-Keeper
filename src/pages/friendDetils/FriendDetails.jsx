import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
// Import your icons here (or use Lucide-react/FontAwesome)

const FriendDetails = () => {
  const { id } = useParams();
  // console.log(id, "friend id")

  const friends = useLoaderData();
  const expectedFriends = friends.find((friend)=> friend.id == id);
  // console.log(expectedFriends, "expectedFriends")

  // For now, using static data. Later you will pull this from Context based on 'id'
  const {name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date} = expectedFriends

  return (
    <div className="w-full bg-[#F9FAFB] min-h-screen pt-10 pb-20">
      <div className="container mx-auto max-w-[1100px] px-4">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* LEFT COLUMN - 350px width approx */}
          <div className="w-full md:w-[350px] flex flex-col gap-4">
            {/* Info Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <img src={picture} alt="" className="w-20 h-20 rounded-full mb-4 object-cover" />
              <h3 className="text-[20px] font-semibold text-[#1F2937]">{name}</h3>
              
              <div className="flex flex-col items-center gap-2 mt-3">
                <span className="bg-[#FF4D4D] text-white text-[12px] px-4 py-1 rounded-full capitalize">
                  {status}
                </span>
                <span className="bg-[#CBFADB] text-[#244D3F] text-[12px] px-3 py-1 rounded-full font-medium uppercase">
                  {tags[0]}
                </span>
              </div>

              <p className="mt-6 text-[#64748B] text-[16px] italic font-medium">"{bio}"</p>
              <p className="mt-2 text-[#64748B] text-[14px]">Preferred: {email}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button className="btn bg-white border-gray-200 hover:bg-gray-50 normal-case justify-start gap-3 h-14 rounded-xl shadow-sm text-[#1F2937]">
                ⏰ Snooze 2 Weeks
              </button>
              <button className="btn bg-white border-gray-200 hover:bg-gray-50 normal-case justify-start gap-3 h-14 rounded-xl shadow-sm text-[#1F2937]">
                📦 Archive
              </button>
              <button className="btn bg-white border-gray-200 hover:bg-red-50 normal-case justify-start gap-3 h-14 rounded-xl shadow-sm text-[#FF4D4D] border-red-50">
                🗑️ Delete
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN - Flexible width */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* ① Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <h4 className="text-[32px] font-bold text-[#244D3F]">{days_since_contact}</h4>
                <p className="text-[#64748B] text-sm mt-1">Days Since Contact</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <h4 className="text-[32px] font-bold text-[#244D3F]">{goal}</h4>
                <p className="text-[#64748B] text-sm mt-1">Goal (Days)</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <h4 className="text-[24px] font-bold text-[#244D3F] mt-2">{next_due_date}</h4>
                <p className="text-[#64748B] text-sm mt-2">Next Due</p>
              </div>
            </div>

            {/* ② Relationship Goal Card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-[#244D3F]">Relationship Goal</h3>
                <button className="btn btn-sm bg-gray-50 border-gray-200 text-[#1F2937] hover:bg-gray-100 px-4">Edit</button>
              </div>
              <p className="text-[#1F2937]">Connect every <span className="font-bold">{days_since_contact}</span></p>
            </div>

            {/* ③ Quick Check-In Card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#244D3F] mb-6">Quick Check-In</h3>
              <div className="grid grid-cols-3 gap-4">
                <button className="flex flex-col items-center justify-center p-6 bg-[#F9FAFB] rounded-2xl hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200 group">
                  <span className="text-2xl mb-2">📞</span>
                  <span className="text-sm font-medium text-[#64748B]">Call</span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 bg-[#F9FAFB] rounded-2xl hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200 group">
                  <span className="text-2xl mb-2">💬</span>
                  <span className="text-sm font-medium text-[#64748B]">Text</span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 bg-[#F9FAFB] rounded-2xl hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200 group">
                  <span className="text-2xl mb-2">🎥</span>
                  <span className="text-sm font-medium text-[#64748B]">Video</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;