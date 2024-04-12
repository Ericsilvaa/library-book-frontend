import { PropsWithChildren } from 'react';

export default function BaseLayout({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}
