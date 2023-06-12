import { useEffect, useState } from "react";
import { BiDollarCircle } from "react-icons/Bi";
import { FaBook, FaClock } from "react-icons/Fa";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";


const MyClass = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                
                setClasses(data);
            })
    }, [])
    return (
        <Parallax className='rounded-xl'
                blur={{ min: -15, max: 15 }}
                bgImage={('https://images.pexels.com/photos/4993239/pexels-photo-4993239.jpeg')}
                bgImageAlt="the dog"
                strength={-400}
            >
                <div style={{background: " linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7))"}} className='lg:px-8 py-4 lg:py-8'>



                    <div className="my-4">
                        <h1 className="text-3xl font-semibold text-[#c58f63] underline">Total Order: {classes.length} </h1>
                        <p className="font-thin text-gray-200">Check your course activity</p>
                    </div>
                    <div className="mt-32 flex flex-col lg:flex-row gap-6">
                        <h1 className="font-semibold p-4 bg-red-700/40 inline-block rounded-lg text-white text-2xl"><FaClock className="inline-block"/> Remaining Seats: 32  </h1>
                        <h1 className="font-semibold p-4 bg-red-700/40 inline-block rounded-lg text-white text-2xl"><BiDollarCircle className="inline-block"/> Total Earning: $2500  </h1>
                        <h1 className="font-semibold p-4 bg-red-700/40 inline-block rounded-lg text-white text-2xl"><FaBook className="inline-block"/> Student: 561  </h1>
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
                            classes.map((classs, i) =>
                                <tr key={classs._id}>
                                    <th>{i + 1}</th>
                                    <td>{classs.className}</td>
                                    <td>{i+1}</td>
                                    <td>{"Please Improve Quality"}</td>
                                    <td>{classs.status}</td>
                                    <td><Link to={`/classes/${classs._id}`} className="btn btn-sm">update</Link></td>
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

export default MyClass;