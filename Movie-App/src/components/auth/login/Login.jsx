import React from "react";
import CustomButton from "../../../reuseable/CustomButton/CustomButton";

const Login = () => {
    return (
        <>
            <div className={style.container}> 
                <div>Login</div>
                <CustomButton text= "login" />
            </div>
        </>
    );
}
export default Login;