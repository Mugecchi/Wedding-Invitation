import { motion } from "framer-motion";
import { Gift, Heart } from "lucide-react";
import GoldSeparator from "./GoldSeparator";

const GiftRegistrySection = () => (
  <section className="py-24 px-4 bg-background">
    <motion.div
      className="max-w-2xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <p className="font-script text-lg tracking-[0.3em] uppercase text-gold-dark mb-2">Your generosity</p>
      <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">Gift Registry</h2>
      <GoldSeparator />
      <p className="font-body text-muted-foreground mt-4 text-lg">
        Your presence at our wedding is the greatest gift of all. However, if you 
        wish to honor us with a gift, we have registered at the following places.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {[
          { name: "Honeymoon Fund", desc: "Contribute to our dream trip to the Amalfi Coast", icon: Heart },
          { name: "Gift Registry", desc: "Browse our curated list of home essentials", icon: Gift },
        ].map(({ name, desc, icon: Icon }) => (
          <div key={name} className="p-8 bg-ivory-dark rounded border border-gold-light/30 hover:border-gold/50 transition-colors cursor-pointer group">
            <Icon className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <p className="font-display text-xl text-foreground">{name}</p>
            <p className="font-body text-sm text-muted-foreground mt-2">{desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default GiftRegistrySection;
