/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const MyClass = () => {
    const { user } = useContext(AuthContext);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch(`https://lense-tutor-server.vercel.app/usermail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {

                setClasses(data);
            })
    }, [user?.email])
    return (
        <Parallax className='rounded-xl'
            blur={{ min: -15, max: 15 }}
            bgImage={('https://images.pexels.com/photos/4993239/pexels-photo-4993239.jpeg')}
            bgImageAlt="the dog"
            strength={-400}
        >
            <div style={{ background: " linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7))" }} className='lg:px-8 py-4 lg:py-8'>

                <div className="my-4">
                    <h1 className="text-3xl font-semibold text-[#c58f63] underline">Total Course: {classes.length} </h1>
                    <p className="font-thin text-gray-200">Check your activity</p>
                </div>
                

                {
                    classes.length > 0 ? <div className="bg-gray-200/80 rounded-xl  my-4">
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
                                                <td>{i + 1}</td>
                                                <td>{classs.feedback}</td>
                                                <td className={classs?.status === 'approved' ? 'text-green-600' : classs?.status === 'pending' ? 'text-yellow-600' : 'text-red-600'}>{classs.status}</td>
                                                <td><Link to={`/dashboard/updateClass/${classs._id}`} className="btn btn-sm">update</Link></td>
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
                    </div> : <div className="  p-10 h-screen">
                        <div className=" flex flex-col justify-center items-center gap-4">
                            <h1 className="text-3xl text-white">You Don't Added Any Courses</h1>
                            <Link className="btn border-0 text-white bg-red-700 hover:bg-red-900" to='/addclass'>Add Class</Link>
                        </div>
                    </div>
                }

            </div>

        </Parallax>
    );
};

export default MyClass;