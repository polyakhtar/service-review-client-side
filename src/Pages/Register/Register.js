import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const Register = () => {
    const {createUser}=useContext(AuthContext);
const handleRegister=event=>{
event.preventDefault();
const form=event.target;
const name=form.name.value;
const photoUrl=form.photoUrl.value;
const email=form.email.value;
const password=form.password.value;
console.log(name,photoUrl,email,password);
createUser(email,password)
.then(result=>{
const user=result.user;
console.log(user);
form.reset();
})
.catch(error=>console.error(error))
}
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Name</span>
                </label>
                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input type="text" placeholder="photoUrl" name='photoUrl' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <span className='text-center mb-4'>Already have an account ? <b><Link to='/login'>Login</Link></b></span>
          </div>
        </div>
      </div>
    );
};

export default Register;