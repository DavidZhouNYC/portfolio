# Portfolio

> Personal portfolio of David Zhou — Software Engineer

[![Build Status](https://img.shields.io/github/actions/workflow/status/DavidZhouNYC/portfolio/deploy.yml?style=flat-square)](https://github.com/DavidZhouNYC/portfolio/actions)
[![License](https://img.shields.io/github/license/DavidZhouNYC/portfolio?style=flat-square)](LICENSE)

A modern, performant personal portfolio built with Astro and Tailwind CSS. Designed to be fast, minimal, and easy to maintain.

**[Live Site]()** &nbsp;·&nbsp; **[GitHub](https://github.com/DavidZhouNYC)** &nbsp;·&nbsp; **[LinkedIn](https://www.linkedin.com/in/davidzhounyc/)**

---

## Tech Stack

| Category      | Choice                                        |
|---------------|-----------------------------------------------|
| Framework     | [Astro](https://astro.build)                  |
| Styling       | [Tailwind CSS](https://tailwindcss.com)      |
| Package Mgr   | [Bun](https://bun.sh)                         |
| Hosting       | [Cloudflare Pages](https://pages.cloudflare.com) |
| Contact Form  | [Formspree](https://formspree.io)             |

---

## Features

- Static site generation — zero JavaScript shipped by default
- Responsive design across all screen sizes
- Content collections for projects and experience (Markdown-based)
- Sitemap and SEO meta tags out of the box
- Contact form with no backend required

---

## Project Structure

```
src/
├── components/       # Reusable Astro components
│   ├── Footer.astro
│   └── Nav.astro
├── content/           # Markdown content collections
│   ├── experience/    # Work experience entries
│   ├── projects/      # Project entries
│   └── sideProjects/  # Side project entries
├── layouts/           # Page layout templates
│   └── Base.astro
└── pages/             # Routes
    ├── index.astro    # Home
    ├── about.astro    # About
    ├── projects.astro # Projects
    ├── blog.astro     # Blog (coming soon)
    ├── contact.astro  # Contact
    └── 404.astro      # Not found
```

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed locally

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

Opens at `http://localhost:4321`

### Build

```bash
bun run build
```

Output is written to `dist/`

### Preview

```bash
bun run preview
```

---

## Deployment

Deployments are automated via GitHub Actions. On every push to `main` or `astro-refactor`, the site is built and deployed to Cloudflare Pages.

Manual deployment requires the following environment variables set in GitHub repository secrets:

| Secret                    | Description                          |
|---------------------------|--------------------------------------|
| `CLOUDFLARE_API_TOKEN`    | Cloudflare API token with Workers edit |
| `CLOUDFLARE_ACCOUNT_ID`   | Cloudflare account ID                |

---

## License

[MIT](LICENSE) — &copy; 2025 David Zhou
