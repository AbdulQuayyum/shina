
import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 transform rotate-45 opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-bounce-gentle"></div>
      <div className="absolute bottom-60 right-40 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 transform rotate-12 opacity-20 animate-float"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-30 animate-float-slow"></div>
      <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-gradient-to-r from-indigo-400 to-purple-400 transform rotate-45 opacity-20 animate-bounce-gentle"></div>
    </div>
  );
};

export default FloatingElements;
