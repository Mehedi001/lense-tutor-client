
import './AddClass.css'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Parallax } from 'react-parallax';


const AddClass = () => {


    const { user } = useContext(AuthContext);


    const handleAddClass = event => {
        event.preventDefault();
        const form = event.target;
        const className = form.className.value;
        const email = form.email.value;
        const status = form.status.value;
        const instructorName = form.instructorName.value;
        const price = form.price.value;
        const availableSeats = form.availableSeats.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const newClass = { className, status, photo, email, instructorName, price, availableSeats, description }


        fetch('http://localhost:5000/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newClass)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Thank you'
                    })
                    form.reset('');
                }
            })
    }

    return (

        <div>
            
            <Parallax className='rounded-xl'
                blur={{ min: -15, max: 15 }}
                bgImage={('https://i.ibb.co/Y27RvGJ/1.jpg')}
                bgImageAlt="the dog"
                strength={-400}
            >
                <div style={{background: " linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7))"}} className=' flex flex-col justify-center items-center py-24 lg:py-32'>



                    <div className="my-4 text-center">
                        <h1 className="text-3xl font-semibold text-[#c58f63] underline">Add New Courses</h1>
                        <p className="font-thin text-gray-200">Add your course class details Below:</p>
                    </div>
                    <div className="section_form">
                        <form onSubmit={handleAddClass} id="consultation-form" className="feed-form">
                            <input className='bg-gray-600/30 text-gray-300 focus:bg-white/5' required placeholder="Class Name" name='className' type="text" />
                            <input className='bg-gray-600/30 text-gray-300 focus:bg-white/5' required placeholder="Course Photo" name='photo' type="text" />
                            <input className='bg-gray-600/30 text-gray-300 focus:bg-white/5' name="instructorName" value={user?.displayName} required placeholder="Instructor Name" type='text' />
                            <input className='bg-gray-600/30 text-gray-300 focus:bg-white/5' value={user?.email} required placeholder="email" name='email' type="email" />
                            <div className='flex gap-4 justify-center'>
                            <input className='bg-gray-600/30 text-gray-300 focus:bg-white/5 w-1/2' required placeholder="Available Seats" name='availableSeats' type="number" />
                            <input className='bg-gray-600/30 text-gray-300 focus:bg-white/5 w-1/2' required placeholder="Price" name='price' type="number" />
                            </div>
                            <textarea cols={20} rows={8} className='bg-gray-600/30 text-gray-300 focus:bg-white/5' required placeholder="Short Description" name='description' type="text" />
                            <input className='bg-gray-600/30 text-gray-300 focus:bg-white/5 hidden' value="pending" required placeholder="status" name='status' type="text" />

                            <button className="button_submit">Add Class</button>
                        </form>
                    </div>

                </div>

            </Parallax>
        </div>

    );
};

export default AddClass;