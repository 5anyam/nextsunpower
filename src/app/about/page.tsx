// app/about/page.tsx
import EstimateModal from '@/components/bookingModal';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="max-w-6xl mt-24 lg:mt-0 mx-auto px-4 py-12 space-y-12">
      {/* Section: Heading */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At NextSunPower, our goal is to allow homeowners, businesses, and eco-conscious consumers to tap into the limitless potential of the sun. Period. Simply to make solar power available to all, to make it convenient and affordable.
        </p>
      </section>

      {/* Section: Who We Are */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image src="/who-we-are.jpg" alt="Who We Are" width={600} height={400} className="rounded-2xl shadow-md object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
          <p className="text-gray-700">
            NextSunPower is an affiliate website which is committed to bring out accurate, the latest information about high-quality solar panels, solar products, and green energy merchandise. We are a team of renewable energy expert, researchers, and technophiles who have a shared passion for a greener, cleaner, and sustainable world.
          </p>
        </div>
      </section>

      {/* Section: What We Do */}
      <section className="bg-gray-100 p-8 rounded-2xl space-y-6">
        <h2 className="text-2xl font-bold mb-2">What We Do</h2>
        <p className="text-gray-700">
          We research, compare, and recommend best-selling solar panels and accessories to buy. Leveraging our role as top solar suppliers and most trusted distributors, we help you make the perfect choice—lighting your home, office, or off-grid escapade.
        </p>
        <ul className="space-y-2 text-gray-700 list-disc list-inside">
          <li>
            <strong>Product Reviews:</strong> We provide detailed product reviews consolidating the benefits, limitations, and technical specifications of best-selling solar panels and accessories.
          </li>
          <li>
            <strong>Guides:</strong> We break down advanced solar technology into easy-to-understand language, from beginner to expert.
          </li>
          <li>
            <strong>Exclusive Offers:</strong> We provide you with the crème de la crème top exclusive offers and discounts on solar products under our affiliate programs.
          </li>
          <li>
            <strong>Learning Material:</strong> Our site is loaded with information, ranging from solar installation guides to energy-saving tips, to assist you from head to toe in your solar quest.
          </li>
        </ul>
      </section>

      {/* Section: Why Trust Us */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Trust Us?</h2>
          <p className="text-gray-700">
            Transparency and honesty always linger in the back of our mind whether we do something or not. We believe only in that which we support and promote, and everything else besides that which we support is derived from actual research and experience. Being an affiliate site, we receive a referral fee if you purchase through our links—no additional cost to you. In that manner, we are able to continue offering you the best, unbiased information.
          </p>
        </div>
        <div>
          <Image src="/why-trust-us.jpg" alt="Why Trust Us" width={600} height={400} className="rounded-2xl shadow-md object-cover" />
        </div>
      </section>

      {/* Section: Join the Solar Revolution */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image src="/join-solar.jpg" alt="Join the Solar Revolution" width={600} height={400} className="rounded-2xl shadow-md object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Join the Solar Revolution</h2>
          <p className="text-gray-700">
            New to solar or extending your existing system, NextSunPower.com is your online store where you can purchase all the equipment you will require for your solar application. Building a better world, panel by panel.
          </p>
          <p className="text-gray-700 mt-2">
            Let us build a better, cleaner world, together!
          </p>
        </div>
      </section>

      {/* Section: CTA */}
      <section className="text-center bg-green-50 p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Ready to Switch to Solar?</h2>
        <p className="text-gray-700 mb-6">
          Let us guide you with reliable product reviews, learning material, and the best solar deals—all at your fingertips.
        </p>
        <EstimateModal />
      </section>
    </main>
  );
}
