import React from 'react';

const experiences = [
  {
    role: "Software Developer",
    company: "Tetra Tech",
    location: "Vancouver, BC",
    period: "2023 - Present",
    description: "Developed solutions for environmental data analysis and automation, enhancing project efficiency and accuracy."
  },
  {
    role: "Data Analyst Co-op",
    company: "Alberta Health Services",
    location: "Edmonton, AB",
    period: "2022",
    description: "Monitored healthcare inventories and forecasted equipment demands, optimizing supply chain operations."
  },
  // Add more experiences as needed
];

export default function Experience() {
  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50 text-gray-800">
      <h2 className="text-2xl font-semibold text-center mb-8">Experience</h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-bold">{exp.role}</h3>
            <p className="text-sm text-gray-500">{exp.company} – {exp.location}</p>
            <p className="text-sm text-gray-400">{exp.period}</p>
            <p className="text-gray-700 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
