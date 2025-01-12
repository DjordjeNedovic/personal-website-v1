import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import {getGlobalData} from "../../utils/global-data";

export default function Index({globalData}) {
    return (
        <Layout>
            <Header name={globalData.name} />
            <main className="w-full">
                <h1>Thanks for your feedback</h1>
                <Link href="/" >Take me home</Link>
            </main>
            <Footer />
            <GradientBackground
                variant="large"
                className="fixed top-20 opacity-40 dark:opacity-60"
            />
            <GradientBackground
                variant="small"
                className="absolute bottom-0 opacity-20 dark:opacity-10"
            />
        </Layout>
    );
}

export function getStaticProps() {
    const globalData = getGlobalData();
    return { props: { globalData } };
}