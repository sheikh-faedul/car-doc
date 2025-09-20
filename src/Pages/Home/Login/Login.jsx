 import { Link,   useLocation,   useNavigate } from 'react-router';
import img from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
  const {singIn}=useContext(AuthContext);
  const locatioin = useLocation();
  const navigate = useNavigate();
const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    console.log(name,email,password);
    singIn(email,password)
    .then(result=>{
        const user=result.user;
        
        console.log(user)
        navigate(locatioin?.state ? locatioin.state : '/')
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
        <h1 className="text-4xl text-center font-bold">Login</h1>
     <form onSubmit={handleLogin}>
           <fieldset className="fieldset">
          <label className="label" >Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label" >Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          
          <input className='btn  btn-neutral mt-4' type="submit" value="Login" />
        </fieldset>
     </form>
      <p className='text-center'>
        New in car-doc <Link className='text-orange-600 font-bold' to='/singup'>Sing Up</Link>
      </p>
      </div>
     
    </div>
  </div>
</div>
    );
};

export default Login;