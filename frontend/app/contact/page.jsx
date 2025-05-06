// app/services/page.jsx

// import ServicesPage from "@/components/pages/ServicesPage";
// import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPage from "@/components/pages/ContactPage";
export default function Services() {
    return (
        <div className="font-geist-sans antialiased flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow"> {/* Add pt-20 to push content below the fixed header */}
                <ContactPage />
            </main>
            <Footer />
        </div>
    );
}