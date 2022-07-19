import { useState } from 'react';
import { 
    signInWithGooglePopup, 
    createUserDocFromAuth,
    createAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    // google sign up
    const logGoogleUserIn = async () => {
        await signInWithGooglePopup();
    }

    // reseting form fields after submitting
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    // email sign up
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
        }

        try {
            const response = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(response.user, {displayName});
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    alert('Email already in use.');
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    return (
        <div>
            <h3>Sign Up Page</h3>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Display Name'
                    type='text' 
                    required 
                    placeholder='Name' 
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}
                />

                <FormInput 
                    label='Email'
                    type='email' 
                    required 
                    placeholder='Email Address'
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput 
                    label='Password'
                    type='password' 
                    required 
                    placeholder='Password'
                    onChange={handleChange}
                    name='password'
                    value={password}
                />

                <FormInput 
                    label='Confirm Password'
                    type='password' 
                    required 
                    placeholder='Confirm Password'
                    onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword}
                />

                <button type='submit'>Sign Up</button>
                <button type='button' onClick={logGoogleUserIn}>Sign Up With Google</button>
            </form>
        </div>
    )
}

export default SignUp;