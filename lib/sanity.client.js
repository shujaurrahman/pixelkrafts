import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Read-only client for frontend (useCdn: false for immediate updates)
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'a0r2v2xb',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
})

// Write client for mutations (server-side only)
export const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'a0r2v2xb',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// Blog queries
export async function getAllBlogs() {
  return client.fetch(
    `*[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author,
      mainImage,
      excerpt,
      categories,
      publishedAt,
      featured
    }`
  )
}

export async function getBlogBySlug(slug) {
  return client.fetch(
    `*[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      author,
      mainImage,
      excerpt,
      body,
      categories,
      publishedAt
    }`,
    { slug }
  )
}

// Portfolio queries
export async function getAllPortfolio() {
  return client.fetch(
    `*[_type == "portfolio"] | order(completedAt desc) {
      _id,
      title,
      slug,
      client,
      category,
      mainImage,
      description,
      technologies,
      projectUrl,
      completedAt,
      featured,
      impact
    }`
  )
}

export async function getPortfolioBySlug(slug) {
  return client.fetch(
    `*[_type == "portfolio" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      client,
      category,
      mainImage,
      gallery,
      description,
      fullDescription,
      technologies,
      projectUrl,
      completedAt,
      impact
    }`,
    { slug }
  )
}

// Contact submission
export async function submitContact(data) {
  return writeClient.create({
    _type: 'contact',
    ...data,
    submittedAt: new Date().toISOString()
  })
}

// Services queries
export async function getAllServices() {
  return client.fetch(
    `*[_type == "service"] | order(order asc) {
      _id,
      title,
      slug,
      icon,
      shortDescription,
      features,
      technologies,
      mainImage,
      featured,
      order,
      colorClass
    }`
  )
}

export async function getServiceBySlug(slug) {
  return client.fetch(
    `*[_type == "service" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      icon,
      shortDescription,
      fullDescription,
      features,
      technologies,
      mainImage
    }`,
    { slug }
  )
}

// Testimonials queries
export async function getAllTestimonials() {
  return client.fetch(
    `*[_type == "testimonial"] | order(order asc) {
      _id,
      fullName,
      position,
      comment,
      image,
      rating,
      featured
    }`
  )
}

// FAQ queries
export async function getAllFaqs() {
  return client.fetch(
    `*[_type == "faq" && featured == true] | order(order asc) {
      _id,
      question,
      answer,
      category
    }`
  )
}

// Featured Portfolio for home page
export async function getFeaturedPortfolio() {
  return client.fetch(
    `*[_type == "portfolio" && featured == true] | order(completedAt desc)[0...4] {
      _id,
      title,
      slug,
      client,
      category,
      mainImage,
      description,
      technologies,
      projectUrl,
      featured
    }`
  )
}

// Choose Us queries
export async function getAllChooseUs() {
  return client.fetch(
    `*[_type == "chooseUs"] | order(order asc) {
      _id,
      title,
      description,
      iconName,
      order
    }`
  )
}

// Site Settings query
export async function getSiteSettings() {
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      _id,
      companyName,
      logo,
      tagline,
      description,
      email,
      phone,
      address,
      workingHours,
      socialLinks,
      copyrightText,
      introSection,
      stats,
      heroSection,
      ctaSection
    }`
  )
}

// About Page query
export async function getAboutPage() {
  return client.fetch(
    `*[_type == "aboutPage"][0] {
      _id,
      title,
      subtitle,
      mission,
      vision,
      clientCount,
      journey,
      whatWeDo
    }`
  )
}

// Founders query
export async function getFounders() {
  return client.fetch(
    `*[_type == "founder"] | order(order asc) {
      _id,
      name,
      position,
      image,
      bio,
      socialLinks,
      order
    }`
  )
}

// Process Steps query
export async function getProcesses() {
  return client.fetch(
    `*[_type == "process"] | order(order asc) {
      _id,
      step,
      title,
      description,
      features,
      order
    }`
  )
}
