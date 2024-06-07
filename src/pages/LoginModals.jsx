import React from "react";

import Nav  from "../components/navbar/Nav";

import LoginModal from "../components/login-modal/LoginModal";

import Foot from "../components/footer/Foot";

const LoginModals = () => {
    return(
        <>
        <Nav/>

        <LoginModal/>

        <Foot/>
        </>
        
    );
}
export default LoginModals;