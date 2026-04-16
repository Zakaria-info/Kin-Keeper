import React, { useContext, useState } from 'react';
import { TimelineContext } from '../../../src/context/TimelineContext';

const Timeline = () => {
  const { timelineData } = useContext(TimelineContext);
  
  
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest"); 

  
  const processedData = timelineData
    
    .filter((item) => {
      if (filter === "All") return true;
      return item.type === filter.toLowerCase();
    })
    
    .filter((item) => {
      return item.title.toLowerCase().includes(searchQuery.toLowerCase());
    })
   
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="w-full bg-[#F9FAFB] min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1F2937] mb-8">Timeline</h1>
        
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          
          
          <div className="flex-1">
            <input 
              type="text"
              placeholder="Search by name or type..."
              className="input input-bordered w-full bg-white border-gray-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="select select-bordered bg-white border-gray-200 text-[#64748B]"
          >
            <option value="All">All Types</option>
            <option value="Call">Calls</option>
            <option value="Text">Texts</option>
            <option value="Video">Videos</option>
          </select>

          
          <select 
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered bg-white border-gray-200 text-[#64748B]"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        
        <div className="flex flex-col gap-4">
          {processedData.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-5 transition-all hover:translate-x-1">
              <div className="w-14 h-14 bg-[#F9FAFB] rounded-full flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-[#1F2937]">{item.title}</h3>
                <p className="text-[#64748B] text-sm font-medium">{item.date}</p>
              </div>
            </div>
          ))}

          
          {processedData.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
              <p className="text-gray-400">
                {timelineData.length === 0 
                  ? "Your timeline is empty. Log an activity!" 
                  : "No matches found for your search/filter."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;