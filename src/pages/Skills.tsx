import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowLeft, Target, TrendingUp, Users, Lightbulb, Award, BookOpen, Brain, Zap } from 'lucide-react';

const Skills = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [skillProgress, setSkillProgress] = useState({});
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      checkVisibility();
    };

    const checkVisibility = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isElementVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        const id = el.getAttribute('data-animate');

        if (isElementVisible && !isVisible[id]) {
          setIsVisible(prev => ({ ...prev, [id]: true }));
        }
      });
    };

    setTimeout(checkVisibility, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const SkillBar = ({ skill, percentage, delay = 0, id }) => {
    const [animatedPercentage, setAnimatedPercentage] = useState(0);

    useEffect(() => {
      if (isVisible[id]) {
        const timer = setTimeout(() => {
          setAnimatedPercentage(percentage);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [isVisible[id], percentage, delay, id]);

    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#141414] font-medium">{skill}</span>
          <span className="text-[#b8860b] font-bold">{animatedPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#b8860b] to-[#141414] rounded-full transition-all duration-1000 ease-out relative"
            style={{ width: `${animatedPercentage}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  };

  const FloatingIcon = ({ Icon, className, delay = 0 }) => (
    <div className={`absolute ${className} animate-bounce`} style={{ animationDelay: `${delay}s`, animationDuration: '3s' }} >
      <Icon size={24} className="text-[#b8860b] opacity-60" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6f1] via-[#f9f6f1] to-[#f5f1e8] relative overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingIcon Icon={Brain} className="top-1/4 left-10" delay={0} />
        <FloatingIcon Icon={Lightbulb} className="top-1/3 right-20" delay={1} />
        <FloatingIcon Icon={Target} className="bottom-1/3 left-1/4" delay={2} />
        <FloatingIcon Icon={Zap} className="bottom-1/4 right-10" delay={1.5} />
      </div>
      <nav className="fixed top-0 w-full z-50 bg-[#f9f6f1]/90 backdrop-blur-md border-b border-[#b8860b]/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button onClick={() => navigate('/')} className="flex items-center space-x-2 text-[#b8860b] hover:text-[#141414] transition-all duration-300 hover:scale-105">
              <ArrowLeft size={20} />
              <span className="text-sm md:text-base font-semibold">Back to Portfolio</span>
            </button>
            <div className="md:text-2xl text-base font-bold bg-gradient-to-r from-[#141414] to-[#b8860b] bg-clip-text text-transparent">
              Skills & Expertise
            </div>
          </div>
        </div>
      </nav>
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 opacity-10" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#b8860b] to-[#141414] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#141414] to-[#b8860b] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="text-center z-10 px-6">
          <AnimatedSection animation="scale-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#141414] via-[#b8860b] to-[#141414] bg-clip-text text-transparent">
              Beyond Design
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={300}>
            <p className="text-xl text-[#141414]/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Combining analytical thinking from economics with creative problem-solving in design
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={600}>
            <div className="flex justify-center space-x-4">
              <div className="w-2 h-2 bg-[#b8860b] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#141414] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-[#b8860b] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-[#f9f6f1] to-[#f5f1e8] relative">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="slide-up">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#141414] to-[#b8860b] bg-clip-text text-transparent">
              Technical Expertise
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-right">
              <div className="bg-[#f9f6f1]/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-[#b8860b]/20" data-animate="data-skills">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-[#b8860b] to-[#141414] rounded-xl mr-4">
                    <Target className="text-[#f9f6f1]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#141414]">Data Analysis</h3>
                </div>
                <SkillBar skill="Statistical Analysis" percentage={85} delay={0} id="data-skills" />
                <SkillBar skill="Microsoft Excel" percentage={90} delay={200} id="data-skills" />
                <SkillBar skill="Data Visualization" percentage={80} delay={400} id="data-skills" />
                <SkillBar skill="Research Methods" percentage={85} delay={600} id="data-skills" />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={300}>
              <div className="bg-[#f9f6f1]/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-[#b8860b]/20" data-animate="econ-skills">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-[#141414] to-[#b8860b] rounded-xl mr-4">
                    <TrendingUp className="text-[#f9f6f1]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#141414]">Economics</h3>
                </div>
                <SkillBar skill="Microeconomics" percentage={88} delay={0} id="econ-skills" />
                <SkillBar skill="Market Analysis" percentage={82} delay={200} id="econ-skills" />
                <SkillBar skill="Consumer Behavior" percentage={85} delay={400} id="econ-skills" />
                <SkillBar skill="Economic Theory" percentage={80} delay={600} id="econ-skills" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="slide-up">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#b8860b] to-[#141414] bg-clip-text text-transparent">
              Soft Skills
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="scale-in" delay={0}>
              <div className="group bg-[#f9f6f1]/80 backdrop-blur-sm p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center border border-[#b8860b]/20 hover:border-[#b8860b]/50">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#b8860b] to-[#141414] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative p-4 bg-gradient-to-r from-[#b8860b] to-[#141414] rounded-full w-fit mx-auto">
                    <Users className="text-[#f9f6f1]" size={48} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#141414] mb-4">Communication</h3>
                <p className="text-[#141414]/70">Excellent verbal and written communication skills with ability to present complex ideas clearly.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={200}>
              <div className="group bg-[#f9f6f1]/80 backdrop-blur-sm p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center border border-[#b8860b]/20 hover:border-[#b8860b]/50">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#141414] to-[#b8860b] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative p-4 bg-gradient-to-r from-[#141414] to-[#b8860b] rounded-full w-fit mx-auto">
                    <Lightbulb className="text-[#f9f6f1]" size={48} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#141414] mb-4">Problem Solving</h3>
                <p className="text-[#141414]/70">Creative approach to solving complex problems with analytical and design thinking.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={400}>
              <div className="group bg-[#f9f6f1]/80 backdrop-blur-sm p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center border border-[#b8860b]/20 hover:border-[#b8860b]/50">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#b8860b] to-[#141414] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative p-4 bg-gradient-to-r from-[#b8860b] to-[#141414] rounded-full w-fit mx-auto">
                    <Target className="text-[#f9f6f1]" size={48} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#141414] mb-4">Project Management</h3>
                <p className="text-[#141414]/70">Ability to manage multiple projects, meet deadlines, and coordinate with teams effectively.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#f5f1e8] to-[#f9f6f1]">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="slide-up">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#141414] to-[#b8860b] bg-clip-text text-transparent">
              Education
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#b8860b] to-[#141414] rounded-full hidden md:block"></div>

            <div className="space-y-12">
              <AnimatedSection animation="slide-right">
                <div className="flex items-center md:justify-start justify-center">
                  <div className="bg-[#f9f6f1] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 md:w-96 w-full md:mr-8 border-l-4 border-[#b8860b]">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-[#b8860b]/10 rounded-lg mr-3">
                        <BookOpen className="text-[#b8860b]" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#141414]">University of Lagos</h3>
                    </div>
                    <p className="text-[#b8860b] font-semibold mb-4">B.Sc. Economics (2023 - Present)</p>
                    <div className="space-y-2 text-[#141414]/70">
                      <p className="flex items-center"><Award size={16} className="mr-2 text-[#b8860b]" /> Microeconomics & Macroeconomics</p>
                      <p className="flex items-center"><Award size={16} className="mr-2 text-[#b8860b]" /> Statistics & Econometrics</p>
                      <p className="flex items-center"><Award size={16} className="mr-2 text-[#b8860b]" /> Mathematics for Economists</p>
                      <p className="flex items-center"><Award size={16} className="mr-2 text-[#b8860b]" /> Development Economics</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-left" delay={300}>
                <div className="flex items-center md:justify-end justify-center">
                  <div className="bg-[#f9f6f1] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 md:w-96 w-full md:ml-8 border-l-4 border-[#141414]">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-[#141414]/10 rounded-lg mr-3">
                        <BookOpen className="text-[#141414]" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#141414]">Ogunlade College</h3>
                    </div>
                    <p className="text-[#141414] font-semibold mb-4">Senior Secondary School Certificate (2018 - 2021)</p>
                    <div className="space-y-2 text-[#141414]/70">
                      <p className="flex items-center"><Award size={16} className="mr-2 text-[#141414]" /> Mathematics</p>
                      <p className="flex items-center"><Award size={16} className="mr-2 text-[#141414]" /> Economics</p>
                      <p className="flex items-center"><Award size={16} className="mr-2 text-[#141414]" /> English Language</p>
                      <p className="flex items-center"><Award size={16} className="mr-2 text-[#141414]" /> Government</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      <AnimatedSection animation="fade-in">
        <footer className="flex flex-col items-center justify-between w-full px-4 pt-4 pb-10 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-y-4 md:flex-row">
          <span className="text-base text-center font-bold" style={{ color: '#141414' }}>
            {currentYear} © Adeniran Oluwashina Emmanuel, All rights reserved
          </span>
          <span className="text-base text-center font-bold" style={{ color: '#141414' }}>
            Developed by{" "}
            <a href="https://abdul-quayyum.vercel.app/" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: '#141414' }} onMouseEnter={(e) => e.target.style.color = '#d4a017'} onMouseLeave={(e) => e.target.style.color = '#b8860b'}>
              Abdul-Quayyum Alao
            </a>
          </span>
        </footer>
      </AnimatedSection>
    </div>
  );
};

export default Skills;