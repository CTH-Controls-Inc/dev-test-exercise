import React from "react";

type InputProps = {
  id: string;
  label: string;
  type: string;
  error: boolean;
  errorMessage: string | null;
  register: {};
};

const FormInput = ({
  id,
  label,
  type,
  error,
  errorMessage,
  register,
}: InputProps) => {
  return (
    <div className="mt-6">
      <label
        htmlFor={id}
        className={`block text-xs sm:text-sm pb-2 font-semibold ${
          error ? "text-red-500 font-bold" : ""
        }`}
      >
        {error ? errorMessage : label}
      </label>
      <input
        type={type}
        id={id}
        {...register}
        placeholder={`Enter your ${label}`}
        className={`border-2 p-2 rounded-md w-full text-xs sm:text-sm focus:outline-none border-gray-500 focus:border-purple-500 focus:ring-purple-500 ${
          error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
        }`}
      />
    </div>
  );
};

export default FormInput;
