import React from 'react';

const Skills: React.FC = () => {
  return (
    <div className="bg-white bg-opacity-20 rounded-3xl p-3 shadow-lg text-center w-3/4 mx-auto">
      <h2 className="text-2xl font-medium mb-2 text-shadow-black">skills</h2>
      <div className="flex flex-col text-lg font-thin">
        <div className="flex justify-center space-x-4 text-shadow-black"> 
          <div>C++</div>
          <div>UI/UX</div>
          <div>Node.js</div>
        </div>
        <div className="flex justify-center space-x-4 mt-1 text-shadow-black">
          <div>Python</div>
          <div>AI/ML</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;