type ReactChildren = React.ReactNode;

export type ProvidersProps = {
  children: ReactChildren;
};

export type SeoProps = {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
};
