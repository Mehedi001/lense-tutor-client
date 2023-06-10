import './Instructor.css'
import { BiLandscape } from 'react-icons/Bi';

const Instructor = () => {
    return (
        <div className='bg-gray-800 p-8'>
            <h1 className="text-4xl font-light  my-4 text-[#c58f63]">Our hard working Instructor:</h1>
            <div className="cards flex justify-center ">
    <div className="card red flex flex-row gap-6 ">
        <div className='w-1/2'>
        <img className='w-full h-full rounded-md' src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className='flex flex-col justify-end my-2'>
            <BiLandscape className='text-6xl font-light text-[#c58f63]'></BiLandscape>
            <h2 className='text-3xl font-semibold text-[#c58f63]'> Matin Pasabo </h2>
            <p className='text-xl font-thin my-2 text-gray-400'>Landscape Expert</p>
            <p className='text-sm font-mono'>Total 450+ Student</p>
        </div>
    </div>
    <div className="divider divider-vertical"></div> 
    <div className="card red flex flex-row gap-6 ">
        <div className='w-1/2'>
        <img className='w-full h-full rounded-md' src="https://c1.35photo.pro/photos_temp/sizes/768/3841030_500n.jpg" alt="" />
        </div>
        <div className='flex flex-col justify-end my-2'>
            <BiLandscape className='text-6xl font-light text-[#c58f63]'></BiLandscape>
            <h2 className='text-3xl font-semibold text-[#c58f63]'> Lusia Pakora </h2>
            <p className='text-xl font-thin my-2 text-gray-400'>Potrait Expert</p>
            <p className='text-sm font-mono'>Total 450+ Student</p>
        </div>
    </div>
    <div className="divider divider-vertical"></div> 
    <div className="card red flex flex-row gap-6 ">
        <div className='w-1/2'>
        <img className='w-full h-full rounded-md' src="https://images.squarespace-cdn.com/content/v1/5d959d560c5b607d9c8de019/1570595478597-GAK97IMZ4L6R8H0MAVTO/ashleightaylorseniorportraits-6.jpg" alt="" />
        </div>
        <div className='flex flex-col justify-end my-2'>
            <BiLandscape className='text-6xl font-light text-[#c58f63]'></BiLandscape>
            <h2 className='text-3xl font-semibold text-[#c58f63]'> Golika Sambu </h2>
            <p className='text-xl font-thin my-2 text-gray-400'>B&W Expert</p>
            <p className='text-sm font-mono'>Total 450+ Student</p>
        </div>
    </div>
    
</div>
        </div>
    );
};

export default Instructor;