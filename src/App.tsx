import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Properties from './components/Properties';
import CtaFeature from './components/CtaFeature';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <Properties />
        <CtaFeature />
      </main>
      <Footer />
    </div>
  );
}

export default App;
