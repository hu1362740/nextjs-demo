// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
// .pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout, ILayoutProps } from "@/pages/components/layout";

const MyApp = (data: AppProps & ILayoutProps) => {
  const { Component, pageProps, navbarData, footerData } = data;
  console.log('data',data)
  return (
    <Layout navbarData={navbarData} footerData={footerData}>
      <Component {...pageProps} />
    </Layout>
  );
};
export default MyApp;