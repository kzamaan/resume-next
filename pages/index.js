import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main className={`page relative ${inter.className}`}>
            <Head>
                <title>KAMRUZZAMAN</title>
            </Head>
            <button
                className='absolute right-6 top-4 rounded bg-gray-100 px-2 py-1 text-sm print:hidden'
                onClick={() => window.print()}>
                Print
            </button>
            <div className='grid h-full grid-cols-12 gap-4 border'>
                <div className='col-span-4 bg-gray-100'>
                    <h1 className='text-xl font-bold'>KAMRUZZAMAN</h1>
                    <p className='text-sm font-medium text-sky-500'>Software Engineer</p>
                </div>
                <div className='col-span-8 bg-gray-200 text-justify'>
                    <p className='font-bold text-sky-500'>Profile</p>

                    <p className='text-sm'>
                        Over two years of experience building web applications, updating existing web applications, and
                        fixing bugs. I like to learn and use new technology in web development. I have worked
                        extensively on various stages of application development by creating & implementing application
                        architecture, which includes various stages in development, code signing, and releasing to
                        Market and collaborative environments for the web platform.
                    </p>
                </div>
            </div>
        </main>
    );
}
