// pages/Blogs.jsx
import React from "react";
import Layout from "@/components/layout/Layout"; // adjust the path as needed

const Blogs = () => {
  return (
    <Layout>
      <div className="pt-16">
        {/* Hero Section */}
        <section
          className="text-white py-24 bg-cover bg-center relative"
          style={{ backgroundImage: `url('/assets/card1.jpg')` }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">NM HR Blogs</h1>
            <p className="text-lg text-gray-200">
              Stay updated with HR trends, workforce insights, and recruitment strategies across UAE and GCC.
            </p>
          </div>
        </section>

        {/* Blog Cards */}
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "The Importance of Ethical Hiring in the UAE",
              summary:
                "Learn how NM HR Consultancy ensures legal and transparent recruitment practices while aligning with international labor laws.",
            },
            {
              title: "Why Overseas Recruitment is the Future of HR",
              summary:
                "Discover how NM HR connects companies with top-tier talent from over 15+ countries to bridge skill gaps efficiently.",
            },
            {
              title: "How Client Support Builds Long-Term Partnerships",
              summary:
                "Explore how our post-deployment support helps employers maintain workforce performance and compliance.",
            },
            {
              title: "A Guide to Visa & Payroll Management",
              summary:
                "Understand how NM HR handles WPS, payroll, and visa documentation to keep your operations smooth and lawful.",
            },
            {
              title: "Top Recruitment Strategies in 2025",
              summary:
                "From digital sourcing to fast mobilization, see how NM HR Consultancy stays ahead in matching talent with opportunity.",
            },
            {
              title: "Screening Candidates the Right Way",
              summary:
                "Our 5-step screening process ensures your candidates are skilled, reliable, and workplace-ready.",
            },
          ].map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.summary}</p>
                <button className="mt-4 text-navy font-semibold hover:underline">Read More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
