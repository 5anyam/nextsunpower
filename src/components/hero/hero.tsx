import EstimateModal from "../bookingModal";


export function Hero() {
  return (
     <section className="bg-white mt-20 lg:mt-2">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
        <div className="place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl">Clean Energy for a Smarter Future
            </h1>
            <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl">Tap into the boundless potential of the sun with NextSunPower – your go-to solar energy company.</p>
            <a className="inline-flex items-center justify-center mr-3 b-2 text-sm lg:text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-green-800 focus:ring-4 focus:ring-primary-300">
              <EstimateModal/>
            </a>
            <a href="https://www.nextsunpower.com/contact" className="inline-flex items-center justify-center px-5 py-3 text-sm lg:text-base font-medium text-center text-black border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                Explore Further
            </a> 
        </div>
        <div className="hidden ml-20 lg:mt-0 h-96 lg:col-span-5 lg:flex">
            <img src="banner-top.jpg" alt="Next Sun Power"/>
        </div>                
     </div>

    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="h-full w-full p-4">
        <img className="w-full" src="banner-top-2.jpg" alt="next sun power banner"/>
        </div>
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">What we do at Next Sun Power</h2>
            <p className="mb-6 font-light text-black md:text-lg dark:text-gray-400">With well over a decade of experience, NextSunPower is dedicated to providing high-quality solar products that meet your energy requirements. We integrate technology, innovation, and sustainability to make you switch to green energy effortlessly.
            </p>
            <EstimateModal/>
        </div>
    </div>
</section>
  )
}