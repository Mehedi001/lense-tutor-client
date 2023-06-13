import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ReviewClass = () => {



    // transtek query 
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classesPending');
            const data = await res.json();
            return data;
        }
    })
    refetch()


    const handleUpdateStatus = (id, status) => {

        
        if (status==='pending') {
            const updateStatus={status:'approved'}
            return updateClass(updateStatus, id);
 
        
    }

    const updateClass = (updateStatus, id) => {
        fetch(`http://localhost:5000/classes/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
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

    }
    return (
        
            <div>
                
                <div className="text-center tracking-wide">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-[#c58f63] underline">Pending Class List: {classes.length}</h1>
                    <p className="font-mono text-gray-200">Approve to show website if click Deny it will not show</p>
                </div>
                <div className="cardss w-full my-8 lg:w-2/5 mx-auto flex flex-col ">

                    {
                        classes.map(classs =>
                            <div key={classs._id} className=" flex justify-between lg:h-36 bg-[#18110e]">
                                <img className="w-40" src={classs.photo} alt="" />
                                <div className="my-2 p-4 text-[#c58f63] flex flex-col justify-between">
                                    <h1 className=" text-xl">Course Name:  <span className="font-semibold text-2xl block"> {classs.className}</span> </h1>
                                    <div className="lg:flex my-8 gap-4 justify-between items-center">
                                        <p className="font-bold text-xs  text-[#c0afa3] ">Instructor Name: &nbsp;{classs.instructorName}</p>
                                        
                                        <div className="my-4 lg:my-0 flex gap-3">
                                        <button onClick={() => handleUpdateStatus(classes._id, classes.status)} className="btn-sm bg-[#32b438] hover:bg-[#27912d] hover:text-white text-black flex justify-center items-center rounded-md" >Approved</button>
                                        <Link to={`/classlist/${classs._id}`} className="btn-sm bg-[#dd3838] hover:bg-[#b32929] hover:text-white text-black flex justify-center items-center rounded-md">Deny</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                       
                    }




                </div>
            </div>

       
    );
};

export default ReviewClass;