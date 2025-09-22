import React from "react";

function AboutFirm() {
  return (
    <section
      id="about"
      className="py-16 px-6 sm:px-10 md:px-16 lg:px-20 bg-gray-100 text-gray-800"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-blue-800">
          About Ngaruiya Gitau & Co. Advocates
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black mb-6">
          <span className="font-semibold">Ngaruiya Gitau & Co. Advocates</span> is
          dedicated to providing exceptional legal services to individuals,
          businesses, and organizations. With a proven track record of
          professionalism and integrity, our firm is committed to achieving
          results that matter for our clients.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-black">
          Our team of skilled advocates brings expertise across multiple areas of
          law, ensuring each client receives tailored guidance and attentive
          support. From legal consultation to full representation, we stand by
          your side, protecting your rights and guiding you through every step
          of the legal process.
        </p>
      </div>
    </section>
  );
}

export default AboutFirm;
