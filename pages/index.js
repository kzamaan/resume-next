import CoverLetter from '@/components/CoverLetter';
import Resume from '@/components/Resume';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main className={`${inter.className}`}>
            <Head>
                <title>KAMRUZZAMAN</title>
                <meta
                    name='viewport'
                    content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
                />
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
                <link rel='manifest' href='/manifest.json' />
                <link rel='apple-touch-icon' href='/icons/icon-192x192.png' />
                <meta name='theme-color' content='#009EF7' />
                <meta name='apple-mobile-web-app-status-bar' content='#009EF7' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-title' content='KAMRUZZAMAN' />
                <meta name='application-name' content='KAMRUZZAMAN' />
                <meta name='msapplication-TileColor' content='#009EF7' />
                <meta name='msapplication-TileImage' content='/icons/icon-192x192.png' />
                <meta name='theme-color' content='#009EF7' />

                <meta name='twitter:card' content='summary' />
                <meta name='twitter:url' content='https://kzaman.vercel.app' />
                <meta name='twitter:title' content='PWA App' />
                <meta name='twitter:description' content='Best PWA App in the world' />
                <meta name='twitter:image' content='https://kzaman.vercel.app/icons/android-chrome-192x192.png' />
                <meta name='twitter:creator' content='@DavidWShadow' />
                <meta property='og:type' content='website' />
                <meta property='og:title' content='PWA App' />
                <meta property='og:description' content='Best PWA App in the world' />
                <meta property='og:site_name' content='PWA App' />
                <meta property='og:url' content='https://kzaman.vercel.app' />
                <meta property='og:image' content='https://kzaman.vercel.app/icons/apple-touch-icon.png' />
            </Head>
            <Resume />
            <CoverLetter />
        </main>
    );
}
