import React, { useEffect, useState } from 'react';
import FriendCard from '../shared/friendCard/FriendCard';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Fetching from public/friends.json
    fetch('/friends.json')
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false); 
      })
      .catch((err) => {
        console.error("Error loading friends:", err);
        setLoading(false); 
      });
  }, []);

  return (
    <section className="mt-20 mb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-400">
        <h2 className='ml-4 md:ml-18 mb-4 font-semibold text-2xl text-[#1F2937]'>Your Friends</h2>

        
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-75">
            
            <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
            <p className="mt-4 text-gray-500 animate-pulse">Loading friends...</p>
          </div>
        ) : (
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}

       
        {!loading && friends.length === 0 && (
          <p className="text-center text-gray-400 mt-10">No friends found.</p>
        )}
      </div>
    </section>
  );
};

export default Friends;