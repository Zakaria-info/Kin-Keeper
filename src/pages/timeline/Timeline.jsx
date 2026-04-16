import React, { useContext } from 'react';
import { TimelineContext } from '../../../src/context/TimelineContext';

const Timeline = () => {
  const { timelineData } = useContext(TimelineContext);

  return (
    <div className="w-full bg-[#F9FAFB] min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1F2937] mb-8">Timeline</h1>
        
        
        <div className="mb-8">
          <select className="select select-bordered w-full max-w-xs bg-white border-gray-200 text-[#64748B]">
            <option>Filter timeline</option>
          </select>
        </div>

        
        <div className="flex flex-col gap-4">
          {timelineData.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-5">
              
              <div className="w-14 h-14 bg-[#F9FAFB] rounded-full flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              
              
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-[#1F2937]">{item.title}</h3>
                <p className="text-[#64748B] text-sm font-medium">{item.date}</p>
              </div>
            </div>
          ))}

          
          {timelineData.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
              <p className="text-gray-400">No interactions logged yet. Go to a Friend's page to check-in!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;