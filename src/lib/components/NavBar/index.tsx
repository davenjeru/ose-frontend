import type { FC, PropsWithChildren } from 'react';
import openSourceEconomyLogo from '@/lib/icons/open-source-logo.svg';

const NavLink: FC<PropsWithChildren> = ({ children }) => (
  <div className="">{children}</div>
);

const NavBar = () => {
  return (
    <header
      className={`
        sticky top-0 z-10 flex h-23 w-full flex-row justify-between
        bg-background px-10 font-sora font-light text-primary-foreground
      `}
    >
      <div className="flex items-center justify-between gap-2">
        <img
          src={openSourceEconomyLogo}
          alt="Open Source Economy"
          className="h-11 w-17"
        />
        <h1 className="w-47 text-left text-sora-heading-small">
          Open Source Economy
        </h1>
      </div>
      <div className="flex flex-row items-center gap-8 font-roboto">
        <NavLink>Home</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Solutions</NavLink>
        <NavLink>Contact Us</NavLink>
      </div>
      <button
        className={`
          h-11 w-35 self-center rounded-[12px] bg-linear-(--background-gradient)
        `}
      >
        Sign In
      </button>
    </header>
  );
};

export default NavBar;
