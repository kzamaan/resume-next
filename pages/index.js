import Resume from '@/components/Resume';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main className={`${inter.className}`}>
            <Head>
                <title>KAMRUZZAMAN</title>
            </Head>
            <Resume />
        </main>
    );
}
