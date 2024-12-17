import React from 'react';


export default function Contact() {
    return (
      <section id='contact' className="bg-transparent py-24 text-gray-900 items-center justify-center mx-auto w-fit"> {/* Fixed background color here */}
        <section className="nes-container with-title mx-40 bg-orange-100 bg-opacity-75">
	   <h2 className="text-3xl font-bold mb-4 title">Contact Me</h2>
            <div className="nes-container with-title is-centered bg-amber-100 rounded-xl container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 mb-16 max-w-4xl">
                <a href="mailto:asingh2@ualberta.ca" target="_blank" rel="noopener noreferrer px-2"><i className="nes-icon gmail is-large"></i></a>
                <a href="https://www.linkedin.com/in/aryan-enguofa/" target="_blank" className='px-2'><i className="nes-icon linkedin is-large"></i></a>
                <a href="https://www.github.com/siaryan" target="_blank" className='px-2'><i className="nes-icon github is-large"></i></a>
            </div>
	</section>
      </section>
    );
}
