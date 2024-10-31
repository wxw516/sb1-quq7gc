import React from 'react';
import { Building2, Stethoscope, Network } from 'lucide-react';

export default function Clients() {
  return (
    <section id="clients" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Target Clients</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Stethoscope className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Healthcare Providers</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Hospitals</li>
              <li>• Medical Clinics</li>
              <li>• Specialty Care Centers</li>
              <li>• Telehealth Providers</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Building2 className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Research Institutions</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Medical Research Centers</li>
              <li>• Universities</li>
              <li>• Clinical Trial Organizations</li>
              <li>• Healthcare AI Labs</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Network className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Healthcare Networks</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Hospital Systems</li>
              <li>• Regional Health Networks</li>
              <li>• Insurance Providers</li>
              <li>• Healthcare Consortiums</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our solutions are designed to meet the specific needs of healthcare organizations 
            that prioritize both innovation and data security in their operations.
          </p>
        </div>
      </div>
    </section>
  );
}