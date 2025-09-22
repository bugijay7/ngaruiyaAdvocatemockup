import React from "react";

function Cta() {
  return (
    <section 
    id="cta"
    className="bg-blue-800 py-16 px-6 text-center text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Legal Assistance?
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          At <span className="font-semibold">Ngaruiya Gitau & Co. Advocates</span>, we are committed 
          to providing you with expert legal advice and representation. 
          Schedule a free consultation today and let us help you.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
            Book Free Consultation
          </button>
          <button className="border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 hover:text-black transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cta;