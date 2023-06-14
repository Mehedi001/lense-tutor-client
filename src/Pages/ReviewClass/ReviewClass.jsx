import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ReviewClass = () => {



    // transtek query 
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allClass');
            const data = await res.json();
            return data;
        }
    })

    const approved = (id) => {
        const updatedStatus = { status: 'approved' }
        return updateStatus(updatedStatus, id)
    }
    const deny = (id) => {
        const updatedStatus = { status: 'denied' }
        return updateStatus(updatedStatus, id)
    }

    const updateStatus = (updatedStatus, id) => {
        fetch(`http://localhost:5000/classStatus/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStatus)
        })
            .then(res => res.json())
            .then(data => {


                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Status Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Thank you'
                    })
                    refetch();
                }
            })
    }


    const feedback = async () => {

        const { value: text } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Feedback',
            inputPlaceholder: 'Type your feedback here...',
            inputAttributes: {
              'aria-label': 'Type your message here'
            },
            showCancelButton: true
          })
          
          if (text) {
            Swal.fire(text)
          }
    }


    return (

        <div>

            <div className='lg:px-8 '>

                <div>
                    <h1 className="text-3xl font-semibold text-[#c58f63] underline">Total Pending Classes: {classes.length} </h1>
                    <p className="font-thin text-gray-200">Manage classes</p>
                </div>


                <div className="bg-white/80 rounded-xl  my-4">
                    <div className="overflow-x-auto">
                        <table className="table table-compact w-full ">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Class Image</th>
                                    <th>Class Title</th>
                                    <th>Instructor Name</th>
                                    <th>Instructor Email</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Seats</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    classes.map((user, i) =>
                                        <tr key={user._id}>
                                            <th>{i + 1}</th>
                                            <td><img className="w-20 h-16 rounded-md border border-2 border-red-700" src={user.photo} alt="" /></td>
                                            <td>{user.className}</td>
                                            <td>{user.instructorName}</td>
                                            <td>{user.email}</td>
                                            <td>${user.price}</td>
                                            <td>{user.status}</td>
                                            <td>{user.availableSeats}</td>

                                            <td>{user.status === 'pending' ? <button onClick={() => approved(user._id)} className="btn border-0 btn-sm  bg-green-600 hover:bg-green-800 text-white"> Approved</button>
                                              : <button disabled className="btn border-0 btn-sm  bg-green-600 hover:bg-green-800 text-white"> Approved</button>}</td>
                                            <td>{user.status === 'pending' ? <button onClick={() => deny(user._id)} className="btn border-0  bg-red-600 hover:bg-red-800 text-white btn-sm"> Deny</button> : <button disabled className="btn border-0  bg-red-600 hover:bg-red-800 text-white btn-sm"> Deny</button>}</td>
                                            <td><button onClick={() => feedback(user._id)} className="btn btn-sm border-0  bg-blue-500 hover:bg-blue-800 text-white"> Send Feedback</button></td>

                                        </tr>
                                    )
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>

                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default ReviewClass;