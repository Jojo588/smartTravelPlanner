import { Card, CardContent } from "../components/ui/Card";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Terms of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Please read these terms carefully before using Wander Wise services.</p>
          <p className="text-sm text-gray-500">Last updated: December 2024</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-12">
                <div className="prose prose-lg max-w-none">
                  {/* Terms Sections */}
                  {[
                    {
                      title: "1. Acceptance of Terms",
                      content:
                        'By accessing and using Wander Wise ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
                    },
                    {
                      title: "2. Description of Service",
                      content:
                        "Wander Wise is an AI-powered travel planning platform that provides personalized trip recommendations, itinerary creation, and travel-related services. Our services include but are not limited to:",
                      list: [
                        "Destination recommendations and travel planning",
                        "Itinerary creation and customization",
                        "Weather information and travel alerts",
                        "Points of interest and activity suggestions",
                        "Travel booking assistance and referrals",
                      ],
                    },
                    {
                      title: "3. User Accounts",
                      content:
                        "To access certain features of the Service, you may be required to create an account. You agree to:",
                      list: [
                        "Provide accurate, current, and complete information",
                        "Maintain and update your account information",
                        "Keep your password secure and confidential",
                        "Accept responsibility for all activities under your account",
                        "Notify us immediately of any unauthorized use",
                      ],
                    },
                    {
                      title: "4. Acceptable Use",
                      content: "You agree not to use the Service to:",
                      list: [
                        "Violate any applicable laws or regulations",
                        "Infringe on intellectual property rights",
                        "Transmit harmful, offensive, or inappropriate content",
                        "Interfere with or disrupt the Service",
                        "Attempt to gain unauthorized access to our systems",
                        "Use the Service for commercial purposes without permission",
                      ],
                    },
                    {
                      title: "5. Travel Recommendations and Bookings",
                      content:
                        "Wander Wise provides travel recommendations and may facilitate bookings through third-party providers. Please note:",
                      list: [
                        "Recommendations are based on available data and AI algorithms",
                        "We do not guarantee the accuracy of all information",
                        "Third-party bookings are subject to their terms and conditions",
                        "You are responsible for verifying travel requirements and restrictions",
                        "We are not liable for changes in travel conditions or cancellations",
                      ],
                    },
                    {
                      title: "6. Privacy and Data Protection",
                      content:
                        "Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Service, you consent to the collection and use of your information as outlined in our Privacy Policy.",
                    },
                    {
                      title: "7. Intellectual Property",
                      content:
                        "The Service and its original content, features, and functionality are owned by Wander Wise and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.",
                    },
                    {
                      title: "8. Limitation of Liability",
                      content:
                        "In no event shall Wander Wise, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.",
                    },
                    {
                      title: "9. Subscription and Payment Terms",
                      content: "For premium features, the following payment terms apply:",
                      list: [
                        "Subscriptions are billed in advance on a monthly or annual basis",
                        "Payment is due immediately upon subscription",
                        "Refunds are provided according to our refund policy",
                        "Subscriptions automatically renew unless cancelled",
                        "Price changes will be communicated 30 days in advance",
                      ],
                    },
                    {
                      title: "10. Termination",
                      content:
                        "We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.",
                    },
                    {
                      title: "11. Changes to Terms",
                      content:
                        "We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
                    },
                    {
                      title: "12. Governing Law",
                      content:
                        "These Terms shall be interpreted and governed by the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms will be resolved in the courts of San Francisco, California.",
                    },
                    {
                      title: "13. Contact Information",
                      content: "If you have any questions about these Terms of Service, please contact us:",
                      contact: true,
                    },
                  ].map((section, i) => (
                    <div key={i} className="mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">{section.title}</h2>
                      <p className="text-gray-600 mb-4">{section.content}</p>
                      {section.list && (
                        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                          {section.list.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {section.contact && (
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <p className="text-gray-600 mb-2">
                            <strong>Email:</strong> legal@wanderwise.com
                          </p>
                          <p className="text-gray-600 mb-2">
                            <strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94105
                          </p>
                          <p className="text-gray-600">
                            <strong>Phone:</strong> +1 (800) WANDER-1
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}
