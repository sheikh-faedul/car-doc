import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import { data } from "react-router";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
 const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBookings(data);
      });
  }, []);


    const handleDelete = id => {
        const procced = confirm('Are you sure to delete this');
        if (procced) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    if (data.deletedCount > 0) {
                        alert('deleted successfull')
                        const remaining = bookings.filter(booking=>booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }



    const handleConfirm = id =>{
      fetch(`http://localhost:5000/bookings/${id}`,{
        method:'PATCH',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({status:'confirm'})
       
      }
      )
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
          const remain = bookings.filter(booking=>booking._id !== id);
          const updated = bookings.find(booking => booking._id === id);
          updated.status ='confirm'; 
          const newBooking = [updated,...remain];
          setBookings(newBooking);
        }
      })
    }

    return (
        <div>
            <h1>bookings :{bookings.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Date</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
       {
        bookings.map(booking=><BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingRow>)
       }
    
    
    </tbody>
  
    
  </table>
</div>
        </div>
    );
};

export default Bookings;