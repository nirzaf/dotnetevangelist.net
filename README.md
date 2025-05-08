# Wisp CMS Corporate Blog Template - Next.js 15

![Wisp CMS Corporate Blog Template](https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/cm28hgkdk000wmu7nocgku1dl/5b9708ce-413d-4065-994e-af59bdef863d.png/public)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FWisp-CMS%2Fnextjs-corporate-blog-starter&env=NEXT_PUBLIC_BLOG_ID,NEXT_PUBLIC_BASE_URL,NEXT_PUBLIC_BLOG_ORGANIZATION,NEXT_PUBLIC_BLOG_TITLE,NEXT_PUBLIC_BLOG_DESCRIPTION&demo-title=Demo%20Corporate%20Blog&demo-description=Next.js%20Blog%20Starter%20Kit%20with%20Tailwind%20%26%20Shadcn%20-%20Powered%20by%20Wisp&demo-url=https%3A%2F%2Fcorporate-blog-demo.wisp.blog%2F&demo-image=https%3A%2F%2Fimagedelivery.net%2FlLmNeOP7HXG0OqaG97wimw%2Fcm28hgkdk000wmu7nocgku1dl%2F5b9708ce-413d-4065-994e-af59bdef863d.png%2Fpublic)

[View Demo Blog](https://nextjs-corporate-blog-starter.vercel.app)

## Corporate Blog Starter Template for Modern Companies & Publications

Welcome to the Wisp CMS Corporate Blog Template – the most powerful and flexible solution for creating stunning corporate websites and news portals. Built on [Next.js 15](https://nextjs.org/docs/getting-started/installation), [Tailwind CSS](https://tailwindcss.com/), [Shadcn](https://ui.shadcn.com/) & [Wisp CMS](https://wisp.blog/?utm_source=github&utm_medium=web&utm_campaign=nextjs-corporate-blog-starter), this template offers an unparalleled combination of performance, SEO optimization, and user-friendly content management.

### Why Choose Wisp's Corporate Blog Template?

- **Corporate-Focused Design**: Sleek, professional layout perfect for businesses and publications.
- **Multi-Theme Support**: Choose between different styles to perfectly match your corporate branding.
- **Advanced SEO Features**: Built-in SEO optimizations to ensure your content ranks high in search results.
- **Dynamic Table of Contents**: Improve user navigation with an automatically generated table of contents for each article.
- **Tabbed Category Navigation**: Intuitive top-level tabs for easy browsing through different categories of blog posts or articles.
- **Responsive Design**: Perfectly optimized for all devices, from desktop to mobile.
- **Customizable Themes**: Easily style the blog to suit your corporate branding and needs.
- **Fast Performance**: Utilizing Next.js 14's server components for lightning-fast page loads.
- **Seamless Integration with Wisp CMS**: Leverage the power of Wisp CMS for effortless content creation and management.

## About Wisp

Wisp is a modern CMS for adding blogs to websites. It features an intuitive, medium-like editorial experience so that you can focus on writing instead of getting distracted by markdown.

## Features

- Beautiful blog starter kit with server rendering using Next.js 14 Server Components
- Responsive layout for mobile devices
- Customizable sections of the blog
- Filter blog posts by tags
- Full text search over all articles
- Automatic table of content generation
- Automatic sitemap generation
- Automatic Open Graph image generation
- Automatic [Related Posts suggestions](https://www.wisp.blog/blog/suggesting-related-blog-post-with-ai-content-recommendation)
- Render [Custom React Component](https://www.wisp.blog/docs/advance-concepts/custom-react-component) from CMS
- RSS Feed

## Technologies

- [Next.js 15](https://nextjs.org/blog/next-15) using App Router, TypeScript & Turbopack
- [Wisp](https://wisp.blog/?utm_source=github&utm_medium=web&utm_campaign=nextjs-blog-cms-wisp) to manage blog posts
- [Tailwind CSS](https://tailwindcss.com/) for CSS framework
- [Shadcn UI](https://ui.shadcn.com/) for UI components
- [ESLint](https://eslint.org/) for static analysis
- [TypeScript](https://www.typescriptlang.org/) for type safety
- Font optimization with [next/font](https://nextjs.org/docs/app/api-reference/components/font)
## Choose from Different Themes

![Multiple themes](https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/cm28hgkdk000wmu7nocgku1dl/61d58c4a-b9e8-438b-bf57-314a4bb350c2.png/public)

The design is flexible, allowing you to choose from multiple themes to suit your brand. Head over to [https://corporate-blog-demo.wisp.blog/theme](https://corporate-blog-demo.wisp.blog/theme) to select preview a wide range of themes or generate your own.

Simply copy the Tailwind Class onto the [FullWidthHeader Component](/src/components/FullWidthHeader.tsx) to apply the theme to the entire blog.


## Quick Start Guide

First, install the dependencies:

```bash
npm i --legacy-peer-deps
```

**IMPORTANT**: There's a dependency (next-themes) that's not upgraded to React 19 so you will need to add the `--legacy-peer-deps` into the install command. Make sure that Vercel's install command is set to use `npm i --legacy-peer-deps` too!

Then, copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Note: You will need to populate the `NEXT_PUBLIC_BLOG_ID` variable with the Blog ID obtained from wisp after you've created an account.

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

