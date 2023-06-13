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

export default function MainLayout({ children, spacing = "5vw", title = "UniTree | Universities in Kazakhstan" }: MainLayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div style={{ position: 'relative' }}>
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