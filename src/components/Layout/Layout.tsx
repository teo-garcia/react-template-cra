import './Layout.scss';

import { LayoutProps } from '../../tools/types';

function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div className="layout">
      <header />
      <main>{children}</main>
      <footer />
    </div>
  );
}

export { Layout };
