import React, { forwardRef } from 'react';
import Image from 'next/image';
import Link from "next/link";
import rocketApp_scrn from '../public/images/rocketApp_scrn.png'; // Adjust the path as needed
import TTWH_gameScreen from '../public/images/TTWH_gameScreen.gif'; // Adjust the path as needed
import TTWH_startScreen from '../public/images/TTWH_startscreen.gif'; // Adjust the path as needed
import godot_2d from '../public/images/godot_2D_app.gif'; // Adjust the path as needed
import rocketApp_scrn_1 from '../public/images/rocketApp_scrn_1.png'; // Adjust the path as needed
import old_portfolio from '../public/images/siaryan_portfolio_old.gif'; // Adjust the path as needed



const projects = [
    {
        title: (
          <>
            <i className="nes-icon is-small star"></i> Godot Samurai Platformer
          </>
        ),
        type: "GameDev, Personal Project, In Progress",
        technologies: "Godot, GD Script",
        description: [
          "Making a game with Godot, an opensourse game engine.",
          "Learning about animations, player state, collision etc.",
          "Currently working on the animation tree for enemy skeletons!",
        ],
        link : <Link href='https://github.com/SiAryan/godot_2D_playground' target='_blank'>github link!</Link>,
        media:          
        <div className="flex justify-center space-x-8">
            <Image
                src={godot_2d}
                alt="Aryan Singh"
                className="object-cover w-auto rounded-xl border-4"
                width={200}
                height={200}
            />
        </div> 
    },
    {
        title: (
          <>
            <i className="nes-icon is-small star"></i> Old portfolio site
          </>
        ),
        type: "WebDev",
        technologies: "React, Nodejs, Javascript",
        description: [
          "My older portfolio site",
          "Deployed on github pages, not as inspired looking back at it now, haha",
        ],
        link : <Link href='https://siaryan.github.io/portfolio' target='_blank'>github link!</Link>,
        media:          
        <div className="flex justify-center space-x-8">
            <Image
                src={old_portfolio}
                alt="Aryan Singh"
                className="object-cover w-auto rounded-xl border-4"
                width={200}
                height={200}
            />
        </div> 
    },
    {
        title: (
          <>
            <i className="nes-icon is-small star"></i> To the Wormhole!
          </>
        ),
        type: "GameDev, Personal project",
        technologies: "Python, Pygame",
        description: [
          "My attempt at making a game from 2D sprites and assets that I acquired from a space invaders clone. ",
          "Learnt about interfaces, 2D body collision, animations etc.",
          "Idea for a game based on achieving the highest score with a very simple gameplay loop is from the mobile game hit Flappy Birds!",

        ],
        link: <Link href='https://github.com/SiAryan/To-The-Wormhole' target='_blank'>github link!</Link>,
        media:          
        <div className="flex justify-center space-x-8">
            <div className='flex-col'>  
            <Image
                src={TTWH_startScreen}
                alt="Aryan Singh"
                className="object-cover w-auto rounded-xl border-4 py-4"
                width={200}
                height={200}
            />          
            <Image
                src={TTWH_gameScreen}
                alt="Aryan Singh"
                className="object-cover w-auto rounded-xl border-4"
                width={200}
                height={200}
            />

        </div>
        </div> 
    },
    {
        title: (
            <>
            <i className="nes-icon is-small star"></i> RocketApp
            </>
        ),
        type: "Mobile App, colaborative, University of Alberta",
        technologies: "Java, AndroidStudio, XML",
        description: [
            "Full stack development for a mobile app that is based around crowdsourcing experiments and data,",
            "Implemented the front-end including general UI components that were utilized throughout the development by RocketApp team.",
            "Managed web content and built new front end components.",
            "Ran machine learning models to make inferences on visual images for construction projects.",
            ],
        link : <Link href='https://github.com/CMPUT301W21T30/RocketApp/wiki/Part-4-storyboard' target='_blank'>github link!</Link>,
        media:
        <div className="flex flex-row items-center justify-center space-y-4">
            <Image
                src={rocketApp_scrn}
                alt="Aryan Singh"
                className="object-cover w-auto rounded-xl px-4"
                width={200}
                height={200}
            />
            <Image
                src={rocketApp_scrn_1}
                alt="Aryan Singh"
                className="object-cover w-auto rounded-xl px-4"
                width={200}
                height={200}
            />
        </div>

    },
  ];

  const Projects = forwardRef(() => {
    return (


      <section id="projects" className="bg-transparent pt-28 pb-12 px-4 md:px-8 text-gray-900">
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <video 
            className="w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
           >
           <source src="/images/black-cat-sakura-bridge-pixel-moewalls-com.webm
" type="video/webm" />
              Your browser does not support the video tag.
          </video>
        </div>
         <section className="nes-container with-title bg-orange-100 bg-opacity-75 mx-auto w-fit">
	    <h2 className="text-3xl font-bold mb-4 title">Projects</h2>
        <div className="space-y-6 max-w-5xl mx-auto border-4 border-black rounded-xl bg-amber-100 px-8">
          {projects.map((prj, index) => (
            <div key={index} className="border-b border-gray-500 pb-4 px-4 py-4">
              <h3 className="text-lg font-light">{prj.title}</h3>
              <p className="text-sm text-gray-600 font-light">{prj.type} –</p>
              <p className="text-sm text-gray-600 font-light">{prj.technologies}</p>
              <ul className="list-disc pl-5 text-gray-700 mt-2 font-extralight leading-loose">
                {prj.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p>{prj.link}</p>
              <div>{prj.media}</div>
            </div>
          ))}
        </div>
       </section>
      </section>
    );
  });

  
Projects.displayName = "Projects";

export default Projects;
