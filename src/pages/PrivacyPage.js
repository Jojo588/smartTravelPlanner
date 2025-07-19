import { Card, CardContent } from "../components/ui/Card";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Privacy{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500">Last updated: December 2024</p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-12">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>

                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
                  <p className="text-gray-600 mb-4">We collect information you provide directly to us, such as:</p>
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    <li>Name, email address, and contact information</li>
                    <li>Travel preferences and destination interests</li>
                    <li>Payment information for premium services</li>
                    <li>Profile information and travel history</li>
                    <li>Communications with our support team</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Automatically Collected Information</h3>
                  <p className="text-gray-600 mb-4">
                    We automatically collect certain information when you use our services:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage data (pages visited, features used, time spent)</li>
                    <li>Location information (with your permission)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
                  <p className="text-gray-600 mb-4">We use the information we collect to:</p>
                  <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                    <li>Provide and improve our travel planning services</li>
                    <li>Personalize your experience and recommendations</li>
                    <li>Process payments and manage subscriptions</li>
                    <li>Send you updates, newsletters, and promotional content</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Analyze usage patterns and improve our platform</li>
                    <li>Comply with legal obligations and protect our rights</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Information Sharing and Disclosure</h2>
                  <p className="text-gray-600 mb-4">We may share your information in the following circumstances:</p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Service Providers</h3>
                  <p className="text-gray-600 mb-6">
                    We work with third-party service providers who help us operate our platform, including payment
                    processors, cloud hosting services, and analytics providers.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Travel Partners</h3>
                  <p className="text-gray-600 mb-6">
                    When you book travel services through our platform, we share necessary information with hotels,
                    airlines, and other travel providers to complete your reservations.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Legal Requirements</h3>
                  <p className="text-gray-600 mb-8">
                    We may disclose your information if required by law, court order, or government request, or to
                    protect our rights and the safety of our users.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Data Security</h2>
                  <p className="text-gray-600 mb-4">
                    We implement appropriate security measures to protect your information:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Access controls and employee training</li>
                    <li>Secure payment processing through certified providers</li>
                    <li>Regular backups and disaster recovery procedures</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Your Rights and Choices</h2>
                  <p className="text-gray-600 mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                    <li><strong>Access:</strong> Request a copy of your personal information</li>
                    <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Receive your data in a portable format</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                    <li><strong>Restriction:</strong> Limit how we process your information</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Cookies and Tracking</h2>
                  <p className="text-gray-600 mb-4">We use cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Provide personalized content and recommendations</li>
                    <li>Enable social media features and advertising</li>
                  </ul>
                  <p className="text-gray-600 mb-8">
                    You can control cookies through your browser settings, but some features may not work properly if cookies are disabled.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">7. International Data Transfers</h2>
                  <p className="text-gray-600 mb-8">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Children's Privacy</h2>
                  <p className="text-gray-600 mb-8">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Changes to This Policy</h2>
                  <p className="text-gray-600 mb-8">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Contact Us</h2>
                  <p className="text-gray-600 mb-4">
                    If you have questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600 mb-2"><strong>Email:</strong> privacy@wanderwise.com</p>
                    <p className="text-gray-600 mb-2"><strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94105</p>
                    <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 (800) WANDER-1</p>
                    <p className="text-gray-600"><strong>Data Protection Officer:</strong> dpo@wanderwise.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}
