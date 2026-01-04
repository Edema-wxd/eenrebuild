# Contentful Setup Guide for EEN Consulting Blog

**Free Tier Benefits**:
- ✅ Up to 25,000 API calls/month
- ✅ 2 locales
- ✅ 48 content types
- ✅ 25 users
- ✅ Image CDN with automatic optimization
- ✅ No credit card required

---

## Step 1: Create Contentful Account

1. Go to [https://www.contentful.com/sign-up/](https://www.contentful.com/sign-up/)
2. Sign up with email or GitHub
3. Choose **"I'm a developer"** when asked
4. Create a new space called **"EEN Blog"**
5. Select **"Start from scratch"** (we'll create custom content model)

---

## Step 2: Get API Keys

### Get Space ID
1. In Contentful dashboard, click **Settings** → **General settings**
2. Copy your **Space ID** (looks like: `abc123def456`)

### Get Content Delivery API Key (for production)
1. Click **Settings** → **API keys**
2. Click **Add API key**
3. Name it: `Production - EEN Website`
4. Copy the **Content Delivery API - access token** (starts with `cfpat-...`)
5. Keep this page open - you'll need these values

### Get Content Preview API Key (for draft preview - optional)
1. In the same API key screen
2. Copy the **Content Preview API - access token**
3. This lets you preview unpublished content during development

---

## Step 3: Create Content Model

### Create "Blog Post" Content Type

1. Go to **Content model** in sidebar
2. Click **Add content type**
3. Name: `Blog Post`
4. API Identifier: `blogPost` (auto-generated)
5. Description: `Individual blog posts for the website`
6. Click **Create**

### Add Fields to Blog Post

Click **Add field** and create these fields in order:

#### 1. Title
- **Type**: Text (Short text)
- **Name**: Title
- **Field ID**: `title`
- **Validation**: Required, Max 100 characters
- **Appearance**: Single line

#### 2. Slug
- **Type**: Text (Short text)
- **Name**: Slug
- **Field ID**: `slug`
- **Validation**: Required, Unique, Match pattern: `^[a-z0-9-]+$`
- **Appearance**: Slug (auto-generate from title)
- **Help text**: URL-friendly version of title (e.g., "solar-energy-guide")

#### 3. Excerpt
- **Type**: Text (Long text)
- **Name**: Excerpt
- **Field ID**: `excerpt`
- **Validation**: Required, Max 300 characters
- **Help text**: Brief summary for SEO and post previews

#### 4. Hero Image
- **Type**: Media (One file)
- **Name**: Hero Image
- **Field ID**: `heroImage`
- **Validation**: Required, Accept only specified file types: Images (JPEG, PNG, WebP)
- **Help text**: Featured image displayed at top of post (recommended: 1200x630px)

#### 5. Content
- **Type**: Rich text
- **Name**: Content
- **Field ID**: `content`
- **Validation**: Required
- **Appearance**: Rich text editor
- **Enable**: Headings (H2, H3, H4), Bold, Italic, Underline, Lists, Links, Quotes, Code, Embedded entries
- **Help text**: Main blog post content

#### 6. Author
- **Type**: Reference (One reference)
- **Name**: Author
- **Field ID**: `author`
- **Validation**: Required, Accept only specified entry type: Author
- **Appearance**: Entry link editor

#### 7. Categories
- **Type**: Reference (Many references)
- **Name**: Categories
- **Field ID**: `categories`
- **Validation**: Accept only specified entry type: Category
- **Appearance**: Entry links editor
- **Help text**: Select one or more categories

#### 8. Tags
- **Type**: Text (Short text, list)
- **Name**: Tags
- **Field ID**: `tags`
- **Validation**: Optional
- **Appearance**: Tag list
- **Help text**: Add relevant tags (e.g., solar, sustainability, EDGE)

#### 9. Published Date
- **Type**: Date and time
- **Name**: Published Date
- **Field ID**: `publishedDate`
- **Validation**: Required
- **Appearance**: Date picker
- **Help text**: When this post should be published

#### 10. Updated Date
- **Type**: Date and time
- **Name**: Updated Date
- **Field ID**: `updatedDate`
- **Validation**: Optional
- **Appearance**: Date picker
- **Help text**: Last time this post was updated

#### 11. Featured
- **Type**: Boolean
- **Name**: Featured
- **Field ID**: `featured`
- **Default value**: No
- **Appearance**: Toggle
- **Help text**: Mark as featured post (displays prominently on blog page)

#### 12. Meta Title
- **Type**: Text (Short text)
- **Name**: Meta Title
- **Field ID**: `metaTitle`
- **Validation**: Max 60 characters
- **Help text**: SEO title (leave blank to use post title)

#### 13. Meta Description
- **Type**: Text (Long text)
- **Name**: Meta Description
- **Field ID**: `metaDescription`
- **Validation**: Max 160 characters
- **Help text**: SEO meta description (leave blank to use excerpt)

**Click "Save" after adding all fields**

---

### Create "Category" Content Type

1. Click **Add content type**
2. Name: `Category`
3. API Identifier: `category`
4. Click **Create**

#### Add Fields:

1. **Name** (Text - Short text)
   - Field ID: `name`
   - Required, Max 50 characters

2. **Slug** (Text - Short text)
   - Field ID: `slug`
   - Required, Unique, Pattern: `^[a-z0-9-]+$`
   - Appearance: Slug

3. **Description** (Text - Long text)
   - Field ID: `description`
   - Max 500 characters

4. **Color** (Text - Short text)
   - Field ID: `color`
   - Pattern: `^#[0-9A-Fa-f]{6}$`
   - Help text: Hex color code (e.g., #1AA3DD)

**Click "Save"**

---

### Create "Author" Content Type

1. Click **Add content type**
2. Name: `Author`
3. API Identifier: `author`
4. Click **Create**

#### Add Fields:

1. **Name** (Text - Short text)
   - Field ID: `name`
   - Required, Max 100 characters

2. **Slug** (Text - Short text)
   - Field ID: `slug`
   - Required, Unique
   - Appearance: Slug

3. **Bio** (Text - Long text)
   - Field ID: `bio`
   - Max 500 characters

4. **Avatar** (Media - One file)
   - Field ID: `avatar`
   - Accept images only

5. **Email** (Text - Short text)
   - Field ID: `email`
   - Pattern: Email validation

6. **Title** (Text - Short text)
   - Field ID: `title`
   - Help text: Job title (e.g., "Sustainability Engineer")

**Click "Save"**

---

## Step 4: Create Sample Content

### Create Categories

1. Go to **Content** in sidebar
2. Click **Add entry** → **Category**
3. Create these categories:

**Category 1: Solar Energy**
- Name: `Solar Energy`
- Slug: `solar-energy`
- Description: `Articles about solar power systems, installation, and benefits`
- Color: `#FFA500`

**Category 2: Sustainability**
- Name: `Sustainability`
- Slug: `sustainability`
- Description: `Sustainable building practices and green technology`
- Color: `#73C167`

**Category 3: EDGE Certification**
- Name: `EDGE Certification`
- Slug: `edge-certification`
- Description: `EDGE building certification process and benefits`
- Color: `#00A651`

**Category 4: Water Conservation**
- Name: `Water Conservation`
- Slug: `water-conservation`
- Description: `Water-saving technologies and strategies`
- Color: `#00A8E8`

**Category 5: Industry Insights**
- Name: `Industry Insights`
- Slug: `industry-insights`
- Description: `Market trends and industry analysis`
- Color: `#606163`

**For each category**: Fill in fields, then click **Publish** (top right)

---

### Create Authors

1. Click **Add entry** → **Author**

**Author 1: Unoma Grant**
- Name: `Unoma Grant`
- Slug: `unoma-grant`
- Bio: `Co-Founder & CEO of EEN Consulting with expertise in mechanical engineering and sustainable energy solutions. Passionate about driving sustainability in Nigeria's built environment.`
- Avatar: Upload photo or use placeholder
- Email: `unoma@eenconsulting.ng`
- Title: `Co-Founder & CEO`

**Author 2: Obinna Ukwa**
- Name: `Obinna Ukwa`
- Slug: `obinna-ukwa`
- Bio: `Co-Founder & Managing Director specializing in mechanical and civil engineering. Leading EEN's mission to implement affordable sustainable energy across Nigeria.`
- Avatar: Upload photo
- Email: `obinna@eenconsulting.ng`
- Title: `Co-Founder & Managing Director`

**For each author**: Click **Publish**

---

## Step 5: Configure Your Project

### Create `.env.local` file

In your project root, create `.env.local`:

```bash
# Contentful API Keys
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token_here

# Environment
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

**Replace** `your_space_id_here` and `your_access_token_here` with the values from Step 2.

### Add to `.gitignore`

Make sure `.env.local` is in your `.gitignore`:

```
.env.local
.env*.local
```

### Create `.env.example`

For team members/documentation:

```bash
# Copy this to .env.local and fill in your values
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
CONTENTFUL_PREVIEW_ACCESS_TOKEN=
NEXT_PUBLIC_SITE_URL=
```

---

## Step 6: Image Optimization Setup

Contentful automatically optimizes images via URL parameters:

### Recommended Image Sizes

When uploading images to Contentful:
- **Hero images**: 1200x630px (Facebook/Twitter optimal)
- **Author avatars**: 400x400px (square)
- **In-content images**: Max 1920px width

### Automatic Optimization

The code will use these URL parameters:
```
?w=1200&h=630&fit=fill&fm=webp&q=80
```

Parameters:
- `w` = width
- `h` = height
- `fit=fill` = crop to exact dimensions
- `fm=webp` = serve WebP format (fallback to original if unsupported)
- `q=80` = quality (1-100, 80 is good balance)

---

## Step 7: Verify Setup

Before proceeding with code implementation:

1. ✅ Contentful account created
2. ✅ Space created ("EEN Blog")
3. ✅ API keys copied
4. ✅ Content model created (Blog Post, Category, Author)
5. ✅ Sample categories published (5 categories)
6. ✅ Sample authors published (2 authors)
7. ✅ `.env.local` file created with API keys

---

## Next Steps

Once you've completed this setup:
1. I'll install the required npm packages
2. Create the Contentful client
3. Build the blog pages
4. You can then create your first blog post in Contentful!

---

## Contentful Free Tier Limits

**What you get:**
- 25,000 API requests/month
- 25,000 records
- 48 content types
- 2 locales
- Unlimited assets (images, files)

**API Call Estimate for Your Blog:**
- Each build fetches all posts (~10-50 calls)
- Building 3x per day = ~90-150 calls/month
- You're well within limits ✅

**If you exceed limits:**
- Contentful sends email warning at 80%
- Consider caching or upgrading to paid plan ($300/month - overkill for now)

---

## Troubleshooting

### Can't find API keys?
- Go to **Settings** → **API keys** → Click your key name
- Both tokens are on the same page

### Content not showing up?
- Make sure entries are **Published** (not just saved as drafts)
- Check your API tokens are for the correct space

### Images not loading?
- Verify image URLs start with `//images.ctfassets.net/`
- Check CORS settings if using preview API

---

**Ready to proceed?** Let me know once you've completed Steps 1-7, and I'll start building the blog! 🚀
