import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import { getGlobalData } from '../../utils/global-data';
import Link from "next/link";

export default function Index({ globalData }) {
  return (
    <Layout>
      <Header name={globalData.name} />
      <main className="w-full py-4">
        <div className="flex items-center w-full max-w-3xl mx-auto">
          <div
              className="w-32 h-32 md:w-40 md:h-40 mr-4 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary content-center">
            <img src="/images/self.jpg" alt="Djordje Nedovic"/>
          </div>
          <p className='mt-2 tex leading-normal mb-6'>
            With over 7 years of experience as a Senior Software Engineer and certified Azure developer, I specialize in
            building innovative, scalable software solutions that optimize processes and enhance user experiences. My
            expertise spans C# (.NET Core), SQL, JavaScript, VueJS, AzureDevOps, and beyond.
          </p>
        </div>

      <div className="flex flex-col items-center w-full max-w-3xl mx-auto mb-8">
        <Link href="/docs/Djordje_Nedovic_CV.pdf" onclick="Lit.event('click-on-check-cv')" className="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Check the full CV here!</Link>
      </div>

        <ol>
          <li className="mb-12">
            <div
                className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              {/*this line is for howering*/}
              <div
                  className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"/>
              <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-50 sm:col-span-2"
                  aria-label="2024 to Present">Nov. 2021 — Present
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <Link
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        href="https://www.endava.com/" target="_blank" rel="noreferrer noopener" aria-label="...">
                        <span
                            className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>
                      <span>Senior Software Engineer,
                          <span className="inline-block pl-1 font-bold">Endava<svg xmlns="http://www.w3.org/2000/svg"
                                                                                   viewBox="0 0 20 20"
                                                                                   fill="currentColor"
                                                                                   className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                                                   aria-hidden="true">
                              <path fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"/>
                            </svg>
                          </span>
                        </span>
                    </Link>
                  </div>
                </h3>
                <ol>
                  <li>
                    <ul>
                      <p className="mt-2 text-sm leading-normal">Worked on a fintech project for a bank, optimizing processes
                        (saved 0.5 FTE), improving scalability, and integrating new products, leveraging .NET Core, VueJS,
                        Azure DevOps, and Terraform (AzureRM). Enhanced CI/CD pipeline automation and played a key role in
                        testing (unit, component, integration) using xUnit and Moq.</p>
                      <p className="mt-2 text-sm leading-normal">
                        Developed a user permissions report that successfully passed external auditing by an independent
                        agency, ensuring regulatory compliance and enhancing governance processes for a startup bank.
                      </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div
                                className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">.NET
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div
                                className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div
                                className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Azure
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div
                                className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">DevOps
                            </div>
                          </li>
                        </ul>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <p className="mt-2 text-sm leading-normal">Built a desktop application for dock station management using
                        WPF and Windows services, improving system performance monitoring (RAM and CPU usage) and automating
                        processes through PowerShell scripts..</p>
                      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        <li className="mr-1.5 mt-2">
                          <div
                              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">.NET
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div
                              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">WPF
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div
                              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">PowerShell
                          </div>
                        </li>
                      </ul>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <p className="mt-2 text-sm leading-normal">
                        Developed a mobile client application for Android to enhance the dispatch process, incorporating photo
                        documentation and barcode scanning functionality, resulting in an improvement in warehouse operations
                        efficiency.
                        </p>
                      <p className="mt-2 text-sm leading-normal">
                        Integrated API communication for image processing and deployed applications on Zebra mobile
                        devices, utilizing camera and barcode scanner capabilities.
                        </p>
                      <p className="mt-2 text-sm leading-normal">Developed a web application for the intralogistics
                        sector, focusing on warehouse management and status tracking. We designed user interfaces and
                        integrated data from multiple sources, contributing to improved warehouse state functionality.
                      </p>
                      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        <li className="mr-1.5 mt-2">
                          <div
                              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">.NET
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div
                              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Blazor
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div
                              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div
                              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Android
                          </div>
                        </li>
                      </ul>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </li>
          <li className="mb-12">
            <div
                className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div
                  className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"/>
              <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-50 sm:col-span-2"
                  aria-label="2024 to Present">Jul 2017 — Nov. 2021
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <Link
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        href="https://www.exlrt.com" target="_blank" rel="noreferrer noopener"
                        aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)">
                        <span
                            className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>
                      <span>Software Developer,
                          <span className="inline-block pl-1 font-bold">EXLRT<svg xmlns="http://www.w3.org/2000/svg"
                                                                                  viewBox="0 0 20 20"
                                                                                  fill="currentColor"
                                                                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                                                  aria-hidden="true">
                              <path fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"/>
                            </svg>
                          </span>
                        </span>
                    </Link>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Developed and maintained mission-critical applications for an airline company, ensuring 99.9% uptime
                  by implementing reliable troubleshooting, testing, and debugging strategies across .NET, Java, and SQL
                  technologies to guarantee system reliability. </p>
                <p className="mt-2 text-sm leading-normal">
                  Maintained high system availability by performing timely maintenance on Windows and Linux servers,
                  utilizing Shell and PowerShell scripting, ensuring uninterrupted business operations.</p>
                <p className="mt-2 text-sm leading-normal">
                  Provided 24/7 on-call support for critical issues, resolving emergent problems within an average of 2
                  hours, reducing downtime and minimizing business disruption
                </p>
                <p className="mt-2 text-sm leading-normal">
                  Mentored junior developers, fostering a collaborative and learning-driven environment that increased team
                  productivity and individual developer growth.
                </p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  <li className="mr-1.5 mt-2">
                    <div
                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">.NET
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div
                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Java
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div
                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">SQL
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div
                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Linux
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ol>
        <ol>
          <h3 className="pb-8 text-2xl">Certifications</h3>
          <li className="mb-12">
            <div
                className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div
                  className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"/>
              <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-50 sm:col-span-2"
                  aria-label="2024 to Present">
                Feb. 2022
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  AZ-500: Microsoft Certified: Azure Security Engineer Associate
                </h3>
              </div>
            </div>
          </li>
          <li className="mb-12">
            <div
                className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div
                  className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"/>
              <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-50 sm:col-span-2"
                  aria-label="2024 to Present">
                Jan. 2022
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  AZ-204: Microsoft Certified: Azure Developer Associate
                </h3>
              </div>
            </div>
          </li>
          <li className="mb-12">
            <div
                className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div
                  className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"/>
              <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-50 sm:col-span-2"
                  aria-label="2024 to Present">
                Dec. 2021
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  AZ-900: Microsoft Certified: Azure Fundamentals
                </h3>
              </div>
            </div>
          </li>
        </ol>
      </main>
      <Footer/>
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

  return {props: {globalData}};
}