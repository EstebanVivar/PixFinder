import React from 'react';

const ErrorComponent = ({ error }) => {
  return (
    <p className="mt-3 p-4 text-center  alert alert-danger">{error}</p>
  );
}

export default ErrorComponent;