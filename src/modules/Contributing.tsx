import React from 'react';
import { Gift } from 'lucide-react';

const Contributing = () => {
  const contributions = [
    { id: 1, project: 'Open Source Project A', type: 'Code', date: '2023-03-15' },
    { id: 2, project: 'Community Forum', type: 'Documentation', date: '2023-04-02' },
    { id: 3, project: 'Hackathon Event', type: 'Organizing', date: '2023-05-10' },
  ];

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Contributing Activities</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Your recent contributions to the community.</p>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {contributions.map((contribution) => (
            <li key={contribution.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Gift className="h-6 w-6 text-indigo-600" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{contribution.project}</p>
                    <p className="text-sm text-gray-500">{contribution.type}</p>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <p className="text-sm text-gray-500">{contribution.date}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contributing;