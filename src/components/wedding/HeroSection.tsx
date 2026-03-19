import { motion } from "framer-motion";
import floralTop from "@/assets/floral-top.png";
import GoldSeparator from "./GoldSeparator";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden px-4">
    <motion.img
      src={floralTop}
      alt=""
      className="absolute top-0 w-[500px] max-w-full opacity-80"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 0.8, y: 0 }}
      transition={{ duration: 1.2 }}
    />
    <motion.div
      className="text-center z-10 mt-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <p className="font-script text-lg tracking-[0.3em] uppercase text-muted-foreground mb-6">
        Together with their families
      </p>
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground leading-tight">
        Sophia
      </h1>
      <p className="font-script text-3xl md:text-4xl text-gold italic my-3">&amp;</p>
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground leading-tight">
        Alexander
      </h1>
      <GoldSeparator className="my-6" />
      <p className="font-script text-xl md:text-2xl text-muted-foreground tracking-wider">
        Request the pleasure of your company
      </p>
      <p className="font-display text-2xl md:text-3xl text-gold-dark mt-4 tracking-wide">
        September 20, 2026
      </p>
    </motion.div>
    <motion.div
      className="absolute bottom-8"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <div className="w-5 h-8 border-2 border-gold-light rounded-full flex items-start justify-center pt-1">
        <div className="w-1 h-2 bg-gold rounded-full" />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
