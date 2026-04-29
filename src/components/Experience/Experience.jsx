import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section id="experience" data-reveal className="py-16">
      <div className="page-container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text)]">Experience</h2>
          <p className="text-[var(--muted)] mt-2 max-w-2xl mx-auto">Selected roles where I shipped product work and contributed to team outcomes.</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="flex gap-4 items-start bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
              <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                <img src={exp.img} alt={exp.company} className="w-full h-full object-cover" />
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-medium text-[var(--text)]">{exp.role}</h3>
                  <span className="text-sm text-[var(--muted)]">{exp.date}</span>
                </div>
                <h4 className="text-sm text-[var(--muted)] mt-1">{exp.company}</h4>
                <p className="mt-2 text-[var(--muted)]">{exp.desc}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.skills.map((s, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-50 border border-gray-100 rounded">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
