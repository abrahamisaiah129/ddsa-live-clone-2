import Faq from "../../components/faq";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Pricing from "../../components/pricing";
import Section1 from "../../components/section1";
import WhyChooseDDSA from "../../components/whyChooseDDSA";
function DashboardPage() {
    return (
        <div id="home">
            <Hero />
            <Section1 />
            <WhyChooseDDSA />
            <Faq />
            <Pricing />
            <Footer />
        </div>
    );
}

export default DashboardPage;