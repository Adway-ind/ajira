import HeroSection from "../components/HeroSection";
import TrustStats from "../components/TrustStats";
import AjiraEdgeSection from "../components/AjiraEdgeSection";
import ProductCatalog from "../components/ProductCatalog";
import QualityStandards from "../components/QualityStandards";
import GlobalCertifications from "../components/GlobalCertifications";
import SourceCTA from "../components/SourceCTA";
import WhoWeAre from "../components/WhoWeAre";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <WhoWeAre />

      <TrustStats />

      <AjiraEdgeSection />

      <ProductCatalog />

      <QualityStandards />

      <GlobalCertifications />

      <SourceCTA />
    </main>
  );
}