import { useState } from "react";

export default function LoginPage() {
  // State variables for email, password, and email validation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setEmailValid] = useState(true);

  // Event handler for email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailValid(true); // Reset email validation status
  };

  // Event handler for password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Form submission handler
  const handleSubmit = (event) => {
    // no logic added at the moment
  };

  // Function to validate the email format onBlur
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(email));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center">Login</h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="text"
              id="email"
              className={`w-full p-2 border rounded-md ${
                !isEmailValid ? "border-red-500" : ""
              }`}
              value={email}
              onChange={handleEmailChange}
              onBlur={validateEmail}
            />
            {!isEmailValid && <p className="text-red-500">Invalid email</p>}
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded-md"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
