import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'



const CheckOut = () => {

    const service = useLoaderData();
    const navigate = useNavigate();
    const { title, price, _id,img } = service;

    const {user}=useContext(AuthContext);
    
     
    const handleCheckout = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const checkout={
            name,
            email,
            date,
            img,
            service:title,
            service_id:_id,
            price
        }
        console.log(checkout);

        fetch('http://localhost:5000/checkout',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(checkout)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);

            if(data.insertedId){
              
                  Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Added successfully',
            confirmButtonText: 'OK'
        })
            
            }
           navigate('/') 
        })


    }


    return (
        <div>
            <h2 className="text-4xl text-center mb-3">Book service:{title}</h2>
            <form onSubmit={handleCheckout}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input" defaultValue={user?.name} placeholder="Name" />
                    </div>
                    <div>
                        <label className="label">Date</label>
                        <input type="date" name="date" className="input" placeholder="Date" />
                    </div>
                    <div>
                        <label className="label">Email</label>
                        <input type="email" className="input"defaultValue={user?.email} placeholder="Email" />
                    </div>
                    <div>
                        <label className="label">Due Amount</label>
                        <input type="text" className="input" defaultValue={'$'+price} placeholder="Due Amount" />
                    </div>
                </div>


                <input className="  btn btn-block bg-amber-600" type="submit" value="Order Confirm" />
            </form>


        </div>


    );
};

export default CheckOut;