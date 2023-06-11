import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Instructor from "../Instructor/Instructor";
import PopularClasses from "../PopularClasses/PopularClasses";


const Home = () => {
    return (
        <div>
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