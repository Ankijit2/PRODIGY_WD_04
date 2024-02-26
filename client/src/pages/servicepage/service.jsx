// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect} from 'react'

import Servicetab from './servicetab';


// images
import website from '../../assets/images/icons/website.svg'
import webapp from '../../assets/images/icons/webapp.svg'
import api from '../../assets/images/icons/api.svg'
import uiux from "../../assets/images/icons/uiux.svg"
import maintain from '../../assets/images/icons/maintain.svg'
import database from '../../assets/images/icons/database.svg'


function Service() {
  
    const services = 
    [
            {
                "index": 1,
                "icon":`${website}`,
                "title": "Website Development",
                "description": "Craft visually appealing and responsive websites that align with your brand's identity, ensuring a seamless user experience."
            },
            {
                "index": 2,
                "icon":`${webapp}`,
                "title": "Web Application Development",
                "description": "Build tailored web solutions that address unique project needs, offering customized features and functionality for a seamless user experience."
            },
            {
                "index": 3,
                "icon":`${uiux}`,
                "title": "UI/UX Design",
                "description": "Create intuitive and visually engaging user interfaces that prioritize user-centric design, delivering delightful and efficient experiences."
            },
            {
                "index": 4,
                "icon":`${maintain}`,
                "title": "Website Maintenance",
                "description": "Keep your websites up to date, running smoothly, and secure with regular updates, bug fixes, and enhancements."
            },
            {
                "index": 5,
                "icon":`${api}`,
                "title": "API Integration",
                "description": "Enhance web functionality by seamlessly integrating third-party APIs, expanding capabilities and data sources for your web applications."
            },
            {
                "index": 6,
                icon: `${database}`,
                "title": "Database Management",
                "description": "Optimize data storage and retrieval for web applications, ensuring efficient and organized data handling."
            }
        ]
    
    return (
        <>
            <div className='my-24 mx-8'>
               
                    <div className="cc__items grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                       {services.map((service)=>{
                           return (
                               <Servicetab service={service} key={service.index}/>
                           )
                       })}
                   

                    </div>
                </div>
            
          
        </>
    )
}

export default Service