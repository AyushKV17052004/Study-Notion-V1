import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute1 = () => {
  const token = useSelector((state) => state.auth.token);
  const accountType = useSelector((state) => state.account.accountType)
  if (!token && accountType === "Instructor") {
    return <Navigate to="/Login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute1;
