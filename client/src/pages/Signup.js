import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName,
            },
        });

        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return(
        <div>
            <Link to='/login'>Go to Login</Link>

            <h2>Signup Form</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor='firstName'>First Name:</label>
                    <input
                        placeholder='First Name'
                        name='firstName'
                        type='firstName'
                        id='firstName'
                        onChange={handleChange}
                    />
                    <input
                        placeholder='Last Name'
                        name='lastName'
                        type='lastName'
                        id='lastName'
                        onChange={handleChange}
                    />
                    <input
                        placeholder='Email'
                        name='email'
                        type='email'
                        id='email'
                        onChange={handleChange}
                    />
                    <input
                        placeholder='Password'
                        name='password'
                        type='password'
                        id='pwd'
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
};

export default Signup;