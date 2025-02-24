import React from 'react';
import { useState } from 'react';

// Job Model
const jobData = {
  title: 'Frontend Developer',
  type: 'Full-time',
  description: 'We are looking for a skilled React developer to join our team.',
  qualifications: [
    'Bachelor’s degree in Computer Science or related field',
    'Proven experience with React.js',
    'Strong understanding of JavaScript and ES6+',
    'Good communication and teamwork skills'
  ],
  startDate: '2025-03-01',
  endDate: '2025-05-01',
  image: 'data:image/jpeg;base64,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',
};

function JobCard() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      alert(`CV uploaded: ${selectedFile.name}`);
    } else {
      alert('Please upload your CV.');
    }
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-md rounded-xl" style={{ width: '500px', height: 'auto' }}>
      <div >
        {/* Job Image */}
        <img
          src={jobData.image}
          alt="Job"
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
        />

        <div style={{ padding: '15px' }}>
          {/* Job Title */}
          <h2 style={{ fontSize: '1.5em', marginBottom: '10px', color: '#fff' }}>
            {jobData.title}
          </h2>

          {/* Job Type */}
          <p style={{ color: '#f0f0f0', marginBottom: '5px' }}>
            <strong>Type:</strong> {jobData.type}
          </p>

          {/* Description */}
          <p style={{ color: '#f0f0f0', marginBottom: '10px' }}>
            <strong>Description:</strong> {jobData.description}
          </p>

          {/* Start Date and End Date */}
          <div style={{ color: '#f0f0f0', marginBottom: '10px' }}>
            <p><strong>Start Date:</strong> {jobData.startDate}</p>
            <p><strong>End Date:</strong> {jobData.endDate}</p>
          </div>

          {/* Qualifications */}
          <h3 style={{ fontSize: '1.2em', marginBottom: '10px' }}>Qualifications:</h3>
          <ul style={{ paddingLeft: '20px', marginBottom: '15px', color: '#f0f0f0' }}>
            {jobData.qualifications.map((item, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>{item}</li>
            ))}
          </ul>

          {/* CV Upload Form */}
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.png,.jpg"
              style={{ display: 'block', marginBottom: '10px', color: '#000', backgroundColor: '#fff', borderRadius: '5px', width: '465px', height: '45px' }}
              placeholder='Select Your Cv'
            />
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#004085',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default JobCard;
