import { useQuery } from "@tanstack/react-query";
import { Parallax } from "react-parallax";
import Swal from "sweetalert2";



const ManageUsers = () => {


    // transtek query 
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user');
            const data = await res.json();
            return data;
        }
    })


    const handleDelete = (id) => {

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


                fetch(`http://localhost:5000/user/${id}`, {
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

    const handleUpdateUser = (id, role) => {

        
        if (role==='Admin') {
            const updateUser={role:'Instructor'}
            return updateRole(updateUser, id);
        }
        else if(role==='Instructor'){
            const updateUser={role:'Admin'}
            return updateRole(updateUser, id);
        }

        
        
    }

    const updateRole = (updateUser, id) => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {

                


                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Role Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Thank you'
                    })
                    refetch();
                }
            })
    }

    return (
        <div>

            
                <div  className='lg:px-8 '>

                    <div>
                        <h1 className="text-3xl font-semibold text-[#c58f63] underline">Total Users: {users.length} </h1>
                        <p className="font-thin text-gray-200">Manage all users</p>
                    </div>


                    <div className="bg-white/80 rounded-xl  my-4">
                        <div className="overflow-x-auto">
                            <table className="table table-compact w-full ">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>User Name</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, i) =>
                                            <tr key={user._id}>
                                                <th>{i + 1}</th>
                                                <td>{user.name}</td>
                                                <td>{user.role}</td>
                                                <td>{user.role != 'Student' && <button onClick={() => handleUpdateUser(user._id, user.role)} className="btn   bg-green-600 border-0 hover:bg-green-700 text-white">{user?.role==='Instructor' ? 'Make Admin' : 'Make Instructor'}</button>}</td>
                                                <td><button onClick={() => handleDelete(user._id)} className="btn border-0  bg-red-600 hover:bg-red-700 text-white">Delete User</button></td>

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
                </div>

        </div>

            
        </div >

    );
};

export default ManageUsers;