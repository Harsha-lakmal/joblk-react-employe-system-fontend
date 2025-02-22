import React from 'react';

// Job Model එක
const jobData = {
  title: 'Frontend Developer',
  type: 'Full-time',
  description: 'We are looking for a skilled React developer to join our team.',
  startDate: '2025-03-01',
  endDate: '2025-05-01',
  images: [
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100'
  ]
};

function JobCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-md rounded-xl" style={{ width: '350px', height: '500px' }}>
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">{jobData.title}</h2>
      </header>
      
      <div className="p-4 space-y-3">
        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-2">
          {jobData.images.map((img, index) => (
            <img key={index} src={img} alt={`Job Image ${index + 1}`} className="h-20 w-full object-cover rounded-md" />
          ))}
        </div>

        {/* Vacancy Type */}
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Vacancy Type:</span> {jobData.type}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Description:</span> {jobData.description}
        </p>

        {/* Start Date and End Date */}
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <p><span className="font-semibold">Start Date:</span> {jobData.startDate}</p>
          <p><span className="font-semibold">End Date:</span> {jobData.endDate}</p>
        </div>

        {/* Apply Button */}
        <button className="w-full py-2 mt-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default JobCard;
