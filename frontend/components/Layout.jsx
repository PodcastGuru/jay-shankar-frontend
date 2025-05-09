// import Header from './Header';
// import Footer from './Footer';
// import '../app/globals.css';

// export default function Layout({ children, title = 'MediCare Nursing' }) {
//   return (
//     <div className="font-geist-sans antialiased flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-grow"> {/* Add pt-20 to push content below the fixed header */}
//         {children}
//       </main>
//       <Footer />
//     </div>
//   );
// }




'use client';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../app/globals.css';

export default function Layout({ children, title = 'MediCare Nursing' }) {
  const [mounted, setMounted] = useState(false);

  // Ensure we only render once client-side to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="font-geist-sans antialiased flex flex-col min-h-screen">
      <div className="h-20"></div> {/* Header placeholder */}
      <div className="flex-grow"></div> {/* Content placeholder */}
    </div>;
  }
  
  return (
    <div className="font-geist-sans antialiased flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow"> {/* Added pt-20 to push content below the fixed header */}
        {children}
      </main>
      <Footer />
    </div>
  );
}