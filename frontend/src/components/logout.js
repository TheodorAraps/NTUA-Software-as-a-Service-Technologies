import { GoogleLogout } from 'react-google-login';
import React from 'react';
import { userID, checkLogin, setUserID } from './checklogin';
import { Navigate } from "react-router-dom";
import Userfront from "@userfront/core";
import { useNavigate } from "react-router-dom";

const clientId = "904816085137-rtpqsfpv201ik04nb6c81vmhterotdqj.apps.googleusercontent.com"

function Logout() {
    const onSuccess = () => {
        setUserID("EMPTY");
        navigate("/login");
    }

    let navigate = useNavigate();

    function getsPressed() {
            navigate("/login")
    }

    return (
        <div id="SignOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Sign out"
                onLogoutSuccess={onSuccess}
        />
    </div>
    )
}

export default Logout;