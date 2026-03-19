import { motion } from "framer-motion";
import floralTop from "@/assets/floral-top.png";

const FooterSection = () => (
  <section className="py-24 px-4 bg-ivory-dark relative overflow-hidden">
    <motion.div
      className="max-w-2xl mx-auto text-center z-10 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <p className="font-script text-lg tracking-[0.3em] uppercase text-gold-dark mb-4">
        We can't wait to see you!
      </p>
      <h2 className="font-display text-5xl md:text-6xl text-foreground">
        Sophia <span className="font-script text-gold italic">&</span> Alexander
      </h2>
      <p className="font-display text-xl text-gold-dark mt-4 tracking-wide">
        September 20, 2026
      </p>
      <div className="gold-separator w-48 mx-auto mt-8" />
      <p className="font-body text-sm text-muted-foreground mt-8">
        Made with love for our special day
      </p>
      <p className="font-script text-2xl text-gold mt-4">#SophiaAndAlexander</p>
    </motion.div>
    <img
      src={floralTop}
      alt=""
      className="absolute bottom-0 w-[400px] max-w-full opacity-40 rotate-180 left-1/2 -translate-x-1/2 translate-y-1/3"
    />
  </section>
);

export default FooterSection;
