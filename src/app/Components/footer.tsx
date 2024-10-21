import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-style py-5 text-black" style={{backgroundColor: "rgb(4, 4, 70)"}}>
      <div className="container mx-auto text-center md:text-left">

      <div className="text-center mt-4">
          {/* Profile Image */}
          <div className="image-style flex justify-center mb-6 animate-pulse">
            <Image
              id="my-image"
              src="https://instacaptionsforall.in/wp-content/uploads/2023/11/54-2-1024x1024.jpg"
              alt="AI Engineer"
              rel="noopener noreferrer"
              height={100}
              width={100}
              className="rounded-full"
            />
          </div>
        {/* Navigation */}
        <div className="flex justify-center space-x-8 mb-6">
          <Link href="http://localhost:3000" className="hover:text-red-500">
            <b><i>Home</i></b>
          </Link>
          <Link href="http://localhost:3000/about" className="hover:text-blue-500">
            <b><i>About</i></b>
          </Link>
          <Link href="http://localhost:3000/project" className=" hover:text-green-500">
            <b><i>Project</i></b>
          </Link>
          <Link href="http://localhost:3000/contact" className="hover:text-yellow-800">
           <b><i>Contact</i></b>
          </Link>
        </div>
        
       
          
          {/* Connect with Me */}
          <div className="flex justify-center space-x-4 mb-6 animate-pulse">
            <a
              href="https://www.facebook.com/profile.php?id=100065116775317&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/image/img-2.jpg" alt="Facebook" height={24} width={24} />
            </a>
            <a
              href="https://www.instagram.com/eman_khan278?igsh=dDNvcWhpMDl2N2hl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/image/img-3.avif" alt="Twitter" height={24} width={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/niba-farooq"
              target="_blank"
              rel="noopener noreferrer"
             
            >
              <Image src="/image/img-5.webp" alt="LinkedIn" height={24} width={24} />
            </a>
          
            <a
              href="https://github.com/Niba-khan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/image/img-4.webp" alt="Instagram" height={24} width={24} />
            </a>
          </div >


          <p className="text-sm hover:text-white">&copy; {new Date().getFullYear()} Niba Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}