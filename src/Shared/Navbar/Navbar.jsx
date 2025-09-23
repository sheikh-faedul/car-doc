import { Link, useNavigate } from "react-router";
import logo from "../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
 

const Navbar = () => {

const navigate = useNavigate()

 const {user,logout}=useContext(AuthContext)
 const handleLogout=()=>{
  logout()
  .then(()=>{})
  .catch(error=>{console.error()});
  
 }
  const handleAppoinment =()=>{
    if(user?.email){
      navigate('/bookings')
    }
    else{
      navigate('/login')
    }
  }

  const navItems=<>
      <li><Link to='/' className="font-bold">Home</Link></li>
      <li><Link to='/about' className="font-bold">About</Link></li>
      {
        user?.email?
        <>
        <li><Link to='/bookings' className="font-bold">My Bookings</Link></li>
        <li><button onClick={handleLogout} className="font-bold">Log Out</button></li>
        </>
        :
         <li><Link to='/login' className="font-bold">LogIn</Link></li>
      }
  </>
    return (
       <div className="navbar bg-base-100 shadow-sm h-24">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-xl"><img src={logo} alt="" srcset="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
   <button onClick={handleAppoinment} className="btn btn-outline btn-secondary">Appoinment</button>
  </div>
</div>
    );
};

export default Navbar;