import React from 'react'
import Image from 'next/image'



export default function Contact (){
  return (
   
   
    <div style={{backgroundImage:"url(https://media.tenor.com/NXQ8OEBqZ0EAAAAM/galaxy-stars.gif)", backgroundSize:"cover"}}>

<div className='max-w-[800px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8' id='Contact'>
    <div className='flex justify-center items-center'>
        <ul className='space-y-4'>
            <li className='flex items-center'>
                <img  src='image/phone.gif' alt="phone" className='h-[30px] w-auto mr-9'/>
                <p className='text-xl'>+093 989 877</p>
            </li> 
            <li className='flex items-center'>
                <img  src='image/email.gif' alt="mail" className='h-[30px] w-auto mr-10'/>
                <p className='text-xl'>khan@gmail.com</p>
            </li>
        </ul>
    </div>

    <div className='bg-white/10 p-8 rounded-xl mx-w-[550px]'>
    <h2 className='text-5xl font-bold text-blue-900 mb-4'>Let's Connect</h2>
    <p className='text-white/70 mb-6'>Send ME A Message and Let's Scheduled A Call!</p>
    <form className='space-y-4'>
        <div className='grid md:grid-cols-2 gap-4'>
        <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-900' placeholder='FirstName'/>
        <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-900' placeholder='LastName'/>
        <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-900' placeholder='E-mail'/>
        <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-900' placeholder='Phone Number'/>
        </div>
        <textarea className='bg-black/70 w-full rounded-xl p-6 focus:outline-none focus:ring-5 focus:ring-blue-900' placeholder='Phone Number'/>
        <button className='bg-blue-900 hover:bg-blue-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl'>Send Message</button>
    </form>

    </div>
       
   
         </div>
         </div>
  )
}