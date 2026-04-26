import { motion } from "framer-motion";
import { MapPin, Clock, Music, UtensilsCrossed } from "lucide-react";
import GoldSeparator from "./GoldSeparator";

const ReceptionSection = () => (
	<section className="py-24 px-4 bg-ivory-dark">
		<motion.div
			className="max-w-2xl mx-auto text-center"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8 }}
		>
			<p className="font-script text-lg tracking-[0.3em] uppercase text-gold-dark mb-2">
				Followed by the
			</p>
			<h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
				Reception
			</h2>
			<GoldSeparator />
			<div className="mt-8 space-y-4">
				<div className="flex items-center justify-center gap-2 text-muted-foreground">
					<Clock className="w-5 h-5 text-gold" />
					<p className="font-body text-lg">6:00 PM — Cocktails &amp; Dinner</p>
				</div>
				<div className="flex items-center justify-center gap-2 text-muted-foreground">
					<MapPin className="w-5 h-5 text-gold" />
					<p className="font-body text-lg">Japi Traveller's Hotel</p>
				</div>
				<p className="font-body text-muted-foreground">
					Maharlika Hwy - Brgy Sillawit, Cauayan City Isabela
				</p>
			</div>
			<div className="grid grid-cols-1 gap-6 mt-10">
				{[
					{
						icon: UtensilsCrossed,
						label: "Dinner",
						desc: "Farm-to-table seasonal menu",
					},
				].map(({ icon: Icon, label, desc }) => (
					<div
						key={label}
						className="p-6 bg-background rounded border border-gold-light/30"
					>
						<Icon className="w-8 h-8 text-gold mx-auto mb-3" />
						<p className="font-display text-lg text-foreground">{label}</p>
						<p className="font-body text-sm text-muted-foreground mt-1">
							{desc}
						</p>
					</div>
				))}
			</div>
		</motion.div>
	</section>
);

export default ReceptionSection;
