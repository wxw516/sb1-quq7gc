import React from 'react';
import { Building2, Users, Activity } from 'lucide-react';

export function Customers() {
  return (
    <section id="customers" className="min-h-screen flex items-center bg-blue-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Target Customers</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Building2 className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Hospitals</h3>
            <p className="text-gray-600">Large healthcare facilities seeking secure data collaboration</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Medical Practices</h3>
            <p className="text-gray-600">Private practices looking to enhance diagnostic capabilities</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Activity className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Research Institutions</h3>
            <p className="text-gray-600">Organizations conducting healthcare research and development</p>
          </div>
        </div>
      </div>
    </section>
  );
}