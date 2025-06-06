import React from 'react';

const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default Loader;
