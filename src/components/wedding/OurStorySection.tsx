import { motion } from "framer-motion";
import GoldSeparator from "./GoldSeparator";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const OurStorySection = () => (
  <section className="py-24 px-4 bg-ivory-dark">
    <motion.div
      className="max-w-3xl mx-auto text-center"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <p className="font-script text-lg tracking-[0.3em] uppercase text-gold-dark mb-2">How it all began</p>
      <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">Our Story</h2>
      <GoldSeparator />
      <p className="font-body text-muted-foreground leading-relaxed text-lg mt-4">
        It was a rainy Tuesday when their eyes first met across a crowded bookshop. 
        What started as a shared love for poetry quickly blossomed into a love story 
        neither of them could have imagined. Three years, countless adventures, and 
        one unforgettable sunset proposal later — here we are, ready to write the 
        most beautiful chapter together.
      </p>
      <div className="flex items-center justify-center gap-8 mt-10">
        {[
          { label: "First Met", date: "June 2023" },
          { label: "First Date", date: "July 2023" },
          { label: "The Proposal", date: "March 2026" },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <p className="font-display text-sm tracking-wider text-gold-dark uppercase">{item.label}</p>
            <p className="font-script text-lg text-muted-foreground mt-1">{item.date}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default OurStorySection;
