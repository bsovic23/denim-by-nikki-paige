import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [login, { error }] = useMutation(LOGIN);

    // Form Submit - Login

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
            });

            const token = mutationResponse.data.login.token;
            Auth.login(token);
        }

        catch (e) {
            console.log(e);
        }
    };

    // Handle React Form 

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return(
        <div>
            <Link to='/signup'>Go to Signup</Link>

            <h2>LOGIN</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                <label htmlFor='email'>Email:</label>
                <input
                    placeholder='email'
                    id='email'
                    name='email'
                    type='email'
                    onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor='password'>Password:</label>
                <input
                    placeholder='password'
                    id='password'
                    name='password'
                    type='password'
                    onChange={handleChange}
                />
                </div>
                {error ? (
                    <div>
                        <p>The credentials you provided are incorrect</p>
                    </div>
                ) : null}
                <div>
                <button type="onSubmit">
                    LOGIN
                </button>
                </div>
            </form>
        </div>
    )
};

export default Login;