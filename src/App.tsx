import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectOverview } from './components/ProjectOverview';
import { Team } from './components/Team';
import { Technologies } from './components/Technologies';
import { Customers } from './components/Customers';
import { Progress } from './components/Progress';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <div>
        <Hero />
        <ProjectOverview />
        <Team />
        <Technologies />
        <Customers />
        <Progress />
      </div>
    </div>
  );
}

export default App;