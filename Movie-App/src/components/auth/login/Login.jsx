import React from "react";
import { useState } from "react";
// import CustomButton from "../../../reuseable/CustomButton/CustomButton";
import styles from "./Login.module.css";

import { useLoginMutation } from "../../../service/userAuthApi";
import { Link } from "react-router";


const Login = () => {

    const userDetails = {
        usernameOrEmail: "",
        password: "",
    }

    const [loginData, setLoginData] = useState(userDetails);

    const [login, {isLoading, isError}] = useLoginMutation();

    const res = useLoginMutation();
    console.log(res)

    const submitHandler = async(e) =>{
        e.preventDefault();
        try {
            const response = await login(loginData).unwrap();
            
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({ ...prev, [name]: value.trim() }));
    }

    return (
        <>
            <div className={styles.container}> 
                <div className={styles.card}>
                    <div>Login</div>
                    <div className={styles.formWrapper}>
                        <form action="" onSubmit={submitHandler}>
                            <input type="text" name="usernameOrEmail" placeholder="Enter Your UserName or Email" required onChange={handleChange}/>
                            <select name="" id="" required onChange={handleChange}>
                                <option value="">Select Your Role</option>
                                <option value="admin">Admin</option>
                                <option value="buyer">Buyer</option>
                                <option value="seller">Seller</option>
                            </select>
                            <input type="password" name="password" placeholder="Enter Your Password" onChange={handleChange}/>
                           

                            {/* <Link to={SignUp} >SignUp</Link> */}
                            <Link className={styles.navigateLink} to="/signUp">Do you have an account? SignUp</Link>
                            {/* <CustomButton text= "login" /> */}
                            <button className= {styles.button} type="submit">Submit</button>
                        </form>
                    </div>
                 
                </div>
              
            </div>
        </>
    );
}
export default Login;