import React, { Component } from 'react';
import './signin.styles.scss';
import FormInput from '../FormInput/FormInput.cmp';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {

    state = { email: '', password: '' }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error.message)
        }

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
                    <div className="buttons">
                        <button className="button is-dark is-medium" type="submit">SIGN IN</button>
                        <button className="button is-info is-medium" onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
                    </div>
                </form>
            </div >
        )
    }

}

export default SignIn;