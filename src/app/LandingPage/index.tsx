import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import CaseStudySection from '@/app/LandingPage/CaseStudySection';
import ContactUsSection from '@/app/LandingPage/ContactUsSection';
import LetUsProtectSection from '@/app/LandingPage/LetUsProtectSection';
import PrimarySection from '@/app/LandingPage/PrimarySection';
import Footer from '@/lib/components/Footer';
import NavBar from '@/lib/components/NavBar';

const BACKEND_GRAPHQL_URL = `${import.meta.env.VITE_OSE_BACKEND_URI}/graphql`;

const client = new ApolloClient({
  link: new HttpLink({ uri: BACKEND_GRAPHQL_URL }),
  cache: new InMemoryCache(),
});

const LandingPage = () => (
  <ApolloProvider client={client}>
    <NavBar />
    <PrimarySection />
    <CaseStudySection />
    <LetUsProtectSection />
    <ContactUsSection />
    <Footer />
  </ApolloProvider>
);

export default LandingPage;
