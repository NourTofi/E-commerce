import InputField from "../../components/form/inputField";
import { useForm } from "react-hook-form";
import Loading from "../../components/loading";
import UseRegister from "../../hooks/auth/useRegister";

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

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const { loading, onSubmit } = UseRegister(setError);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      {loading && <Loading />}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Register
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <InputField
            id="name"
            label="Name"
            type="text"
            placeholder="Enter Your Name"
            register={register}
            validation={validationRules.name}
            error={errors.name}
          />
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
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 px-4 rounded-md shadow-md hover:bg-green-600 focus:ring-2 focus:ring-green-400 transition duration-300 mt-4"
          >
            Submit
          </button>
        </form>
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
      </div>
    </div>
  );
};

export default Register;
