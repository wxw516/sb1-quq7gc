import React from 'react';
import { Shield } from 'lucide-react';

export function Hero() {
  return (
    <header className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-8">
          <Shield className="w-16 h-16 text-blue-600 mr-4" />
          <h1 className="text-6xl font-bold text-gray-800">MediGuard</h1>
        </div>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
          Revolutionizing healthcare through secure AI collaboration
        </p>
      </div>
    </header>
  );
}