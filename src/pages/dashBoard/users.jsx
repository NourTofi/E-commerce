import axios from "../../lib/axios";
import React from "react";
import { useQuery } from "react-query";
import { apiRouts } from "../../constant/apiRoutes";
import Cookie from "cookie-universal";
import LogOut from "../auth/logOut";

const Users = () => {
  const cookie = Cookie();

  const fetchUsers = async () => {
    const response = await axios.get(apiRouts.users.users.show, {
      headers: { Authorization: "Bearer " + cookie.get("e-commerce") },
    });
    console.log(response);
    return response;
  };
  const { data, isloading, error } = useQuery(["users"], fetchUsers);

  return (
    <div>
      <h1>Users</h1>
      <LogOut />
    </div>
  );
};

export default Users;
