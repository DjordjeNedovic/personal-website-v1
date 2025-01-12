import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import { getGlobalData } from '../../utils/global-data';
import { getProjects } from '../../utils/mdx-utils';
import ArrowIcon from '../../components/ArrowIcon';
import SEO from "../../components/SEO";

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.projectsSeoTitle} description={globalData.projectsSeoDescription} keywords={globalData.projectsSeoKeywords}/>
      <Header name={globalData.name} />
      <main className="w-full  py-4">
        <h1 className="mb-4 text-2xl text-center">
            Development Journey
        </h1>
        <ul className="w-full px-8 py-2">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="my-2 py-2 transition bg-white border border-b-0 border-gray-800 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-b hover:border-b hovered-sibling:border-t-0" data-sb-object-id={`projects/${post.filePath}`}
            >
              <Link
                as={`/projects/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/projects/[slug]`}
                className="block px-6 py-6 lg:py-10 lg:px-16 focus:outline-none focus:ring-4">

                {post.data.date && (
                  <p className="mb-3 uppercase opacity-60" data-sb-field-path="date">
                    {post.data.date}
                  </p>
                )}
                <h2 className="text-xl md:text-2xl" data-sb-field-path="title">{post.data.title}</h2>
                {post.data.description && (
                  <p className="mt-3 text-xl opacity-60 italic" data-sb-field-path="description">
                    {post.data.description}
                  </p>
                )}
                <ArrowIcon className="mt-4" />

              </Link>
            </li>
          ))}
        </ul>
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
  const posts = getProjects();
  return { props: { posts, globalData } };
}