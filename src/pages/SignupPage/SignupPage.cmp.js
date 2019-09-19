import React from 'react';
import SignIn from '../../components/SignIn/SignIn.cmp'
import SignUp from '../../components/SignUp/SignUp.cmp'
import './signinandsignup.styles.scss'

const SignupPage = () => {

    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignupPage;