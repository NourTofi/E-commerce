import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/website/homePage";
import LogIn from "./pages/auth/logIn";
import Register from "./pages/auth/register";
import Users from "./pages/dashBoard/users";
import GoogleCallBack from "./pages/auth/googleCallBack";
import Dashboard from "./pages/dashBoard/dashBoard";
import TopBar from "./components/dshboard/topBar";
import SidBar from "./components/dshboard/sidBar";
const routes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/logIn"
        element={<LogIn />}
      />
      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/auth/google/callback"
        element={<GoogleCallBack />}
      />
      <Route
        path="/dashboard"
        element={<Dashboard />}
      >
        <Route
          path="users"
          element={<Users />}
        />
      </Route>
    </Routes>
  );
};

export default routes;
