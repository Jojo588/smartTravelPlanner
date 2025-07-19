import { Link } from "react-router-dom";
import { MapPin, Calendar, Sun, Navigation } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import dubai from '../images/Best-Dubai-Images-download.jpg'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={dubai}
            alt="Beautiful city skyline"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Plan Smarter,{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Travel Better
              </span>{" "}
              with Wander Wise
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
              Your travel assistant for personalized trip planning.
            </p>

            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Wander Wise helps you plan your next adventure with ease. Pick your destination, dates, and
                preferences—our smart assistant takes care of the rest.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Link
              to='/plan-trip-page'>
              Start Planning
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Wander Wise?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the features that make your travel planning effortless and enjoyable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Cards */}
            {[
              {
                icon: <MapPin className="w-8 h-8 text-white" />,
                color: "from-blue-500 to-blue-600",
                title: "Destination Discovery",
                desc: "Explore hidden gems and popular destinations tailored to your interests.",
              },
              {
                icon: <Calendar className="w-8 h-8 text-white" />,
                color: "from-purple-500 to-purple-600",
                title: "Trip Date Planning",
                desc: "Set trip dates by considering seasons, events, and optimal timing.",
              },
              {
                icon: <Sun className="w-8 h-8 text-white" />,
                color: "from-yellow-500 to-orange-500",
                title: "Real-Time Weather Info",
                desc: "Stay informed with accurate forecasts and packing suggestions.",
              },
              {
                icon: <Navigation className="w-8 h-8 text-white" />,
                color: "from-green-500 to-teal-500",
                title: "Points of Interest",
                desc: "Discover must-see attractions and local recommendations.",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of travelers who trust Wander Wise to plan their perfect adventures.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-xl font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Link
            to='/plan-trip-page'>
            Start Planning Now
            </Link>
          </Button>
        </div>
      </section>


    </div>
  );
}
