import React from 'react';
import sid from '../assets/sid.png'
const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
               <img src={sid} alt="" className='rounded-2xl '/>
            </div>
            <div className='text-sm md:text-xl mt-10'>
              <p>I am a full-stack developer with a deep passion for technology and a particular focus on blockchain development. Constantly driven by the desire to learn and create, I find immense joy in building innovative solutions. 🚀🚀🚀 <br /> <br />

With a strong foundation in both front-end and back-end development, I have honed my skills to deliver seamless and user-centric applications. I thrive on pushing the boundaries of what's possible, always exploring emerging technologies and staying up-to-date with industry trends. <br />

</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
