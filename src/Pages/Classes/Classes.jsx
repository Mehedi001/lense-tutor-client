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
        
        
    );
};

export default Classes;