import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  delay?: number;
  isLink?: boolean;
  href?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, value, delay = 0, isLink = false, href }) => {
  const CardContent = () => (
    <div className="bg-[#f9f6f1] p-6 rounded-xl hover-lift group cursor-pointer relative overflow-hidden shadow-md">
      <div className="absolute inset-0 bg-gradient-to-r from-[#b8860b]/10 to-[#141414]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className="text-[#b8860b] mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:text-[#141414]">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-[#141414] mb-2 group-hover:text-[#b8860b] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[#4a4a4a] group-hover:text-[#141414] transition-colors duration-300">
          {value}
        </p>
      </div>
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#b8860b]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#141414]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
    </div>
  );

  return (
    <AnimatedSection animation="scale-in" delay={delay}>
      {isLink && href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block transform hover:scale-105 transition-transform duration-300">
          <CardContent />
        </a>
      ) : (
        <CardContent />
      )}
    </AnimatedSection>
  );
};

export default ContactCard;
