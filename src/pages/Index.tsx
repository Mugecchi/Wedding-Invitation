import HeroSection from "@/components/wedding/HeroSection";
import OurStorySection from "@/components/wedding/OurStorySection";
import CeremonySection from "@/components/wedding/CeremonySection";
import ReceptionSection from "@/components/wedding/ReceptionSection";
import DressCodeSection from "@/components/wedding/DressCodeSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import GiftRegistrySection from "@/components/wedding/GiftRegistrySection";
import AccommodationSection from "@/components/wedding/AccommodationSection";
import GallerySection from "@/components/wedding/GallerySection";
import FooterSection from "@/components/wedding/FooterSection";

const Index = () => (
	<main className="overflow-x-hidden">
		<HeroSection />
		<OurStorySection />
		<CeremonySection />
		<ReceptionSection />
		<DressCodeSection />
		<RSVPSection />
		<FooterSection />
	</main>
);

export default Index;
