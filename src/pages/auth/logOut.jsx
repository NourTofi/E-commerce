import React from "react";
import Cookie from "cookie-universal";
import axios from "../../lib/axios";
import { apiRouts } from "../../constant/apiRoutes";

const LogOut = () => {
  const cookie = Cookie();
  const token = cookie.get("e-commerce");

  const handleLogOut = async () => {
    const response = await axios.get(apiRouts.auth.auth.logOut, {
      headers: { Authorization: "Bearer " + token },
    });
    return response;
  };

  return <button onClick={handleLogOut}>LogOut</button>;
};

export default LogOut;
