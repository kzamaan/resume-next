import Image from 'next/image';

export default function Resume() {
    return (
        <div className='page relative'>
            <div className='print-btn space-x-2'>
                <button
                    onClick={() => window.print()}
                    className='gradient-btn group from-purple-600 to-blue-500 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:focus:ring-blue-800'>
                    <div className='gradient-content w-max p-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'>
                            <polyline points='6 9 6 2 18 2 18 9'></polyline>
                            <path d='M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2'></path>
                            <rect x='6' y='14' width='12' height='8'></rect>
                        </svg>
                    </div>
                </button>
                <button className='gradient-btn group from-purple-500 to-pink-500 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500 dark:focus:ring-purple-800'>
                    <div className='gradient-content w-max p-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'>
                            <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
                            <polyline points='7 10 12 15 17 10'></polyline>
                            <line x1='12' y1='15' x2='12' y2='3'></line>
                        </svg>
                    </div>
                </button>
            </div>
            <div className='grid h-full grid-cols-10 gap-4'>
                <div className='col-span-3 bg-gray-50 print:bg-transparent'>
                    <h1 className='text-xl font-bold'>KAMRUZZAMAN</h1>
                    <p className='subtitle'>Software Engineer</p>
                    {/* contact info */}
                    <p className='subtitle mb-4 mt-12'>Contact</p>
                    <ul className='divide-y-2'>
                        <li className='flex items-center py-2'>
                            <Image className='contact-icon' src='/phone.png' width={24} height={24} alt='phone' />
                            <p className='text-sm'>+880 1716 724 245</p>
                        </li>

                        <li className='flex items-center py-2'>
                            <Image className='contact-icon' src='/email.png' width={24} height={24} alt='email' />
                            <p className='resume-link'>kzamanbn@gmail.com</p>
                        </li>

                        <li className='flex items-center py-2'>
                            <Image className='contact-icon' src='/location.png' width={24} height={24} alt='location' />
                            <p className='text-sm'>Tejgaon Industrial Area, 29/C & 29/D, Dhaka</p>
                        </li>

                        <li className='flex items-center py-2'>
                            <Image className='contact-icon' src='/github.png' width={24} height={24} alt='github' />
                            <a href='https://github.com/kzamanbd' target='_blank' className='resume-link'>
                                kzamanbd
                            </a>
                        </li>
                        <li className='flex items-center py-2'>
                            <Image className='contact-icon' src='/linkedin.png' width={24} height={24} alt='github' />
                            <a href='https://linkedin.com/in/kzamanbd' target='_blank' className='resume-link'>
                                kzamanbd
                            </a>
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
                        <button className='gradient-btn group from-purple-600 to-blue-500 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:focus:ring-blue-800'>
                            <span className='gradient-content'>PHP/Laravel</span>
                        </button>
                        <button className='gradient-btn group from-cyan-500 to-blue-500 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:focus:ring-cyan-800'>
                            <span className='gradient-content'>Node.js/Express</span>
                        </button>
                        <button className='gradient-btn group from-green-400 to-blue-600 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:focus:ring-green-800'>
                            <span className='gradient-content'>VueJS/Nuxt/Vuex</span>
                        </button>
                        <button className='gradient-btn group from-purple-500 to-pink-500 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500 dark:focus:ring-purple-800'>
                            <span className='gradient-content'>React/Next/Redux</span>
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
                <div className='col-span-7 bg-gray-50 text-justify print:bg-transparent'>
                    <p className='subtitle'>Profile</p>

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
                            <div className='section-box col-span-2'>
                                <p className='text-sm font-bold'>Jun 2021 - Present</p>
                            </div>
                            <div className='col-span-3 flex flex-col justify-center text-xs'>
                                <a href='https://mononsoft.org' target='_blank' className='resume-link'>
                                    https://mononsoft.org
                                </a>
                                <p>TMC Building (6th Floor), 52 New Eskaton Road, Dhaka 1000.</p>
                            </div>
                        </div>
                        <p className='mt-2'>
                            <span className='font-bold'>Software Engineer</span>
                            <span className='ml-2 text-sm'>at MononSoft Ltd. (A Sister Concern of JMI Group)</span>
                        </p>
                        <ul className='bullet-list'>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Developing an ERP system based on Laravel, Vue.js and React.js.</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Developing software solutions to meet customer needs.</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Creating and implementing the source code of new applications.</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Testing source code and debugging code.</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Evaluating existing applications and performing updates and modifications.</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>
                                    Developing technical handbooks to represent the design and code of new applications.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='mb-4'>
                        {/* last job Experience */}
                        <div className='grid grid-cols-5 gap-16'>
                            <div className='section-box col-span-2'>
                                <p className='text-sm font-bold'>Aug 2020 – Jun 2021</p>
                            </div>
                            <div className='col-span-3 flex flex-col justify-center text-xs'>
                                <a href='https://maxsop.com' target='_blank' className='resume-link'>
                                    https://maxsop.com
                                </a>
                                <p>27/2 Ram Babu Road, Mymensingh – 2200</p>
                            </div>
                        </div>
                        <p className='mt-2'>
                            <span className='font-bold'>Junior Software Engineer </span>
                            <span className='ml-2 text-sm'>at MaxSOP </span>
                        </p>
                        <ul className='bullet-list'>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Developing web applications based on PHP frameworks - Laravel, Vue JS.</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Build efficient, testable & reusable codes. Modify existing code as needed.</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Executed and monitored standards for user interfaces page design and development.</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Perform other operational tasks based on {`"as and when required"`}.</p>
                            </li>
                        </ul>
                    </div>

                    {/* Additional Skills */}
                    <div>
                        {/* last job Experience */}
                        <div className='grid grid-cols-5 gap-16'>
                            <div className='section-box col-span-2'>
                                <p className='text-sm font-bold'>Additional Skills</p>
                            </div>
                        </div>
                        <ul className='bullet-list'>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Good Knowledge on Web Services likes REST/JSON/XML APIs.</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>HTML, CSS, Bootstrap, Tailwind CSS, Livewire and Alpine.js.</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Proficient Understanding of Code Versioning Tools (Git) CI/CD and Github Action.</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Familiarity with DevOps processes and tools (Docker, Kubernetes).</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Knowledge of Linux or other Unix-based systems.</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Ability to work individually and independently with minimal supervision.</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Self-managed, independent, initiative and proactive.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
