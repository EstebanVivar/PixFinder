import React from 'react';

const ErrorComponent = ({ error }) => {
  return (
    <p className="my-3 p-4 text-center text-white alet alert-danger">{error}</p>
  );
}

export default ErrorComponent;