import { useState, useContext } from 'react';
import { 
    signInWithGooglePopup, 
    createUserDocFromAuth,
    signInUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import { UserContext } from '../../contexts/user-context/user-context.component';

const defaultFormFields = {
    email: '',
    password: ''
}
 
const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    // google sign up
    const logGoogleUserIn = async () => {
        const response = await signInWithGooglePopup();
        const user = await createUserDocFromAuth(response.user);
        setCurrentUser(user);
    }

    // reseting form fields after submitting
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    // email sign up
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInUserWithEmailAndPassword(email, password);
            
            setCurrentUser(response);

            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('User with this email does not exist.');
                case 'auth/wrong-password':
                    alert('Email and Password do not match.');
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
            <h3>Sign In Page</h3>
            <form onSubmit={handleSubmit}>
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

                <button type='submit'>Sign Up</button>
                <button type='button' onClick={logGoogleUserIn}>Sign Up With Google</button>
            </form>
        </div>
    )
}

export default SignIn;