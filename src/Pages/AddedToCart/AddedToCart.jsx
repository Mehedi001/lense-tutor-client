import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import { Parallax } from "react-parallax";
import Swal from "sweetalert2";




const AddedToCart = () => {
    const { user } = useContext(AuthContext);
    const [cartList, setcartList] = useState([]);



    
    useEffect(() => {
        fetch(`http://localhost:5000/order?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                
                setcartList(data);
            })
    }, [user?.email])

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


                fetch(`http://localhost:5000/order/${_id}`, {
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
                            const remaining = cartList.filter(cart => cart._id !== _id);
                            setcartList(remaining);
                        }
                    }
                    )

            }
        })
    }

    return (
        <Parallax className='rounded-xl'
                blur={{ min: -15, max: 15 }}
                bgImage={('https://images.pexels.com/photos/4993239/pexels-photo-4993239.jpeg')}
                bgImageAlt="the dog"
                strength={-400}
            >
                <div style={{background: " linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7))"}} className='lg:px-8 py-4 lg:py-8'>

                    <div className="my-4">
                        <h1 className="text-3xl font-semibold text-[#c58f63] underline">Total Course: {cartList.length} </h1>
                        <p className="font-thin text-gray-200">Check your activity</p>
                    </div>
                    

                    <div className="bg-gray-200/80 rounded-xl  my-4">
                    <div className="overflow-x-auto">
                <table className="table table-compact w-full ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Course Name</th>
                            <th>Total Enroll</th>
                            <th>Feedback</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartList.map((classs, i) =>
                                <tr key={classs._id}>
                                    <th>{i + 1}</th>
                                    <td>{classs.courseName}</td>
                                    <td>{i+1}</td>
                                    <td>{"Please Improve Quality"}</td>
                                    <td className={classs?.status==='approved'? 'text-green-600' : classs?.status==='pending'?'text-yellow-600': 'text-red-600'}>{classs.status}</td>
                                     <td><button onClick={() => handleDelete(cartList._id)} className="btn btn-sm btn-error text-white">Delete</button></td>
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
                        </tr>
                    </tfoot>
                </table>
            </div>
                    </div>

                </div>

            </Parallax>
    );
};

export default AddedToCart;