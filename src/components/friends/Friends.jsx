import React, { useEffect, useState } from 'react';
import FriendCard from '../shared/friendCard/FriendCard';


const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // Fetching from public/friends.json
    fetch('/friends.json')
      .then((res) => res.json())
      .then((data) => setFriends(data))
      .catch((err) => console.error("Error loading friends:", err));
  }, []);

  return (
    <section className="mt-20 mb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-400">
        <h2 className='ml-18 mb-4 font-semibold text-2xl text-[#1F2937]'>Your Friends</h2>
        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on small laptop, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Friends;