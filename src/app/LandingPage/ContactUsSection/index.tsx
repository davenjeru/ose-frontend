import ContactForm from '@/app/LandingPage/ContactUsSection/ContactForm';
import Page from '@/lib/components/Page.tsx';

const ContactUsSection = () => (
  <Page>
    <div className="flex flex-col items-center gap-8 pt-10">
      <h1
        className={`
          text-center font-sora text-sora-heading-medium
          md:text-sora-heading-large md:font-light
          lg:text-sora-heading-xlarge
          xl:text-sora-heading-xxlarge
        `}
      >
        Don’t Wait For The Next Breach
      </h1>
      <p
        className={`
          text-center font-roboto text-roboto-text-medium font-light
          md:text-roboto-text-large
          lg:max-w-193
        `}
      >
        We’re here to support your business. Whether you want to learn more
        about our services, explore collaboration opportunities, or need
        guidance, our team is ready to help you strengthen your open source
        security.
      </p>
      <ContactForm />
    </div>
  </Page>
);

export default ContactUsSection;
