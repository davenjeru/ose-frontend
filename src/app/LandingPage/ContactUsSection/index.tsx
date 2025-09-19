import ContactForm from '@/app/LandingPage/ContactUsSection/ContactForm';
import Page from '@/lib/components/Page.tsx';

const ContactUsSection = () => (
  <Page>
    <div className="flex flex-col items-center gap-8 pt-10">
      <h1 className="text-center font-sora text-sora-heading-xxlarge font-light">
        Don’t Wait For The Next Breach
      </h1>
      <p className="text-center font-roboto text-roboto-text-large font-light">
        We’re here to support your business. Whether you want to learn more
        about our services,
        <br /> explore collaboration opportunities, or need guidance, our team
        is ready to help you
        <br />
        strengthen your open source security.
      </p>
      <ContactForm />
    </div>
  </Page>
);

export default ContactUsSection;
