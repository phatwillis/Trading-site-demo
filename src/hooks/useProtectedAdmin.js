import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const useProtectedAdmin = () => {
  const navigate = useNavigate();
  const isAdmin = useSelector((state) => state.auth.admin); // Access admin details from Redux state
  console.log("is admin????", isAdmin);
  useEffect(() => {
    if (!isAdmin) {
      navigate.push("/admin-login");
    }
  }, [isAdmin, navigate]); // Add dependencies to useEffect to prevent unnecessary redirects
  return isAdmin;
};

export default useProtectedAdmin;
