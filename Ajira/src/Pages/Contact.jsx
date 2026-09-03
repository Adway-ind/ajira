import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import EnquiryForm from "../components/contact/EnquiryForm";
import SourcingPromise from "../components/contact/SourcingPromise";
import SourcingFAQ from "../components/contact/SourcingFAQ";
import OfficeLocation from "../components/contact/OfficeLocation";
import SourceCTA from "../components/SourceCTA";

export default function Contact() {
    return (
        <main className="overflow-hidden bg-[#fafbf8] font-poppins text-[#172d46]">
            <ContactHero />
            <ContactInfo />
            <EnquiryForm />
            <OfficeLocation />
            <SourcingFAQ />
            <SourceCTA />
        </main>
    );
}