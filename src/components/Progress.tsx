import React from 'react';
import { LineChart, Brain } from 'lucide-react';

export function Progress() {
  return (
    <section id="progress" className="min-h-screen flex items-center bg-blue-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Project Progress</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <Brain className="w-12 h-12 text-blue-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Current Phase</h3>
                  <p className="text-gray-600">Model Development</p>
                </div>
              </div>
              <LineChart className="w-12 h-12 text-blue-600" />
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>33%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="w-1/3 h-full bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Current Focus</h4>
                <p className="text-gray-600">Developing and training AI models for secure healthcare data analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}