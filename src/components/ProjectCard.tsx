
import React from 'react';
import AnimatedSection from './AnimatedSection';

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  gradient: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, skills, gradient, delay = 0 }) => {
  return (
    <AnimatedSection animation="scale-in" delay={delay}>
      <div className={`${gradient} p-8 rounded-2xl hover-lift group cursor-pointer relative overflow-hidden`}>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-white/90 mb-6 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full animate-pulse-glow"></div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectCard;
