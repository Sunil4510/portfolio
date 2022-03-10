import React from 'react'
import {motion} from "framer-motion"
import Image from "next/image"
const Abouts = () => {
    return (
        <div className="flex items-center justify-between p-20 flex-col">
            <div className="left flex items-center justify-between sm:flex-col">
                <motion.h1 initial={{x:-100,opacity:0}} animate={{x:[0,-100,0],opacity:1}} transition={{duration:2}} className="text-6xl sm:text-5xl sm:mr-0 font-bold font-Great mr-10 break-words">about me</motion.h1>
                <motion.p initial={{x:100,opacity:0}} animate={{x:[0,100,0],opacity:1}} transition={{duration:2}}  className="border-b-4 border-solid border-current sm:w-40 w-96 rounded-lg"/>
            </div>
            <div className="right flex m-20 sm:flex-col sm:m-0 sm:items-center">
                <div className="right_left mr-20 sm:mr-0">
                    <motion.div
                        whileHover={{ rotate:[5,-5,1],scale:1.2 }}
                        animate={{ rotate:360 }}
                        transition={{duration:1}} 
                        className="rounded-full sm:mb-10 sm:h-48 sm:w-48 sm:mt-10 w-60 h-60 bg-cover bg-top border-8 border-red-200 shadow-black shadow-xl relative cursor-pointer bg-gradient-to-tr from-pink-400 to-slate-500 hover:bg-gradient-to-tl hover:from-pink-500 hover:to-slate-200 hover:animate-pulse"
                    >
                        <Image src="/sunil1.jpg" alt="profile" width={300} height={300} className="mix-blend-overlay rounded-full absolute inset-0 object-cover"/>

                    </motion.div>
                </div>
            <div className="right_right flex-1">
                <p className="w-96 mb-20 text-xl sm:text-lg sm:p-10 tracking-wider font-web font-bold">Hello! I&apos;m Sunil, a junior front-end developer based in Solapur, India. I love to work on exciting projects that test what I&apos;ve learnt, whilst being exposed to the power and potential of the ever-evolving technologies around us. I&apos;m always looking for better, and more importantly, ethical and accessible ways to solve the common problems we are faced with day-to-day.</p>
                    
                <strong className="text-3xl sm:pl-10 text-orange-400">What I&apos;ve been up to :</strong>  
                    <ul className="m-3 ml-8 list-disc sm:pl-10 text-sky-800 font-bold text-xl">
                        <li><p className="text-indigo-800">Building Projects</p></li>
                        <li><p className="text-indigo-800">Open Source Contributor</p></li>
                        <li><p className="text-indigo-800">Keen Learner</p></li>
                        <li><p className="text-indigo-800">An Engineer</p></li>
                    </ul>  
            </div>
        </div>
    </div>
    )
}

export default Abouts
