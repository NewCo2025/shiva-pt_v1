import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Calendar, Navigation } from "lucide-react";

const locations = [
  {
    city: "Raleigh",
    state: "NC",
    address: "123 Healing Way, Raleigh, NC 27601",
    phone: "(919) 555-0123",
    hours: "Mon-Fri: 7AM-7PM",
  },
  {
    city: "Charlotte",
    state: "NC",
    address: "456 Recovery Drive, Charlotte, NC 28202",
    phone: "(704) 555-0456",
    hours: "Mon-Fri: 8AM-6PM",
  },
  {
    city: "Atlanta",
    state: "GA",
    address: "789 Wellness Blvd, Atlanta, GA 30309",
    phone: "(404) 555-0789",
    hours: "Mon-Fri: 7AM-7PM",
  },
  {
    city: "Tampa",
    state: "FL",
    address: "321 Therapy Lane, Tampa, FL 33602",
    phone: "(813) 555-0321",
    hours: "Mon-Fri: 8AM-6PM",
  },
];

const LocationsSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visit Us or Book a Consultation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find your nearest clinic and get started on your healing journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card className="h-full border-border/50 shadow-elevated">
              <CardContent className="p-0">
                {/* Placeholder for Google Map */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
                  <div className="relative text-center">
                    <Navigation className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Interactive Map
                    </h3>
                    <p className="text-muted-foreground">
                      Find the closest Shiva Physical Therapy location
                    </p>
                  </div>

                  {/* Location Pins */}
                  {locations.map((location, index) => (
                    <div
                      key={location.city}
                      className="absolute w-4 h-4 bg-accent rounded-full border-2 border-accent-foreground animate-pulse"
                      style={{
                        top: `${25 + index * 15}%`,
                        left: `${30 + index * 20}%`,
                      }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                        {location.city}, {location.state}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Locations List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Our Locations
            </h3>

            {locations.map((location) => (
              <Card
                key={`${location.city}-${location.state}`}
                className="border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-foreground text-lg">
                        {location.city}, {location.state}
                      </h4>
                    </div>
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        {location.address}
                      </span>
                    </div>

                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        {location.phone}
                      </span>
                    </div>

                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        {location.hours}
                      </span>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full mt-4">
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              <MapPin className="mr-2 h-5 w-5" />
              View All Locations
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Your Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
