import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
const Contacts = () => {
  return (
  <div className="flex flex-col">  
    <div className="flex m-14 sm:flex-col md:flex-col lg:flex-row">
        <div className="left">
            <motion.div
            whileHover={{ rotate:[5,-5,1],scale:1.2 }}
            animate={{ rotate:[10,-10,1] }}
            transition={{duration:1}} 
            className="rounded-xl left-36 sm:left-1 sm:h-60 sm:w-60 sm:mt-0 mb-20 w-80 h-80 shadow-black shadow-xl relative cursor-pointer bg-gradient-to-tr from-red-400 to-slate-300 hover:bg-gradient-to-tr hover:from-red-500 hover:to-slate-400 hover:animate-pulse"
            >
                <Image src="/sunil1.jpg" alt="profile" width={355} height={355} className="mix-blend-overlay rounded-xl absolute inset-0 object-cover"/>
             </motion.div>
        </div>

        <div className="right flex flex-col space-y-10">
            <h1 className="text-5xl">Contact me</h1>
            <p className="text-xl mt-10 font-Acme opacity-70 sm:h-40 w-full sm:text-lg">I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Reactjs, Nodejs, and MERN Development.</p>
            <div className="social_media p-4 space-x-5 sm:flex sm:p-0 sm:pt-20">
                <a href="https://github.com/Sunil4510" className="github " target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ fontSize: 40 }}/></a>
                <a href="https://www.linkedin.com/in/sunil-kurapati-91198a202/" className="icon-button linkedin" target="_blank" rel="noopener noreferrer"><LinkedInIcon sx={{ fontSize: 40,color:"rgb(0, 153, 255)" }}/></a>
                <a href="mailto:skurapatim3100@gmail.com" className="icon-button google" target="_blank" rel="noopener noreferrer"><EmailIcon sx={{ fontSize: 40 ,color:"red"}}/></a>
                <a href="https://twitter.com/SunilKurapati5" className="icon-button twitter" target="_blank" rel="noopener noreferrer"><TwitterIcon sx={{ fontSize: 40,color:"cyan" }}/></a>
            </div>
            <a className="font-bold text-xl ml-10 sm:ml-0 text-current" href="./Sunil_Kurapati.pdf" target="_blank"><button className="font-Hahmlet font-bold sm:mt-6 border-2 p-2 border-orange-400 shadow-xl shadow-black rounded-lg hover:bg-orange-400 hover:text-black transition ease-in-out delay-200 duration-150 hover:scale-125">See My Resume</button></a>
        </div>    
    </div>
    <div className="flex items-center justify-evenly sm:flex-col">
        <div className="md:w-80 md:80 lg:w-auto lg:h-auto">
          <Image src="/contact.svg" alt="profile" width={555} height={555} className="md:w-80 md:h-80 lg:w-auto lg:h-auto"/>
        </div>
        <div className="flex flex-col">
          <div className="contact__info">
            <h1>Address</h1>
            <p>Solpaur,India</p>
          </div>  
          <div className="contact__info mt-10">
            <h1>Phone Number</h1>
            <p>+919923838812</p>
          </div>
        </div>    
    </div>
    <footer className="text-center font-semibold text-2xl mb-4 opacity-60 text-gray-600 sm:text-sm sm:mt-10">Made With ❤️ by Sunil Kurapati </footer>
  </div>  
  )
}

export default Contacts