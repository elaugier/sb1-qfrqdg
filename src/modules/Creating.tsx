import React from 'react';
import { PenTool } from 'lucide-react';

const Creating = () => {
  const projects = [
    { id: 1, title: 'Personal Blog', status: 'In Progress' },
    { id: 2, title: 'E-commerce Website', status: 'Planning' },
    { id: 3, title: 'Mobile App UI Design', status: 'Completed' },
  ];

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Creating Projects</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Your ongoing and completed projects.</p>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {projects.map((project) => (
            <li key={project.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <PenTool className="h-6 w-6 text-indigo-600" />
                  <p className="ml-3 text-sm font-medium text-gray-900">{project.title}</p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Creating;