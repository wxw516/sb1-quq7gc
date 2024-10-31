import React from 'react';
import { Users } from 'lucide-react';

const team = [
  { 
    name: 'Tuy Nguyen', 
    role: 'Project Sponsor',
    bio: 'Professor Tuy Nguyen is currently an Assistant Professor at the School of Informatics, Computing, and Cyber Systems at Northern Arizona University. Previously, he held the positions of Lecturer at the School of Global Convergence Studies and Post-Doctoral Fellow at the Department of Electrical and Computer Engineering at Inha University, from May 2021 to August 2022. Prior to that, he worked as a Senior Research Engineer at Conextt Inc., contributing from September 2019 to April 2021. He earned his Ph.D. in Information and Communication Engineering from Inha University in August 2019.'
  },
  { name: 'Jiawen Zhao', role: 'Project Manager' },
  { 
    name: 'Xiwei Wang', 
    role: 'Team Treasurer',
    image: 'https://raw.githubusercontent.com/xiwei-wang-ucsd/xiwei-wang-ucsd.github.io/main/assets/img/profile.jpg'
  },
  { name: 'Rudra Amin', role: 'Project Secretary' },
  { name: 'Loren Larrieu', role: 'Consultant' },
  { name: 'Rodolfo Echavarria', role: 'Consultant' }
];

export function Team() {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-gray-800/30 rounded-lg p-6">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mb-4">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Users className="w-12 h-12" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                <p className="text-gray-400 text-center">{member.role}</p>
              </div>
              {member.bio && (
                <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                  {member.bio}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}