import Head from 'next/head';
import { ReactNode } from 'react';
import Nav from './Nav';

type LayoutProps = {
  readonly children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Laith Alwazani" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A Temporary Snowflake Proxy" />

        <title>A Temporary Snowflake Proxy</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="assets/images/favicon/favicon.ico"
        />
      </Head>

      <Nav></Nav>

      {/* main content */}

      <main>{children}</main>
    </>
  );
};

export default Layout;
