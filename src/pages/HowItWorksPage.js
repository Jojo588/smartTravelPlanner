import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { MapPin, Calendar, Sparkles, CheckCircle, ArrowRight} from "lucide-react";
import {Link} from 'react-router-dom'

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            How{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Wander Wise
            </span>{" "}
            Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Planning your perfect trip has never been easier. Follow these simple steps to create unforgettable travel
            experiences.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Step 1 */}
            <Step
              number="1"
              title="Tell Us Your Dreams"
              bg="from-blue-500 to-blue-600"
              icon={<MapPin className="w-16 h-16 text-blue-600 mb-4" />}
              cardTitle="Destination Input"
              cardDesc="Interactive form with smart suggestions and preference matching."
              points={[
                "Choose your destination",
                "Enter destination in search box",
                "Set your travel dates and duration"
              ]}
            />

            {/* Step 2 */}
            <Step
              number="2"
              title="API Creates Your Plan"
              reverse
              bg="from-purple-500 to-purple-600"
              icon={<Sparkles className="w-16 h-16 text-purple-600 mb-4" />}
              cardTitle="API Processing"
              cardDesc="Api processing algorithms provides city information in seconds."
              cardBg="from-purple-50 to-pink-50"
              points={[
                "Real-time weather updates for next 5 days ",
                "Points of interest for chosen city",
                "City map display"
              ]}
            />

            {/* Step 3 */}
            <Step
              number="3"
              title="Customize & Refine"
              bg="from-green-500 to-teal-500"
              icon={<Calendar className="w-16 h-16 text-green-600 mb-4" />}
              cardTitle="Trip Plan Customization"
              cardDesc="Interactive timeline with easy customization and real-time updates."
              cardBg="from-green-50 to-teal-50"
              points={[
                "Click on trip planner page",
                "Go through api suggestions to make decisions",
                "Alternative suggestions for each activity"
              ]}
            />

            {/* Step 4 */}
            <Step
              number="4"
              title="Travel & Enjoy"
              reverse
              bg="from-orange-500 to-red-500"
              icon={<CheckCircle className="w-16 h-16 text-orange-600 mb-4" />}
              cardTitle="Travel Ready"
              cardDesc="Everything you need for a perfect trip, right in your pocket."
              cardBg="from-orange-50 to-red-50"
              points={[
                "Offline access to your complete itinerary",
                "Real-time notifications and updates",
                "24/7 travel support and assistance"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Planning?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered the joy of stress-free trip planning.
          </p>
          <Button className="bg-white text-blue-600 duration-300 hover:bg-gray-200 px-8 py-4 text-lg font-semibold rounded-full">
            <Link
            to='/plan-trip-page'
            className="flex">
            Start Your Journey <ArrowRight className="ml-2 w-5 h-5 mt-1" />
        </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}

// Step component used above
function Step({ number, title, bg, icon, cardTitle, cardDesc, points, reverse = false, cardBg }) {
  const layout = reverse ? "md:flex-row-reverse" : "md:flex-row";
  const cardBgClass = cardBg || "from-blue-50 to-purple-50";

  return (
    <div className={`flex flex-col ${layout} items-center mb-20`}>
      <div className={`md:w-1/2 mb-8 md:mb-0 ${reverse ? "md:pl-12" : "md:pr-12"}`}>
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${bg} rounded-full flex items-center justify-center text-white font-bold text-xl mr-4`}>
            {number}
          </div>
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </div>
        <ul className="text-lg text-gray-600 mb-6">
          {points.map((point, i) => (
            <li key={i} className="flex items-center mb-3">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2">
        <Card className={`bg-gradient-to-br ${cardBgClass} border-0 shadow-xl`}>
          <CardContent className="p-8">
            {icon}
            <h3 className="text-xl font-semibold mb-2">{cardTitle}</h3>
            <p className="text-gray-600">{cardDesc}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
