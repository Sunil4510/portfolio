import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (
    <div>
    <Navbar/>
    <motion.div
    whileHover={{ rotate:[5,-5,1],scale:1.2 }}
    animate={{ rotate:[10,-10,1] }}
    transition={{duration:1}} 
    className="rounded-xl left-36 sm:left-1 sm:h-60 sm:w-60 sm:mt-0 mb-20 w-80 h-80 shadow-black shadow-xl relative cursor-pointer bg-gradient-to-tr from-red-400 to-slate-300 hover:bg-gradient-to-tr hover:from-red-500 hover:to-slate-400 hover:animate-pulse"
>
    <Image src="/sunil1.jpg" alt="profile" width={355} height={355} className="mix-blend-overlay rounded-xl absolute inset-0 object-cover"/>
</motion.div>
    </div>
  )
}

export default Contact