// src/components/UserTypeSelection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserTypeSelection = () => {
  const navigate = useNavigate();
  const userTypes = [
    {
      type: 'Salaried',
      description: 'For individuals with a fixed monthly income. Get assistance with filing tax returns and claiming deductions.',
      image: '/path/to/salaried-image.jpg',
    },
    {
      type: 'Businessmen',
      description: 'Tailored services for business owners. Handle your business taxes, GST, and financial planning.',
      image: '/path/to/businessmen-image.jpg',
    },
    {
      type: 'Freelancers',
      description: 'Freelancers and gig workers, we provide comprehensive tax solutions for your variable income.',
      image: '/path/to/freelancers-image.jpg',
    },
    {
      type: 'Investors',
      description: 'Maximize your investment returns with expert tax advice and portfolio management strategies.',
      image: '/path/to/investors-image.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 p-8">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Select Your User Type</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {userTypes.map((userType) => (
          <div
            key={userType.type}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer"
            onClick={() => navigate(`/chat/${userType.type.toLowerCase()}`)}
          >
            <img src={userType.image} alt={userType.type} className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{userType.type}</h3>
              <p className="text-gray-600 mt-2">{userType.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTypeSelection;
