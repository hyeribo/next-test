"use client";

import "./globals.css";
import Layout from "@/components/layouts/Layout";
import { StyleProvider } from "@ant-design/cssinjs";
import { noto_sans, noto_sans_kr, fontVariables } from "@/app/fonts.js";

import TabContainer from "@/components/tabs/TabContainer";

export default function RootLayout({ children }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-noto-sans: ${noto_sans.style.fontFamily};
          --font-noto-sans-kr: ${noto_sans_kr.style.fontFamily};
        }
      `}</style>
      <html lang="en">
        <body className={fontVariables}>
          <StyleProvider ssrInline>
            <Layout>
              <TabContainer></TabContainer>
            </Layout>
          </StyleProvider>
        </body>
      </html>
    </>
  );
}
