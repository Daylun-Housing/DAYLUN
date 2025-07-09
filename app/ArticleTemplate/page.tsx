import StdLayout from "../components/StdLayout";
import HeroImage from "./Components/HeroImage";
import MainArticle from "./Components/MainArticle";
import Footer from "../components/Footer";

export default function ArticleTemplatePage() {
  return (
    <StdLayout>

      <HeroImage />

      <MainArticle />

      <Footer />
    </StdLayout>
  );
}
