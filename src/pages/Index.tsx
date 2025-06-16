import React, { useEffect, useState } from 'react';
import { Mail, Phone, ArrowRight, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FloatingElements from '../components/FloatingElements';
import AnimatedSection from '../components/AnimatedSection';
import ContactCard from '../components/ContactCard';
import DesignGallery from '../components/DesignGallery';
import CreativeHero from '../components/CreativeHero';

const Index = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-yellow-50 relative overflow-x-hidden" style={{ background: 'linear-gradient(135deg, #f9f6f1 0%, #faf7f2 50%, #fbf8f3 100%)' }}>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(249, 246, 241, 0.9)' }}>
        <div className="container max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#141414] to-[#b8860b] bg-clip-text text-transparent">
              Emmanuel
            </div>
            <div className="flex space-x-8">
              {['Home', 'Portfolio', 'About', 'Contact'].map((item, index) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="transition-colors hidden md:block duration-300 relative group" style={{ color: '#141414' }} onMouseEnter={(e) => e.target.style.color = '#b8860b'} onMouseLeave={(e) => e.target.style.color = '#141414'}>
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#b8860b' }}></span>
                </button>
              ))}
              <button onClick={() => navigate('/skills')} className="flex items-center space-x-1 transition-colors duration-300 font-semibold" style={{ color: '#b8860b' }} onMouseEnter={(e) => e.target.style.color = '#9a7209'} onMouseLeave={(e) => e.target.style.color = '#b8860b'}>
                <span>Skills</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className='w-full' id="home">
        <CreativeHero scrollToSection={scrollToSection} />
      </section>

      <section className='w-full' id="portfolio">
        <DesignGallery />
      </section>

      <section id="about" className="py-20 w-full" style={{ background: 'linear-gradient(135deg, #f9f6f1 0%, #faf7f2 100%)' }}>
        <div className="container w-full mx-auto px-6">
          <AnimatedSection animation="slide-up">
            <h2 className="text-5xl font-bold text-center mb-16" style={{ background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Design Philosophy</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <AnimatedSection animation="slide-right">
              <div className="p-8 rounded-2xl transition-transform duration-300 hover:-translate-y-2 shadow-lg" style={{ backgroundColor: '#f9f6f1', border: '1px solid rgba(184, 134, 11, 0.1)' }}>
                <h3 className="text-3xl font-bold mb-6" style={{ color: '#141414' }}>Where Economics Meets Design</h3>
                <p className="mb-4 leading-relaxed text-lg" style={{ color: '#141414', opacity: 0.8 }}>
                  My unique background in Economics at the University of Lagos brings analytical depth
                  to every design decision. I understand that great design isn't just beautifulit's strategic.
                </p>
                <p className="mb-4 leading-relaxed text-lg" style={{ color: '#141414', opacity: 0.8 }}>
                  By studying consumer behavior, market dynamics, and decision-making processes, I create
                  designs that don't just look goodthey perform, persuade, and drive results.
                </p>
                <p className="leading-relaxed text-lg" style={{ color: '#141414', opacity: 0.8 }}>
                  Every brand needs a visual voice that speaks to its audience. I help businesses find
                  that voice through thoughtful, research-driven design solutions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={300}>
              <div className="space-y-6">
                <div className="p-6 rounded-xl transition-transform duration-300 hover:-translate-y-2" style={{ backgroundColor: 'rgba(249, 246, 241, 0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(184, 134, 11, 0.2)' }}>
                  <h4 className="text-xl font-bold mb-3" style={{ color: '#b8860b' }}>Strategic Thinking</h4>
                  <p style={{ color: '#141414', opacity: 0.8 }}>Every design decision is backed by research and market understanding.</p>
                </div>
                <div className="p-6 rounded-xl transition-transform duration-300 hover:-translate-y-2" style={{ backgroundColor: 'rgba(249, 246, 241, 0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(184, 134, 11, 0.2)' }}>
                  <h4 className="text-xl font-bold mb-3" style={{ color: '#b8860b' }}>Visual Storytelling</h4>
                  <p style={{ color: '#141414', opacity: 0.8 }}>Crafting narratives that connect brands with their audiences emotionally.</p>
                </div>
                <div className="p-6 rounded-xl transition-transform duration-300 hover:-translate-y-2" style={{ backgroundColor: 'rgba(249, 246, 241, 0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(184, 134, 11, 0.2)' }}>
                  <h4 className="text-xl font-bold mb-3" style={{ color: '#b8860b' }}>Data-Driven Design</h4>
                  <p style={{ color: '#141414', opacity: 0.8 }}>Using analytics and insights to inform creative decisions.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 w-full">
        <div className="container w-full mx-auto px-6">
          <AnimatedSection animation="slide-up">
            <h2 className="text-5xl font-bold text-center mb-16" style={{ background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>What I Create</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 items-stretch gap-8 max-w-6xl mx-auto">
            <AnimatedSection className="h-full flex-1" animation="scale-in" delay={0}>
              <div className="p-8 rounded-2xl transition-transform duration-300 hover:-translate-y-2 h-full flex-1 relative overflow-hidden group" style={{ background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 100%)', color: '#f9f6f1' }}>
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 animate-pulse" style={{ backgroundColor: '#f9f6f1' }}></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Brand Identity</h3>
                <p className="mb-6 relative z-10" style={{ color: '#f9f6f1', opacity: 0.9 }}>Complete brand systems including logos, color palettes, typography, and brand guidelines.</p>
                <ul className="space-y-2 relative z-10">
                  <li>• Logo Design</li>
                  <li>• Brand Guidelines</li>
                  <li>• Visual Identity</li>
                  <li>• Style Systems</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection className="h-full flex-1" animation="scale-in" delay={200}>
              <div className="p-8 rounded-2xl transition-transform duration-300 hover:-translate-y-2 h-full flex-1 relative overflow-hidden group" style={{ background: 'linear-gradient(135deg, #9a7209 0%, #b8860b 100%)', color: '#f9f6f1' }}>
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 animate-pulse" style={{ backgroundColor: '#f9f6f1' }}></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Digital Design</h3>
                <p className="mb-6 relative z-10" style={{ color: '#f9f6f1', opacity: 0.9 }}>Modern digital solutions for web, mobile, and social media platforms.</p>
                <ul className="space-y-2 relative z-10">
                  <li>• Web Graphics</li>
                  <li>• Social Media</li>
                  <li>• UI Elements</li>
                  <li>• Digital Campaigns</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection className="h-full flex-1" animation="scale-in" delay={400}>
              <div className="p-8 rounded-2xl transition-transform duration-300 hover:-translate-y-2 h-full flex-1 relative overflow-hidden group" style={{ background: 'linear-gradient(135deg, #8b6914 0%, #9a7209 100%)', color: '#f9f6f1' }}>
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 animate-pulse" style={{ backgroundColor: '#f9f6f1' }}></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Data Visualization</h3>
                <p className="mb-6 relative z-10" style={{ color: '#f9f6f1', opacity: 0.9 }}>Transforming complex data into compelling visual stories and infographics.</p>
                <ul className="space-y-2 relative z-10">
                  <li>• Infographics</li>
                  <li>• Chart Design</li>
                  <li>• Report Graphics</li>
                  <li>• Data Stories</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 w-full" style={{ background: 'linear-gradient(135deg, #f9f6f1 0%, #faf7f2 100%)' }}>
        <div className="container w-full mx-auto px-6">
          <AnimatedSection animation="slide-up">
            <h2 className="text-5xl font-bold text-center mb-16" style={{ background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Let's Create Together</h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="scale-in" delay={300}>
              <div className="text-center mb-12">
                <p className="text-xl leading-relaxed" style={{ color: '#141414', opacity: 0.8 }}>
                  Have a project in mind? Let's collaborate to bring your vision to life with
                  compelling design that drives results.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              <ContactCard icon={<Mail size={32} />} title="Email" value="emmanueladeniran2004@gmail.com" delay={0} />

              <ContactCard icon={<Phone size={32} />} title="Phone" value="+234 904 205 9549" delay={200} />

              <ContactCard icon={<Linkedin size={32} />} title="LinkedIn" value="Connect with me" delay={400} isLink={true} href="https://linkedin.com/in/emmanuel-adeniran" />
            </div>

            <AnimatedSection animation="slide-up" delay={600}>
              <div className="text-center w-full mt-12">
                <div className="p-8 rounded-2xl md:w-fit w-full transition-transform duration-300 hover:-translate-y-2 inline-block" style={{ backgroundColor: 'rgba(249, 246, 241, 0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(184, 134, 11, 0.2)' }}>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#141414' }}>Currently Studying</h3>
                  <p className="text-lg" style={{ color: '#141414', opacity: 0.8 }}>University of Lagos</p>
                  <p style={{ color: '#b8860b' }}>B.Sc. Economics | Class of 2027</p>
                </div>
              </div>
            </AnimatedSection>
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

export default Index;