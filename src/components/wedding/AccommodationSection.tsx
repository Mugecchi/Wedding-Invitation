import { motion } from "framer-motion";
import { Hotel, Car, Phone } from "lucide-react";
import GoldSeparator from "./GoldSeparator";

const hotels = [
  { name: "The Wisteria Inn", distance: "0.5 miles from venue", code: "SOPHIA&ALEX2026" },
  { name: "Golden Valley Resort", distance: "2 miles from venue", code: "WEDDINGSEPT26" },
];

const AccommodationSection = () => (
  <section className="py-24 px-4 bg-ivory-dark">
    <motion.div
      className="max-w-2xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <p className="font-script text-lg tracking-[0.3em] uppercase text-gold-dark mb-2">Where to stay</p>
      <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">Accommodation</h2>
      <GoldSeparator />
      <p className="font-body text-muted-foreground mt-4 text-lg mb-10">
        We have arranged special rates at nearby hotels for our guests.
      </p>
      <div className="space-y-6">
        {hotels.map((h) => (
          <div key={h.name} className="p-6 bg-background rounded border border-gold-light/30 text-left">
            <div className="flex items-start gap-4">
              <Hotel className="w-8 h-8 text-gold shrink-0 mt-1" />
              <div>
                <p className="font-display text-xl text-foreground">{h.name}</p>
                <p className="font-body text-muted-foreground text-sm mt-1">{h.distance}</p>
                <p className="font-body text-sm mt-2">
                  <span className="text-gold-dark">Booking code:</span>{" "}
                  <span className="text-foreground font-medium">{h.code}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-8 mt-10 text-muted-foreground">
        <div className="flex items-center gap-2">
          <Car className="w-5 h-5 text-gold" />
          <span className="font-body text-sm">Shuttle service available</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-gold" />
          <span className="font-body text-sm">Concierge on call</span>
        </div>
      </div>
    </motion.div>
  </section>
);

export default AccommodationSection;
