import React from 'react';
import { Brain, Activity, Shield } from 'lucide-react';

export function ProjectOverview() {
  return (
    <section id="overview" className="min-h-screen flex items-center bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Project Overview</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 text-lg">
              The integration of AI and telehealth revolutionizes healthcare by enhancing diagnostic accuracy,
              treatment planning, and patient outcomes. Our solution leverages federated learning to enable
              secure collaboration between health centers while maintaining patient data privacy.
            </p>
            <div className="flex items-center space-x-4 text-gray-700">
              <Brain className="w-6 h-6 text-blue-600" />
              <span>Advanced AI Models</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-700">
              <Activity className="w-6 h-6 text-blue-600" />
              <span>Enhanced Diagnostic Accuracy</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-700">
              <Shield className="w-6 h-6 text-blue-600" />
              <span>Secure Data Protection</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Project Goals</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Shield className="w-6 h-6 flex-shrink-0 mt-1" />
                <span>Enhance patient data security</span>
              </li>
              <li className="flex items-start space-x-3">
                <Brain className="w-6 h-6 flex-shrink-0 mt-1" />
                <span>Improve diagnostic accuracy</span>
              </li>
              <li className="flex items-start space-x-3">
                <Activity className="w-6 h-6 flex-shrink-0 mt-1" />
                <span>Reduce healthcare disparities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}