import { useState } from "react";
import React from "react";

import CustomButton from "../../../reuseable/CustomButton";
import styles from "./signUp.module.css";
import style from "../login/Login";

import { useSignUpMutation } from "../../../service/userAuthApi";
import Login from "../login/Login";
import { Link, useNavigate } from "react-router";


const SignUp = () => {

    const navigate = useNavigate();

    const userDetails = {
        nin: "",
        userName: "",
        email: "",
        role: "",
        password: "",
        confirmPassword: "",

    };

    const [userData, setUserData] = useState(userDetails);

    const [signUp, {isLoading, isError}] = useSignUpMutation();

    const res = useSignUpMutation();
    // console.log(res)

    const submitHandler = async(e) =>{
        e.preventDefault();
        try {
            const response = await signUp(userData).unwrap();
            console.log(response)
            if (response.id) {
                alert(response.message);
                navigate("/login");
                
            }
            // else{
            //     alert(data);
            // }
        } catch (error) {
            // alert(error);
            console.log(error)
        }
    }

    const handleInput = (e)=>{
        const {name, value} = e.target
        setUserData((prev) =>({...prev, [name]: value.trim()}))
    };
    

    return (
        <>
            <div className={styles.container}> 
                <div className={styles.card}>
                    <div>SignUp</div>
                    <div className={styles.formWrapper}>
                        <form action="" onSubmit={submitHandler}>
                            {/* <h2>Create an Account</h2> */}
                            <label htmlFor="nin">NIN</label>
                            <input type="number" name="nin" id="nin" placeholder="Enter your NIN" minLength={11} maxLength={11} required onChange={handleInput}/>

                            <label htmlFor="userName">UserName</label>
                            <input type="text" name="userName" id="userName" placeholder="Enter something unique" required onChange={handleInput}/>
                        

                            <label htmlFor="email">Email Address</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email" required onChange={handleInput}/>

                            <label htmlFor="role">Role</label>
                            <select name="role" id="role" required onChange={handleInput}>
                                <option value="">Select your role</option>
                                {/* <option value="admin">Admin</option> */}
                                <option value="BUYER">Buyer</option>
                                <option value="SELLER">Seller</option>
                            </select>

                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Enter your password" required minLength={8} maxLength={12} onChange={handleInput}/>

                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Re-enter your password" required minLength={8} maxLength={12} onChange={handleInput}/>


                            {/* <Link to = {Login} >Login</Link> */}
                            <Link className={style.navigateLink} to="/login" >Already have an account? Login</Link>
                            {/* <CustomButton text = "Submit"/> */}
                            <button className= {styles.button} type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SignUp;