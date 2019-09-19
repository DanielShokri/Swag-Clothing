import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput.cmp';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './signup.styles.scss'

class SignUp extends Component {

    state = { displayName: '', email: '', password: '', confirmPassword: '' }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) return alert('Passwords don\'t match!');

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            console.log(user)
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '', email: '', password: '', confirmPassword: ''
            })
        } catch (error) {
            console.log('Error', error)
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' onChange={this.handleChange} value={displayName} name="displayName" label="Display Name" required />
                    <FormInput type='email' onChange={this.handleChange} value={email} name="email" label="Email" required />
                    <FormInput type='password' onChange={this.handleChange} value={password} name="password" label="Password" required />
                    <FormInput type='password' onChange={this.handleChange} value={confirmPassword} name="confirmPassword" label="Confirm Password" required />

                    <button className="button is-dark is-medium" type="submit">SIGN UP</button>
                </form>
            </div>
        )
    }
}

export default SignUp;