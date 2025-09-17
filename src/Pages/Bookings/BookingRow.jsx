
const BookingRow = ({ booking,handleDelete,handleConfirm }) => {
    const { _id, img, service, date, price,status } = booking;

  

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    X
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            {img && <img
                                src={img} />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold"> {service}</div>

                    </div>
                </div>
            </td>
            <td>
                {
                    date
                }

            </td>
            <td> ${price}</td>
            <th>
                { status === 'confirm'? <span className="font-bold text-primary">confirmed</span> :                    <button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;