import React, { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle} from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const form = useRef();
  const formSectionRef = useRef(null);
  const contactInfoRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setSent(false);

    try {
      await emailjs.sendForm(
        'service_cjrzzgp',
        'template_6x78doc',
        form.current,
        'MwY8UNX2zZgB4D5K_'
      );
      setSent(true);
      form.current.reset();
    } catch (error) {
      console.error('Email send error:', error);
      alert('Failed to send message. Check console for details.');
    } finally {
      setSending(false);
    }
  };

  const scrollToSection = (ref) => {
    if (ref?.current) {
      const yOffset = -80;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Have questions, feedback, or need help? We're here to assist you on your travel planning journey.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <MessageCircle className="w-8 h-8 text-white" />,
                title: "Live Chat",
                desc: "Get instant help from our support team. Available 24/7 for urgent travel assistance.",
                button: "Start Chat",
                bg: "from-blue-500 to-blue-600",
                btnColor: "bg-blue-600 hover:bg-blue-700 text-white"
              },
              {
                icon: <Mail className="w-8 h-8 text-white" />,
                title: "Email Support",
                desc: "Send us detailed questions and we'll respond within 24 hours with comprehensive answers.",
                button: "Send Email",
                bg: "from-purple-500 to-purple-600",
                btnColor: "border border-purple-600 text-purple-600 hover:bg-purple-50"
              },
              {
                icon: <Phone className="w-8 h-8 text-white" />,
                title: "Phone Support",
                desc: "Speak directly with our travel experts for complex planning needs and urgent assistance.",
                button: "Call Now",
                bg: "from-green-500 to-teal-500",
                btnColor: "border border-green-600 text-green-600 hover:bg-green-50"
              }
            ].map((item, index) => (
              <div key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl bg-white">
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.desc}</p>
                  <button
                    onClick={() => {
                      if (item.button === "Start Chat" || item.button === "Send Email") {
                        scrollToSection(formSectionRef);
                      } else if (item.button === "Call Now") {
                        scrollToSection(contactInfoRef);
                      }
                    }}
                    className={`px-6 py-2 rounded-lg font-medium ${item.btnColor}`}
                  >
                    {item.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="shadow-lg rounded-xl bg-white" ref={formSectionRef}>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                      <input id="firstName" placeholder="John" className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="name"/>
                    </div>
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                      <input id="lastName" placeholder="Doe" className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="name" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <input id="email" type="email" placeholder="john@example.com" className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="email" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                    <input id="subject" placeholder="How can we help you?" className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="title"/>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" rows={6} placeholder="Tell us more about your question or feedback..." className="mt-2 w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" name="message" />
                  </div>

                  <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition">Send Message</button>
                  {sent && <p className="text-green-500 font-semibold text-lg">Your message has been sent successfully!</p>}
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8" ref={contactInfoRef}>
              <div className="shadow-lg rounded-xl bg-white p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                {[
                  { icon: <MapPin className="w-6 h-6 text-white" />, title: "Address", desc: "Strecher Ln\nFijai, Takoradi\nGhana", bg: "from-blue-500 to-blue-600" },
                  { icon: <Phone className="w-6 h-6 text-white" />, title: "Phone", desc: "+233 (800) WANDER-1\n+233 (800) 926-3371", bg: "from-purple-500 to-purple-600" },
                  { icon: <Mail className="w-6 h-6 text-white" />, title: "Email", desc: "support@wanderwise.com\nbenafful53@gmail.com", bg: "from-green-500 to-teal-500" },
                  { icon: <Clock className="w-6 h-6 text-white" />, title: "Support Hours", desc: "24/7 Live Chat\nPhone: Mon-Fri 6AM-10PM PST\nEmail: Within 24 hours", bg: "from-orange-500 to-red-500" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${item.bg} flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 whitespace-pre-line">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Offices</h2>
            <p className="text-xl text-gray-600">Find us around the world</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { city: "Fijai", role: "Headquarters", addr: "Strecher Ln\nFijai, Ghana", color: "text-blue-600" },
              { city: "New York", role: "East Coast Hub", addr: "456 Broadway\nNew York, NY 10013", color: "text-purple-600" },
              { city: "London", role: "European Office", addr: "789 Tech Street\nLondon, UK EC2A 4DP", color: "text-green-600" }
            ].map((office, idx) => (
              <div key={idx} className="text-center border-0 shadow-lg rounded-xl bg-white p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{office.city}</h3>
                <p className={`${office.color} font-semibold mb-4`}>{office.role}</p>
                <p className="text-gray-600 whitespace-pre-line">{office.addr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
