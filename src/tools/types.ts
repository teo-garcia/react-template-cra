type ReactChildren = React.ReactNode;

type Theme = {
  typographyWeights: 'regular' | 'medium' | 'bold';
  colors:
    | 'background'
    | 'text'
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'tertiary';
};

export type LayoutProps = {
  children: ReactChildren;
};

export type GlobalProps = {
  children: ReactChildren;
};

export type TypographyProps = React.HTMLAttributes<HTMLOrSVGElement> & {
  children: ReactChildren;
  tagName?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: Theme['typographyWeights'];
  color?: Theme['colors'];
};

export type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement>;

export type MetaProps = {
  title: string;
  description: string;
};

export type MessageProps = {
  brandName: string;
  mainContent: string;
  secondaryContent?: string;
};

export type SubscribeFormProps = {
  label: string;
  name: string;
  onSubmit: (value: string) => void;
};
