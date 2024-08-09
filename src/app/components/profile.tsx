import React from 'react';
import Image from 'next/image';

const Profile: React.FC = () => {
  return (
    <div className="rounded-3xl p-4 w-72 h-auto mx-auto border-4 drop-shadow-lg" style={{ borderColor: 'rgba(255, 255, 255, 0)' }}>
      <div className="mb-3">
        <div className="rounded-2xl overflow-hidden mr-4 ml-4 mb-5 mt-2">
          <Image 
            src="/profilepic.svg"
            alt="Haadi Razzak"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="text-center text-white">
        <h2 className="text-[40px] font-md mb-1 text-shadow-black mt-[-0.5rem]">Haadi Razzak</h2>
        <p className="text-lg font-md leading-tight mt-2 mb-1.5">BMC ML Engineer Intern</p>
        <p className="text-lg font-md leading-tight mb-2">USC &apos;25 Computer Science</p>
      </div>
    </div>
  );
}

export default Profile;

