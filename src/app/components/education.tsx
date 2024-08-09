import React from 'react';
import Image from 'next/image';

const Education: React.FC = () => {
  return (
    <div className="bg-white bg-opacity-20 rounded-3xl p-6 shadow-lg w-3/4 mx-auto relative">
      <a href="https://www.cs.usc.edu/academic-programs/undergrad/" target="_blank" rel="noreferrer">
        <div className="flex items-center mb-4 justify-center">
          <h2 className="text-2xl font-medium mb-2 text-shadow-black mt-[-0.5rem]">education 📚</h2>
        </div>

        <div className="flex items-center mt-[-1rem]">
          <Image src="/usc.png" alt="USC Logo" width={55} height={55} className="mr-4" />
          <div className="text-left">
            <div className="text-sm font-md text-white">
              <div>university of southern california</div>
            </div>
            <div className="mt-2 text-md">
              <span className="text-sm text-orange-300 font-normal text-shadow-black">computer science</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Education;