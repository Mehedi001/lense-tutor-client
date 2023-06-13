import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Parallax } from "react-parallax";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ClassList = () => {
    const datapata = useLoaderData();
    const {user} = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const newOrder = {courseName:datapata.className, studentName:data.studentName, studentEmail:data.mail }
        fetch('http://localhost:5000/order', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newOrder)
                        })

                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        title: 'Success!',
                                        text: 'Order Request Successfully',
                                        icon: 'success',
                                        confirmButtonText: 'Thank you'
                                    })
                                    
                                }
                            })
    };

    



    


    return (

        <Parallax
        blur={{ min: -15, max: 15 }}

        bgImage={('https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg')}
        bgImageAlt="Add Cart"
        strength={-400}
    >
        <div style={{ background: " linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7))" }}  className=" flex flex-col gap-10 justify-center items-center p-4 lg:p-40">
            <h1 className="text-lg font-mono text-white text-center">Fill this field to add cart <br /> <span className="text-[#c58f63] lg:text-3xl">{datapata.className}</span> <br /> course.</h1>
            <form className="flex flex-col gap-6 w-full lg:w-1/5" onSubmit={handleSubmit(onSubmit)}>
                <input className=" p-4 rounded-md " value={user?.displayName} placeholder="Name"
                    {...register("studentName", { required: true })}
                    aria-invalid={errors.studentNameName ? "true" : "false"}
                />
                {errors.firstName?.type === 'required' && <p role="alert">Name is required</p>}

                <input className=" p-4 rounded-md" value={user?.email}  placeholder="E-mail"
                    {...register("mail", { required: "Email Address is required" })}
                    aria-invalid={errors.mail ? "true" : "false"}
                />
                {errors.mail && <p role="alert">{errors.mail?.message}</p>}

                <input className="block bg-[#c58f63] p-4 rounded-md hover:text-white cursor-pointer  hover:bg-[#8d6544]" type="submit" />
            </form>
            
        </div>

    </Parallax>
    );
};

export default ClassList;