import React from "react";
import ErrorMessage from "./errorMessage"
const InputField = ({
  id,
  label,
  type,
  placeholder,
  register,
  validation,
  error,
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block text-gray-700 font-medium mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full border-b-2 bg-transparent outline-none py-2 px-1 rounded-md
          ${
            error
              ? "border-orange-500 focus:border-orange-500 shadow-inner"
              : "border-gray-300 focus:border-green-500 shadow-inner"
          } transition duration-300 placeholder-gray-500`}
        {...register(id, validation)}
      />
      <ErrorMessage error={error} />
    </div>
  );
};

export default InputField;
