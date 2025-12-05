import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services />
                <Contact />
            </main>
            <Footer />
        </>
    );
};
