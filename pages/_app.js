import '@/css/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <body class="flex flex-col min-h-screen ">
        <Navbar />
        <main class="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </body>
    </ThemeProvider>
  );
}

export default MyApp;
