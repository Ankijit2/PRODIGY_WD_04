// eslint-disable-next-line no-unused-vars
import React from 'react'
import {motion} from 'framer-motion'


function Footer() {
  return (
    <motion.footer className='md:h-[190px] h-40 bg-cover self-end' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>

      </motion.footer>

  )
}

export default Footer