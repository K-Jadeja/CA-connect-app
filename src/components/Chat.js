// src/components/Chat.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Chat = () => {
  const { userType } = useParams();

  const messages = [
    { sender: 'CA John', text: 'Hello! How can I help you with your taxes today?' },
    { sender: 'You', text: 'I need help filing my income tax return.' },
    { sender: 'CA John', text: 'Sure, let’s get started with some basic information.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-indigo-600 p-4 text-white font-bold text-xl">
        Chat for {userType.charAt(0).toUpperCase() + userType.slice(1)}
      </header>
      <div className="flex-grow p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`${
                  msg.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-900'
                } p-3 rounded-lg max-w-xs`}
              >
                <p className="font-medium">{msg.sender}</p>
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-4 border-t border-gray-200 flex items-center">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Type a message..."
        />
        <button className="ml-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
