import React from 'react';

const WorkExperience: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className="bg-white bg-opacity-20 rounded-2xl p-3 mt-36 ml-[1.5rem] w-80">
            <h2 className="text-2xl font-md text-center flex items-center justify-center drop-shadow-lg text-urbanist text-shadow-black">
                work experience <span className="ml-2 text-xl">👨‍💻</span>
            </h2>
        </div>

        <div className="bg-white bg-opacity-20 rounded-3xl p-6 w-80 mx-auto text-white space-y-4 mb-6 mt-4 ml-[-3rem] drop-shadow-lg">
            <div className="space-y-4">
            <ExperienceItem 
                company="BMC Software" 
                role="Machine Learning Engineer Intern"
                description="developed GenAI model for kubernete configuration and adjustment"
                icon="🤖"
            />
            
            <ExperienceItem 
                company="PayPal" 
                role="Software Engineer Intern"
                description="Developed a system that enables seamless payment integrations for high profiled merchants serving 100+ million users"
                icon="💰"
            />
            
            <ExperienceItem 
                company="Innowi" 
                role="Software Engineer & Hardware Intern"
                description="Deployed 15 hardware & software solutions including payments modules, menus, online and mobile setup for local restaurants"
                icon="🔗"
            />
            </div>
        </div>

        {/* <div className="bg-white bg-opacity-20 rounded-2xl p-3 mt-[-.5rem] ml-[-1rem] w-80">
            <h2 className="text-2xl font-md text-center flex items-center justify-center">
                projects <span className="ml-2 text-xl">👨‍💻</span>
            </h2>
        </div> */}
    </div>
  );
}

interface ExperienceItemProps {
  company: string;
  role: string;
  description: string;
  icon: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, role, description, icon }) => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-medium mb-1 flex items-center justify-center text-purple-300 text-shadow-black-less">
        {company} <span className="ml-2">{icon}</span>
      </h3>
      <h4 className="text-lg text-blue-300 font-medium mb-1 text-shadow-black">{role}</h4>
      <ul className="list-disc list-inside text- space-y-1">
        <li>{description}</li>
      </ul>
    </div>
  );
}

export default WorkExperience;
