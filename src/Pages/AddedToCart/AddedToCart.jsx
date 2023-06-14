/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";




const AddedToCart = () => {
    const { user } = useContext(AuthContext);




    const { data: cartList = [], refetch } = useQuery({
        queryKey: ['cartList'],
        queryFn: async () => {
            const res = await fetch(`https://lense-tutor-server.vercel.app/order?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })


    const handleDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://lense-tutor-server.vercel.app/order/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch();
                        }
                    }
                    )

            }
        })
    }

    const paymentHandle = (_id) => {
        Swal.fire({
            title: 'Payment',
            text: "Are You Sure to Make Payment",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Make Payment'
        }).then((result) => {
            if (result.isConfirmed) {


                const updatedOrder= {status:'Paid'}

                fetch(`https://lense-tutor-server.vercel.app/order/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedOrder)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Payment Successful',
                                icon: 'success',
                                confirmButtonText: 'Okay'
                            })
                            refetch();
                        }
                    })



            }
        })
    }

    return (

        <div className='lg:px-8'>

            <div>
                <h1 className="text-3xl font-semibold text-[#c58f63] underline">Total Course: {cartList.length} </h1>
                <p className="font-thin text-gray-200">Check your activity</p>
            </div>


            {
                cartList.length > 0 ? <div className="bg-gray-200/90 rounded-xl  my-4">
                    <div className="overflow-x-auto">
                        <table className="table table-compact w-full ">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Course Name</th>
                                    <th>Payment Status</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartList.map((classs, i) =>
                                        <tr key={classs._id}>
                                            <th>{i + 1}</th>
                                            <td>{classs.courseName}</td>
                                            <td className={classs?.status === 'Paid' ? 'text-green-600' : 'text-red-600'}>{classs.status}</td>
                                            <td><button onClick={() => handleDelete(classs._id)} className="btn border-0  btn-error hover:bg-red-600 text-white">Delete</button></td>
                                            <td>{
                                                classs?.status==='Paid' ? <button disabled className="btn  bg-success border-0 hover:bg-green-600 text-white">Confirm</button> : <button onClick={() => paymentHandle(classs?._id)} className="btn  bg-success border-0 hover:bg-green-600 text-white">Confirm</button>
                                                }</td>
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

                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div> : <div className="  p-10 h-screen">
                    <div className=" flex flex-col justify-center items-center gap-4">
                        <h1 className="text-3xl text-white">You Don't Added Any Courses</h1>
                        <Link className="btn border-0 text-white bg-red-700 hover:bg-red-900" to='/classes'>Browse Course</Link>
                    </div>
                </div>
            }

        </div>


    );
};

export default AddedToCart;