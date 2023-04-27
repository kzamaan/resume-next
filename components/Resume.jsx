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
                    <p className='text-sm font-medium text-primary'>Software Engineer</p>
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
                    <p className='mb-4 font-bold text-primary'>Professional Experience</p>
                    <div>
                        {/* last job Experience */}
                        <div className='grid grid-cols-5 gap-16'>
                            <div className='col-span-2 flex h-14 items-center justify-center rounded bg-gray-100'>
                                <p className='text-sm font-bold'>Jun 2021 - Present</p>
                            </div>
                            <div className='col-span-3 flex flex-col justify-center text-xs'>
                                <p className='text-primary underline'>https://mononsoft.org</p>
                                <p>TMC Building (6th Floor),</p>
                                <p>52 New Eskaton Road, Dhaka 1000.</p>
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
                </div>
            </div>
        </div>
    );
}
