import { motion } from "framer-motion";
import GoldSeparator from "./GoldSeparator";

const photos = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=500&fit=crop",
];

const GallerySection = () => (
  <section className="py-24 px-4 bg-background">
    <motion.div
      className="max-w-5xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <p className="font-script text-lg tracking-[0.3em] uppercase text-gold-dark mb-2">Moments together</p>
      <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">Gallery</h2>
      <GoldSeparator />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {photos.map((src, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded border border-gold-light/20"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={src}
              alt={`Couple photo ${i + 1}`}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default GallerySection;
