import React from "react";

function Map() {
  return (
    <section
      id="location"
      className="py-16 px-6 sm:px-10 md:px-16 bg-gray-50"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(41,32,99)]">
          Our Location
        </h2>
        <p className="mt-2 text-gray-600 text-base sm:text-lg">
          Visit us at our offices — we are always ready to serve you.
        </p>
      </div>

      {/* Google Map */}
      <div className="max-w-6xl mx-auto">
       <iframe
  title="Ngaruiya Gitau & Co Advocates Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.123456!2d36.6418372!3d-1.1087323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f273df4109d5b%3A0x7b814de6b76c9571!2sNgaruiya+Gitau+%26+Co+Advocates!5e0!3m2!1sen!2ske!4v1234567890"
  width="100%"
  height="450"
  allowFullScreen
  loading="lazy"
  className="rounded-lg shadow-lg border-0"
/>

      </div>
    </section>
  );
}

export default Map;
