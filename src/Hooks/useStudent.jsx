import { useState } from "react";
import { useEffect } from "react";


const useStudent = email => {
    const [isStudent, setIsStudent] = useState(false);
    const [studentLoading, setInstructorLoading] = useState(true);


    useEffect(() => {
        if (email) {
            fetch(`https://lense-tutor-server.vercel.app/users/student?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsStudent(data.isStudent)
                    setInstructorLoading(false)
                })
        }
    }, [email])

    return [
        isStudent,
        studentLoading
    ]
};

export default useStudent;