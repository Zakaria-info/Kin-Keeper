import React, { useContext } from 'react'; 
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TimelineContext } from '../../../src/context/TimelineContext'; 

const FriendDetails = () => {
  const { id } = useParams();
  const friends = useLoaderData();
  
  
  const { addTimelineEntry } = useContext(TimelineContext);

  const expectedFriends = friends.find((friend) => friend.id == id);

  if (!expectedFriends) {
    return (
      <div className="flex justify-center items-center h-screen px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-500">Friend not found</h2>
      </div>
    );
  }

  const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = expectedFriends;

  const handleCheckIn = (actionType) => {
    const today = new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    
    const iconMap = { Call: "📞", Text: "💬", Video: "🎥" };

    const timelineEntry = {
      id: Date.now(), 
      date: today,
      title: `${actionType} with ${name}`,
      type: actionType.toLowerCase(),
      icon: iconMap[actionType] || "🤝"
    };

    
    addTimelineEntry(timelineEntry);

    toast.success(`Success! ${actionType} recorded.`, {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
      style: { backgroundColor: '#244D3F' } 
    });
  };

  
  return (
    <div className="w-full bg-[#F9FAFB] min-h-screen pt-6 md:pt-10 pb-10 md:pb-20">
      <ToastContainer />
      <div className="container mx-auto max-w-[1100px] px-4">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          <div className="w-full lg:w-[350px] flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <img src={picture} alt={name} className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-gray-50" />
              <h3 className="text-[20px] font-semibold text-[#1F2937]">{name}</h3>
              <div className="flex flex-wrap justify-center items-center gap-2 mt-3">
                <span className={`text-white text-[11px] md:text-[12px] px-4 py-1 rounded-full capitalize ${status === 'overdue' ? 'bg-[#FF4D4D]' : 'bg-[#244D3F]'}`}>
                  {status}
                </span>
                <span className="bg-[#CBFADB] text-[#244D3F] text-[11px] md:text-[12px] px-3 py-1 rounded-full font-medium uppercase">
                  {tags?.[0] || "General"}
                </span>
              </div>
              <p className="mt-6 text-[#64748B] text-[15px] md:text-[16px] italic font-medium">"{bio}"</p>
              <p className="mt-2 text-[#64748B] text-[13px] md:text-[14px]">Preferred: {email}</p>
            </div>
            <div className="flex flex-col gap-3">
              <button className="btn bg-white border-gray-200 hover:bg-gray-50 normal-case justify-start gap-3 h-14 rounded-xl shadow-sm text-[#1F2937]">⏰ Snooze 2 Weeks</button>
              <button className="btn bg-white border-gray-200 hover:bg-gray-50 normal-case justify-start gap-3 h-14 rounded-xl shadow-sm text-[#1F2937]">📦 Archive</button>
              <button className="btn bg-white border-gray-200 hover:bg-red-50 normal-case justify-start gap-3 h-14 rounded-xl shadow-sm text-[#FF4D4D] border-red-50">🗑️ Delete</button>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <h4 className="text-[28px] md:text-[32px] font-bold text-[#244D3F]">{days_since_contact}</h4>
                <p className="text-[#64748B] text-[13px] md:text-sm mt-1">Days Since Contact</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <h4 className="text-[28px] md:text-[32px] font-bold text-[#244D3F]">{goal}</h4>
                <p className="text-[#64748B] text-[13px] md:text-sm mt-1">Goal (Days)</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <h4 className="text-[20px] md:text-[24px] font-bold text-[#244D3F] md:mt-2">{next_due_date}</h4>
                <p className="text-[#64748B] text-[13px] md:text-sm mt-1 md:mt-2">Next Due</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base md:text-lg font-bold text-[#244D3F]">Relationship Goal</h3>
                <button className="btn btn-xs md:btn-sm bg-gray-50 border-gray-200 text-[#1F2937] hover:bg-gray-100 px-3 md:px-4">Edit</button>
              </div>
              <p className="text-[#1F2937] text-sm md:text-base">Connect every <span className="font-bold">{goal} days</span></p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-base md:text-lg font-bold text-[#244D3F] mb-6">Quick Check-In</h3>
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                <button onClick={() => handleCheckIn("Call")} className="flex flex-col items-center justify-center py-4 md:py-6 bg-[#F9FAFB] rounded-2xl hover:bg-gray-100 transition-all active:scale-95 border border-transparent hover:border-gray-200">
                  <span className="text-xl md:text-2xl mb-2">📞</span>
                  <span className="text-[12px] md:text-sm font-medium text-[#64748B]">Call</span>
                </button>
                <button onClick={() => handleCheckIn("Text")} className="flex flex-col items-center justify-center py-4 md:py-6 bg-[#F9FAFB] rounded-2xl hover:bg-gray-100 transition-all active:scale-95 border border-transparent hover:border-gray-200">
                  <span className="text-xl md:text-2xl mb-2">💬</span>
                  <span className="text-[12px] md:text-sm font-medium text-[#64748B]">Text</span>
                </button>
                <button onClick={() => handleCheckIn("Video")} className="flex flex-col items-center justify-center py-4 md:py-6 bg-[#F9FAFB] rounded-2xl hover:bg-gray-100 transition-all active:scale-95 border border-transparent hover:border-gray-200">
                  <span className="text-xl md:text-2xl mb-2">🎥</span>
                  <span className="text-[12px] md:text-sm font-medium text-[#64748B]">Video</span>
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