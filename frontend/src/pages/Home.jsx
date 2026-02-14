import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className="bg-[url(https://images.unsplash.com/photo-1676976418988-029de837f5ba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYWZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] 
        h-screen pt-8 flex justify-between flex-col w-full 
        bg-cover bg-center  bg-no-repeat">

        
            <img className='w-16 ml-8' src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" ></img>
            <div className='bg-white  pb-7 py-4 px-4'>
                <h2 className='text-[30px] font-semibold'>Get Started With Uber</h2>
                <Link  to='login' className=' flex items-center justify-center  w-full bg-black text-white py-3 rounded-lg mt-5 '>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home
