import Head from 'next/head';
import Footer from "@/components/global/Footer";
import layoutStyles from '@/styles/layout/Layout.module.scss';
import Header from '../global/Header';

const Layout = ({ children, title }) => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Lemon&family=Nunito:ital,wght@0,400;0,600;0,800;1,400;1,600&display=swap" rel="stylesheet" />
            </Head>
            <div className={ layoutStyles.container }>
                <div className={ layoutStyles.content }>
                    <Header />
                    { children }
                </div>
                <Footer />
            </div>
        </div>
    )
};

export default Layout;
