/* eslint-disable react/no-unknown-property */

import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../AuthProvider/AuthProvider';



const Registration = () => {

    const {register, auth} = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);


    }
    const handleConfirmPassword = (event) => {
        const newPassword = event.target.value;
        setConfirmPassword(newPassword);


    }

    const handleCheckPassword = () => {
        if (password === confirmPassword) {
            setError('')
            setSuccess('Successfully matched')
        }

        else {
            
            setError("Password Can't match")
        }


    }

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const name = (firstName +' '+ lastName);
        const email = form.email.value;
        const role = form.role.value;
        const password = form.confirmPassword.value;
        const photo = form.photo.value;
        register(email, password)
        .then (result => {
            const user = result.user;
            setError('')
            setSuccess(`${user.email} Successfully Registered`)
            updateProfile(auth.currentUser, {displayName:name, photoURL:photo} )
            .then (() => {
                
                form.reset()
            })
            .catch((error)=>{
                setError(error?.message)
            })
        })
        .catch (error => {
            setError(error?.message)
        })
    }

    return (
        <div style={{ background: " linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://i.ibb.co/q0nhbNs/login-background2.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className=" p-2 lg:p-20 bg-gray-800 h-screen">


            <Helmet>
                <title>Lense Tutor | Registration
                </title>
            </Helmet>

            <img className='w-32 mx-auto pt-20 my-4' src="logo.png" alt="" />
            <h1 className=" text-3xl lg:text-6xl text-center text-[tomato]/50 font-semibold">Register Now</h1>
            <form onSubmit={handleRegister} className="w-full max-w-lg mx-0 lg:my-10 lg:mx-auto">
                <div className="flex flex-wrap lg:-mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-orange-100 text-xs font-bold mb-2" >
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-600 text-gray-300 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="firstName" placeholder="First Name" required />

                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-orange-100 text-xs font-bold mb-2">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-600 text-gray-300 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white " type="text" name="lastName" placeholder="Last Name" required />

                    </div>
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-orange-100 text-xs font-bold mb-2">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-600 text-gray-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" name="email" placeholder="E-mail" required />
                    </div>
                </div>


                <div className="flex flex-wrap lg:-mx-3 mb-6">
                    <label className="block mx-3 uppercase tracking-wide text-orange-100 text-xs font-bold mb-2">
                        Select Your Role
                    </label>
                    <div className="w-full relative px-3">
                        <select name="role" className="block appearance-none w-full bg-gray-600 border border-gray-200 text-orange-100 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:text-gray-100 focus:border-gray-500 " id="grid-state">

                            <option disabled></option>
                            <option>Student</option>
                            <option>Instructor</option>

                        </select>
                        <div className="pointer-events-none absolute -inset-y-2 right-4 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                        <p className="text-orange-100 text-xs italic">Select who are you, student or instructor</p>
                    </div>
                </div>

                <div className="flex flex-wrap lg:-mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-orange-100 text-xs font-bold mb-2">
                            Password
                        </label>
                        <input onChange={handlePasswordChange} className="appearance-none block w-full bg-gray-600 text-gray-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="password" name="password" placeholder="Password" required />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-orange-100 text-xs font-bold mb-2">
                            Confirm Password
                        </label>
                        <input onChange={handleConfirmPassword} onBlur={handleCheckPassword} className="appearance-none block w-full bg-gray-600 text-gray-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="password" name="confirmPassword" placeholder="Confirm Password" required />
                    </div>
                </div>
                <div className="flex flex-wrap lg:-mx-3 mb-6">

                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-orange-100 text-xs font-bold mb-2">
                            Photo URL
                        </label>
                        <input className="appearance-none block w-full bg-gray-600 text-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="photo" placeholder="Photo URL" />

                    </div>
                </div>
                <p className="text-orange-100 text-sm  my-4">Already Have Account <Link className='underline text-blue-500' to="/login">Login Here</Link> </p>
                <p className="text-green-600">{success}</p>
                        <p className="text-red-600">{error}</p>
                <input className="bg-[tomato]/50 btn w-full border-0 text-white rounded-md px-2 py-1" type="submit" value="Register" />
            </form>

        </div>
    );
};

export default Registration;