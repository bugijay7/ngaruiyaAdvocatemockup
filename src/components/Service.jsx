import React from "react";
import { 
  FaBalanceScale, 
  FaGavel, 
  FaBuilding, 
  FaUsers, 
  FaFileContract, 
  FaShieldAlt, 
  FaFileSignature 
} from "react-icons/fa";

function Services() {
  const areas = [
    {
      icon: <FaBalanceScale className="text-4xl text-yellow-500" />,
      title: "Litigation & Dispute Resolution",
      description: "Representing clients in courts and tribunals with a focus on achieving practical, fair solutions.",
    },
    {
      icon: <FaGavel className="text-4xl text-yellow-500" />,
      title: "Criminal Law",
      description: "Providing strong defense and legal support in criminal proceedings.",
    },
    {
      icon: <FaBuilding className="text-4xl text-yellow-500" />,
      title: "Corporate & Commercial Law",
      description: "Advising businesses on compliance, contracts, mergers, and transactions.",
    },
    {
      icon: <FaUsers className="text-4xl text-yellow-500" />,
      title: "Family Law",
      description: "Handling matters such as divorce, custody, succession, and inheritance disputes.",
    },
    {
      icon: <FaFileContract className="text-4xl text-yellow-500" />,
      title: "Conveyancing & Real Estate",
      description: "Facilitating property sales, transfers, and real estate investments with due diligence.",
    },
    {
      icon: <FaFileSignature className="text-4xl text-yellow-500" />,
      title: "Commissioner for Oaths",
      description: "Administering oaths, affirmations, and certifying legal documents with authority.",
    },
    
  ];

  return (
    <section 
    id="practice-areas"
    className="py-16 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-800">Our Practice Areas</h2>
        <p className="mt-4 text-lg text-gray-900">
          At PN Muturi & Co. Advocates, we offer a wide range of legal services tailored to meet our clients’ diverse needs.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {areas.map((area, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="mb-4 flex justify-center">{area.icon}</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{area.title}</h3>
            <p className="text-black-600">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services