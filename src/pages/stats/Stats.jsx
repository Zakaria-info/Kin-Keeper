import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";
import { TimelineContext } from "../../context/TimelineContext";

const Stats = () => {
 
  const { timelineData } = useContext(TimelineContext);

  // Count the occurrences of each type
  const getTextCount = () => timelineData.filter(item => item.type === 'text').length;
  const getCallCount = () => timelineData.filter(item => item.type === 'call').length;
  const getVideoCount = () => timelineData.filter(item => item.type === 'video').length;

 
  const data = [
    { name: "Text", value: getTextCount(), fill: "#0088FE" },
    { name: "Call", value: getCallCount(), fill: "#00C49F" },
    { name: "Video", value: getVideoCount(), fill: "#FFBB28" },
  ];

  //  Handle the "Empty State" (if no logs exist yet)
  const hasData = timelineData.length > 0;

  return (
    <div className="flex flex-col gap-5 container mx-auto p-6">
      <div>
        <h2 className="text-3xl font-bold text-[#1F2937]">Friendship Analytics</h2>
      </div>

      <div className="flex flex-col items-start justify-center my-10 bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
        <p className="text-lg font-medium text-gray-500 text-left mb-4">By Interaction Type</p>
        
        {hasData ? (
          <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius="70%"
                  outerRadius="100%"
                  cornerRadius={10} 
                  paddingAngle={8}
                  dataKey="value"
                  isAnimationActive={true}
                />
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="py-20 text-center text-gray-400">
            <p className="text-xl"> No data to display yet.</p>
            <p className="text-sm">Log some interactions to see your analytics!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;