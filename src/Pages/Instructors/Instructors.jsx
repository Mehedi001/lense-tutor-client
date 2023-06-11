import { useEffect, useState } from "react";
import './Instructors.css'
import { BiLandscape } from 'react-icons/Bi';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users?role=instructor')
            .then(res => res.json())
            .then(data => {
                
                setInstructors(data);
            })
    }, [])
    return (
        <div className='bg-gray-800 p-8'>
            <Helmet>
                <title>Lense Tutor | Instructors
                </title>
            </Helmet>
            <div className="my-12 mt-16 text-center tracking-wide">
            <h1 className="text-3xl font-semibold text-[#c58f63] underline">Lens Tutor Instructors</h1>
            <p className="font-mono text-gray-200">Introduce Lens Tutor All Instructor</p>
            </div>
            <div className="cardss flex flex-wrap justify-center ">

            {
                instructors.map (instructor => 
                <div key={instructor._id} className="cards red flex flex-row gap-6 ">
                <div className='w-full lg:w-1/2'>
                <img className='w-full h-full rounded-md' src={instructor.photo} alt="" />
                </div>
                <div className='flex flex-col justify-end my-2'>
                    <BiLandscape className='text-6xl font-light text-[#c58f63]'></BiLandscape>
                    <h2 className='text-3xl font-semibold text-[#c58f63]'> {instructor.name} </h2>
                    <p className='text-xl font-thin mt-2 text-gray-400'>Instructor</p>
                    <p className='text-sm font-thin mb-2 text-gray-300'>E-mail:&nbsp;{instructor.email}</p>
                    <p className='text-sm font-mono'>Total 450+ Student</p>
                </div>
            </div>)
            }




            </div>
            <Link className="text-white" to="/addclass">Add Class</Link>
        </div>
    );
};

export default Instructors;