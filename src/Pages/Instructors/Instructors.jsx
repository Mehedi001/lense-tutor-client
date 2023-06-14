import { useEffect, useState } from "react";
import './Instructors.css'
import { BiLandscape } from 'react-icons/Bi';
import { Helmet } from "react-helmet";
import { Parallax } from "react-parallax";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ImSpinner4 } from "react-icons/im";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    const {loading, setLoading} = useContext(AuthContext);
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/users?role=instructor')
            .then(res => res.json())
            .then(data => {
                
                setInstructors(data);
                setLoading(false)
            })
    }, [])
    if(loading){
        return (<div className="h-screen bg-[#18110e]"><ImSpinner4 className='text-9xl h-screen text-red-600 mx-auto animate-spin '/></div>);
    }
    return (
        
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={('https://images.pexels.com/photos/4992650/pexels-photo-4992650.jpeg')}
        bgImageAlt="the dog"
        strength={-400}
    >
        <div style={{background: " linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7))"}} className='bg-gray-800 p-8'>
            <Helmet>
                <title>Lense Tutor | Instructors
                </title>
            </Helmet>
            <div className="my-12 mt-16 text-center tracking-wide">
            <h1 className="text-2xl lg:text-3xl font-semibold text-[#c58f63] underline">Lens Tutor Instructors</h1>
            <p className="font-mono text-gray-200">Introduce Lens Tutor All Instructor</p>
            </div>
            <div className="cardss flex flex-wrap justify-center mb-16 ">

            {
                instructors.map (instructor => 
                <div key={instructor._id} className="cards red flex flex-row gap-6 ">
                <div className='w-full lg:w-1/2'>
                <img className='w-full h-full rounded-md' src={instructor.photo} alt="" />
                </div>
                <div className='flex flex-col justify-end my-2 p-1 lg:p-0'>
                    <BiLandscape className='text-6xl font-light text-[#c58f63]'></BiLandscape>
                    <h2 className='text-2xl lg:text-3xl font-semibold text-[#c58f63]'> {instructor.name} </h2>
                    <p className='text-xl font-thin mt-2 text-gray-400'>Instructor</p>
                    <p className='text-sm font-thin mb-2 text-gray-300'>E-mail:&nbsp;{instructor.email}</p>
                    <p className='text-sm font-mono'>Total 450+ Student</p>
                </div>
            </div>)
            }




            </div>
            
        </div>
        
    </Parallax>
    );
};

export default Instructors;