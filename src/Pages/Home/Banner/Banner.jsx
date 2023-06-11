import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";




const Banner = () => {
    return (
        <div className="bg-black">
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide className="relative">
                    <img className="opacity-50 " src="https://i.ibb.co/pR4qcM2/1.jpg" alt="" />
                    <div className="absolute top-1/3 lg:top-[50%] text-center left-2 lg:left-[2%]">
                        <h1 className=" text-3xl lg:text-6xl font-bold text-white ">Best Photography <span className="text-[#c58f63]">Tutor !!!</span> </h1>
                        <p className="font-mono text-white hidden lg:block my-8 w-1/2 mx-auto text-center">Develop a well-structured curriculum that covers the fundamentals of photography as well as advanced techniques and specialized genres.
                            Offer a variety of courses suitable for beginners, intermediate, and advanced learners.
                            Include both theoretical and practical components in your courses to ensure a balanced learning experience.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="opacity-50 " src="https://i.ibb.co/bzCH931/2.jpg" alt="" />
                    <div className="absolute top-1/3 lg:top-[50%] text-center left-2 lg:left-[2%]">
                        <h1 className=" text-3xl lg:text-6xl font-bold text-white ">Qualified and <br /> Experienced <span className="text-[#c58f63]"> Instructors !!!</span> </h1>
                        <p className="font-mono text-white hidden lg:block my-8 w-1/2 mx-auto text-center">Hire instructors who have expertise in different areas of photography and possess teaching skills.
                            Ensure that your instructors have real-world experience in photography and can effectively communicate their knowledge to students.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <img className="opacity-50 " src="https://i.ibb.co/4W6J4TQ/3.jpg" alt="" />
                    <div className="absolute top-1/3 lg:top-[50%] text-center left-2 lg:left-[2%]">
                        <h1 className=" text-3xl lg:text-6xl font-bold text-white ">Hands-on Practical <span className="text-[#c58f63]">Sessions !!!</span> </h1>
                        <p className="font-mono text-white hidden lg:block my-8 w-1/2 mx-auto text-center">Provide ample opportunities for students to practice what they learn in theory.
                            Offer studio sessions, outdoor shoots, and access to different types of photography equipment to enhance practical skills.
                            Organize field trips and workshops to expose students to various photography scenarios and challenges.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="opacity-50 " src="https://i.ibb.co/y0Jx1Ff/4.jpg" alt="" />
                    <div className="absolute top-1/3 lg:top-[50%] text-center left-2 lg:left-[2%]">
                        <h1 className=" text-3xl lg:text-6xl font-bold text-white ">Guest Lectures and <span className="text-[#c58f63]">Workshops !!!</span> </h1>
                        <p className="font-mono text-white hidden lg:block my-8 w-1/2 mx-auto text-center">Invite renowned photographers, industry professionals, and experts to conduct guest lectures and workshops.
                            Expose students to different photography styles and perspectives, and provide insights into professional practices.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="opacity-50 " src="https://i.ibb.co/HC6zrp0/5.jpg" alt="" />
                    <div className="absolute top-1/3 lg:top-[50%] text-center left-2 lg:left-[2%]">
                        <h1 className=" text-3xl lg:text-6xl font-bold text-white ">Online Learning <span className="text-[#c58f63]">Resources !!!</span> </h1>
                        <p className="font-mono text-white hidden lg:block my-8 w-1/2 mx-auto text-center">Develop an online platform or learning management system where students can access course materials, assignments, and additional resources.
                            Provide video tutorials, articles, and recommended reading materials to supplement classroom learning.
                            Offer online forums or discussion boards for students to interact, share their work, and seek guidance from instructors.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="opacity-50 " src="https://i.ibb.co/FwrB35s/6.jpg" alt="" />
                    <div className="absolute top-1/3 lg:top-[50%] text-center left-2 lg:left-[2%]">
                        <h1 className=" text-3xl lg:text-6xl font-bold text-white ">Exhibitions and Networking <span className="text-[#c58f63]">Opportunities !!!</span> </h1>
                        <p className="font-mono text-white hidden lg:block my-8 w-1/2 mx-auto text-center">Organize student exhibitions and showcases to provide a platform for students to display their work and gain exposure.
                            Facilitate networking events and industry collaborations to connect students with professionals and potential clients.</p>
                    </div>
                </SwiperSlide>



            </Swiper>


        </div>
    );
};

export default Banner;