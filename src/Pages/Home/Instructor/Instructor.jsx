import { useEffect, useState } from 'react';
import './Instructor.css'
import { BiLandscape } from 'react-icons/Bi';


const Instructor = () => {
    const [instructors, setInstructors] = useState([]);
   
    

    useEffect(() => {
        
        fetch('http://localhost:5000/users?role=instructor')
            
            .then(res => res.json())
            .then(data => {
                const newData = data.slice(0, 6);
                setInstructors(newData);
                
            })
    }, [])

   

    return (
        <div className='bg-gray-800 p-8'>
            <h1 className="text-4xl font-light  my-4 text-[#c58f63]">Our hard working Instructor:</h1>
            <div className="cards flex flex-wrap justify-center ">

            {
                instructors.map (instructor => 
                <div key={instructor._id} className="card red flex flex-row gap-6 ">
                <div className='w-full lg:w-1/2'>
                <img className='w-full h-full rounded-md' src={instructor.photo} alt="" />
                </div>
                <div className='flex flex-col justify-end my-2'>
                    <BiLandscape className='text-6xl font-light text-[#c58f63]'></BiLandscape>
                    <h2 className='text-3xl font-semibold text-[#c58f63]'> {instructor.name} </h2>
                    <p className='text-xl font-thin my-2 text-gray-400'>Instructor</p>
                    <p className='text-sm font-mono'>Total 450+ Student</p>
                </div>
            </div>)
            }




            </div>
        </div>
    );
};

export default Instructor;