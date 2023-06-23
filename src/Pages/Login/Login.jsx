import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/Google.png'
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
    const [error,setError] = useState('')
    const { signIn, googleSignIn } = useContext(AuthContext)
    const [passType, setPassType] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
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
        signIn(email, password)
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Login successful',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                navigate(from, { replace: true })
            })
        form.reset()
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Login successful',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                navigate(from, { replace: true })
            })
    }
    const handlePassword = () => {
        setPassType(!passType)
    }
    return (
        <div className='md:h-[700px] flex items-center'>
            <div className="hero min-h-screen">
                <div className="hero-content w-full md:w-1/3">
                    <div className="card  w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl text-center font-bold">Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={passType ? "password" : "text"} placeholder="password" name='password' className="input input-bordered" required/>
                                    {error && <p className='text-error'>{error}</p>}
                                    <div className="form-control mt-4">
                                        <label className="cursor-pointer flex gap-2 items-center">
                                            <input type="checkbox" className="checkbox checkbox-warning" onClick={handlePassword} />
                                            <span className="label-text">show password</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-warning normal-case text-[18px] text-white" type='submit' value='Login'></input>
                                </div>
                            </form>
                            <div>
                                <p >New to KidZtoys? <Link className='text-warning' to={'/register'}>Register</Link></p>
                            </div>
                            <div className=''>
                                <p className='text-center'>or</p>
                                <hr />
                                <div onClick={handleGoogleSignIn} className='btn btn-ghost flex items-center justify-center gap-4 rounded-lg px-4 py-2 mt-3 border-t-base-200 shadow-md hover:bg-base-200 ease-linear duration-100'>
                                    <img src={logo} alt="" />
                                    <span>Continue with google</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;