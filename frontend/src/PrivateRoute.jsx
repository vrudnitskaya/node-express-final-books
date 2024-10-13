import { Navigate, Outlet } from "react-router-dom";

import React from "react";
import { useAuth } from "./AuthProvider";

const PrivateRoute = ({element}) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? element : <Navigate to="/login" />;
};

export default PrivateRoute;