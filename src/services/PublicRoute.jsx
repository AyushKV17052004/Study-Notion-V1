import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  const accountType = useSelector((state) =>(state.account.accountType))
  if (token) {
    // user is logged in → block this route
    return <Navigate to={`${accountType === "Student"? '/Student/Home/Dashboard/MyProfile':'/Instructor/Home/Dashboard/MyProfile' }`} replace />;
  }

  // user is logged out → allow
  return children;
};

export default PublicRoute;
