import React, { useContext, useReducer, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [passType, setPassType] = useState(true);
    const navigate = useNavigate();
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length <= 0) {
            setError('Field Required')
            return
        }
        if (password.length < 6) {
            setError('Password must be minimum 6 character')
            return
        }

        createUser(email, password)
            .then(() => {
                updateUser(name, photo)
                Swal.fire({
                    title: 'Success!',
                    text: 'Registration successful',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
        form.reset();
    }
    const handlePassword = () => {
        setPassType(!passType)
    }
    return (
        <div className='md:h-[900px] flex items-center'>
            <div className="hero min-h-screen">
                <div className="hero-content w-full md:w-1/3">
                    <div className="card  w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl text-center font-bold">SignUp</h1>
                            <form onSubmit={handleSignUp}>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="photo URL" name='photo' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email <span className='text-error'>*</span></span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password <span className='text-error'>*</span></span>
                                    </label>
                                    <input type={passType ? "password" : "text"} placeholder="password" name='password' className="input input-bordered" required />
                                    {error && <p className='text-error'>{error}</p>}
                                    <div className="form-control mt-4">
                                        <label className="cursor-pointer flex gap-2 items-center">
                                            <input type="checkbox" className="checkbox checkbox-warning" onClick={handlePassword} />
                                            <span className="label-text">show password</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-warning normal-case text-[18px] text-white" type='submit' value='Sign Up'></input>
                                </div>
                            </form>
                            <p className='my-4 text-center'>Have an account? <Link to={'/login'} className='text-warning'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;