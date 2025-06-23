// pages/Clients.jsx
import React from "react";
import Layout from "@/components/layout/Layout";

const clientLogos = [
  { name: "Mug Company", logo: "/assets/ferropan_company.jpg" },
  { name: "NBTC", logo: "/assets/growmaxx_company.png" },
  { name: "Ferropan", logo: "/assets/mug_company.png" },
  { name: "Growmaxx", logo: "/assets/nbtc_company.png" },
  { name: "Target", logo: "/assets/target_company.jpg" },
];

const Clients = () => {
  return (
    <Layout>
      <div className="pt-16">
        {/* Hero Section */}
<section
  className="relative text-white py-20 bg-center bg-cover bg-no-repeat text-center"
  style={{ backgroundImage: `url('/assets/card3.jpg')` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60 opacity-80"></div>

  {/* Content */}
  <div className="relative z-10 max-w-2xl mx-auto px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Trusted Clients</h1>
    <p className="text-lg text-gray-200">
      At NM HR Consultancy, we take pride in collaborating with industry leaders and global enterprises across the UAE and GCC. Our client partnerships reflect our commitment to quality recruitment and long-term business impact.
    </p>
  </div>
</section>


        {/* Extra SEO Paragraph */}
        <div className="max-w-4xl mx-auto px-4 py-12 text-gray-700 text-lg leading-relaxed">
          <p className="mb-4">
            NM HR Consultancy has built a strong reputation in the recruitment industry by consistently delivering highly skilled talent to our clients. Our clientele spans multiple industries including oil & gas, construction, hospitality, healthcare, logistics, and manufacturing. From blue-collar staffing to executive placements, we ensure every client receives personalized solutions tailored to their specific workforce demands.
          </p>
          <p className="mb-4">
            We believe that every successful organization is built on the foundation of its people. That’s why we go the extra mile to understand each client's business goals, work culture, and talent requirements before providing candidates. Our quality assurance, transparent hiring process, and strong ethical practices make us a preferred HR partner across the Gulf.
          </p>
          <p>
            Our collaboration with companies such as NBTC, Ferropan, Growmaxx, and Al Tayer Group showcases our ability to work with both multinational corporations and regional leaders. We are continuously expanding our reach and look forward to forging new partnerships that lead to mutual growth and excellence.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 flex items-center justify-center mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="object-contain w-full h-full p-2"
                  />
                </div>
                <p className="text-lg font-medium text-gray-700 mt-4">{client.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-100 py-12 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Want to Partner with Us?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Whether you're a startup or an established enterprise, NM HR is ready to support your staffing goals with our proven expertise and dedicated support team.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Clients;
