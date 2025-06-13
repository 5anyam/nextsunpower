// app/terms-and-conditions/page.tsx

export const metadata = {
  title: 'Terms and Conditions - NextSunPower',
  description: 'Read our Terms and Conditions for using NextSunPower.com.',
};

export default function TermsAndConditionsPage() {
  return (
    <main className="max-w-4xl mt-24 lg:mt-0 mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p className="mb-2 italic">Effective Date: 13 June, 2025</p>
      <p className="mb-4">Website: www.nextsunpower.com</p>

      <p className="mb-4">
        Welcome to NextSunPower! Visiting this website emphasizes that you recognize and consent to be bound by these Terms and Conditions. Read them before visiting our site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">
        Visit or use NextSunPower if you have read, understood, and agreed to be bound by law in accordance with these Terms and Conditions. Otherwise, do not visit our site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Affiliate Disclosure</h2>
      <p className="mb-4">
        And we also have NextSunPower, which gets into partnership with quality solar power providers and related service companies with affiliate marketing programs. What it does mean is we can make money if you happen to click through some of our links and buy or book a service. This enables us to remain in business operating our website and continue posting relevant content as relates to solar energy solutions across the U.S.
      </p>
      <p className="mb-4 font-semibold italic">
        Disclaimer: NextSunPower does not own or operate any of the companies, products, or services featured on our website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Use of Site</h2>
      <p className="mb-4">You accept to use NextSunPower in acceptable and legal ways. You will not use our website:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Broken any federal or state law while using our website</li>
        <li>Try to use our site or resources in ways not authorized</li>
        <li>Downloading information using automated software (bots or scrapers) without permission</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
      <p className="mb-4">
        All content on NextSunPower—text, images, logos, and software—is owned by NextSunPower and copyrighted in the USA. You may not copy, distribute, or use our content without our express written permission.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Disclaimer of Warranties</h2>
      <p className="mb-4">
        To the maximum extent permitted by law, NextSunPower shall not be liable for loss or damage of any kind arising from the use of website or from products or services of third parties that we link to or refer to. No warranty is provided as to the availability, accuracy or reliability of third-party products or services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Third-Party Links</h2>
      <p className="mb-4">
        We do have third-party links from and to our website that are not within our control. We have no control over third-party website content, procedures, and policies. Any purchase or contract that you enter with these sellers is your own responsibility.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. User Behavior</h2>
      <p className="mb-4">NextSunPower use is subject to your agreement not to:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Post or transmit illegal, offensive, misleading, or malicious content</li>
        <li>Disrupt or interfere with website functions</li>
        <li>Impersonate or falsely represent affiliation with any organization</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Suspension of Access</h2>
      <p className="mb-4">
        We further reserve the right to suspend or end your access to NextSunPower, especially upon violation of these Terms or where you hamper the operation of the site, partners, or other members.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
      <p className="mb-4">
        These Terms and Conditions shall be interpreted in accordance with United States of America law. Disputes will be resolved by a court of competent jurisdiction in the U.S.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">10. Amendment of Terms</h2>
      <p className="mb-4">
        Occurrence from time to time NextSunPower may revise these Terms and Conditions. The new Terms and Conditions will be posted on this page with a revised "Effective Date." Your continued use of the website shall constitute agreement with any changes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
      <p className="mb-2">Email: <em>support@nextsunpower.com</em></p>
      <p className="mb-2">Website: <em>www.nextsunpower.com</em></p>
    </main>
  );
}
