import React, { useState } from 'react';
import { MdMail, MdArrowBack } from 'react-icons/md';

const EmailVerification: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState(false);

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = () => {
    setLoading(true);
    // Simulate an API call or async operation
    setTimeout(() => {
      console.log('Submitted Email:', email);
      setLoading(false);
      // Add your logic here for further processing
    }, 1000); // Simulating async operation with setTimeout
  };

  return (
    <div className="relative min-h-screen p-4 bg-white">
      <div className="absolute top-4 left-4">
        <span className="text-gray-600 text-2xl cursor-pointer">
          <MdArrowBack />
        </span>
      </div>
      <section className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center mb-24">
          <h1 className="text-3xl font-semibold text-gray-800 mb-3">Welcome Back</h1>
          <p className="text-gray-600 text-lg">Input your email address</p>
        </div>
        <div className="flex flex-row items-center gap-4 border-b border-gray-300 pb-3 mb-8 w-full max-w-md">
          <MdMail className="text-gray-600 text-2xl" />
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            className="flex-1 p-3 text-lg rounded-md focus:outline-none"
          />
        </div>
        <div className="w-full max-w-md mt-24">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full bg-[#68a502] p-3 rounded-full text-white text-lg hover:bg-[#5b8e02] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Loading...' : 'Verify Email'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default EmailVerification;
