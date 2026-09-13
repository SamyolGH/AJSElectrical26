
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesQuotePanel } from "@/components/services/ServicesQuotePanel";

export default function ServicesPage() {
    return (
        <main>
            <ServicesHero/>
            <ServicesGrid/>
            <ServicesQuotePanel/>
        </main>
    )
}