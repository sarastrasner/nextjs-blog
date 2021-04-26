import '@/css/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';
require('typeface-quicksand')

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow dark:bg-navy">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
