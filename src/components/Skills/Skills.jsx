// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => (
  <section id="skills" data-reveal className="py-16">
    <div className="page-container">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text)]">Skills</h2>
        <p className="text-[var(--muted)] mt-2 max-w-2xl mx-auto">A concise list of technologies and tools I use regularly.</p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {SkillsInfo.map((category) => (
          <div key={category.title} className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium text-[var(--text)] mb-2">{category.title}</h3>
            <p className="text-[var(--muted)] text-sm mb-4">Fresher-level familiarity — I can learn and apply these tools quickly.</p>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-[var(--muted)] max-w-full"
                >
                  <img src={skill.logo} alt={skill.name} className="h-5 w-5 shrink-0 rounded-sm object-contain" />
                  <span className="whitespace-nowrap">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
