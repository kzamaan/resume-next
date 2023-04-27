import Image from 'next/image';

export default function Resume() {
    return (
        <div className='page relative'>
            <button
                className='absolute right-6 top-4 rounded bg-gray-100 px-2 py-1 text-sm print:hidden'
                onClick={() => window.print()}>
                Print
            </button>
            <div className='grid h-full grid-cols-10 gap-4'>
                <div className='col-span-3 bg-gray-50'>
                    <h1 className='text-xl font-bold'>KAMRUZZAMAN</h1>
                    <p className='subtitle'>Software Engineer</p>
                    {/* contact info */}
                    <p className='subtitle mb-4 mt-14'>Contact</p>
                    <ul className='divide-y-2'>
                        <li className='flex items-center py-2'>
                            <Image src='/phone.png' width={24} height={24} alt='phone' />
                            <p className='ml-4 text-sm'>+880 1716 724 245</p>
                        </li>

                        <li className='flex items-center py-2'>
                            <Image src='/email.png' width={24} height={24} alt='email' />
                            <p className='ml-4 text-sm'>kzamanbn@gmail.com</p>
                        </li>

                        <li className='flex items-center py-2'>
                            <Image src='/location.png' width={24} height={24} alt='location' />
                            <p className='ml-4 text-sm'>Tejgaon Industrial Area, 29/C & 29/D, Dhaka</p>
                        </li>

                        <li className='flex items-center py-2'>
                            <Image src='/github.png' width={24} height={24} alt='github' />
                            <p className='ml-4 text-sm'>github.com/kzamanbd</p>
                        </li>
                    </ul>

                    {/* Education */}
                    <p className='subtitle my-4'>Education</p>
                    <div className='text-sm'>
                        <div className='mb-2'>
                            <p>
                                <span className='font-bold'>B.SC. In CSE</span>
                                <span>(Continuing)</span>
                            </p>
                            <p className='italic'>Southeast University.</p>
                            <p> – 251/A Tejgaon I/A, Dhaka 1208</p>
                        </div>

                        <div>
                            <p>
                                <span className='font-bold'>Diploma IN CSE </span>
                                <span>(3.31) - 2019</span>
                            </p>
                            <p className='italic'>Rumdo Institute of Modern Technology.</p>
                            <p> – N309 Mymensingh City Bypass.</p>
                        </div>
                    </div>
                    {/* Key Skills */}
                    <p className='subtitle my-4'>Key Skills</p>
                    <div className='space-y-4'>
                        <button className='group relative inline-flex items-center justify-center overflow-hidden rounded bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800'>
                            <span className='relative w-40 rounded-md bg-white px-3 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                                PHP/Laravel
                            </span>
                        </button>
                        <button className='group relative inline-flex items-center justify-center overflow-hidden rounded bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800'>
                            <span className='relative w-40 rounded-md bg-white px-3 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                                Node.js/Express
                            </span>
                        </button>
                        <button className='group relative inline-flex items-center justify-center overflow-hidden rounded bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800'>
                            <span className='relative w-40 rounded-md bg-white px-3 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                                VueJS/Nuxt/Vuex
                            </span>
                        </button>
                        <button className='group relative inline-flex items-center justify-center overflow-hidden rounded bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500 dark:text-white dark:focus:ring-purple-800'>
                            <span className='relative w-40 rounded-md bg-white px-3 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                                React/Next/Redux
                            </span>
                        </button>
                    </div>
                    {/* Training */}
                    <p className='subtitle my-4'>Training</p>
                    <div className='space-y-2 text-sm'>
                        <div>
                            <p className='font-bold'>PHP/Laravel (2019)</p>
                            <p className='italic'>Creative It Institute, Dhaka.</p>
                        </div>
                        <div>
                            <p className='font-bold'>Redux (2023)</p>
                            <p className='italic'>Learn with Sumit.</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-7 bg-gray-50 text-justify'>
                    <p className='font-bold text-primary'>Profile</p>

                    <p className='mb-4 mt-2 text-sm'>
                        Over two years of experience building web applications, updating existing web applications, and
                        fixing bugs. I like to learn and use new technology in web development. I have worked
                        extensively on various stages of application development by creating & implementing application
                        architecture, which includes various stages in development, code signing, and releasing to
                        Market and collaborative environments for the web platform.
                    </p>

                    {/* Experience section */}
                    <p className='subtitle mb-4'>Professional Experience</p>
                    <div className='mb-4'>
                        {/* last job Experience */}
                        <div className='grid grid-cols-5 gap-16'>
                            <div className='col-span-2 flex h-14 items-center justify-center rounded bg-gray-100'>
                                <p className='text-sm font-bold'>Jun 2021 - Present</p>
                            </div>
                            <div className='col-span-3 flex flex-col justify-center text-xs'>
                                <p className='text-primary underline'>https://mononsoft.org</p>
                                <p>TMC Building (6th Floor), 52 New Eskaton Road, Dhaka 1000.</p>
                            </div>
                        </div>
                        <p className='mt-2'>
                            <span className='font-bold'>Software Engineer</span>
                            <span className='ml-2 text-sm'>at MononSoft Ltd. (A Sister Concern of JMI Group)</span>
                        </p>
                        <ul className='mt-2 space-y-1.5'>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                                </div>
                                <p className='text-sm'>
                                    Developing an ERP system based on Laravel, Vue.js and React.js.
                                </p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                                </div>
                                <p className='text-sm'>Developing software solutions to meet customer needs.</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                                </div>
                                <p className='text-sm'>
                                    Creating and implementing the source code of new applications.
                                </p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                                </div>
                                <p className='text-sm'>Testing source code and debugging code.</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                                </div>
                                <p className='text-sm'>
                                    Evaluating existing applications and performing updates and modifications.
                                </p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                                </div>
                                <p className='text-sm'>
                                    Developing technical handbooks to represent the design and code of new applications.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {/* last job Experience */}
                        <div className='grid grid-cols-5 gap-16'>
                            <div className='col-span-2 flex h-14 items-center justify-center rounded bg-gray-100'>
                                <p className='text-sm font-bold'>Aug 2020 – Jun 2021</p>
                            </div>
                            <div className='col-span-3 flex flex-col justify-center text-xs'>
                                <p className='text-primary underline'>https://maxsop.com</p>
                                <p>27/2 Ram Babu Road, Mymensingh – 2200</p>
                            </div>
                        </div>
                        <p className='mt-2'>
                            <span className='font-bold'>Junior Software Engineer </span>
                            <span className='ml-2 text-sm'>at MaxSOP </span>
                        </p>
                        <ul className='mt-2 space-y-1.5'>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                                </div>
                                <p className='text-sm'>
                                    Developing web applications based on PHP frameworks - Laravel, Vue JS.
                                </p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                                </div>
                                <p className='text-sm'>
                                    Build efficient, testable & reusable codes. Modify existing code as needed.
                                </p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                                </div>
                                <p className='text-sm'>
                                    Executed and monitored standards for user interfaces page design and development.
                                </p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                                </div>
                                <p className='text-sm'>
                                    Perform other operational tasks based on {`"as and when required"`}.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
