import type { FC, PropsWithChildren } from 'react';

const Page: FC<PropsWithChildren> = ({ children }) => (
  <div className="h-[calc(100vh-92px)] bg-background text-primary-foreground">
    {children}
  </div>
);

export default Page;
