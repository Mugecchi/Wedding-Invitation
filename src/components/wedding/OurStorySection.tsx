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
			<p className="font-script text-lg tracking-[0.3em] uppercase text-gold-dark mb-2">
				How it all began
			</p>
			<h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
				Our Journey
			</h2>
			<GoldSeparator />
			<div className="flex flex-col justify-start items-center">
				<h2 className="font-display text-4xl md:text-3xl text-foreground mb-2">
					Destined to Meet
				</h2>
				<p className="font-body text-muted-foreground leading-relaxed text-lg mt-4  mb-6">
					Two hearts found each other amidst life's beautiful chaos, creating a
					love story written in the stars.
				</p>
				<h2 className="font-display text-4xl md:text-3xl text-foreground mb-2">
					Built on Warmth
				</h2>
				<p className="font-body text-muted-foreground leading-relaxed text-lg mt-4">
					Our bond grew from warmth, patience, and a love that naturally
					embraced family and friendship.
				</p>
			</div>
			<div className="flex items-center justify-center gap-8 mt-10">
				{[
					{ label: "First Met", date: "June 2014" },
					{ label: "First Date", date: "November 2014" },
				].map((item) => (
					<div key={item.label} className="text-center">
						<p className="font-display text-sm tracking-wider text-gold-dark uppercase">
							{item.label}
						</p>
						<p className="font-script text-lg text-muted-foreground mt-1">
							{item.date}
						</p>
					</div>
				))}
			</div>
		</motion.div>
	</section>
);

export default OurStorySection;
