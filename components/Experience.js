import React from 'react';

const experiences = [
  {
    role: (
      <>
        <i className="nes-icon is-small star"></i> Software Developer
      </>
    ),
    company: "Tetra Tech",
    location: "Vancouver, BC",
    period: "July 2023 - January 2024",
    technologies: "Typescript, Python, HTML, pytorch, arcGIS, QGIS, Jira, Confluence",
    description: [
      "Full stack development for geographical information system tools for Tetra Tech clients.",
      "Built API endpoints for accessing AI outputs and database information for the front end of web applications.",
      "Managed web content and built new front end components.",
      "Ran machine learning models to make inferences on visual images for construction projects.",
    ]
  },
  {
    role: "Finished Ungergrad Studies",
    company: "University of Alberta",
    location: "Edmonton, AB",
    period: "2022-2023",
    technologies: (
      <>
        Acquired Bachelors of Science in Computer Engineering <i className="nes-icon trophy is-small"></i>
      </>
    ),
    description: []
  },
  {
    role: (
      <>
        <i className="nes-icon is-small star"></i> Software Developer Intern
      </>
    ),
    company: "Tetra Tech",
    location: "Edmonton, AB",
    period: "June 2021 - December 2021",
    technologies: "Python, flask, HTML, Keras, SQL, Javascript",
    description: [
      "Full Stack development for Tetra Tech products and services.",
      "Prepared training data for machine learning models using Keras and optimized models for best results.",
      "Developed database with aggregated data from roadway surveys for western Canada.",
    ]
  },
  {
    role: (
      <>
        <i className="nes-icon is-small star"></i> Data Analyst Intern
      </>
    ),
    company: "Alberta Health Services",
    location: "Edmonton, AB",
    period: "January 2020 - August 2020",
    technologies: "Python, Tableau, MS Access, MS SQL server, Matplotlib",
    description: [
      "Created data charts for tracking medical supplies from 100 plus hospital inventories spread out over the province.",
      "Delivered presentations and answered questions about projections and statistics for medical supplies.",
      "Made purchase order reports, budgeting documents and other fiscal documents.",
      "Made an excel report parsing application in python to update MS SQL server dataset automatically.",
    ]
  },
  // Add more experiences as needed
];

export default function Experience() {
  return (
    <section className="py-12 px-4 md:px-8 bg-teal-700 text-gray-900">
      <h2 className="text-2xl font-semibold text-center mb-8">Experience</h2>
      <div className="space-y-6 max-w-3xl mx-auto border-4 border-black rounded-xl bg-gray-100">
        {experiences.map((exp, index) => (
          <div key={index} className="border-b border-gray-500 pb-4 px-4 py-4">
            <h3 className="text-lg font-bold">{exp.role}</h3>
            <p className="text-sm text-gray-600">{exp.company} – {exp.location}</p>
            <p className="text-sm text-gray-600">{exp.period}</p>
            <p className="text-sm text-gray-600">{exp.technologies}</p>
            <ul className="list-disc pl-5 text-gray-700 mt-2">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
