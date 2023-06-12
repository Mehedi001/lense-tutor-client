import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Parallax } from "react-parallax";



const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                
                setClasses(data);
            })
    }, [])
    return (
        
        <Parallax
        blur={{ min: -15, max: 15 }}
        // https://images.pexels.com/photos/4993239/pexels-photo-4993239.jpeg
        bgImage={('https://images.pexels.com/photos/4992947/pexels-photo-4992947.jpeg')}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div style={{background: " linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7))"}} className='bg-gray-800 p-8'>
            <Helmet>
                <title>Lense Tutor | Classes
                </title>
            </Helmet>
            <div className="my-12 mt-16 text-center tracking-wide">
            <h1 className="text-2xl lg:text-3xl font-semibold text-[#c58f63] underline">Lens Tutor Classes</h1>
            <p className="font-mono text-gray-200">Explore Lense Tutor Class</p>
            </div>
            <div className="cardss flex flex-wrap justify-center ">

            {
                classes.map (classs => 
                    <div key={classs._id} className="relative lg:w-96 bg-[#18110e]">
                    <img className="w-full h-64  mx-auto" src={classs.photo} alt="" />
                    <div className="my-2 p-4 text-[#c58f63]">
                    <h1 className=" text-xl">Course Name:  <span className="font-semibold text-2xl block"> {classs.className}</span> </h1>
                    <p className="font-light my-4">{classs.description}</p>
                    <p className="font-bold  text-[#c0afa3] absolute bottom-2 ">Available: &nbsp;{classs.availableSeats} &nbsp; Seats</p>
                    </div>
                </div>
            )
            }




            </div>
        </div>
       
    </Parallax>
    );
};

export default Classes;