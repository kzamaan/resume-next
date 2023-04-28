import Resume from '@/components/Resume';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main className={`${inter.className}`}>
            <Head>
                <title>KAMRUZZAMAN</title>
                <meta name='title' property='og:title' content='KAMRUZZAMAN' key='title' />
                <meta
                    name='description'
                    property='og:description'
                    content='Over two years of experience building web applications, updating existing web applications, and
                        fixing bugs. I like to learn and use new technology in web development. I have worked
                        extensively on various stages of application development by creating & implementing application
                        architecture, which includes various stages in development, code signing, and releasing to
                        Market and collaborative environments for the web platform.'
                    key='desc'
                />
            </Head>
            <Resume />
        </main>
    );
}
