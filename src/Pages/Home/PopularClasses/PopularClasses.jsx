
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const PopularClasses = () => {

    const [classes, setClasses] = useState([]);

    useEffect (() => {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])
    
    return (
        <div className="py-12 bg-gray-800 px-8">
            <h1 className="text-4xl font-light  my-4 text-[#c58f63]">Our Popular Classes:</h1>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}

        breakpoints={{
            // when window width is >= 640px
            320: {
          
              slidesPerView: 1,
              spaceBetween:10
            },
            640: {
          
              slidesPerView: 1,
              spaceBetween:20
            },
            // when window width is >= 768px
            768: {
            
              slidesPerView: 2,
              spaceBetween:20
            },
            1024: {
              
              slidesPerView: 4,
              spaceBetween:30
            },
          }}

        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        
        
        
   {
        classes.map (classs => 
            <SwiperSlide key={classs._id}>
            <div className=" w-96 bg-[#18110e]">
                <img className="w-full h-64  mx-auto" src={classs.photo} alt="" />
                <div className="my-2 p-4 text-[#c58f63]">
                <h1 className=" text-xl">Course Name:  <span className="font-semibold text-2xl block"> {classs.className}</span> </h1>
                <p className="font-light my-2">{classs.description}</p>
                <p className="font-bold text-[#c0afa3]">Available: &nbsp;{classs.availableSeats} &nbsp; Seats</p>
                </div>
            </div>
        </SwiperSlide>
            )
   }
        
      </Swiper>
        </div>
    );
};

export default PopularClasses;