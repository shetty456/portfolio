# Product Management Portfolio

A modern, elegant portfolio website built with Next.js, Tailwind CSS, and Framer Motion. This portfolio is designed to showcase product management skills, case studies, and thought leadership.

## Features

- 🎨 **Modern Design**: Clean, elegant UI inspired by Isha Foundation's blog design
- 📱 **Responsive**: Fully responsive design that works on all devices
- ✨ **Animations**: Subtle animations using Framer Motion
- 📝 **Blog System**: MDX-based blog system with beautiful typography
- 🎯 **SEO Optimized**: Built-in SEO features with Next.js
- 🌙 **Dark Mode**: Optional dark mode support
- 🚀 **Performance**: Optimized for fast loading and smooth interactions

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework with App Router
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [MDX](https://mdxjs.com/) - Markdown with JSX
- [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) - For beautiful typography

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pm-portfolio.git
   cd pm-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # App router pages
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── case-studies/      # Case studies
│   ├── contact/           # Contact page
│   ├── toolbox/           # Tools and skills
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/            # Layout components
│   └── ui/                # UI components
├── content/               # Content files
│   └── blog/              # Blog posts in MDX
└── lib/                   # Utility functions
```

## Writing Blog Posts

1. Create a new MDX file in `src/content/blog/` with the following frontmatter:
   ```mdx
   ---
   title: "Your Blog Post Title"
   description: "A brief description of your post"
   date: "2024-04-20"
   image: "/path/to/image.jpg"
   tags: ["PM", "Product Thinking"]
   ---
   ```

2. Write your content using MDX syntax
3. The post will be automatically available at `/blog/your-post-slug`

## Customization

- Update your personal information in the respective page components
- Modify the color scheme in `tailwind.config.ts`
- Add or remove tools in the toolbox section
- Update the timeline in the about page
- Add your own case studies

## Deployment

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy!

## Contributing

Feel free to open issues or submit pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
# portfolio
