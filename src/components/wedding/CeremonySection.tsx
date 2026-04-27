import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import GoldSeparator from "./GoldSeparator";

const CeremonySection = () => (
	<section className="py-24 px-4 bg-background">
		<motion.div
			className="max-w-2xl mx-auto text-center"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8 }}
		>
			<p className="font-script text-lg tracking-[0.3em] uppercase text-gold-dark mb-2">
				Join us for the
			</p>
			<h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
				Ceremony
			</h2>
			<GoldSeparator />
			<div className="mt-8 space-y-4">
				<div className="flex items-center justify-center gap-2 text-muted-foreground">
					<Clock className="w-5 h-5 text-gold" />
					<p className="font-body text-lg">3:00 PM — Friday, May 15, 2026</p>
				</div>
				<div className="flex items-center justify-center gap-2 text-muted-foreground">
					<MapPin className="w-5 h-5 text-gold" />
					<p className="font-body text-lg">Japi Traveller's Hotel</p>
				</div>
				<p className="font-body text-muted-foreground">
					Maharlika Hwy - Brgy Sillawit, Cauayan City Isabela
				</p>
			</div>
			<div className="mt-10 p-8 bg-ivory-dark rounded border border-gold-light/30">
				<p className="font-script text-xl text-foreground italic">
					"Two souls with but a single thought, two hearts that beat as one."
				</p>
				<p className="font-body text-sm text-muted-foreground mt-3">
					— Friedrich Halm
				</p>
			</div>
		</motion.div>
	</section>
);

export default CeremonySection;
