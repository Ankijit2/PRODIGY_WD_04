// eslint-disable-next-line no-unused-vars
import React from 'react'
import { motion } from "framer-motion"
import profile from '../../assets/images/profile.svg'
import resume from '../../assets/resume/resume.pdf'

function Home() {
  return (

    <>

      <div className='flex md:justify-between  md:flex-row flex-col mt-12  md:mx-20 mx-5  text-tprimary mb-14 '>

        <motion.img src={profile} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} alt="" className='md:w-2/6 sm:w-4/6 w-5/6 self-center' />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='self-center basis-6/12'>
          <div className="flex justify-center flex-col  ">
            <div className="slogan md:text-3xl sm:text-2xl text-xl text-center md:mt-0 mt-5">Designing with Purpose, Coding with Precision</div>
            <div className='flex w-full justify-center'>
              <a href={resume} download><button className="buttons">Unveil CV</button></a> <a href="https://www.fiverr.com/s/8ByxAg" target="_blank" rel="noopener noreferrer"><button className="buttons">Hire Me</button></a>
            </div>
          </div>
        </motion.div>
      </div>
      
    </>
  )
}

export default Home