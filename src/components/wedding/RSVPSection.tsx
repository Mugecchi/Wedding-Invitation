import { motion } from "framer-motion";
import { useState } from "react";
import GoldSeparator from "./GoldSeparator";

const RSVPSection = () => {
	const [submitted, setSubmitted] = useState(false);

	return (
		<section className="py-24 px-4 bg-ivory-dark">
			<motion.div
				className="max-w-xl mx-auto text-center"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.8 }}
			>
				<p className="font-script text-lg tracking-[0.3em] uppercase text-gold-dark mb-2">
					Will you attend?
				</p>
				<h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
					RSVP
				</h2>
				<GoldSeparator />
				<p className="font-body text-muted-foreground mt-4 mb-8">
					Kindly respond by May 10, 2026
				</p>

				{submitted ? (
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						className="p-10 bg-background rounded border border-gold-light/30"
					>
						<p className="font-script text-2xl text-gold-dark">Thank you!</p>
						<p className="font-body text-muted-foreground mt-2">
							We can't wait to celebrate with you.
						</p>
					</motion.div>
				) : (
					<form
						onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
							e.preventDefault();

							const form = e.currentTarget; // ✅ correctly typed
							const data = new FormData(form);

							try {
								const res = await fetch("https://formspree.io/f/xbdqbnng", {
									method: "POST",
									body: data,
									headers: {
										Accept: "application/json",
									},
								});

								if (res.ok) {
									setSubmitted(true);
									form.reset(); // ✅ no error now
								}
							} catch (err) {
								console.error(err);
							}
						}}
						className="space-y-4 text-left"
					>
						<input type="hidden" name="_subject" value="New RSVP Response" />

						<div>
							<label className="font-body text-sm text-muted-foreground block mb-1">
								Full Name
							</label>
							<input
								type="text"
								name="name"
								required
								className="w-full px-4 py-3 bg-background border border-gold-light/40 rounded font-body text-foreground focus:outline-none focus:border-gold transition-colors"
							/>
						</div>

						<div>
							<label className="font-body text-sm text-muted-foreground block mb-1">
								Attending?
							</label>
							<select
								name="attending"
								required
								className="w-full px-4 py-3 bg-background border border-gold-light/40 rounded font-body text-foreground focus:outline-none focus:border-gold transition-colors"
							>
								<option value="">Select</option>
								<option value="yes">Joyfully Accepts</option>
								<option value="no">Regretfully Declines</option>
							</select>
						</div>

						<button
							type="submit"
							className="w-full py-3 gold-gradient text-primary-foreground font-display tracking-wider text-lg rounded hover:opacity-90 transition-opacity mt-4"
						>
							Send RSVP
						</button>
					</form>
				)}
			</motion.div>
		</section>
	);
};

export default RSVPSection;
