declare module "@theme/Layout" {
  import type { FC, ReactNode } from "react";
  const Layout: FC<{
    children: ReactNode;
    title?: string;
    description?: string;
  }>;
  export default Layout;
}

declare module "@docusaurus/useDocusaurusContext" {
  export default function useDocusaurusContext(): {
    siteConfig: { title: string; tagline: string };
  };
}

declare module "@docusaurus/Link" {
  import type { FC, ReactNode } from "react";
  const Link: FC<{ to: string; children: ReactNode; className?: string }>;
  export default Link;
}
