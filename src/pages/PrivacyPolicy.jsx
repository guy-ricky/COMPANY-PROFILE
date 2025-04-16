import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-gray-700">
      <h1 className="text-3xl font-bold text-teal-800 mb-4 mt-[60px]">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-500 mb-10">
        Last Updated:{" "}
        {new Date().toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </p>

      <div className="space-y-10 text-sm sm:text-base leading-relaxed">
        {/* 1. Introduction */}
        <div>
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            1. Introduction
          </h2>
          <p>
            Welcome to <strong>Silmur Realtors</strong>. We value your privacy
            and are committed to safeguarding your personal information. This
            Privacy Policy explains how we collect, use, and protect the
            information you share with us through our website.
          </p>
        </div>

        {/* 2. Information We Collect */}
        <div>
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            2. Information We Collect
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Personal Data:</strong> When you fill out a contact form,
              we may collect your name, email address, and message content.
            </li>
            <li>
              <strong>Usage Data:</strong> We may collect technical data such as
              your IP address, browser type, device information, and pages
              visited.
            </li>
            <li>
              <strong>Cookies and Tracking:</strong> We may use cookies to
              enhance user experience and understand website usage.
            </li>
          </ul>
        </div>

        {/* 3. How We Use Your Information */}
        <div>
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Respond to your messages and inquiries</li>
            <li>Provide services and support</li>
            <li>Improve the performance and usability of our website</li>
            <li>Monitor traffic, usage trends, and troubleshoot issues</li>
            <li>Send occasional service-related communications</li>
          </ul>
          <p className="mt-2">
            We do not sell or rent your personal information to third parties.
          </p>
        </div>

        {/* 4. Data Sharing */}
        <div>
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            4. Data Sharing
          </h2>
          <p>We only share your data with:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Trusted service providers</strong>, such as Web3Forms, to
              process your contact requests securely.
            </li>
            <li>
              <strong>Analytics tools</strong>, to understand site performance
              and improve user experience.
            </li>
            <li>
              <strong>Legal authorities</strong>, if required by law or to
              protect our rights.
            </li>
          </ul>
        </div>

        {/* 5. Data Security */}
        <div>
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            5. Data Security
          </h2>
          <p>
            We implement reasonable security measures to protect your data.
            However, please note that no online system is 100% secure.
          </p>
        </div>

        {/* 6. Your Rights */}
        <div>
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            6. Your Rights
          </h2>
          <p>
            You have the right to access, update, or delete your personal data.
            You may also withdraw consent for communications at any time.
          </p>
          <p className="mt-2">
            To exercise your rights, contact us at: <br />
            📧 <strong>info@silmurrealtors.co.ke</strong>
          </p>
        </div>

        {/* 7. Third-Party Links */}
        <div>
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            7. Third-Party Links
          </h2>
          <p>
            Our site may contain links to third-party websites (e.g., Google
            Maps). We are not responsible for the privacy practices of these
            sites.
          </p>
        </div>

        {/* 8. Children’s Privacy */}
        <div>
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            8. Children’s Privacy
          </h2>
          <p>
            We do not knowingly collect data from individuals under the age of
            18. If you believe we have collected such data, please contact us to
            request removal.
          </p>
        </div>

        {/* 9. Changes to This Policy */}
        <div>
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            9. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Updates will be
            reflected on this page with a revised “Last Updated” date.
          </p>
        </div>

        {/* 10. Contact Us */}
        <div>
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            10. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy or your data,
            feel free to reach out:
          </p>
          <p className="mt-2">
            📧 <strong>info@silmurrealtors.co.ke</strong> <br />
            📞 <strong>+254 710 591928</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
