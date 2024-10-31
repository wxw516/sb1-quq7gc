import React from 'react';
import { Brain, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Project Overview</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
            <p className="text-gray-600 leading-relaxed">
              The integration of AI and telehealth revolutionizes healthcare by enhancing diagnostic accuracy, 
              treatment planning, and patient outcomes. However, ensuring secure collaboration between health 
              centers while protecting patient data privacy presents significant challenges.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
            <p className="text-gray-600 leading-relaxed">
              We address these issues by leveraging federated learning, which allows collaborative model 
              training without direct data sharing. This approach improves diagnostic accuracy, treatment 
              planning, and access to specialized healthcare, while reducing disparities and protecting 
              patient data.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Project Goals</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Enhanced Security</h4>
              <p className="text-gray-600">Strengthen patient data protection while maintaining accessibility</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <p className="text-xl font-semibold mb-2">Improved Diagnostics</p>
              <p className="text-gray-600">Increase accuracy in diagnosis and treatment planning</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Healthcare Access</h4>
              <p className="text-gray-600">Reduce healthcare disparities through improved access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}