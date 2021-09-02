import * as React from 'react';

type ReactChildren = React.ReactNode;

export type LayoutProps = {
  children: ReactChildren;
};

export type GlobalProps = {
  children: ReactChildren;
};

type TypographyTags = 'p' | 'span';
type TypographySizes = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
type TypographyWeights = 'regular' | 'bold';
type TypographyColors = 'background' | 'text' | 'primary' | 'secondary';
export type TypographyProps = React.HTMLAttributes<HTMLOrSVGElement> & {
  children: ReactChildren;
  tagName?: TypographyTags;
  size?: TypographySizes;
  weight?: TypographyWeights;
  color?: TypographyColors;
};
