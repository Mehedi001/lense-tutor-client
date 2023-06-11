import { Helmet } from 'react-helmet';
import './AddClass.css'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AddClass = () => {


    const { user } = useContext(AuthContext);


    const handleAddClass = event => {
        event.preventDefault();
        const form = event.target;
        const className = form.className.value;
        const email = form.email.value;
        const instructorName = form.instructorName.value;
        const price = form.price.value;
        const availableSeats = form.availableSeats.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const newClass = { className, photo, email, instructorName, price, availableSeats, description }


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

        <div className='bg-gray-800 flex flex-col justify-center items-center py-36 lg:py-48'>

            <Helmet>
                <title>Lense Tutor | Add Class
                </title>
            </Helmet>

            <div className="my-12 mt-16 text-center">
                <h1 className="text-3xl font-semibold text-[#c58f63] underline">Add Class</h1>
                <p className="font-thin text-gray-200">Add your class details Below:</p>
            </div>
            <div className="section_form">
                <form onSubmit={handleAddClass} id="consultation-form" className="feed-form">
                    <input className='bg-gray-600 text-gray-300 focus:bg-white/10' required placeholder="Class Name" name='className' type="text" />
                    <input className='bg-gray-600 text-gray-300 focus:bg-white/10 hidden' value={user?.email} required placeholder="email" name='email' type="email" />
                    <input className='bg-gray-600 text-gray-300 focus:bg-white/10' required placeholder="Course Photo" name='photo' type="text" />
                    <input className='bg-gray-600 text-gray-300 focus:bg-white/10' name="instructorName" value={user?.displayName} required placeholder="Instructor Name" type='text' />
                    <input className='bg-gray-600 text-gray-300 focus:bg-white/10' required placeholder="Available Seats" name='availableSeats' type="number" />
                    <input className='bg-gray-600 text-gray-300 focus:bg-white/10' required placeholder="Price" name='price' type="number" />
                    <textarea cols={20} rows={8}  className='bg-gray-600 text-gray-300 focus:bg-white/10' required  placeholder="Short Description" name='description' type="text" />

                    <button className="button_submit">Add Class</button>
                </form>
            </div>
        </div>

    );
};

export default AddClass;