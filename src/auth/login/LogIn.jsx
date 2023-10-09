import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password")

        signIn(email, password)
            .then((result) => {
                toast("LogIn successfully");

                navigate(location?.state ? location.state : '/')
            })
            .catch((err) => {
                toast("Invalid password")
            });
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                toast("LogIn successfully");

                navigate(location?.state ? location.state : '/')
            }).catch((err) => {
                toast(err);
            });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">LogIn now!</h1>
                    </div>
                    <ToastContainer />
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center">New Here? <Link to='/register' className="btn btn-link">Register</Link> </p>
                        <div onClick={handleGoogleSignIn} className="form-control my-6 px-5">
                            <button className="btn bg-base-300 text-black hover:bg-neutral hover:text-white rounded-r-l">Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;