import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../redux/auth/selectors";
import { Navigate, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

type Props = {
    redirectTo: string,
    component: React.ReactNode
}

export const PrivateRoute: React.FC<Props> = ({component, redirectTo = "/"}): any => {
    const isLoggedIn = useSelector(selectAuthIsLoggedIn);
    const navigate = useNavigate();

    useEffect(() => {
        if(isLoggedIn) navigate(`${redirectTo}`, {replace: true});
    }, [isLoggedIn, redirectTo, navigate]);
    // return !isLoggedIn ? component : <Navigate to={redirectTo} replace={true}/>;
    return (
        component
        // Navigate()
    )
}

export const PublicRoute: React.FC<Props> = ({component, redirectTo = "/"}): any => {
    const isLoggedIn = useSelector(selectAuthIsLoggedIn);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoggedIn) navigate(`${redirectTo}`, {replace: true});
    }, [isLoggedIn, redirectTo, navigate]);
    return (
        component
    )
}