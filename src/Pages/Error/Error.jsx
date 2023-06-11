/* eslint-disable react/no-unknown-property */

import { Helmet } from "react-helmet";
import './Error.css'

const Error = () => {

    
    return (
        <div className="bg-gray-800 h-screen">

            <Helmet>
                <title>Lense Tutor | Error</title>
            </Helmet>

            
            404
        </div>
    );
};

export default Error;