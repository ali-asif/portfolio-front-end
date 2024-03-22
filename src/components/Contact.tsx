'use client'
import { headerItems } from "@/constants/constant";
import Image from "next/image";
import { useRouter } from "next/navigation";


const Contact = () => {
    const router = useRouter();
    

    const LinkedinClick = () => {
      router.push('https://www.linkedin.com/in/ali-asif-jamstack-nextjs-developer/')
    }
    

    const fiverrClick = () => {
        router.push('https://www.fiverr.com/s/bGx0lP')
    }


    return (
        <section 
            id={headerItems.Contact.page} 
            className="flex flex-col text-center justify-center items-center my-40"
        > 
        <div>  
            <p className="text-slate-500 ">Get in Touch</p>
            <h1 className={"text-6xl my-6"}>Contact Me</h1>
            <div className="flex break-words flex-wrap text-center justify-between items-center">
              <button onClick={LinkedinClick} className="relative border-2 font-medium border-gray-800 bg-transparent py-2.5 px-5 uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-600 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">Linked in</button>
              <br></br>
              <button onClick={fiverrClick} className="relative border-2 font-medium border-gray-800 bg-transparent py-2.5 px-5 uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-green-500 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">fiverr...</button>
            </div> 
        </div>
        </section>
    )
}

export default Contact;