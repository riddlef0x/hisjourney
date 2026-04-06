# HisJourney Deployment Guide

## Pre-Deployment Checklist

- [ ] All articles reviewed for accuracy
- [ ] Links to external resources verified
- [ ] Contact information updated
- [ ] Domain configured (hisjourney.org)
- [ ] Analytics setup (Google Analytics, etc.)
- [ ] SSL certificate configured
- [ ] CDN configured for image delivery
- [ ] Backup strategy in place

## Domain Configuration

### DNS Setup for hisjourney.org

For Vercel deployment:
```
A record: 76.76.19.165
A record: 76.76.19.166
A record: 76.76.19.167
A record: 76.76.19.168

CNAME: alias.vercel.sh
```

Update your domain registrar's DNS settings.

## Vercel Deployment

### Step 1: Connect GitHub Repository

1. Go to https://vercel.com
2. Click "New Project"
3. Select GitHub and authorize
4. Select the hisjourney-rebuild repository
5. Click "Import"

### Step 2: Configure Project

1. **Framework Preset**: Next.js (auto-detected)
2. **Root Directory**: ./ (default)
3. **Build Command**: `next build`
4. **Output Directory**: `.next`
5. **Install Command**: `npm install`

### Step 3: Environment Variables

Add any required environment variables in Vercel dashboard.

### Step 4: Deploy

1. Click "Deploy"
2. Wait for build to complete
3. Get temporary Vercel URL (*.vercel.app)
4. Test all pages and functionality

### Step 5: Custom Domain

1. Go to Project Settings → Domains
2. Add custom domain: `hisjourney.org`
3. Follow DNS configuration steps
4. Verify domain ownership
5. Wait for DNS propagation (24-48 hours)

## Alternative: Self-Hosted Deployment

### On Ubuntu/Debian Server

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone https://github.com/yourusername/hisjourney-rebuild.git
cd hisjourney-rebuild

# Install dependencies
npm install

# Build
npm run build

# Install PM2 for process management
npm install -g pm2

# Start application
pm2 start npm --name "hisjourney" -- start

# Auto-restart on server reboot
pm2 startup
pm2 save
```

### With Nginx Reverse Proxy

```nginx
server {
    listen 80;
    server_name hisjourney.org www.hisjourney.org;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name hisjourney.org www.hisjourney.org;

    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### SSL Certificate

Use Let's Encrypt for free SSL:

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d hisjourney.org -d www.hisjourney.org
```

## Monitoring & Maintenance

### Uptime Monitoring

Use services like:
- UptimeRobot (https://uptimerobot.com)
- Pingdom
- Statuspage.io

### Analytics

1. Add Google Analytics 4:
   - Get tracking ID
   - Add to `_document.tsx` or next.js config

2. Monitor:
   - Page views
   - User engagement
   - Article popularity
   - Bounce rates
   - Conversion (support link clicks)

### Backup Strategy

- Daily automated backups
- Database snapshots (if applicable)
- Git repository mirrors
- Static content backups

## Performance Optimization

### Build Time Targets
- Build: < 60 seconds
- Deploy: < 2 minutes

### Core Web Vitals Targets
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

### Optimization Tips

1. **Images**
   - Use Next.js Image component
   - Compress all images
   - Use WebP format
   - Lazy load images

2. **Caching**
   - Set proper cache headers
   - Use CDN for static assets
   - Enable browser caching

3. **Code Splitting**
   - Already done by Next.js
   - Monitor bundle size

### Lighthouse Audit

Run before each deployment:

```bash
npm install -g lighthouse
lighthouse https://hisjourney.org --view
```

Target scores:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

## Post-Launch

### First Week
- Monitor error logs
- Check analytics
- Verify all pages load
- Test forms/interactions
- Monitor server resources

### Ongoing
- Update articles regularly
- Monitor 404 errors
- Check broken links monthly
- Update dependencies quarterly
- Review security alerts

### Content Updates

To publish new articles:

1. Update `/lib/articles.ts`
2. Commit changes to GitHub
3. Vercel auto-deploys (if connected)
4. Verify on production

## Troubleshooting

### Deployment Fails

1. Check build logs in Vercel
2. Verify Node.js version compatibility
3. Check for missing dependencies
4. Ensure no TypeScript errors: `npx tsc --noEmit`
5. Test locally: `npm run build && npm start`

### Slow Performance

1. Check Core Web Vitals
2. Reduce image sizes
3. Enable caching headers
4. Use CDN for images
5. Analyze bundle size: `npm run build` and check `.next/`

### Articles Not Appearing

1. Check `lib/articles.ts` syntax
2. Verify `status: 'published'`
3. Check slug naming (lowercase, no spaces)
4. Rebuild and redeploy

## Rollback Plan

If deployment has critical issues:

```bash
# Vercel
# Go to Deployment History
# Click "Promote to Production" on previous working build

# Self-hosted with PM2
pm2 list
pm2 revert hisjourney  # Revert to previous version
```

## Contact & Support

- **Site Issues**: support@hisjourney.org
- **Technical Issues**: [Your GitHub Issues]
- **Monitoring**: See monitoring dashboards

---

**Remember**: A properly deployed site that works reliably is more important than a fancy site that's down. Always test thoroughly before deploying to production.
