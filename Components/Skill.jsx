import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
const Skill = () => {
  const images = ['/html3.svg','/css2.png','/js1.png','/react2.png','/nodejs.png','/r4.png','/next3.svg','/mongodb1.svg','/rest3.png','/mysql2.png','/java4.png','/vs1.png','/fire2.jpg']
  const names = ['HTML','CSS','JS','REACTJS','NODEJS','RESPONSIVE DESIGN','NEXTJS','MONGODB','RESTFUL API','MYSQL','JAVA','VSCODE','FIREBASE']
  return (
    <>
    <h1 className="text-center uppercase mt-10 mb-20 font-black  text-6xl font-Hahmlet">My Skills</h1>
    <div className="grid grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
        {images.map((src, i)=>{
          console.log(i)
         return (
           <motion.div 
           whileHover={{ rotate:[5,-5,1],scale:1.2 }}
            animate={{ rotate:[0,-360,360] }}
            transition={{duration:1}} 
           className="p-4 cursor-pointer flex flex-col items-center mx-28 mt-10 border-4 shadow-xl shadow-current rounded-xl border-current hover:bg-purple-900">
           <h1 className="font-bold font-Acme text-xl">{names[i]}</h1><br/>
           <Image src={src} height={100} width={100} className="rounded-lg"/>
           </motion.div>
        )})}
    </div>
    </>
  )
}

export default Skill

