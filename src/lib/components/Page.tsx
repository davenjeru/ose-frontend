import type { FC, PropsWithChildren } from 'react';

const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mb-40 bg-background px-4 text-primary-foreground">
      {children}
    </div>
  );
};

export default Page;
