/* eslint-disable react/no-unknown-property */

import { Helmet } from "react-helmet";
import './Error.css'
import { Link } from "react-router-dom";
import { FaHome} from "react-icons/Fa"

const Error = () => {

    
    return (
        <div className=" bg-[#c58f63] h-screen flex flex-col justify-center items-center">

            <Helmet>
                <title>Lense Tutor | Error</title>
            </Helmet>

            <div className="words word-1">
  
  <span>4</span>
  <span>0</span>
  <span>4</span>
  
</div>

<div className="words word-2">
<span>N</span>
  <span>O</span>
  <span>T</span>
</div>

<div className="words word-3">
<span>F</span>
  <span>O</span>
  <span>U</span>
  <span>N</span>
  <span>D</span>
</div>

<Link className="flex justify-center items-center my-8 px-4 py-2 bg-opacity-60 rounded-lg bg-orange-950 hover:bg-[#18110e] text-white hover:text-[#c58f63]"> <FaHome className="inline-block"/> &nbsp; Back to Home</Link>
        </div>
    );
};

export default Error;