import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";

/**
 * HomePage stays thin — it just composes sections.
 * Each section manages its own data and layout.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
    </>
  );
}
