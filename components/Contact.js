import React from 'react';


export default function Contact() {
    return (
        <section id='contact' className="bg-teal-700 py-24 px-4 md:px-8 text-gray-900 items-center justify-center"> {/* Fixed background color here */}
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 mb-16">
                <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            </div>
            <div className="nes-container with-title is-centered bg-amber-100 rounded-xl container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 mb-16 max-w-4xl">
                <a href="mailto:asingh2@ualberta.ca" target="_blank" rel="noopener noreferrer px-2"><i className="nes-icon gmail is-large"></i></a>
                <a href="https://www.linkedin.com/in/aryan-enguofa/" target="_blank" className='px-2'><i className="nes-icon linkedin is-large"></i></a>
                <a href="https://www.github.com/siaryan" target="_blank" className='px-2'><i className="nes-icon github is-large"></i></a>
            </div>
        </section>
    );
}
