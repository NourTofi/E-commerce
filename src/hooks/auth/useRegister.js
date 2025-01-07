import { apiRouts } from "../../constant/apiRoutes";
import axios from "../../lib/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookie from "cookie-universal";

const UseRegister = (setError) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const cookie = Cookie();
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(apiRouts.auth.auth.register, data);
      const token = response.data.token;

      cookie.set("e-commerce", token);

      navigate("/users");
    } catch (error) {
      if (error.response?.data?.message) {
        setError("email", {
          type: "server",
          message: error.response.data.message,
        });
      } else {
        console.error("An unexpected error occurred:", error);
      }
    } finally {
      setLoading(false);
    }
  };
  return { loading, onSubmit };
};

export default UseRegister;
