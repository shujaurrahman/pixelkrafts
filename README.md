# PixelKrafts Website

A modern, SEO-optimized full-stack website for PixelKrafts Software Solutions.

## 🚀 Features

- **Multi-page Architecture**: Home, About, Services, Portfolio, Blogs, Contact, Careers
- **9 Core Services**: 
  - Website Development
  - App Development
  - SEO Services
  - Social Media Ads
  - Digital Marketing
  - Chatbot Development
  - AI Models Development
  - UI/UX Designing
  - APIs Development
- **Development Process Section**: 4-step process visualization
- **Interactive FAQ**: Accordion-style with smooth animations
- **SEO Optimized**: Meta tags, keywords, structured data
- **Responsive Design**: Mobile-first approach
- **Policy Pages**: Terms, Privacy, Refund, Security, NDA
- **Contact Form**: Get free quotes
- **Social Media Integration**: Instagram, WhatsApp, LinkedIn

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG components
- **Blog CMS**: Sanity (to be integrated)

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Sanity CMS Setup (For Blogs)

### Step 1: Create Sanity Project
```bash
npm install -g @sanity/cli
sanity init
```

Use these details:
- Project ID: `a0r2v2xb`
- Organization ID: `oZHyWbfxS`
- Dataset: `production`

### Step 2: Create Environment Variables
Create `.env.local` in the root:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=a0r2v2xb
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=skN9icNuWu1AEYdCRRd8muncb8fan1MyoK9ICdrvGZ3PRfqtMn6BdEvhO8BPaHmiEPNtDwSN8BLIeN1p0zTsjzHs0gkm7QysJLsNqsDdiPixY6LETDtiClHWn1BgnWL8lVyLRnlGr56A6yj8ahth2rOo1vnfNA0sWEn4XmdDKDmGhgNsV3YE
```

### Step 3: Install Sanity Dependencies
```bash
npm install @sanity/client @sanity/image-url next-sanity
```

### Step 4: Create Sanity Schema
Create `sanity/schemas/blog.js`:
```javascript
export default {
  name: 'blog',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],
}
```

## 📧 Contact Information

- **Address**: Pilibhit 262001, Uttar Pradesh, India
- **Phone**: +91 7579966178
- **Email**: official@pixelkrafts.in
- **Working Hours**: Mon - Sat: 10:00 AM - 06:00 PM

## 🔗 Social Media

- Instagram: [@pixelkrafts_in](https://www.instagram.com/pixelkrafts_in/)
- LinkedIn: [PixelKrafts Software Solutions](https://www.linkedin.com/company/pixelkraftssoftwaresolution)
- WhatsApp: [Chat with us](https://wa.me/917579966178)

## 📄 License

© 2026 PixelKrafts Software Solutions. All Rights Reserved.
