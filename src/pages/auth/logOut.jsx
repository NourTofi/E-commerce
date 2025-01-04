import React from "react";
import Cookie from "cookie-universal";
import axios from "../../lib/axios";
import { apiRouts } from "../../constant/apiRoutes";

const LogOut = () => {
  const cookie = Cookie();

  const logOut = async () => {
    const response = await axios.get(apiRouts.auth.auth.logOut, {
      headers: { Authorization: "Bearer " + cookie.get("e-commerce") },
    });
    return response;
  };
  
  return <button onClick={logOut}>LogOut</button>;
};

export default LogOut;
