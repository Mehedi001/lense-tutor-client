import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Instructor from "../Instructor/Instructor";
import PopularClasses from "../PopularClasses/PopularClasses";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";



const Home = () => {
    const {themeChange}=useContext(AuthContext);

    return (
        <div className={themeChange ? "bg-red-950" : "bg-gray-800"}>
            <Helmet>
                <title>Lense Tutor | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <Instructor></Instructor>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;