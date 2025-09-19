import NewsletterForm from '@/lib/components/Footer/NewsletterForm';
import LandingPageIcon from '@/lib/components/LandingPageIcon';
import linkedInIcon from '@/lib/icons/linkedin.svg';
import openSourceEconomyLogo from '@/lib/icons/open-source-logo.svg';
import xIcon from '@/lib/icons/x.svg';
import youtubeIcon from '@/lib/icons/youtube.svg';

const Footer = () => (
  <footer
    className={`
      w-full bg-background px-15 pb-20 font-sora font-light
      text-primary-foreground
    `}
  >
    <div className="flex flex-row justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2 self-start">
          <img
            src={openSourceEconomyLogo}
            alt="Open Source Economy"
            className="h-11 w-17"
          />
          <h4 className="w-47 text-left text-sora-heading-small">
            Open Source Economy
          </h4>
        </div>
        <p
          className={`
            font-roboto text-sora-text-small font-light text-primary-grey
          `}
        >
          Open Source Economy is a non-profit organization dedicated to helping
          developers keep
          <br /> contributing to open source while receiving funding for their
          projects.
        </p>
      </div>
      <div className="flex flex-col place-items-start gap-2">
        <h5 className="text-left text-sora-heading-small">Company</h5>
        <button>Button</button>
        <button>Button</button>
      </div>
      <div className="flex flex-col place-items-start gap-2">
        <h5 className="text-left text-sora-heading-small">Resources</h5>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-around px-18">
          <a
            href="https://www.linkedin.com/company/open-source-economy"
            rel="no-referrer no-opener noreferrer"
            target="_blank"
          >
            <LandingPageIcon src={linkedInIcon} height={24} width={24} />
          </a>
          <a
            href="https://x.com/OS_Economy"
            rel="no-referrer no-opener noreferrer"
            target="_blank"
          >
            <LandingPageIcon src={xIcon} height={24} width={24} />
          </a>
          <a
            href="https://www.youtube.com/@OpenSourceEconomy-hn3tg"
            rel="no-referrer no-opener noreferrer"
            target="_blank"
          >
            <LandingPageIcon src={youtubeIcon} height={24} width={24} />
          </a>
        </div>
        <NewsletterForm />
      </div>
    </div>
    <hr className="mt-8 mb-2" />
    <div
      className={`
        flex flex-row justify-between font-roboto text-roboto-text-regular
        font-light
      `}
    >
      <p>
        © Open Source Economy - Non profit organisation -
        <span className="mr-2 ml-3">CHE-440.058.692</span>
        Switzerland
      </p>
      <p>Terms Of Service | Privacy Policy</p>
    </div>
  </footer>
);

export default Footer;
