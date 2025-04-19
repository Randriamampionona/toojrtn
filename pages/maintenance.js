// pages/maintenance.js

import React, { useEffect, useState } from 'react';
import Head from 'next/head';

const Maintenance = () => {
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const timer = setTimeout(() => {
      window.location.href = 'https://tooj-rtn.vercel.app/';
    }, 3000);

    return () => {
      clearInterval(countdown);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Redirecting...</title>
      </Head>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Redirecting to the new website</h1>
        <p className="text-gray-600">You’ll be redirected in {seconds} second{seconds !== 1 ? 's' : ''}...</p>
      </div>
    </div>
  );
};

export default Maintenance;
