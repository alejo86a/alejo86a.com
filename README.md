# alejo86a.com — Personal Portfolio Source

Source repository for **[alejo86a.com](https://alejo86a.com)** — the personal portfolio and CV of José Alejandro Berrío Marín, Lead Software Engineer.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router, static export) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | Radix UI + shadcn/ui |
| Icons | Lucide React |
| Theming | next-themes (dark/light mode) |
| Analytics | Vercel Analytics |
| Hosting | GitHub Pages (via `alejo86a.github.io`) |
| Package Manager | pnpm |

---

## Local Development

### Prerequisites

- **Node.js** 20+
- **pnpm** 9+  
  Install: `npm install -g pnpm`

### Setup & Run

```bash
# Clone the repository
git clone https://github.com/alejo86a/alejo86a.com
cd alejo86a.com

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Commands

```bash
pnpm build    # Build the static export (outputs to ./out)
pnpm lint     # Run ESLint
```

---

## Deployment Pipeline

### How It Works

```
alejo86a.com (this repo)
    │
    │  Push to `main`
    ▼
GitHub Actions (.github/workflows/deploy.yml)
    │  1. Checkout source
    │  2. pnpm install
    │  3. pnpm build  →  ./out/
    │
    │  4. peaceiris/actions-gh-pages
    ▼
alejo86a/alejo86a.github.io (target repo, main branch)
    │
    ▼
GitHub Pages → alejo86a.com (custom domain)
```

**Source repo** (`alejo86a.com`) — you edit code here.  
**Deploy repo** (`alejo86a.github.io`) — auto-populated by CI; never edit this directly.

### Activating CI/CD — One-Time Setup

The pipeline is already written. You only need to create a GitHub PAT and add it as a secret once.

#### Step 1: Create a Personal Access Token (PAT)

1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Click **"Generate new token (classic)"**
3. Give it a descriptive name: `alejo86a.com deploy`
4. Set expiration (1 year is fine)
5. Under **Scopes**, check **`repo`** (full control of private repositories)
6. Click **Generate token** — copy and save it somewhere safe (you won't see it again)

#### Step 2: Add the Secret to This Repo

1. Go to your `alejo86a.com` repository on GitHub
2. Navigate to **Settings → Secrets and variables → Actions**
3. Click **"New repository secret"**
4. Name: `PAGES_DEPLOY_TOKEN`
5. Value: paste the PAT from Step 1
6. Click **Add secret**

#### Step 3: Verify

Push any change to `main` and go to **Actions** tab in this repo. You should see a "Build and Deploy to GitHub Pages" workflow run and succeed. The changes will appear on [alejo86a.com](https://alejo86a.com) within ~60 seconds.

> [!NOTE]
> The PAT only needs the `repo` scope. It grants the workflow permission to push to `alejo86a/alejo86a.github.io` on your behalf.

---

## Project Structure

```
alejo86a.com/
├── app/
│   ├── layout.tsx          # Root layout, metadata (OG, SEO), ThemeProvider
│   ├── page.tsx            # Home page — assembles all section components
│   └── globals.css         # Tailwind config + CSS variables + scroll animations
├── components/
│   ├── navigation.tsx      # Sticky nav with mobile hamburger, dark mode toggle
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About + languages
│   ├── career-highlights.tsx  # 3 impact case study cards
│   ├── experience.tsx      # Work history timeline
│   ├── skills.tsx          # Skills grid
│   ├── projects.tsx        # GitHub projects + professional case studies
│   ├── education.tsx       # Education + achievements
│   ├── contact.tsx         # Contact card + CTA buttons
│   ├── setup.tsx           # Amazon affiliate gear section
│   └── theme-provider.tsx  # next-themes wrapper
├── lib/
│   ├── translations.ts     # All copy in EN / ES / PT
│   ├── language-context.tsx # Language state + localStorage persistence
│   └── use-scroll-animation.ts # Intersection Observer hook for scroll animations
├── public/
│   ├── blog/               # Static HTML blog articles
│   │   ├── index.html
│   │   ├── microservices-patterns-fintech.html
│   │   ├── building-payment-systems.html
│   │   └── go-vs-nodejs-backend.html
│   ├── og-card.png         # OG social card (1200×630, used for LinkedIn/Twitter previews)
│   ├── profile-picture.png # Profile photo
│   ├── favicon.ico
│   └── sitemap.xml
└── .github/
    └── workflows/
        └── deploy.yml      # CI pipeline: build → push to alejo86a.github.io
```

---

## Adding a New Blog Article

1. Create a new `.html` file in `public/blog/`, e.g. `public/blog/my-new-article.html`
2. Copy the structure from an existing article (they share the same self-contained CSS)
3. Add a link card to `public/blog/index.html`
4. Push to `main` — the CI pipeline builds and deploys everything automatically

No Next.js changes needed — `public/` files are copied verbatim into `out/` during build.

---

## Adding or Editing Content

All text content lives in [`lib/translations.ts`](./lib/translations.ts) in three languages (English, Spanish, Portuguese). Edit the corresponding key in all three language objects when changing any visible text.

---

## Internationalization

The site supports EN 🇺🇸 / ES 🇨🇴 / PT 🇧🇷. Language preference is saved to `localStorage` and restored on the next visit. The language switcher is in the navigation bar (both desktop and mobile).

---

## Environment Variables

None required. This is a fully static site — no server, no environment variables. The build output in `./out/` can be served from any static host.

---

## License

MIT — feel free to fork for your own portfolio. Attribution appreciated but not required.