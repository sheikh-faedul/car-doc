import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

 

const Services = () => {
     const [services,setServices] = useState([]);

     useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data=>setServices(data));
     },[])

    return (
        <div>
            <div className="text-center mt-2">
            <h1 className="text-orange-500 font-bold text-4xl">Our Services</h1>
            <p className="font-bold">The majority have suffered altaration in some form by injected houmour or randomise <br /> word which do not look even slightly beliveable </p>
        </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
         }
       </div>
        </div>
    );
};

export default Services;