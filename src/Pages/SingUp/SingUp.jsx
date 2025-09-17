  import { Link, useNavigate } from 'react-router';
  import img from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
 
const SingUp = () => {
const {creatUser}= useContext(AuthContext);
const navigate =useNavigate();
    const handleSingup = e =>{
    e.preventDefault();
    const form = e.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    console.log(name,email,password);
    creatUser(email,password)
    .then(result=>{
        const user=result.user;
        navigate('/')
        console.log(user)
    })
    .catch(error=>console.error(error));

}
    return (
          <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row ">
    <div className=" mr-12 w-1/2">
      <img src={img} alt="" srcset="" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl text-center font-bold">Sing Up</h1>
     <form onSubmit={handleSingup}>
           <fieldset className="fieldset">
          <label className="label" >Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email"  name='email' className="input" placeholder="Email" />
          <label className="label" >Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          
          <input className='btn  btn-neutral mt-4' type="submit" value= "Sing Up" />
        </fieldset>
     </form>
      <p className='text-center'>
        Have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link>
      </p>
      </div>
     
    </div>
  </div>
</div>
    );
};

export default SingUp;