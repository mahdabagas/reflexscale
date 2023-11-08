import useLocalStorage from "../../hooks/UseLocalStorage";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const [token] = useLocalStorage("token", "");

  if (token && token !== "undefined") return <Outlet />;

  return <Navigate to="/" />;
};

export default PrivateRoute;
