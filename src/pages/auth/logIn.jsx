import InputField from "../../components/form/inputField";
import { useForm } from "react-hook-form";
import { apiRouts } from "../../constant/apiRoutes";
import axios from "../../lib/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookie from "cookie-universal";

const validationRules = {
  name: { required: "Name is required" },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "Invalid email address",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters long",
    },
  },
};

const LogIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const cookie = Cookie();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post(apiRouts.auth.auth.logIn, data);
      const token = response.data.token;
      cookie.set("e-commerce", token);
      console.log(token);
      navigate("/users");
    } catch (error) {
      if (error.response?.data?.error) {
        setErrorMessage("Wrong Email or Password.");
      } else {
        console.error("An unexpected error occurred:", error);
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      {loading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      )}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          LogIn
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <InputField
            id="email"
            label="Email"
            type="email"
            placeholder="Enter Your Email"
            register={register}
            validation={validationRules.email}
            error={errors.email}
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            placeholder="Enter Your Password"
            register={register}
            validation={validationRules.password}
            error={errors.password}
          />
          {errorMessage && (
            <p className="text-red-500 text-sm mt-4 mb-4">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 px-4 rounded-md shadow-md hover:bg-green-600 focus:ring-2 focus:ring-green-400 transition duration-300 mt-4"
          >
            Submit
          </button>
          <div className="mt-6">
            <button
              onClick={() =>
                (window.location.href = "http://127.0.0.1:8000/login-google")
              }
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-md shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 transition duration-300"
            >
              Login with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
