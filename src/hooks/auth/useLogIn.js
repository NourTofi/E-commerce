import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../lib/axios.jsx";
import Cookie from "cookie-universal";
import { apiRouts } from "../../constant/apiRoutes";

const useLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const cookie = Cookie();

  const login = async (data) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post(apiRouts.auth.auth.logIn, data);
      const token = response.data.token;

      cookie.set("e-commerce", token);

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

  return {
    login,
    loading,
    errorMessage,
  };
};

export default useLogin;
