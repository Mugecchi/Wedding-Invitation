import { motion } from "framer-motion";
import GoldSeparator from "./GoldSeparator";

const colors = [
  { name: "Champagne", color: "hsl(36, 35%, 85%)" },
  { name: "Ivory", color: "hsl(40, 33%, 96%)" },
  { name: "Sage", color: "hsl(140, 15%, 70%)" },
  { name: "Dusty Rose", color: "hsl(350, 30%, 80%)" },
  { name: "Gold", color: "hsl(39, 76%, 50%)" },
];

const DressCodeSection = () => (
  <section className="py-24 px-4 bg-background">
    <motion.div
      className="max-w-2xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <p className="font-script text-lg tracking-[0.3em] uppercase text-gold-dark mb-2">What to wear</p>
      <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">Dress Code</h2>
      <GoldSeparator />
      <p className="font-display text-2xl text-gold-dark mt-6">Black Tie Optional</p>
      <p className="font-body text-muted-foreground mt-3 text-lg">
        We kindly ask guests to dress in formal or semi-formal attire. 
        Our wedding colors are warm and romantic — feel free to complement them!
      </p>
      <div className="flex items-center justify-center gap-4 mt-8">
        {colors.map((c) => (
          <div key={c.name} className="text-center">
            <div
              className="w-12 h-12 rounded-full mx-auto border border-gold-light/50 shadow-sm"
              style={{ backgroundColor: c.color }}
            />
            <p className="font-body text-xs text-muted-foreground mt-2">{c.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default DressCodeSection;
