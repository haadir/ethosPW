import React from 'react';
import Image from 'next/image';

const Externals: React.FC = () => {
  return (
    <div className = "flex flex-col">
        <div className="bg-white bg-opacity-20 rounded-3xl p-4 shadow-lg font-sans w-3/4 mx-auto flex flex-col items-center">
            <div className="flex justify-center space-x-8 mr-4 ml-4">
                <a href="https://github.com/haadir" target="_blank" rel="noreferrer">
                    <Image src="/github-sign.png" alt="GitHub" width={50} height={50} className="shadow-bottom" />
                </a>
                <a href="https://www.linkedin.com/in/haadirazzak/" target="_blank" rel="noreferrer">
                    <Image src="/linkedin.png" alt="LinkedIn" width={50} height={50} className="shadow-bottom" />
                </a>
                <a href="mailto:hrazzak@usc.edu" target="_blank" rel="noreferrer">
                    <Image src="/email.png" alt="Email" width={50} height={50} className="shadow-bottom" />
                </a>
            </div>
        </div>
        <div className="text-center text-md font-medium text-shadow-black mt-3" style={{ color: '#FF8080' }}>
            <a href={'/Haadi_Razzak_Resume.docx.pdf'} target="_blank" rel="noreferrer">view my resume</a>
        </div>
    </div>
  );
}

export default Externals;
