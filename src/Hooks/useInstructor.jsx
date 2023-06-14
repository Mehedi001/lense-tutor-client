import { useEffect, useState } from "react";


const useInstructor = email => {

    const [isInstructor, setIsInstructor] = useState(false);
    const [instructorLoading, setInstructorLoading] = useState(true);


    useEffect(() => {
        if (email) {
            fetch(`https://lense-tutor-server.vercel.app/users/instructor?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsInstructor(data.isInstructor)
                    setInstructorLoading(false)
                })
        }
    }, [email])

    return [
        isInstructor,
        instructorLoading
    ]

};

export default useInstructor;