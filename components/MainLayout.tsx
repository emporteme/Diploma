import { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function MainLayout({ children, title = "Diploma | Universities in Kazakhstan" }: MainLayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Header />
        <main>
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </div>
    </div>
  );
}