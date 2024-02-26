// eslint-disable-next-line no-unused-vars
import React from 'react'

function Servicetab(service) {
 
    return (

        <div className="cc__service  p-8  rounded-md text-white">
         
               <img src={service.service.icon} alt=""  className='md:m-0 m-auto'/>
                <h1 className="text-2xl my-4 font-bold md:text-left text-center">{service.service.title}</h1>
                <div className="md:text-lg text-base md:text-left text-center">
                    <p>{service.service.description}</p>
                </div>

            
        </div>
    )
}

export default Servicetab