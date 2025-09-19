import type { FC, PropsWithChildren } from 'react';

const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mb-40 bg-background text-primary-foreground">
      {children}
    </div>
  );
};

export default Page;
