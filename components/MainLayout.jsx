import Head from "next/head"
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../components/ScrollToTop'
export default function MainLayout({ children, title = 'Diploma | Universities in Kazakhstan' }) {
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
    )
}