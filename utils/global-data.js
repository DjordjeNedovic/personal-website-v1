export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Djordje Nedovic';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'A software engineer\'s blog showcasing 7+ years of expertise in web technologies, cloud solutions, and secure, scalable applications. Explore insights on .NET Core, Node.js, Azure DevOps, and more.';
  const blogDescription = process.env.BLOG_DESCRIPTION
    ? decodeURI(process.env.BLOG_DESCRIPTION)
    : 'Portfolio, Blog, and Developer Insights';

  const postsSeoKeywords = process.env.BLOG_SEO_KEYWORDS
      ? decodeURI(process.env.BLOG_SEO_KEYWORDS)
      : 'developer blog, tech tutorials, Node.js, .NET Core, Terraform, web development, programming insights, software engineering, developer journey, coding blog';

  const postsSeoDescription = process.env.BLOG_SEO_DESCRIPTION
      ? decodeURI(process.env.BLOG_SEO_DESCRIPTION)
      : 'Dive into my blog featuring tech insights, tutorials, and experiences from my journey as a developer. Explore topics like Node.js, .NET Core, Terraform, and more.';

  const postsSeoTitle = process.env.BLOG_SEO_TITLE
      ? decodeURI(process.env.BLOG_SEO_TITLE)
      : name + '| Blog Posts | Tech Insights, Tutorials, and Developer Journey';

  const projectsSeoKeywords = process.env.PROJECT_SEO_KEYWORDS
      ? decodeURI(process.env.PROJECT_SEO_KEYWORDS)
      : 'portfolio projects, Node.js, .NET Core, Tailwind CSS, software development, responsive design, web development, full-stack development, scalable solutions, modern technologies';

  const projectsSeoDescription = process.env.PROJECT_SEO_DESCRIPTION
      ? decodeURI(process.env.PROJECT_SEO_DESCRIPTION)
      : 'Explore a showcase of my professional projects, highlighting expertise in Node.js, .NET Core, Tailwind CSS, and modern web development. See what I’ve built to deliver scalable, responsive, and user-centric solutions.';

  const projectsSeoTitle = process.env.PROJECT_SEO_TITLE
      ? decodeURI(process.env.PROJECT_SEO_TITLE)
      : name + '| Portfolio Projects | Showcasing Development Excellence in Node.js, .NET Core, and Tailwind CSS';

  const homePageSeoKeywords = process.env.HOME_PAGE_SEO_KEYWORDS
      ? decodeURI(process.env.HOME_PAGE_SEO_KEYWORDS)
      : 'developer portfolio, software engineer blog, Node.js, .NET Core, Terraform, programming projects, coding tutorials, developer insights, personal website';

  return {
    name,
    blogTitle,
    blogDescription,
    postsSeoKeywords,
    postsSeoDescription,
    postsSeoTitle,
    projectsSeoKeywords,
    projectsSeoDescription,
    projectsSeoTitle,
    homePageSeoKeywords
  };
};
