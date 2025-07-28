import React, { useEffect } from "react";
import CertificatesText from "./CertificatesText";
import SingleCertificate from "./SingleCertificate";

// This is the main container for the Certificates section.
// It loads the Credly embed code for displaying certificates and
// maps through the certificates array to render SingleCertificate components.

const certificates = [
  {
    name: "Google IT Automation with Python",
    embedCode: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="ea6cb775-cc62-4e66-882a-617894549366" data-share-badge-host="https://www.credly.com"></div>`,
    publicLink:
      "https://www.credly.com/badges/ea6cb775-cc62-4e66-882a-617894549366/public_url",
  },
  {
    name: "Google Cybersecurity",
    embedCode: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="80881a27-de42-4bb5-8e04-58923f30d402" data-share-badge-host="https://www.credly.com"></div>`,
    publicLink:
      "https://www.credly.com/badges/80881a27-de42-4bb5-8e04-58923f30d402/public_url",
  },
];

const CertificatesMain = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div id="certificates" className="max-w-[1200px] mx-auto px-4 mt-24">
      <CertificatesText />
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {certificates.map((cert, index) => (
          <SingleCertificate
            key={index}
            name={cert.name}
            embedCode={cert.embedCode}
            publicLink={cert.publicLink}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificatesMain;
