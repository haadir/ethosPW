import React from 'react';
import Image from 'next/image';

const Profile: React.FC = () => {
  return (
    <div className="rounded-3xl p-4 w-72 h-auto mx-auto border-4 drop-shadow-lg" style={{ borderColor: 'rgba(255, 255, 255, 0.7)' }}>
      <div className="mb-3">
        <div className="rounded-2xl overflow-hidden mr-4 ml-4 mb-4 mt-2">
          <Image 
            src="/profilepic.svg"
            alt="Haadi Razzak"
            width={250}
            height={250}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="text-center text-white">
        <h2 className="text-3xl font-md mb-1 text-shadow-black">haadi razzak</h2>
        <p className="text-sm font-md leading-tight mt-2 mb-1 text-shadow-black">BMC ML Engineer Intern</p>
        <p className="text-sm font-md leading-tight mb-2 text-shadow-black">USC '25 Computer Science</p>
      </div>
    </div>
  );
}

export default Profile;
