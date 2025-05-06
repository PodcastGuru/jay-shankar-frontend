import Header from './Header';
import Footer from './Footer';
import '../app/globals.css';

export default function Layout({ children, title = 'MediCare Nursing' }) {
  return (
    <div className="font-geist-sans antialiased flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow"> {/* Add pt-20 to push content below the fixed header */}
        {children}
      </main>
      <Footer />
    </div>
  );
}