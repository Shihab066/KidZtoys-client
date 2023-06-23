import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext);
    const email = user?.email;



    const handleLogOut = () => {
        logOut()
    }
    const manu = <>
        <li><Link className='active:bg-orange-600' to={'/'}>Home</Link></li>
        <li><Link className='active:bg-orange-600' to={'/blog'}>Blog</Link></li>
        <li><Link className='active:bg-orange-600' to={'/allToys'}>All Toys</Link></li>
        {user && <>
            <li><Link className='active:bg-orange-600' to={`/myToys/${email.split('.').join('-')}`}>My Toys</Link></li>
            <li><Link className='active:bg-orange-600' to={'/addToys'}>Add a Toy</Link></li>
        </>}
    </>
    return (
        <div className='bg-[#F9D949] sticky top-0 z-50'>
            <div className="navbar  md:container mx-auto md:mt-7 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {manu}
                        </ul>
                    </div>
                    <p className=" font-bold text-xl"><span className='text-orange-600'>K</span>id<span className='text-[#9E6F21] text-[22px]'>Z</span>toys</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {manu}
                    </ul>
                </div>
                {
                    loading ? <div className='navbar-end'><button className="btn bg-orange-600 border-0 loading">loading</button></div> :
                        <>
                            {
                                user ? <div className="navbar-end space-x-3">
                                    {user.photoURL && <img src={user.photoURL} title={user.displayName ? user.displayName : ''} className='w-10 rounded-full' alt="profile-photo" />}
                                    <button onClick={handleLogOut} className="btn border-0 bg-orange-600 hover:bg-orange-500">Log out</button>

                                </div>
                                    :
                                    <div className="navbar-end space-x-3">
                                        <Link to={'/login'} className="btn border-0 bg-orange-600 hover:bg-orange-500">Login</Link>
                                        <Link to={'/register'} className="btn border-0 bg-[#9E6F21] hover:bg-[#9e6e21dd] hidden lg:flex">SignUp</Link>
                                    </div>

                            }
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;