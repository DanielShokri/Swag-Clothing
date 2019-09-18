import React, { Component } from 'react';
import './signin.styles.scss';
import FormInput from '../FormInput/FormInput.cmp';
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {

    state = { email: '', password: '' }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.email);
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h1 className="title is-1">I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="email" handleChange={this.handleChange} value={this.state.email} required />
                    <FormInput name="password" type="password" label="password" handleChange={this.handleChange} value={this.state.password} required />

                    <button className="button is-dark is-medium" type="submit">SIGN IN</button>
                    <button className="button is-dark is-medium" style={{ marginLeft: 10 + 'px' }} onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
                </form>
            </div >
        )
    }

}

export default SignIn;