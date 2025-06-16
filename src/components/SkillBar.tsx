
import React, { useEffect, useState } from 'react';
import AnimatedSection from './AnimatedSection';

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage, delay = 0 }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, delay + 500);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <AnimatedSection animation="slide-left" delay={delay}>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700 font-medium">{skill}</span>
          <span className="text-purple-600 font-bold">{percentage}%</span>
        </div>
        <div className="skill-bar h-3">
          <div className="skill-progress h-full" style={{ width: `${width}%` }}></div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SkillBar;
