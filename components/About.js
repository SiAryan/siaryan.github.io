import React from 'react';

const personal_portrain_pixelart = "./images/asingh_portrait_pic_pixelart.png"

export default function About() {
  return (
    <section className="bg-white text-gray-800 py-24 px-4 md:px-8 bg-teal-600">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 mb-16">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0">
        {/* Left Section - Image */}
        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 mb-4 md:mb-0 mr-28 border-8 border-white rounded-xl">
          <img
            src={personal_portrain_pixelart}
            alt="Aryan Singh"
            className="w-full h-full object-cover " // Add border classes here
          />
        </div>


        {/* Right Section - Text */}
        <div className="nes-balloon from-left max-w-xl text-center md:text-left">
          <p className="text-lg text-gray-600 mb-4">
            Hello! I'm Aryan Singh, a professional software developer, nice to meet you!
          </p>
          <div className="space-y-6">
            <p>
              I specialize in full stack development, systems design and automation pipelines. Please have a look at my experience and projects for to learn more about me!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
