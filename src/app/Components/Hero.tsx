'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



export default function Hero(){
  return (
   
   <div className='h-auto md:h-[40rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0' style={{textAlign:"center"}}>
 
      <div className='p-4 relative z-10 w-full text-center'>
      
<div className='flex justify-center items-center'>
      <Link href="/">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7WVjwfF_tvEpVH8KlL6hl5jw6_4920bJuUw&s"
          alt="picture"
          rel="noopener noreferrer"
          height={300}
          width={300}
          className="cursor-pointer items-center rounded-full animate-pulse" 
        />
      </Link>
  </div>
 <p className='mt-4 font-normal text-base md:text-lg text-white hover:text-pink-900 text-p max-w-lg mx-auto'>"AI Student proficient in TypeScript &HTML ,CSS and Certified Information Technology | Dedicated to advancing AI with coding expertise | Ready to tackle cutting-edge challenge.</p>

  <div>
    <button className='px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-black'>Hire ME</button>
    <button className='px-6 py-3 rounded-full bg-transparent hover:bg-slate-950 text-white border border-black mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500text-black'>Contact</button>
  </div>

 <div className="flex justify-center space-x-4 mb-6 animate-pulse mt-4">
            <a
              href="https://www.facebook.com/profile.php?id=100065116775317&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer "
            >
              <Image src="/image/img-2.jpg" alt="Facebook" height={24} width={24} className="rounded-full"/>
            </a>
            <a
              href="hhttps://www.instagram.com/eman_khan278?igsh=dDNvcWhpMDl2N2hl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/image/img-3.avif" alt="Twitter" height={24} width={24} className="rounded-full"/>
            </a>
            <a
              href="https://www.linkedin.com/in/niba-farooq"
              target="_blank"
              rel="noopener noreferrer"
             
            >
              <Image src="/image/img-5.webp" alt="LinkedIn" height={24} width={24} className="rounded-full"/>
            </a>
          
            <a
              href="https://github.com/Niba-khan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/image/img-4.webp" alt="Instagram" height={24} width={24} className="rounded-full"/>
            </a>
          </div >
      </div>
    </div>

  )
}