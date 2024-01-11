// pages/maintenance.js

import React from 'react';
import Head from 'next/head';

const Maintenance = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Maintenance Mode</title>
      </Head>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Under Maintenance</h1>
        <p className="text-gray-600">We are currently undergoing maintenance. Please check back later.</p>
      </div>
    </div>
  );
};

export default Maintenance;
