import React from 'react'
import Image from 'next/image'
const Home = () => {
    return (
        <div className="flex items-center justify-between text-current p-20">
            <div className="left space-y-4 flex-auto w-64">
                <p className="font-bold text-3xl font-Acme">Hello, I'am</p><br/>
                <span className="font-bold text-6xl ml-2 text-green-400 font-Teko">Sunil Kurapati</span><br/><br/>
                <h1 className="font-bold text-3xl ml-2 text-teal-400 font-play">Aspiring MERN Developer</h1>
                <p className="font-bold text-2xl ml-2 tracking-widest space-y-4 font-web">A curiousity-driven coder with a passion for designing and building user-centric, inclusive experiences on the web.</p><br/>
                <a className="font-bold text-xl text-current mt-10" href="mailto:skurapatim3100@gmail.com"><button className="font-Hahmlet font-bold border-2 p-2 border-orange-400 shadow-xl shadow-black rounded-lg hover:bg-orange-400 hover:text-black transition ease-in-out delay-200 duration-150 hover:scale-125">Get In Touch</button></a>
            </div>
            <div className="right flex-auto"><Image src="/sunil1.jpg" alt="profile" width={200} height={200}/></div>
        </div>
    )
}

export default Home
// <Image src="/sunil1.jpg" alt="profile" width={200} height={200}/>
