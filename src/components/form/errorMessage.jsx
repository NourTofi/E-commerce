import React from "react";

const ErrorMessage = ({ error }) => {
  return error?.message ? (
    <p className="text-orange-500 text-sm mt-1">{error.message}</p>
  ) : null;
};

export default ErrorMessage;
