# Newsletter Setup Guide - EmailJS Integration

Complete guide for setting up newsletter subscriptions using EmailJS.

---

## Overview

The newsletter system uses EmailJS to:
1. **Notify you** when someone subscribes (to `info@eenconsulting.ng`)
2. **Send welcome email** to the subscriber automatically
3. **Store subscriber emails** (you'll manage your email list manually or use a service)

---

## Step 1: EmailJS Templates Setup

You already have EmailJS set up for your contact form. Now you need to create two newsletter templates.

### Create Template 1: Newsletter Subscription Notification

This template notifies YOU when someone subscribes.

1. Log in to [EmailJS Dashboard](https://dashboard.emailjs.com)
2. Click **Email Templates** → **Create New Template**
3. **Template Name**: `Newsletter Subscription`
4. **Template ID**: `template_newsletter` (important - matches code)

**Template Content:**

```
Subject: New Newsletter Subscriber 📧

Someone just subscribed to your newsletter!

Subscriber Email: {{subscriber_email}}

Date: {{current_date}}

---
Add this email to your mailing list to start sending them updates!

Best regards,
EEN Consulting Website
```

**Parameters used:**
- `{{subscriber_email}}` - The email that subscribed
- `{{current_date}}` - Automatic date

**Settings:**
- **From Name**: EEN Consulting Website
- **From Email**: Your verified sender email
- **To Email**: `info@eenconsulting.ng` (or set dynamically with `{{to_email}}`)
- **Reply To**: `{{subscriber_email}}`

Click **Save**

---

### Create Template 2: Welcome Email to Subscriber

This template is sent to the person who subscribed.

1. Click **Create New Template**
2. **Template Name**: `Newsletter Welcome`
3. **Template ID**: `template_newsletter_welcome`

**Template Content:**

```
Subject: Welcome to EEN Consulting Newsletter! 🌱

Hi there,

Thank you for subscribing to the EEN Consulting newsletter!

You'll now receive:
✅ Expert insights on solar energy and sustainability
✅ Industry news and trends
✅ Exclusive tips for energy efficiency
✅ Updates on our latest projects

We're excited to have you on board!

---

Best regards,
The EEN Consulting Team

P.S. You can unsubscribe anytime by replying to this email with "Unsubscribe"

---
EEN Consulting
Driving Sustainability in the Nigerian Built Environment
Website: https://eenconsulting.ng
Email: info@eenconsulting.ng
```

**Parameters:**
- `{{subscriber_email}}` - Will be used for To Email

**Settings:**
- **From Name**: EEN Consulting
- **From Email**: Your verified sender email
- **To Email**: `{{subscriber_email}}` (dynamic - goes to the subscriber)
- **Reply To**: `info@eenconsulting.ng`

Click **Save**

---

## Step 2: Get Your EmailJS Public Key

If you don't already have it:

1. Go to **Account** in EmailJS dashboard
2. Click **General** tab
3. Copy your **Public Key** (looks like: `xYz123AbC`)

---

## Step 3: Update Newsletter Component

Update the EmailJS public key in the newsletter component:

1. Open `src/components/blog/NewsletterSubscribe.tsx`
2. Find this line:
   ```typescript
   'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
   ```
3. Replace `YOUR_PUBLIC_KEY` with your actual public key from Step 2
4. Do this in BOTH places (lines for sending notifications and welcome emails)

---

## Step 4: Test the Newsletter

```bash
# Start dev server
npm run dev

# Visit http://localhost:3000
# Scroll to footer and try subscribing with your email
```

**What should happen:**
1. ✅ Form shows "Subscribing..." state
2. ✅ You receive notification email at `info@eenconsulting.ng`
3. ✅ Subscriber receives welcome email
4. ✅ Form shows success message

**If it doesn't work:**
- Check EmailJS service ID is `service_oeq5w9r`
- Check template IDs match exactly (`template_newsletter` and `template_newsletter_welcome`)
- Check your public key is correct
- Check your sender email is verified in EmailJS
- Check browser console for errors

---

## Step 5: Managing Your Email List

### Option A: Manual Management (Free)

**Pros**: Free, simple, full control
**Cons**: Manual work

**How to do it:**
1. Create a spreadsheet or document
2. When you get subscription notifications, add emails to the list
3. Use a bulk email service (Gmail, Outlook) to send newsletters
4. Manually track unsubscribes

**Limitations:**
- Gmail: 500 emails/day
- Outlook: 300 emails/day

---

### Option B: Use a Newsletter Service (Recommended)

**Free Tier Options:**

#### Mailchimp (Recommended)
- **Free**: Up to 500 subscribers, 1,000 emails/month
- **Features**: Templates, analytics, automation
- **Setup**:
  1. Create account at [mailchimp.com](https://mailchimp.com)
  2. Create audience
  3. Manually import subscriber emails from notifications
  4. OR use Mailchimp's signup forms (replace newsletter component)

#### ConvertKit
- **Free**: Up to 1,000 subscribers
- **Features**: Email sequences, landing pages
- **Good for**: Content creators

#### Brevo (formerly Sendinblue)
- **Free**: Unlimited contacts, 300 emails/day
- **Features**: Email marketing + SMS

---

### Option C: Automate with Zapier/Make (Advanced)

**What it does:**
- Automatically adds subscribers to your email service
- No manual copy-paste

**How:**
1. Create Zapier account
2. Create "Zap":
   - **Trigger**: Email in Gmail (when you receive subscription notification)
   - **Action**: Add subscriber to Mailchimp/ConvertKit
3. Turn on Zap

**Cost**: Zapier free tier = 100 tasks/month

---

## Step 6: Update Environment Variables

Add your EmailJS public key to `.env.local`:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_oeq5w9r
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here

# Newsletter
NEXT_PUBLIC_NEWSLETTER_EMAIL=info@eenconsulting.ng
```

Then update the component to use environment variables:

```typescript
// In NewsletterSubscribe.tsx
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_oeq5w9r'
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
```

---

## Newsletter Strategy (Tips)

### Content Ideas

**Weekly/Bi-weekly Newsletter:**
- Latest blog posts
- Industry news
- Project highlights
- Energy-saving tips
- Special offers/consultations

### Best Practices

1. **Consistency**: Pick a schedule (weekly, monthly) and stick to it
2. **Value First**: Provide useful content, not just promotions
3. **Mobile-Friendly**: Most people read emails on phones
4. **Clear CTA**: Include 1-2 clear calls-to-action
5. **Unsubscribe Link**: Always include (legal requirement)

### Email Template Structure

```
Subject: [Catchy Title] - EEN Newsletter

Hi [First Name],

[Opening paragraph - personal touch]

📰 This Week's Highlights:

1. [Blog Post Title]
   Brief summary...
   [Read More Button]

2. [Tip/News Item]
   ...

💡 Quick Tip:
[Energy-saving tip]

🎯 Featured Service:
[Brief service mention]

---
Thanks for reading!

Best,
The EEN Team

[Social Links] | [Website Link] | [Unsubscribe]
```

---

## Analytics & Tracking

### Track Newsletter Performance

**Basic (Free):**
- Count subscribers (from notifications)
- Track blog traffic from newsletter (Google Analytics UTM parameters)

**Example UTM Link:**
```
https://eenconsulting.ng/blog/post-slug?utm_source=newsletter&utm_medium=email&utm_campaign=weekly_01
```

**Advanced (Paid Services):**
- Mailchimp: Open rates, click rates, engagement
- ConvertKit: Subscriber growth, email performance
- Google Analytics 4: Full funnel tracking

---

## Legal Compliance (Important!)

### GDPR / Privacy

**What you need:**
1. ✅ **Privacy Policy** - Update to mention email collection
2. ✅ **Consent** - "By subscribing, you agree to receive emails" (already in component)
3. ✅ **Unsubscribe** - Easy way to opt-out (in welcome email)
4. ✅ **Data Security** - Don't share/sell emails

### Add to Privacy Policy

```markdown
## Newsletter Subscriptions

When you subscribe to our newsletter, we collect your email address to send you:
- Educational content about sustainability and energy
- Company updates and news
- Special offers (optional)

You can unsubscribe anytime by clicking the unsubscribe link in our emails or emailing info@eenconsulting.ng.

We do not share your email with third parties for marketing purposes.
```

---

## Troubleshooting

### "Email not sending"
- Check EmailJS service is active
- Verify sender email in EmailJS
- Check template IDs match code
- Check public key is correct

### "Receiving notifications but subscriber doesn't get welcome email"
- Check `template_newsletter_welcome` template exists
- Check To Email is set to `{{subscriber_email}}`
- Check subscriber's spam folder

### "Getting spam complaints"
- Always include unsubscribe link
- Don't buy email lists
- Only email people who subscribed
- Send valuable content

### "Too many subscribers for free tier"
- Upgrade to Mailchimp paid ($13/month for 500-2,500 subscribers)
- Or use Brevo (free unlimited contacts, 300 emails/day)

---

## Cost Breakdown

### Free Setup (Current)
```
EmailJS: Free (10,000 emails/month)
Manual management: Free
Total: $0/month
```

### With Newsletter Service
```
EmailJS: Free
Mailchimp (500 subs): Free
Total: $0/month

OR

Mailchimp (500-2,500 subs): $13/month
Total: $13/month
```

### With Automation
```
EmailJS: Free
Mailchimp: Free (or $13)
Zapier: Free (100 tasks/month)
Total: $0-13/month
```

---

## Next Steps

1. ✅ Complete EmailJS template setup (Steps 1-2)
2. ✅ Update public key in component (Step 3)
3. ✅ Test newsletter subscription (Step 4)
4. ✅ Choose email list management method (Step 5)
5. ✅ Plan your first newsletter content
6. ✅ Set a schedule (weekly, bi-weekly, monthly)
7. ✅ Update Privacy Policy

---

## Where Newsletter Appears

The newsletter signup is now available in:

1. **Footer** (all pages) - Inline form
2. **Individual blog posts** - Card format at end of post
3. **Can be added to**: Homepage, About page, etc.

---

## Pro Tips

1. **First Email**: Send immediately after launch with "What to expect"
2. **Segment Later**: As you grow, segment by interest (solar, water, etc.)
3. **A/B Testing**: Try different subject lines to improve open rates
4. **Mobile First**: 60%+ will read on mobile
5. **Time Zones**: Send when your audience is most active (Nigeria: 9-11 AM WAT)

---

**Need Help?**
- EmailJS Support: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Mailchimp Guide: [https://mailchimp.com/help/](https://mailchimp.com/help/)

---

**Last Updated**: 2026-01-04
**Version**: 1.0
