import { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  spacing: string;
}

export default function MainLayout({ children, spacing = "2vw", title = "Diploma | Universities in Kazakhstan" }: MainLayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Header />
        <main style={{ padding: spacing }}>
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </div>
    </div>
  );
}