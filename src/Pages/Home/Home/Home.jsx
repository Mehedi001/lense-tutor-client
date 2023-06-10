import Banner from "../Banner/Banner";
import Instructor from "../Instructor/Instructor";
import PopularClasses from "../PopularClasses/PopularClasses";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <PopularClasses></PopularClasses> 
           <Instructor></Instructor>
        </div>
    );
};

export default Home;