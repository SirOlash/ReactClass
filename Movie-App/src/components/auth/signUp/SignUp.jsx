import React from "react";

import CustomButton from "../../../reuseable/CustomButton";
import styles from "./signUp.module.css";

const SignUp = () => {
    return (
        <>
            <div className={styles.container}> 
                <div className={styles.card}>
                    <div>SignUp</div>
                    <div className={styles.formWrapper}>
                        <form action="">
                            {/* <h2>Create an Account</h2> */}
                            <label htmlFor="nin">NIN</label>
                            <input type="number" name="nin" id="nin" placeholder="Enter your NIN" minLength={11} maxLength={11} required/>

                            <label htmlFor="username">UserName</label>
                            <input type="text" name="username" id="username" placeholder="Enter something unique" required/>

                            <label htmlFor="email">Email Address</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email" required/>

                            <label htmlFor="role">Role</label>
                            <select name="role" id="role" required>
                                <option value="">Select your role</option>
                                <option value="admin">Admin</option>
                                <option value="buyer">Buyer</option>
                                <option value="seller">Seller</option>
                            </select>

                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Enter your password" required minLength={8} maxLength={12}/>

                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Re-enter your password" required minLength={8} maxLength={12}/>

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