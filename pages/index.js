import {getPosts, getProjects} from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, {GradientBackground} from '../components/Layout';
import {getGlobalData} from '../utils/global-data';
import SEO from '../components/SEO';
import Link from "next/link";
import {FeedbackForm} from "../components/FeedbackForm";

export default function Index({posts, globalData, projects}) {
    return (
        <Layout>
            <SEO title={ globalData.name + " | " + globalData.blogDescription } description={ globalData.blogTitle } keywords={ globalData.homePageSeoKeywords }/>
            <Header name={globalData.name}/>
            <main className="w-full max-sm:px-4 py-8">
                <h1 className="text-4xl text-left">
                    Hi, I&apos;m Djordje Nedovic – Crafting Scalable Solutions, One Line of Code at a Time!
                </h1>
                <div className="flex pt-10 ">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary content-center">
                        <img src="/images/self.jpg" alt="Djordje Nedovic"/>
                    </div>
                    <p className="text-xl sm:text-2xl text-left mt-4 italic">
                        Welcome to my blog! I&apos;m a Senior Software Engineer and certified Azure developer with over 7
                        years of experience in fintech and web development. Here, I share insights on fintech, cloud
                        migration, cybersecurity, and more. Outside work, I enjoy programming puzzles, handball, and
                        reading. Let’s connect and create something impactful!
                    </p>
                </div>

                <div className="flex flex-col gap-x-2 space-y-5 pt-12">
                    <p className="text-3xl text-left">Posts</p>
                    <ul className="flex flex-col gap-x-2 space-y-5">
                        {posts.map((post, index) => (
                            <li key={index} className="border-b-2">
                                <Link as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`} href={`/posts/[slug]`} onClick="Lit.event('click-on-post')">
                                    <article>
                                        <h3 className="text-2xl text-left">{post.data.title}</h3>
                                        <p className="text-xl text-left mt-2 italic ">{post.data.description}</p>
                                    </article>
                                    <svg className="float-right " xmlns="http://www.w3.org/2000/svg" width="32"
                                         height="32" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z"/>
                                    </svg>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link className="text-lg sm:text-xl text-right underline underline-offset-1" href={`/posts`}  onClick="Lit.event('click-on-posts')">
                        See all posts
                    </Link>
                </div>

                <div className="flex flex-col gap-x-2 space-y-5 pt-12">
                    <p className="text-3xl text-left">Projects</p>
                    <ul className="grid gap-4 grid-cols-3">
                        {projects.map((project, index) => (
                            <li key={index} className="border-r-2">
                                <Link as={`/projects/${project.filePath.replace(/\.mdx?$/, '')}`}
                                      href={`/projects/[slug]`}  onClick="Lit.event('click-on-project')">
                                    <article>
                                        <h3 className="text-2xl text-left">{project.data.title}</h3>
                                        <p className="text-xl text-left mt-2 italic ">{project.data.description}</p>
                                    </article>
                                    <svg className="float-right " xmlns="http://www.w3.org/2000/svg" width="32"
                                         height="32" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z"/>
                                    </svg>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link className="text-lg sm:text-xl text-right underline underline-offset-1" href={`/projects`} onClick="Lit.event('click-on-projects')">
                        See all projects
                    </Link>
                </div>
            </main>

            <FeedbackForm/>

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
    const posts = getPosts();
    const projects = getProjects();
    const globalData = getGlobalData();

    return {props: {posts, globalData, projects}};
}
