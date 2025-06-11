import Link from "next/link";

export function ServiceCard() {
    const cardData = [
        {
            title: "Solar Inverter",
            description:
                "The central point of any solar energy system is a solar inverter. It converts the DC electricity your solar panels produce into AC electricity that powers your home or business. Modern inverters not only maximize energy generation, but they also provide smart monitoring that enables you to monitor performance in real-time. If you require a string inverter, microinverter, or hybrid solution, we offer custom versions to ensure peak efficiency and reliability.",
            image:
                "termites.jpg",
                category: "termites",
        },
        {
            title: "Commercial Solar",
            description:
                "Power your business with clean energy and reduce overhead expenses. Our commercial solar systems are designed to work at peak levels, endure for years, and maximize returns. Warehouse, office buildings, or factories – we create customized installations to meet your energy requirements and earn federal tax credits and local incentives. Minimize your carbon footprint and save on lower energy rates for decades.",
            image:
                "mosquitoes.jpg",
                category: "mosquitoes",
        },
        {
            title: "Residential Solar",
            description:
                "Electrify your home independently with our cutting-edge residential solar panel systems. Created to be a hassle-free part of your roof and life, our systems save on electricity bills, boost property value, and offer long-term energy independence. We take care of everything—permitting through installation—to provide a seamless, trouble-free process backed by industry-leading warranties.",
            image:
                "ants.jpg",
                category: "ants",
        },
        {
            title: "Watts",
            description:
                "Solar panel arrays are rated in watts—the higher the wattage, the greater your system's power output. From an intimate 3kW setup for a residence to a commercial 100kW+ array for business real estate, we design each system specifically for your energy needs and roof area. Our professionals explain to you how much wattage you should get for optimal performance and savings.",
            image:
                "spiders.jpg",
                category: "spiders",
        },
        {
            title: "Solar Panel Cleaning",
            description:
                "Dust, dirt, and weather conditions can decrease your solar panel performance by as much as 25%. Our solar panel cleaning services restore optimal functioning and save your investment. Cleaning your panels with non-abrasive Utensil and filtered water leaves them sparkling and performing at their best throughout the year.",
            image:
                "cockroaches.jpg",
                category: "cockroaches",
        },
        {
            title: "Solar Installation",
            description:
                "Our turnkey solar installation is trouble-free, safe, and code compliant. We start with a free site analysis, system design, permitting, and professional installation by licensed professionals. From rooftop, ground-mount, to carport installation, we implement high-quality materials and state-of-the-art equipment to ensure greater quality and performance right from day one.",
            image:
                "bugs.jpg",
                category: "bed-bugs",
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cardData.map((card, index) => (
                <div
                    key={index}
                    className="relative flex w-full max-w-sm flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg mx-4"
                >
                    <div className="relative mx-4 h-92 w-92 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                        <img src={card.image} alt={card.title} />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-medium text-blue-gray-900">{card.title}</h3>
                            <p className="flex items-center gap-1.5 text-base font-normal text-blue-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-700" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </p>
                        </div>
                        <p className="text-base font-light text-gray-700">{card.description}</p>
                        <div className="flex flex-row justify-center p-3">
                            <Link href={`https://www.nextsunpower.com/services/${card.category}`}><button className="block mx-1 w-full px-20 rounded-lg bg-gray-900 py-3.5 text-sm font-bold uppercase text-white shadow-md hover:shadow-lg transition-all">
                                Know More
                            </button></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
