
export function Hero() {
  return (
     <section className="bg-white mt-20 lg:mt-2">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
        <div className="place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl">Clean Energy for a Smarter Future.</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Tap into the boundless potential of the sun with NextSunPower – your go-to solar energy company.
            </p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 mb-2 text-sm lg:text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-green-800 focus:ring-4 focus:ring-primary-300">
                Get A Callback
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-sm lg:text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
            Explore further
            </a> 
        </div>
        <div className="hidden ml-20 lg:mt-0 h-96 lg:col-span-5 lg:flex">
            <img src="pest-service.jpg" alt="pest-control"/>
        </div>                
    </div>

    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="h-full w-full p-4">
        <img className="w-full" src="home-img2.jpg" alt="dashboard image"/>
        </div>
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What we do at Nextsunpower</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">With well over a decade of experience, NextSunPower is dedicated to providing high-quality solar products that meet your energy requirements. We integrate technology, innovation, and sustainability to make you switch to green energy effortlessly.
            </p>
            <a href="#" className="inline-flex items-center text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</section>
  )
}