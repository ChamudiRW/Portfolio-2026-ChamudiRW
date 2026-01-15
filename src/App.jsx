import React from 'react';
import { Mail, Linkedin, Globe, ArrowDownToLine } from 'lucide-react';
import { resumeData } from './data/resumeData';
import ExperienceCard from './components/ExperienceCard';
import EducationCard from './components/EducationCard';
import CertificationCard from './components/CertificationCard';
import SkillList from './components/SkillList';

const App = () => {
  const { personalInfo, experience, education, skills, certifications, additionalSkills } = resumeData;

  return (
    <div className="min-h-screen bg-white py-12 px-6 md:py-20">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto border-2 shadow-lg p-8 md:p-20 md:pb-32">

        {/* Header Section */}
        <header className="flex flex-col justify-between items-start mb-12 border-b border-gray-300 pb-8 gap-4">
          <div className="mb-6 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 tracking-normal leading-relaxed mb-5">
              Chamudi R. Wijesekera
            </h1>
            <p className="text-xl font-medium text-gray-900 tracking-tight">{personalInfo.title}</p>
          </div>

          <div className="flex flex-row items-end gap-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-purple-50 hover:text-[#9a82ac] hover:border-[#c4a9d9] transition-all duration-300 w-full md:w-auto"
            >
              <Mail size={18} />
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-purple-50 hover:text-[#9a82ac] hover:border-[#c4a9d9] transition-all duration-300 w-full md:w-auto"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-purple-50 hover:text-[#9a82ac] hover:border-[#9a82ac] transition-all duration-300 w-full md:w-auto"
            >
              <Globe size={18} />
              <span>Portfolio</span>
            </a>
            <a
              href={personalInfo.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 text-sm border border-gray-200 bg-[#c9b8d7]/90 text-gray-700 rounded-lg hover:bg-[#bcabca]/90 hover:border-[#9a82ac]transition-all duration-300 w-full md:w-auto"
            >
              <ArrowDownToLine size={18} />
              <span>Download PDF</span>
            </a>
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-32">

          {/* Left Column: Experience, Education */}
          <main className="space-y-12">

            {/* Intro */}
            <section>
              <p className="text-md text-gray-600 leading-relaxed max-w-2xl">
                {personalInfo.intro}
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="section-title">Work Experience</h2>
              <div className="space-y-2">
                {experience.map((exp, index) => (
                  <ExperienceCard key={index} {...exp} />
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="section-title">Education</h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <EducationCard key={index} {...edu} />
                ))}
              </div>
            </section>

          </main>

          {/* Right Column: Skills & Certifications */}
          <aside className="space-y-12">

            {/* Skills Section */}
            <div>
              <h2 className="section-title">Skills</h2>
              <SkillList title="UI/UX Design" items={skills.uiux} />
              <SkillList title="Tools" items={skills.tools} />
              <SkillList title="Development" items={skills.development} />
              <SkillList title="Specialties" items={skills.specialties} />

              {/* Additional list style for "Design Automation" etc */}
              <div className="mt-8 space-y-1.5">
                {additionalSkills.map((skill, index) => (
                  <div key={index} className="text-[13.5px] text-gray-600 flex items-start">
                    <span className="mr-3 text-gray-400">•</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="pt-4 border-t border-gray-100 lg:border-none">
              <h2 className="section-title">Certifications</h2>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <CertificationCard key={index} {...cert} />
                ))}
              </div>
            </div>

          </aside>

        </div>
      </div>

      {/* Footer / Mobile Only Print/PDF Suggestion */}
      <footer className="mt-20 border-t border-gray-100 pt-8 text-center text-xs text-gray-400">
        <p>© {new Date().getFullYear()} {personalInfo.name} • Professional Resume</p>
      </footer>
    </div>
  );
};

export default App;
