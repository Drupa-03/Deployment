import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>softwingz</title>
        <link rel="icon" href="/images.jpeg" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Smart Bazar - Your one-stop shop for fashion and beauty." />
      </Head>
      
      <main>{children}</main>
      
    </>
  );
}
