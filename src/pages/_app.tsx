// import "../styles/globals.css";
// import type { AppProps } from "next/app";
// import { Layout, ILayoutProps } from "@/pages/components/layout";

// const MyApp = (data: AppProps & ILayoutProps) => {
//   const { Component, pageProps, navbarData, footerData } = data;
//   console.log('data',data)
//   return (
//     <Layout navbarData={navbarData} footerData={footerData}>
//       <Component {...pageProps} />
//     </Layout>
//   );
// };
// export default MyApp;

// ./pages/_app.tsx
import "../styles/globals.css";
import type { AppProps, AppContext } from "next/app";
import App from "next/app";
import { Layout, ILayoutProps } from "@/pages/components/layout";
import code from "@/public/code.png";

const MyApp = (data: AppProps & ILayoutProps) => {
  const { Component, pageProps, navbarData, footerData } = data;

  return (
    <div>
      <Layout navbarData={navbarData} footerData={footerData}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

MyApp.getInitialProps = async (context: AppContext) => {
  const pageProps = await App.getInitialProps(context);

  return {
    ...pageProps,
    navbarData: {},
    footerData: {
      title: "Demo",
      linkList: [
        {
          title: "技术栈",
          list: [
            {
              label: "react",
            },
            {
              label: "typescript",
            },
            {
              label: "ssr",
            },
            {
              label: "nodejs",
            },
          ],
        },
        {
          title: "了解更多",
          list: [
            {
              label: "掘金",
              link: "https://juejin.cn/user/2714061017452557",
            },
            {
              label: "知乎",
              link: "https://www.zhihu.com/people/zmAboutFront",
            },
            {
              label: "csdn",
            },
          ],
        },
        {
          title: "联系我",
          list: [{ label: "微信" }, { label: "QQ" }],
        },
      ],
      qrCode: {
        image: code,
        text: "祯民讲前端微信公众号",
      },
      copyRight: "Copyright © 2022 xxx. 保留所有权利",
      siteNumber: "粤ICP备XXXXXXXX号-X",
      publicNumber: "粤公网安备 xxxxxxxxxxxxxx号",
    },
  };
};

export default MyApp;