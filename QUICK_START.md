# Blog Quick Start Guide

Get your blog running in 15 minutes.

---

## Step 1: Create Contentful Account (5 minutes)

1. Go to https://www.contentful.com/sign-up/
2. Sign up (free, no credit card)
3. Create space: "EEN Blog"
4. Choose "Start from scratch"

---

## Step 2: Get API Keys (2 minutes)

1. Click **Settings** → **API keys**
2. Click **Add API key**
3. Name it: "Production"
4. **Copy these values** (you'll need them next):
   - Space ID: `abc123...`
   - Content Delivery API token: `cfpat-...`

---

## Step 3: Configure Environment (1 minute)

```bash
# In your project folder
cp .env.example .env.local

# Edit .env.local - paste your keys:
CONTENTFUL_SPACE_ID=paste_your_space_id_here
CONTENTFUL_ACCESS_TOKEN=paste_your_token_here
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Step 4: Create Content Model (5 minutes)

In Contentful, follow these steps exactly:

### Create "Category" Content Type

1. Go to **Content model** → **Add content type**
2. Name: `Category`, API ID: `category`
3. Add these fields:

| Field Name | Type | Field ID | Required | Validations |
|------------|------|----------|----------|-------------|
| Name | Short text | `name` | Yes | Max 50 chars |
| Slug | Short text | `slug` | Yes | Unique, pattern: `^[a-z0-9-]+$` |
| Description | Long text | `description` | No | Max 500 chars |
| Color | Short text | `color` | No | Pattern: `^#[0-9A-Fa-f]{6}$` |

4. Click **Save**

### Create "Author" Content Type

1. **Add content type**
2. Name: `Author`, API ID: `author`
3. Add these fields:

| Field Name | Type | Field ID | Required |
|------------|------|----------|----------|
| Name | Short text | `name` | Yes |
| Slug | Short text | `slug` | Yes (Unique) |
| Bio | Long text | `bio` | No |
| Avatar | Media | `avatar` | No |
| Email | Short text | `email` | No |
| Title | Short text | `title` | No |

4. Click **Save**

### Create "Blog Post" Content Type

1. **Add content type**
2. Name: `Blog Post`, API ID: `blogPost`
3. Add these fields (in order):

| # | Field Name | Type | Field ID | Required | Notes |
|---|------------|------|----------|----------|-------|
| 1 | Title | Short text | `title` | Yes | Max 100 chars |
| 2 | Slug | Short text | `slug` | Yes | Unique, slug appearance |
| 3 | Excerpt | Long text | `excerpt` | Yes | Max 300 chars |
| 4 | Hero Image | Media | `heroImage` | Yes | Images only |
| 5 | Content | Rich text | `content` | Yes | Enable all options |
| 6 | Author | Reference | `author` | Yes | Links to Author |
| 7 | Categories | Reference (Many) | `categories` | No | Links to Category |
| 8 | Tags | Short text (List) | `tags` | No | - |
| 9 | Published Date | Date/Time | `publishedDate` | Yes | - |
| 10 | Updated Date | Date/Time | `updatedDate` | No | - |
| 11 | Featured | Boolean | `featured` | No | Default: No |
| 12 | Meta Title | Short text | `metaTitle` | No | Max 60 chars |
| 13 | Meta Description | Long text | `metaDescription` | No | Max 160 chars |

4. Click **Save**

---

## Step 5: Add Sample Content (2 minutes)

### Create a Category

1. Go to **Content** → **Add entry** → **Category**
2. Fill in:
   - Name: `Solar Energy`
   - Slug: `solar-energy`
   - Description: `Articles about solar power`
   - Color: `#FFA500`
3. Click **Publish** (top right)

### Create an Author

1. **Add entry** → **Author**
2. Fill in:
   - Name: `Unoma Grant`
   - Slug: `unoma-grant`
   - Bio: `CEO of EEN Consulting`
   - Title: `Co-Founder & CEO`
3. Click **Publish**

### Create Your First Blog Post

1. **Add entry** → **Blog Post**
2. Fill in:
   - Title: `Welcome to Our Blog`
   - Slug: `welcome-to-our-blog`
   - Excerpt: `We're excited to share insights on sustainable energy in Nigeria.`
   - Hero Image: Upload any image (1200x630px recommended)
   - Content: Write a few paragraphs
   - Author: Select "Unoma Grant"
   - Categories: Select "Solar Energy"
   - Published Date: Select today's date
   - Featured: Toggle ON
3. Click **Publish** (very important!)

---

## Step 6: Test Locally (30 seconds)

```bash
# Install dependencies (if not done)
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000/blog
```

You should see your blog post! 🎉

---

## Step 7: Build for Production (30 seconds)

```bash
# Build static site
npm run build

# Check output
ls out/blog/
```

You should see:
- `index.html` (blog listing)
- `welcome-to-our-blog/` folder with your post

---

## Step 8: Deploy to FTP

### Using FileZilla (GUI)

1. Open FileZilla
2. Connect to your FTP server
3. Navigate to web root (`/public_html/`)
4. Upload entire contents of `out/` folder
5. Wait for upload to complete
6. Visit `https://yourdomain.com/blog`

### Using Command Line (Faster)

```bash
# Replace with your actual credentials
lftp -u username,password ftp.yourdomain.com <<EOF
cd /public_html
mirror -R out/ ./
bye
EOF
```

---

## ✅ Verification Checklist

- [ ] Blog page loads: `https://yourdomain.com/blog`
- [ ] Your post appears on listing
- [ ] Click post - individual page loads
- [ ] Images display correctly
- [ ] Navigation "Blog" link works
- [ ] RSS feed accessible: `https://yourdomain.com/rss.xml`
- [ ] Sitemap accessible: `https://yourdomain.com/sitemap.xml`

---

## 🎉 Success!

You now have a live blog! Here's what to do next:

### Immediate Next Steps
1. Write 2-3 more blog posts in Contentful
2. Create more categories (Water, EDGE, Sustainability)
3. Add more author profiles
4. Customize category colors to match brand

### SEO Setup (within 24 hours)
1. Submit sitemap to Google Search Console
2. Add `robots.txt` if not exists
3. Share first post on social media (test Open Graph)

### Content Strategy
- **Frequency**: 2-4 posts per month
- **Length**: 1,000-2,000 words
- **Topics**: Solar, Water, EDGE, Sustainability
- **Keywords**: Focus on "Nigeria" + your services

---

## 🆘 Troubleshooting

### "Blog shows no posts"
- Ensure post is **Published** (not just saved)
- Check `publishedDate` is today or in the past
- Rebuild: `npm run build`

### "Build fails with Contentful error"
- Verify `.env.local` has correct keys
- Check API keys in Contentful (Settings → API keys)
- Make sure you're using **Content Delivery API** token (not Preview)

### "Images not loading"
- Images come from Contentful CDN, not your server
- Check image URLs start with `//images.ctfassets.net/`
- Ensure images are published in Contentful

### "Can't connect to FTP"
- Verify FTP credentials
- Check if port is 21 (FTP) or 22 (SFTP)
- Try FileZilla GUI if command line fails

---

## 📚 Full Documentation

For detailed guides, see:
- **[CONTENTFUL_SETUP.md](CONTENTFUL_SETUP.md)** - Complete Contentful setup
- **[BLOG_DEPLOYMENT_GUIDE.md](BLOG_DEPLOYMENT_GUIDE.md)** - Deployment details
- **[BLOG_IMPLEMENTATION_SUMMARY.md](BLOG_IMPLEMENTATION_SUMMARY.md)** - Feature overview

---

## 💡 Pro Tips

1. **Always Publish**: Saved posts don't appear until you click "Publish"
2. **Use Featured**: Toggle "Featured" for homepage-worthy posts
3. **Optimize Images**: Upload 1200x630px for best results
4. **Write Good Excerpts**: These become meta descriptions for SEO
5. **Use Categories**: Helps users find related content
6. **Add Tags**: Improves related post recommendations

---

**Time to First Post**: ~15 minutes
**Time to Deploy**: ~5 minutes
**Total**: ~20 minutes from zero to live blog! 🚀

Ready? Start with **Step 1** above! ⬆️
