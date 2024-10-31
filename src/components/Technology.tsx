import React from 'react';
import { Lock, Brain, Network } from 'lucide-react';

export default function Technology() {
  return (
    <section id="technology" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Technology</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Lock className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Homomorphic Encryption</h3>
            <p className="text-gray-600 leading-relaxed">
              Our system employs advanced homomorphic encryption techniques, allowing computations on encrypted 
              data without decryption. This ensures patient data remains protected while enabling collaborative 
              analysis and model training.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• End-to-end encryption</li>
              <li>• Secure data processing</li>
              <li>• Privacy-preserving analytics</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Brain className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">AI Models</h3>
            <p className="text-gray-600 leading-relaxed">
              Our AI models leverage state-of-the-art machine learning techniques while maintaining data 
              privacy through federated learning approaches. This enables collaborative improvement of 
              healthcare outcomes without compromising security.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Federated Learning</li>
              <li>• Diagnostic assistance</li>
              <li>• Treatment optimization</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-blue-600 text-white p-8 rounded-lg">
          <div className="flex items-center justify-center mb-6">
            <Network className="w-16 h-16" />
          </div>
          <h3 className="text-2xl font-semibold text-center mb-4">Secure Collaboration Network</h3>
          <p className="text-center max-w-2xl mx-auto">
            Our platform enables secure collaboration between healthcare providers, researchers, and AI models 
            while maintaining the highest standards of data privacy and security.
          </p>
        </div>
      </div>
    </section>
  );
}