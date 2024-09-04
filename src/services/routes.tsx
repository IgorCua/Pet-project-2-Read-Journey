import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../redux/auth/selectors";
import { Navigate, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

type Props = {
    component: React.ReactNode,
    redirectTo?: string,
}

export const PrivateRoute: React.FC<Props> = ({component, redirectTo = "/register"}): any => {
    const isLoggedIn = useSelector(selectAuthIsLoggedIn);
    
    return isLoggedIn ? component : <Navigate to={redirectTo} replace={true}/>;
}

export const PublicRoute: React.FC<Props> = ({component, redirectTo = "/recommended"}): any => {
    const isLoggedIn = useSelector(selectAuthIsLoggedIn);

    return !isLoggedIn ? component : <Navigate to={redirectTo} replace={true}/>;
}