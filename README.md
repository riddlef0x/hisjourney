# HisJourney - Divorce Support Website for Men in Australia

A modern, professional divorce support website built with Next.js, tailored specifically for men going through divorce in Australia.

## 🎯 Project Overview

HisJourney.org is a modern rebuild replacing the previous journaling platform. The new site focuses on providing comprehensive divorce support resources for Australian men, including:

- **Expert Articles**: In-depth guides on emotional, financial, legal, and parenting aspects
- **Category System**: Content organized by Pre-Divorce, Divorce, Emotional, Financial, Legal, and Children
- **Resource Directory**: Links to Australian support services and counselling
- **Professional Design**: Modern, accessible UI appropriate for sensitive content
- **Mobile Responsive**: Fully responsive design for all devices
- **SEO Optimized**: Proper metadata, structured data, and Open Graph tags

## 📋 Key Features

### Content Management
- 5 published articles covering all major divorce support topics
- Full article metadata (SEO, social media, categories, tags)
- Author profiles (Jackson Wolf)
- Dynamic category and tag filtering
- Article discovery through multiple browsing paths

### Pages
- **Home**: Featured articles, category overview, and mission statement
- **Articles**: Complete article listing with filtering
- **Categories**: Browse articles by topic
- **Tags**: Filter articles by specific tags
- **Resources**: Comprehensive directory of Australian support services
- **About**: Information about HisJourney and Jackson Wolf
- **Contact/Support**: Emergency services and support options

### Design & UX
- Professional, empathetic design
- Accessible color palette (Navy, Primary Blue, Slate)
- Responsive layout for mobile, tablet, desktop
- Smooth transitions and hover effects
- Clear call-to-action buttons
- Sticky header navigation

### Technical Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS with custom configuration
- **Type Safety**: TypeScript
- **Components**: Reusable React components
- **SEO**: Next.js metadata API, Open Graph tags
- **Performance**: Optimized images, code splitting

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd hisjourney-rebuild

# Install dependencies
npm install

# Install missing dev dependencies
npm install -D @tailwindcss/typography
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
hisjourney-rebuild/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ArticleCard.tsx
│   ├── articles/            # Article pages
│   │   ├── page.tsx         # Article listing
│   │   └── [slug]/
│   │       └── page.tsx     # Individual article
│   ├── categories/          # Category pages
│   │   ├── page.tsx         # Categories listing
│   │   └── [category]/
│   │       └── page.tsx     # Category articles
│   ├── tags/                # Tag pages
│   │   └── [tag]/
│   │       └── page.tsx     # Articles by tag
│   ├── resources/           # Resources page
│   ├── about/               # About page
│   ├── contact/             # Contact/support page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── not-found.tsx        # 404 page
├── lib/
│   └── articles.ts          # Article data and utilities
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── .eslintrc.json
└── README.md
```

## 📝 Content Structure

### Articles

Each article includes:
- **Basic Info**: Title, slug, description
- **Content**: Full article text with markdown formatting
- **Metadata**: Author, publish date, status
- **SEO**: Title, description, keywords
- **Social**: Social media preview text and image
- **Organization**: Categories and tags

### Data Location

All article data is stored in `/lib/articles.ts`:

```typescript
export const articles: Article[] = [
  {
    id: '1',
    title: '10 Signs Your Marriage is Failing',
    slug: 'signs-your-marriage-is-failing',
    description: '...',
    content: '...',
    // ... more fields
  },
  // ... more articles
];
```

## 🎨 Design System

### Colors

- **Primary**: `#4d5bff` - Main brand color
- **Navy**: `#1e3552` - Dark backgrounds
- **Slate**: `#334155` - Text and borders

### Typography

- **Headings**: Bold, strong visual hierarchy
- **Body**: Clear, readable serif with proper line-height
- **Links**: Primary blue with hover effects

### Components

- **Cards**: Shadow, border, hover effects
- **Buttons**: Primary, secondary, outline variants
- **Badges**: Color-coded category/tag indicators

## 🔒 SEO & Performance

### SEO Features
- Dynamic page metadata
- Open Graph tags for social sharing
- Twitter card support
- Proper heading hierarchy
- Canonical URLs
- Sitemap support (via Next.js)

### Performance Optimizations
- Code splitting by route
- CSS-in-JS (Tailwind) for minimal CSS
- Image optimization (when images added)
- Lazy loading for off-screen content

## 📦 Article Migration

### From Airtable
Articles have been migrated from the Airtable export with:
- All content preserved exactly
- Full metadata maintained
- Categories and tags organized
- SEO fields populated
- Author information included

### Current Articles (5 total)
1. **10 Signs Your Marriage is Failing** - Pre-Divorce, Emotional
2. **How to Approach the Difficult Conversation About Divorce** - Pre-Divorce, Emotional
3. **10 Questions to Ask Yourself Before Deciding on Divorce** - Pre-Divorce, Emotional
4. **How to Survive a Divorce as a Man: The Ultimate Guide** - Divorce, Emotional, Financial, Legal, Children
5. **Divorce Support for Men: Top Australian Resources** - Divorce, Emotional, Children

## 🔄 Extending the Site

### Adding New Articles

1. Open `/lib/articles.ts`
2. Add new article object to the `articles` array:

```typescript
{
  id: '6',
  title: 'New Article Title',
  slug: 'new-article-slug',
  description: 'Short description',
  content: 'Full article content...',
  thumbnail: '/images/articles/thumbnail.jpg',
  author: {
    name: 'Jackson Wolf',
    bio: '...',
    image: '/images/authors/jackson-wolf.jpg',
    role: 'Divorce Support Specialist',
  },
  categories: ['Divorce', 'Emotional'],
  tags: ['tag1', 'tag2'],
  publishDate: '2024-10-15',
  seo: { /* ... */ },
  social: { /* ... */ },
  status: 'published',
}
```

3. The new article will automatically:
   - Appear in article listing
   - Be filterable by category/tag
   - Get a detail page at `/articles/[slug]`
   - Appear in related articles

### Adding New Pages

1. Create new folder in `/app`
2. Add `page.tsx` with layout
3. Use `Header` and `Footer` components
4. Set metadata for SEO

## 🌐 Deployment

### To GitHub

```bash
git init
git add .
git commit -m "Initial commit: HisJourney divorce support site"
git branch -M main
git remote add origin https://github.com/yourusername/hisjourney-rebuild.git
git push -u origin main
```

### To Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### To Other Hosts

```bash
npm run build
npm run start
```

The app is serverless-friendly and can be deployed to any Node.js host.

## 📋 Environment Variables

Create `.env.local` for local development:

```
# Add any API keys or configuration here if needed
```

## 🛠️ Development Commands

```bash
# Development server
npm run dev

# Build production
npm run build

# Start production server
npm run start

# Run linter
npm run lint

# Check types
npx tsc --noEmit
```

## 🤝 Contributing

To contribute content or improvements:

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Submit a pull request

## 📄 License

HisJourney.org - Divorce Support Website for Men in Australia

## ✨ Features to Consider

### Future Enhancements
- Newsletter signup
- Comment system
- Article search
- Reading time estimates
- Print-friendly versions
- PDF downloads
- Video content integration
- User accounts/saved articles
- Testimonials/success stories
- FAQ section
- Interactive tools/calculators

### Content Ideas
- Co-parenting guides
- Financial planning templates
- Legal glossary
- Interview series with specialists
- Weekly tips
- Seasonal content (Holidays, Father's Day, etc.)

## 📞 Support

For issues, questions, or suggestions:
- Email: support@hisjourney.org
- Phone: See resources page for MensLine Australia and other services

## 🙏 Acknowledgments

Built with care for Australian men going through divorce. All content reviewed for accuracy and sensitivity.

---

**HisJourney.org** - Supporting Men Through Divorce with Confidence and Compassion
