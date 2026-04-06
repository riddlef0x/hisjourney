# HisJourney.org - Quick Start Guide

Get your site running in 5 minutes. ⚡

---

## 1️⃣ Install & Start (2 Minutes)

```bash
# Navigate to project
cd /data/workspace/hisjourney-rebuild

# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

**You'll see**:
```
> Local:        http://localhost:3000
```

Open http://localhost:3000 in your browser. 🎉

---

## 2️⃣ Test Locally (3 Minutes)

Click around and verify:
- ✅ Home page loads
- ✅ Articles page works
- ✅ Click an article to read it
- ✅ Click on a category
- ✅ Click on a tag
- ✅ Resources page loads
- ✅ Links in footer work
- ✅ Mobile menu works (on phone)

Everything working? You're good to go! 🚀

---

## 3️⃣ Deploy to Production (1 Option)

### Option A: Vercel (Easiest - Recommended) ⭐

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Answer the prompts:
# - Create account (or login)
# - Link to GitHub (optional but recommended)
# - Accept defaults
# - Visit temporary URL to test
# - Add custom domain in dashboard
```

**That's it!** Your site is live. 🎉

### Option B: Read Full Instructions

See **DEPLOYMENT.md** for:
- Self-hosting options
- AWS, DigitalOcean, Railway, etc.
- Step-by-step setup

---

## 4️⃣ Common Next Steps

### Add a New Article

1. Open `/lib/articles.ts`
2. Find the `articles` array
3. Copy this template to the end:

```typescript
{
  id: '6',
  title: 'Article Title',
  slug: 'article-slug',
  description: 'Preview text',
  content: 'Full article text here...',
  thumbnail: '/images/articles/thumbnail.jpg',
  author: {
    name: 'Jackson Wolf',
    bio: 'Divorce Support Specialist',
    image: '/images/authors/jackson-wolf.jpg',
    role: 'Divorce Support Specialist',
  },
  categories: ['Divorce'],
  tags: ['tag1', 'tag2'],
  publishDate: '2026-04-20',
  seo: {
    title: 'Article Title',
    description: 'SEO description',
    keywords: ['keyword1', 'keyword2'],
  },
  social: {
    title: 'Social Media Title',
    description: 'Social media description',
    image: '/images/articles/social.jpg',
  },
  status: 'published',
}
```

4. Save file
5. Refresh browser - new article appears! ✅

### Change Colors

1. Open `tailwind.config.js`
2. Find the `colors` section
3. Change colors (e.g., `primary: { 600: '#FF0000' }`)
4. Save - colors update instantly! 🎨

### Add a New Page

1. Create `/app/new-page/page.tsx`
2. Copy from existing page
3. Edit content
4. Save - page appears at `/new-page` ✅

---

## 🛑 Stop Development Server

Press `Ctrl + C` in terminal (or `Cmd + C` on Mac)

---

## 🔄 Restart Development Server

```bash
npm run dev
```

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `/lib/articles.ts` | All article data |
| `app/page.tsx` | Home page |
| `app/articles/page.tsx` | Article listing |
| `app/globals.css` | Global styles |
| `tailwind.config.js` | Colors, fonts |
| `next.config.js` | Next.js config |

---

## 🚀 Production Build

```bash
# Build for production
npm run build

# Start production server
npm start

# Runs on http://localhost:3000
```

---

## 📖 Need Help?

- **Deployment?** → See `DEPLOYMENT.md`
- **Features?** → See `README.md`
- **What was built?** → See `PROJECT_SUMMARY.md`
- **How to use?** → See `HANDOVER.md`

---

## ✨ You're All Set!

Your site is:
- ✅ Ready to go
- ✅ Production-ready
- ✅ Easy to modify
- ✅ Mobile-friendly
- ✅ SEO-optimized

**Now deploy and help men through divorce!** 💙

---

**Questions?** Check the full documentation in the project folder.
