// src/pages/_app.js
import Layout from '../components/Layout';
import '@/styles/globals.css';
import {SessionProvider} from "next-auth/react"

 function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  );
}

export default App;
