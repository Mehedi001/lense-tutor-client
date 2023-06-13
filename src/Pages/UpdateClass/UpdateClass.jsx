import { Parallax } from "react-parallax";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export const UpdateClass = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/dashboard/myclass";


    const data = useLoaderData()
    
  


    const handleUpdateClass = event => {
        event.preventDefault()
        const form = event.target;

        const name = form.className.value;
        const price = form.price.value;
        const description = form.description.value;


        const updatedClass = { name, price, description }

        console.log (updatedClass)
    

        // send data to the server


        fetch(`http://localhost:5000/class/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedClass)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Thank you'
                    })
                    navigate(from, { replace: true });
                }
            })
        }

    return (
        <Parallax className='rounded-xl'
                blur={{ min: -15, max: 15 }}
                bgImage={('https://i.ibb.co/Y27RvGJ/1.jpg')}
                bgImageAlt="the dog"
                strength={-400}
            >
                <div style={{background: " linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7))"}} className=' flex flex-col justify-center items-center py-24 lg:py-32'>



                    <div className="my-4 text-center">
                        <h1 className="text-3xl font-semibold text-[#c58f63] underline">Update: &nbsp; {data.name}</h1>
                        <p className="font-thin text-gray-200">Add your course class details Below:</p>
                    </div>
                    <div className="section_form">
                        <form onSubmit={handleUpdateClass} id="consultation-form" className="feed-form">
                            <input defaultValue={data.className} className='bg-gray-600/30 text-gray-300 focus:bg-white/5' required placeholder="Class Name" name='className' type="text" />
                            <input defaultValue={data.price} className='bg-gray-600/30 text-gray-300 focus:bg-white/5' required placeholder="Price" name='price' type="number" />
                            <textarea defaultValue={data.description} cols={20} rows={8} className='bg-gray-600/30 text-gray-300 focus:bg-white/5' required placeholder="Short Description" name='description' type="text" />
                            <input className='bg-gray-600/30 text-gray-300 focus:bg-white/5 hidden' value="pending" required placeholder="status" name='status' type="text" />

                            <button className="button_submit">Update Class</button>
                        </form>
                    </div>

                </div>

            </Parallax>
    );
};

export default UpdateClass;