import React from 'react';
import { Shield, Brain } from 'lucide-react';

export function Technologies() {
  return (
    <section id="technologies" className="min-h-screen flex items-center bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Technology Stack</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800">
              <Shield className="w-6 h-6 mr-3 text-blue-600" />
              Homomorphic Encryption
            </h3>
            <p className="text-gray-600">
              Advanced encryption technology that allows computations on encrypted data,
              ensuring privacy while maintaining functionality.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800">
              <Brain className="w-6 h-6 mr-3 text-blue-600" />
              AI Models
            </h3>
            <p className="text-gray-600">
              State-of-the-art machine learning models optimized for healthcare applications,
              with a focus on diagnostic accuracy and treatment planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}