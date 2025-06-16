import Image from "next/image";
import Link from "next/link";

const solars = [
  {
    title: "Solar Inverter",
    description:
        "The central point of any solar energy system is a solar inverter. It converts the DC electricity your solar panels produce into AC electricity that powers your home or business. Modern inverters not only maximize energy generation, but they also provide smart monitoring that enables you to monitor performance in real-time. If you require a string inverter, microinverter, or hybrid solution, we offer custom versions to ensure peak efficiency and reliability.",
    image:
        "/types/solar-inverter.jpg",
        category: "solar-inverter",
},
{
    title: "Commercial Solar",
    description:
        "Power your business with clean energy and reduce overhead expenses. Our commercial solar systems are designed to work at peak levels, endure for years, and maximize returns. Warehouse, office buildings, or factories – we create customized installations to meet your energy requirements and earn federal tax credits and local incentives. Minimize your carbon footprint and save on lower energy rates for decades.",
    image:
        "/types/commercial-solar-panels.jpg",
        category: "commercial-solar-panels",
},
{
    title: "Residential Solar",
    description:
        "Electrify your home independently with our cutting-edge residential solar panel systems. Created to be a hassle-free part of your roof and life, our systems save on electricity bills, boost property value, and offer long-term energy independence. We take care of everything—permitting through installation—to provide a seamless, trouble-free process backed by industry-leading warranties.",
    image:
        "/types/residential-solar-panel.jpg",
        category: "residential-solar-panel",
},
{
    title: "DIY Solar Panel",
    description:
        "Solar panel arrays are rated in watts—the higher the wattage, the greater your system's power output. From an intimate 3kW setup for a residence to a commercial 100kW+ array for business real estate, we design each system specifically for your energy needs and roof area. Our professionals explain to you how much wattage you should get for optimal performance and savings.",
    image:
        "/types/diy-solar-panel.jpg",
        category: "diy-solar-panel",
},
{
    title: "Solar Panel Cleaning",
    description:
        "Dust, dirt, and weather conditions can decrease your solar panel performance by as much as 25%. Our solar panel cleaning services restore optimal functioning and save your investment. Cleaning your panels with non-abrasive Utensil and filtered water leaves them sparkling and performing at their best throughout the year.",
    image:
        "/types/solar-panel-cleaning.jpg",
        category: "solar-panel-cleaning",
},
{
    title: "Solar Installation",
    description:
        "Our turnkey solar installation is trouble-free, safe, and code compliant. We start with a free site analysis, system design, permitting, and professional installation by licensed professionals. From rooftop, ground-mount, to carport installation, we implement high-quality materials and state-of-the-art equipment to ensure greater quality and performance right from day one.",
    image:
        "/types/solar-panel-installation.jpg",
        category: "solar-panel-installation",
},
];

export default function typesSolar() {
  return (
    <div className="min-h-screen bg-gray-50 mt-16 py-10 px-4 md:px-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">
Types of Solar Panel</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {solars.map((solar, index) => (
          <Link
            key={index}
            href={`https://www.saynopest.com/category/${solar.category}`}
            className="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-80">
              <Image
                src={solar.image}
                alt={solar.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 text-center">
                {solar.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
