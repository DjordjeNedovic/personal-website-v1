import Head from 'next/head';

export default function SEO({ title, description, keywords }) {
  return (
      <Head>
          <title>{title}</title>
          <meta name="description" content={description}/>
          <meta property="og:title" content={title}/>
          <meta name="keywords" content={keywords}/>
          <meta property="og:description" content={description}/>
          <meta property="og:type" content="website"/>
          <meta name="google-site-verification" content="NexAAqcA4HTnd0HO2t4ZhWdqzXahMveX0dS6uaT74zo"/>
      </Head>
  );
}
