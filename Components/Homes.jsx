import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

const Home = () => {
    const variants={
        hidden:{
            opacity: 0,
        },
        visible:{
            opacity: 1,
            transition: {
                delay: 0.9,
                ease: 'easeIn'
            }
        },
    }
    return (
        <div className="flex items-center justify-between text-current p-20 sm:mx-28 sm:p-16 sm:flex-col-reverse">
            <motion.div initial="hidden" animate="visible" variants={variants} className="left space-y-4">
                <p className="font-bold text-3xl font-Acme sm:text-2xl">Hello, I'am</p><br/>
                <span className="font-bold text-6xl ml-2 text-green-400 font-Teko sm:text-5xl sm:ml-0">Sunil Kurapati</span><br/>
                <h1 className="font-bold text-3xl ml-2 text-teal-400 font-play sm:text-2xl ">Aspiring MERN Developer</h1>
                <p className="font-bold text-2xl ml-2 tracking-widest sm:tracking-normal sm:w-80 space-y-4 font-web">A curiousity-driven coder with a passion for designing and building user-centric, inclusive experiences on the web.</p><br/>
                <a className="font-bold text-xl text-current mt-10 " href="mailto:skurapatim3100@gmail.com"><button className="font-Hahmlet font-bold border-2 p-2 border-orange-400 shadow-xl shadow-black rounded-lg hover:bg-orange-400 hover:text-black transition ease-in-out delay-200 duration-150 hover:scale-125">Get In Touch</button></a>
                <a className="font-bold text-xl ml-8 sm:ml-0 text-current" href="./Sunil Kurapati.pdf" target="_blank"><button className="font-Hahmlet font-bold sm:mt-6 border-2 p-2 border-orange-400 shadow-xl shadow-black rounded-lg hover:bg-orange-400 hover:text-black transition ease-in-out delay-200 duration-150 hover:scale-125">Download Resume</button></a>
            </motion.div>
            <div className="right">
                <motion.div
                    whileHover={{ rotate:[5,-5,1],scale:1.2 }}
                    animate={{ rotate:[10,-10,1] }}
                    transition={{duration:1}} 
                    className="rounded-xl left-36 sm:left-1 sm:h-60 sm:w-60 sm:mt-0 mb-20 w-80 h-80 shadow-black shadow-xl relative cursor-pointer bg-gradient-to-tr from-red-400 to-slate-300 hover:bg-gradient-to-tr hover:from-red-500 hover:to-slate-400 hover:animate-pulse"
                >
                    <Image src="/sunil1.jpg" alt="profile" width={355} height={355} className="mix-blend-overlay rounded-xl absolute inset-0 object-cover"/>
                </motion.div>
            </div>      
        </div>
    )
}

export default Home
// <Image src="/sunil1.jpg" alt="profile" width={200} height={200}/>
