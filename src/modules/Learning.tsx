import React from 'react';
import { BookOpen } from 'lucide-react';

const Learning = () => {
  const courses = [
    { id: 1, title: 'Introduction to React', progress: 75 },
    { id: 2, title: 'Advanced JavaScript Concepts', progress: 50 },
    { id: 3, title: 'Web Security Fundamentals', progress: 25 },
  ];

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Learning Dashboard</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Your current courses and progress.</p>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {courses.map((course) => (
            <li key={course.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                  <p className="ml-3 text-sm font-medium text-gray-900">{course.title}</p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="mt-1 text-sm text-gray-500 text-right">{course.progress}% Complete</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Learning;