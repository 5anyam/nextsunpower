
import { GrInstagram } from "react-icons/gr";
import { TbBrandLinkedin } from "react-icons/tb";
import { RiFacebookBoxLine } from "react-icons/ri";
import Link from "next/link";

export function Footer() {
    return (
      <div className="bg-primary rounded-xl text-white">
      <div className="px-8 py-6">
          
  
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                  <p className="font-semibold text-xl text-white">Quick Link</p>
  
                  <div className="flex flex-col items-start mt-5 space-y-2">
                      <a href="https://www.nextsunpower.com/" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Home</a>
                      <a href="https://www.nextsunpower.com/contact" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Contact Us</a>
                      <Link href="https://www.nextsunpower.com/about"><h6 className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">About Us</h6></Link>
                      <a href="https://www.nextsunpower.com/blog" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Blogs</a>
                  </div>
              </div>
  
              <div>
                  <p className="font-semibold text-xl text-white">Services</p>
  
                  <div className="flex flex-col items-start mt-5 space-y-2">
                      <a href="https://www.nextsunpower.com/category/watts" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Watts</a>
                      <a href="https://www.nextsunpower.com/category/residential-solar" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Residential Solar</a>
                      <a href="https://www.nextsunpower.com/category/commercial-solar" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Commercial Solar</a>
                      <a href="https://www.nextsunpower.com/category/solar-inverter" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Solar Inverter</a>
                  </div>
              </div>
  
              <div>
                  <p className="font-semibold text-xl text-white dark:text-white">Useful Links</p>
  
                  <div className="flex flex-col items-start mt-5 space-y-2">
                  <Link href="https://www.nextsunpower.com/privacy-policy"><h6 className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Privacy Policy</h6></Link>
                      <a href="https://www.nextsunpower.com/terms-and-conditions" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Terms and conditions</a>
                      <a href="https://www.nextsunpower.com/disclaimer" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Disclaimer</a>
                      <a href="https://www.nextsunpower.com/sitemap.xml" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Sitemap</a>
                  </div>
              </div>
  
              <div className="mb-5">
                  <p className="font-semibold text-xl text-white dark:text-white">Contact Us</p>
  
                  <div className="flex flex-col items-start mt-5 space-y-2">
                  <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">Digimach 10 LLC</a>
                      <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">16192 Coastal Highway, Lewes, Delaware 19958, Country of Sussex, USA.</a>
                      <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">+121-7773-5600</a>
                      <a href="#" className="text-white transition-colors duration-300 dark:hover:text-blue-400 hover:font-bold">support@nextsunpower.com</a>
                     <div className="flex flex-row items-center">
                     <Link href="#"><RiFacebookBoxLine className="text-white text-3xl" /></Link>
                    <Link href="#"><GrInstagram className="text-white mx-2 text-2xl"/></Link>
                    <Link href="#"><TbBrandLinkedin className="text-white text-3xl"/></Link>
                        </div> 
                  </div>
              </div>
          </div>
          
          <hr className="border-gray-200 dark:border-gray-700"/>
          
          <div className="flex flex-col items-center py-2 w-full rounded-xl mt-5 bg-white justify-between px-2 sm:flex-row">
              <a href="#">
                  <img className="ml-2 w-auto h-12" src="nextsunpower-logo.png" alt="logo"/>
              </a>
  
              <p className="mt-4 text-sm text-center text-gray-800 text-xs lg:text-left lg:text-sm sm:mt-0">©Copyright Nextsunpower 2025. <br className="block lg:hidden"/> All Rights Reserved.</p>
          </div>
      </div>
  </div>
    )
  }