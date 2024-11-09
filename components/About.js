import React from 'react';

const personal_portrain_pixelart = "./images/asingh_portrait_pic_pixelart.png" 

export default function About() {
  return (
    <section className="bg-white text-gray-800 py-24 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0">
        {/* Left Section - Image */}
        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 mb-4 md:mb-0 mr-28">
          <img 
            src={personal_portrain_pixelart} 
            alt="Aryan Singh" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Right Section - Text */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          
          <p className="text-lg text-gray-600 mb-4">
            Hello! I'm Aryan Singh, a passionate software developer, music producer and a lover of classic fighting games!
          </p>

          <div className="space-y-6">
            <p>
              I specialize in creating efficient and innovative solutions in software development, with a strong foundation in programming, data analysis, and system design.
            </p>
            <p>
              Over the years, I've worked with various technologies, including Next.js, React, and Node.js, and am continuously learning to stay on top of industry trends.
            </p>
            <p>
              Outside of coding, I enjoy playing Tekken and exploring 3D printing, which has opened up new creative possibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
