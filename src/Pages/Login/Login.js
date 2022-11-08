import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {logIn,googleSignIn}=useContext(AuthContext);
const googleProvider=new GoogleAuthProvider();
const handleLogIn=event=>{
event.preventDefault();
const form=event.target;
const email=form.email.value;
const password=form.password.value;
console.log(email,password)
logIn(email,password)
.then(result=>{
    const user=result.user;
    console.log(user);
    form.reset();
})
.catch(error=>console.error(error))
}
const handleGoogleSignIn=()=>{
googleSignIn(googleProvider)
.then(result=>{
const user=result.user;
console.log(user)
})
.catch(error=>console.error(error))
}
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            <span className='text-center mb-4'> <b><Link to='/register'>Create an Account</Link></b></span>
          </form>
          <button onClick={handleGoogleSignIn} className="btn btn-primary mt-4 border-2 rounded-lg ">Sign In With Google</button>
        </div>
      </div>
      </div>
    );
};

export default Login;