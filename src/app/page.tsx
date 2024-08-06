import React from 'react';
import Skills from './components/skills';
import Education from './components/education';
import Externals from './components/externals';
import Profile from './components/profile';
import Info from './components/info';
import WorkExperience from './components/workexperience';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#516395] to-[#614385]">
      <div className="container mx-auto py-10 px-6">
        <div className="flex flex-wrap justify-center p-6 mt-[-3rem] mr-34">
          <div className="w-full md:w-1/4 px-4 mb-4 mr-[-5rem] p-24 mt-7">
              <Skills />
            <div className="mt-4">
              <Education />
            </div>
            <div className="mt-4">
              <Externals/>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/4 px-4 mb-4 ml-[-3rem]">
            {/* Add your second component here */}
            <div className="rounded-lg p-20">
                <Profile/>
            </div>
            <div className="rounded-lg ml-20 mt-[-4rem]">
                <Info/>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-4">
            {/* Add your third component here */}
            <div className="rounded-lg ml-20 mt-[-4rem]">
                <WorkExperience/>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full mt-[-1rem] text-center text-white text-shadow-black">
        <div className="flex justify-center items-center">
          <span className="text-xl drop-shadow-lg mt-2">powered by</span>
          <span className="text-[40px] drop-shadow-lg ml-2 leading-none">ethos</span>
        </div>
        <div className="text-center text-white text-base mt-2">
          by haadi razzak
        </div>
      </footer>
    </main>
  );
}
