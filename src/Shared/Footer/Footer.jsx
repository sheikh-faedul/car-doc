import { Link } from "react-router";
import logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <footer className="  lg:flex justify-between   bg-gray-800 text-white p-10">
      <div>
        <img src={logo} alt="" srcset="" />
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>

    <div className="flex flex-col">
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
    </div>
       
       <div className=" flex flex-col">
         <h6 className="footer-title">Company</h6>
        <Link to='/about' className="link link-hover">About us</Link>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
       </div>
      
      <div className=" flex flex-col">
              <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
        
      
      
    
      
    </footer>
  );
};

export default Footer;