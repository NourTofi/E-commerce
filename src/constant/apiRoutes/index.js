import { registerRoutes } from "./registerRoutes";
import { usersRoutes } from "./usersRoutes";

export const apiRouts = {
  auth: registerRoutes,
  users: usersRoutes,
};
