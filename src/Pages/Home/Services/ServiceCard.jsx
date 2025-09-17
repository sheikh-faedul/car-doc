import { Link } from "react-router";

 

const ServiceCard = ({service}) => {
const{_id,title,img,price}=service;

    return (
       <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src= {img}
       />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className="text-orange-700 font-bold"> price: ${price}</p>
    <div className="card-actions justify-end">
      <Link to={`/checkout/${_id}`}>
         <button className="btn btn-primary">Book Now</button>
      </Link>
     
    </div>
  </div>
</div>
    );
};

export default ServiceCard;