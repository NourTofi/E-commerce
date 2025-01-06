import React from "react";
import { useQuery } from "react-query";
import { API_BASE_URL } from "../../constant/config";
import { apiRouts } from "../../constant/apiRoutes";
import axios from "../../lib/axios";
import { useLocation } from "react-router-dom";
import Cookie from "cookie-universal";

const GoogleCallBack = () => {
  const location = useLocation();
  const cookie = Cookie();

  const fetchGoogleCallback = async () => {
    const response = await axios.get(
      `${API_BASE_URL}/${apiRouts.auth.auth.googleRegister}${location.search}`
    );

    const token = response.data.access_token;
    cookie.set("e-commerce", token);

    console.log(response);
    return response.data;
  };

  // Use React Query's useQuery hook
  const { data, error, isLoading, isError } = useQuery(
    "googleCallback",
    fetchGoogleCallback
  );

  // Handle loading and error states
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error: {error.message}</h1>;

  // Render your data
  return (
    <div>
      <h1>Google Callback Response:</h1>
    </div>
  );
};

export default GoogleCallBack;
