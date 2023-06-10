
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { Link } from "react-router-dom";


const PopularClasses = () => {
    
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
        <SwiperSlide>
            <div className=" w-96 bg-[#18110e]">
                <img className="w-full h-64  mx-auto" src="https://images.pexels.com/photos/3921852/pexels-photo-3921852.jpeg" alt="" />
                <div className="my-2 p-4 text-[#c58f63]">
                <h1 className=" text-xl">Course Name:  <span className="font-semibold text-2xl block"> Potrait Photography</span> </h1>
                <p className="font-light my-2">If anyone want to learn potrait photography professionally, <br /> Enroll this professional Class & Admit to this course</p>
                <p className="font-bold text-[#c0afa3]">Total 200+ <Link className="hover:cursor-pointer hover:underline hover:text-white">Enroll</Link> Course</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" w-96 bg-[#18110e]">
                <img className="w-full h-64  mx-auto" src="https://images.pexels.com/photos/17042036/pexels-photo-17042036/free-photo-of-young-woman-holding-a-film-roll-in-front-of-her-eyes.jpeg" alt="" />
                <div className="my-2 p-4 text-[#c58f63]">
                <h1 className=" text-xl">Course Name:  <span className="font-semibold text-2xl block"> Black & White Photography</span> </h1>
                <p className="font-light my-2">If anyone want to learn black & white photography professionally, <br /> Enroll this professional Class & Admit to this course</p>
                <p className="font-bold text-[#c0afa3]">Total 250+ <Link className="hover:cursor-pointer hover:underline hover:text-white">Enroll</Link> Course</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" w-96 bg-[#18110e]">
                <img className="w-full h-64  mx-auto" src="https://images.pexels.com/photos/2853432/pexels-photo-2853432.jpeg" alt="" />
                <div className="my-2 p-4 text-[#c58f63]">
                <h1 className=" text-xl">Course Name:  <span className="font-semibold text-2xl block"> Landscape Photography</span> </h1>
                <p className="font-light my-2">If anyone want to learn Landscape Photography professionally, <br /> Enroll this professional Class & Admit to this course</p>
                <p className="font-bold text-[#c0afa3]">Total 230+ <Link className="hover:cursor-pointer hover:underline hover:text-white">Enroll</Link> Course</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" w-96 bg-[#18110e]">
                <img className="w-full h-64  mx-auto" src="https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg" alt="" />
                <div className="my-2 p-4 text-[#c58f63]">
                <h1 className=" text-xl">Course Name:  <span className="font-semibold text-2xl block"> Street Photography</span> </h1>
                <p className="font-light my-2">If anyone want to learn Street Photography professionally, <br /> Enroll this professional Class & Admit to this course</p>
                <p className="font-bold text-[#c0afa3]">Total 150+ <Link className="hover:cursor-pointer hover:underline hover:text-white">Enroll</Link> Course</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" w-96 bg-[#18110e]">
                <img className="w-full h-64  mx-auto" src="https://images.pexels.com/photos/7610457/pexels-photo-7610457.jpeg" alt="" />
                <div className="my-2 p-4 text-[#c58f63]">
                <h1 className=" text-xl">Course Name:  <span className="font-semibold text-2xl block"> Edit Photo</span> </h1>
                <p className="font-light my-2">If anyone want to learn Edit your Photography professionally, <br /> Enroll this professional Class & Admit to this course</p>
                <p className="font-bold text-[#c0afa3]">Total 750+ <Link className="hover:cursor-pointer hover:underline hover:text-white">Enroll</Link> Course</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" w-96 bg-[#18110e]">
                <img className="w-full h-64  mx-auto" src="https://images.pexels.com/photos/12811291/pexels-photo-12811291.jpeg" alt="" />
                <div className="my-2 p-4 text-[#c58f63]">
                <h1 className=" text-xl">Course Name:  <span className="font-semibold text-2xl block"> Product Photography</span> </h1>
                <p className="font-light my-2">If anyone want to learn Product Photography professionally, <br /> Enroll this professional Class & Admit to this course</p>
                <p className="font-bold text-[#c0afa3]">Total 190+ <Link className="hover:cursor-pointer hover:underline hover:text-white">Enroll</Link> Course</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" w-96 bg-[#18110e]">
                <img className="w-full h-64  mx-auto" src="https://images.pexels.com/photos/9856375/pexels-photo-9856375.jpeg" alt="" />
                <div className="my-2 p-4 text-[#c58f63]">
                <h1 className=" text-xl">Course Name:  <span className="font-semibold text-2xl block"> Fashion Photography</span> </h1>
                <p className="font-light my-2">If anyone want to learn fashion Photography professionally, <br /> Enroll this professional Class & Admit to this course</p>
                <p className="font-bold text-[#c0afa3]">Total 270+ <Link className="hover:cursor-pointer hover:underline hover:text-white">Enroll</Link> Course</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" w-96 bg-[#18110e]">
                <img className="w-full h-64  mx-auto" src="https://images.pexels.com/photos/3584968/pexels-photo-3584968.jpeg" alt="" />
                <div className="my-2 p-4 text-[#c58f63]">
                <h1 className=" text-xl">Course Name:  <span className="font-semibold text-2xl block"> Mobile Photography</span> </h1>
                <p className="font-light my-2">If anyone want to learn Photography professionally with smartphone, <br /> Enroll this professional Class & Admit to this course</p>
                <p className="font-bold text-[#c0afa3]">Total 500+ <Link className="hover:cursor-pointer hover:underline hover:text-white">Enroll</Link> Course</p>
                </div>
            </div>
        </SwiperSlide>
        
        
        
        
      </Swiper>
        </div>
    );
};

export default PopularClasses;