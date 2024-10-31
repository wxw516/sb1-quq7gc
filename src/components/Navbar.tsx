import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white/95 shadow-lg fixed w-full z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">MediGuard</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('overview')} className="text-gray-600 hover:text-blue-600 transition-colors">Overview</button>
            <button onClick={() => scrollToSection('team')} className="text-gray-600 hover:text-blue-600 transition-colors">Team</button>
            <button onClick={() => scrollToSection('technologies')} className="text-gray-600 hover:text-blue-600 transition-colors">Technologies</button>
            <button onClick={() => scrollToSection('customers')} className="text-gray-600 hover:text-blue-600 transition-colors">Customers</button>
            <button onClick={() => scrollToSection('progress')} className="text-gray-600 hover:text-blue-600 transition-colors">Progress</button>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-blue-600"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <button onClick={() => scrollToSection('overview')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">Overview</button>
            <button onClick={() => scrollToSection('team')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">Team</button>
            <button onClick={() => scrollToSection('technologies')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">Technologies</button>
            <button onClick={() => scrollToSection('customers')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">Customers</button>
            <button onClick={() => scrollToSection('progress')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600">Progress</button>
          </div>
        )}
      </div>
    </nav>
  );
}