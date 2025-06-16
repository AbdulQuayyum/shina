import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Palette, Brush, Layers, Pen, Zap, Eye, Camera, Aperture, Triangle, Circle, Square, Star, Sparkles, Wand2, PenTool, MousePointer, Grid, Ruler, Lightbulb, ArrowRight, Target, Heart, Rocket, Crown, Diamond, Coffee, Music, Globe, Shield, Flame, Trophy, Gift, Compass } from 'lucide-react';

interface CreativeHeroProps {
  scrollToSection?: (id: string) => void;
}

const CreativeHero: React.FC<CreativeHeroProps> = ({ scrollToSection = () => { } }) => {
  const [scrollY, setScrollY] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const designWords = ["VISUAL", "CREATIVE", "INNOVATIVE", "ARTISTIC", "BOLD", "INSPIRING"];

  const floatingIcons = [
    { Icon: Sparkles, delay: 0, startX: '10%', startY: '10%', x: 60, y: 40 },
    { Icon: Zap, delay: 0.5, startX: '90%', startY: '10%', x: -60, y: 50 },
    { Icon: Target, delay: 1, startX: '50%', startY: '5%', x: 70, y: -30 },
    { Icon: Star, delay: 1.5, startX: '5%', startY: '50%', x: 80, y: -60 },
    { Icon: Heart, delay: 2, startX: '95%', startY: '50%', x: -80, y: 70 },
    { Icon: Rocket, delay: 2.5, startX: '50%', startY: '50%', x: 90, y: -90 },
    { Icon: Lightbulb, delay: 3, startX: '10%', startY: '90%', x: 70, y: -60 },
    { Icon: Crown, delay: 3.5, startX: '90%', startY: '90%', x: -70, y: -50 },
    { Icon: Diamond, delay: 4, startX: '50%', startY: '95%', x: 80, y: -80 },
    { Icon: Coffee, delay: 4.5, startX: '25%', startY: '25%', x: -60, y: 80 },
    { Icon: Music, delay: 5, startX: '75%', startY: '25%', x: 60, y: 90 },
    { Icon: Camera, delay: 5.5, startX: '25%', startY: '75%', x: -70, y: -40 },
    { Icon: Palette, delay: 6, startX: '75%', startY: '75%', x: 70, y: -60 },
    { Icon: Globe, delay: 6.5, startX: '35%', startY: '50%', x: -80, y: 60 },
    { Icon: Shield, delay: 7, startX: '65%', startY: '50%', x: 80, y: -70 },
    { Icon: Flame, delay: 7.5, startX: '50%', startY: '30%', x: -90, y: 80 },
    { Icon: Trophy, delay: 8, startX: '50%', startY: '70%', x: 90, y: -50 },
    { Icon: Gift, delay: 8.5, startX: '5%', startY: '25%', x: 100, y: 70 },
    { Icon: Compass, delay: 9, startX: '95%', startY: '75%', x: -100, y: -80 }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    setTimeout(() => setIsLoaded(true), 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % designWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6,
        color: '#b8860b',
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="min-h-screen w-full relative overflow-hidden" style={{ backgroundColor: '#f9f6f1' }}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-5" style={{ backgroundColor: '#b8860b', transform: `translate(${Math.sin(scrollY * 0.002) * 30}px, ${Math.cos(scrollY * 0.002) * 20}px)` }} />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse opacity-5" style={{ backgroundColor: '#141414', transform: `translate(${Math.cos(scrollY * 0.003) * 25}px, ${Math.sin(scrollY * 0.003) * 15}px)` }} />
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingIcons.map((item, index) => (
          <div key={index} className="absolute opacity-20 transition-all duration-300" style={{ left: item.startX, top: item.startY, transform: `translate(-50%, -50%) translate(${Math.sin(scrollY * 0.001 + index) * 20}px, ${Math.cos(scrollY * 0.001 + index) * 15}px) rotate(${Math.sin(scrollY * 0.002 + index) * 10}deg)`, animation: `float ${6 + index * 0.2}s ease-in-out infinite`, animationDelay: `${item.delay}s`, color: index % 2 === 0 ? '#b8860b' : '#141414' }} >
            <item.Icon size={24} />
          </div>
        ))}
      </div>
      <div className="relative z-10 min-h-screen w-full flex items-center">
        <div className="container mt-32 w-full mx-auto md:px-6 max-w-7xl">

          <div className="flex flex-col items-center w-full justify-center text-center space-y-12">

            <div className={`w-full transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-8">

                <div className="absolute inset-0 rounded-full animate-spin-slow p-1" style={{ background: `linear-gradient(45deg, #b8860b, #141414, #b8860b)` }}>
                  <div className="w-full h-full rounded-full p-2" style={{ backgroundColor: '#f9f6f1' }}>
                    <div className="w-full h-full rounded-full overflow-hidden" style={{ backgroundColor: '#141414' }}>
                      {/* <div className="w-full h-full rounded-full flex items-center justify-center" style={{ backgroundColor: '#b8860b' }}>
                        <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div> */}
                      <img src="/shina.jpg" className=' object-cover h-full w-full' alt="" />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl rotate-12 animate-bounce-gentle flex items-center justify-center" style={{ backgroundColor: '#b8860b' }}>
                  <Star size={20} style={{ color: '#f9f6f1' }} />
                </div>
                <div className="absolute -bottom-6 -left-6 w-10 h-10 rounded-xl -rotate-12 animate-float-slow flex items-center justify-center" style={{ backgroundColor: '#141414' }}>
                  <Sparkles size={16} style={{ color: '#f9f6f1' }} />
                </div>
              </div>
            </div>
            <div className={`w-full transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-4" style={{ color: '#b8860b' }}>
                <div className="inline-block px-4 py-2 rounded-full border" style={{ borderColor: '#b8860b', backgroundColor: 'rgba(184, 134, 11, 0.1)' }}>
                  <span className="text-sm font-semibold tracking-wider">
                    {designWords[currentWord]}
                  </span>
                </div>
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-4 leading-tight" style={{ color: '#141414' }}>
                <div className="overflow-hidden">
                  <div className={`transition-all duration-800 delay-400 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
                    Hello! I'm Emmanuel
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className={`transition-all duration-800 delay-600 text-2xl md:text-4xl font-light mt-2 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`} style={{ color: '#b8860b' }}>
                    Graphic Designer
                  </div>
                </div>
              </h1>
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="mr-2" size={20} style={{ color: '#b8860b' }} />
                <h2 className="text-lg md:text-xl font-medium" style={{ color: '#141414' }}>
                  Visual Storyteller
                </h2>
                <Sparkles className="ml-2" size={20} style={{ color: '#b8860b' }} />
              </div>
            </div>
            <div className={`w-full transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: '#141414', opacity: 0.8 }}>
                Transforming ideas into visual masterpieces. I craft compelling narratives through
                <span className="font-semibold" style={{ color: '#b8860b' }}> innovative design</span>,
                <span className="font-semibold" style={{ color: '#b8860b' }}> strategic branding</span>, and
                <span className="font-semibold" style={{ color: '#b8860b' }}> artistic excellence</span> that captivates audiences and drives results.
              </p>
            </div>
            <div className={`w-full transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
                {[{ number: "100+", label: "Projects Completed" }, { number: "50+", label: "Happy Clients" }, { number: "99%", label: "Client Satisfaction" }].map((stat, index) => (
                  <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="mb-2 text-3xl md:text-4xl font-black" style={{ color: '#b8860b' }}>
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium" style={{ color: '#141414', opacity: 0.7 }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`w-full transition-all duration-1000 delay-1100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {[{ icon: Palette, label: 'Brand Identity' }, { icon: Camera, label: 'Photography' }, { icon: Layers, label: 'UI/UX Design' }, { icon: Pen, label: 'Illustration' }].map((skill, index) => (
                  <div key={index} className="group flex items-center space-x-2 px-4 py-2 rounded-full border hover:scale-105 transition-all duration-300" style={{ borderColor: '#141414', backgroundColor: 'rgba(184, 134, 11, 0.05)' }}>
                    <skill.icon size={16} style={{ color: '#b8860b' }} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-sm font-medium" style={{ color: '#141414' }}>{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`w-full transition-all duration-1000 delay-1300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button onClick={() => scrollToSection('portfolio')} className="group relative px-8 py-4 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold overflow-hidden" style={{ backgroundColor: '#b8860b' }}>
                  <span className="relative z-10 flex items-center justify-center">
                    <Eye className="mr-2" size={20} />
                    Explore My Work
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#141414' }}></div>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                </button>

                <button onClick={() => scrollToSection('contact')} className="group relative px-8 py-4 border-2 rounded-full hover:!text-white transition-all duration-300 font-semibold overflow-hidden" style={{ borderColor: '#141414', color: '#141414' }}>
                  <span className="relative z-10 flex items-center justify-center">
                    Let's Create Magic Together
                    <div className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
                      <ArrowRight size={20} />
                    </div>
                  </span>
                  <div className="absolute inset-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" style={{ backgroundColor: '#141414' }}></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-3deg); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </section>
  );
};

export default CreativeHero;