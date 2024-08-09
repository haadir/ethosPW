import React from 'react';
import Skills from './components/skills';
import Education from './components/education';
import Externals from './components/externals';
import Profile from './components/profile';
import Info from './components/info';
import WorkExperience from './components/workexperience';
import CompTransition from './components/comp-transition';
import CompTransitionLeft from './components/comp-transition-left';
import CompTransitionProfile from './components/comp-transition-profile';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#516395] to-[#614385]">
      <div className="container mx-auto py-32 px-6 ml-2">
        <div className="flex flex-wrap justify-center p-6 mt-[-3rem] mr-34">
          <div className="w-full md:w-1/4 px-4 mb-4 mr-[-2rem] p-24 mt-16">
            <CompTransitionLeft initialX={-20} delay={0.4}>
              <Skills />
            </CompTransitionLeft>
            <div className="mt-4">
              <CompTransitionLeft initialX={-30} delay={0.6}>
                <Education />
              </CompTransitionLeft>
            </div>
            <div className="mt-4">
              <CompTransitionLeft initialX={-40} delay={0.8}>
                <Externals/>
              </CompTransitionLeft>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/4 px-4 mb-4 ml-[-3rem]">
            {/* Add your second component here */}
            <div className="rounded-lg p-20">
              <CompTransitionProfile initialX={0} delay={0.7}>
                <Profile />
              </CompTransitionProfile>
            </div>
            <div className="rounded-lg ml-20 mt-[-5rem]">
                <CompTransition>
                    <Info/>
                </CompTransition>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-4">
            {/* Add your third component here */}
            <div className="rounded-lg ml-20 mt-[-7rem] ml-32">
              <CompTransitionLeft initialX={30} delay={0.4}>
                <WorkExperience/>
              </CompTransitionLeft>
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
