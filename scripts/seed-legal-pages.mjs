import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// Load .env.local manually
const envPath = resolve(process.cwd(), '.env.local')
try {
  const envContent = readFileSync(envPath, 'utf8')
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=')
    if (key && valueParts.length) {
      process.env[key.trim()] = valueParts.join('=').trim()
    }
  })
} catch (e) {
  console.log('No .env.local found, using existing env vars')
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const legalPages = [
  {
    _type: 'legalPage',
    title: 'Terms & Conditions',
    slug: { _type: 'slug', current: 'terms' },
    lastUpdated: new Date().toISOString().split('T')[0],
    metaDescription: 'Terms and Conditions for PixelKrafts digital services including web development, app development, and digital marketing.',
    content: [
      { _type: 'block', _key: 'h1', style: 'h2', children: [{ _type: 'span', text: '1. Acceptance of Terms' }] },
      { _type: 'block', _key: 'p1', style: 'normal', children: [{ _type: 'span', text: 'By accessing and using PixelKrafts services, you accept and agree to be bound by these Terms and Conditions. These terms apply to all clients, visitors, and users of our services.' }] },
      { _type: 'block', _key: 'h2', style: 'h2', children: [{ _type: 'span', text: '2. Services' }] },
      { _type: 'block', _key: 'p2', style: 'normal', children: [{ _type: 'span', text: 'PixelKrafts provides web development, app development, SEO, digital marketing, AI solutions, and related software services as agreed upon with clients. All services are subject to availability and project-specific agreements.' }] },
      { _type: 'block', _key: 'h3', style: 'h2', children: [{ _type: 'span', text: '3. Payment Terms' }] },
      { _type: 'block', _key: 'p3', style: 'normal', children: [{ _type: 'span', text: 'Payment terms will be specified in individual project agreements. Clients agree to pay according to the agreed schedule. Late payments may incur additional charges as specified in the project contract.' }] },
      { _type: 'block', _key: 'h4', style: 'h2', children: [{ _type: 'span', text: '4. Intellectual Property' }] },
      { _type: 'block', _key: 'p4', style: 'normal', children: [{ _type: 'span', text: 'Upon full payment, all intellectual property rights of the delivered work transfer to the client, unless otherwise specified in the project agreement. PixelKrafts retains the right to showcase completed projects in our portfolio.' }] },
      { _type: 'block', _key: 'h5', style: 'h2', children: [{ _type: 'span', text: '5. Limitation of Liability' }] },
      { _type: 'block', _key: 'p5', style: 'normal', children: [{ _type: 'span', text: 'PixelKrafts shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service.' }] },
      { _type: 'block', _key: 'h6', style: 'h2', children: [{ _type: 'span', text: '6. Contact' }] },
      { _type: 'block', _key: 'p6', style: 'normal', children: [{ _type: 'span', text: 'For questions about these terms, contact us at official@pixelkrafts.in' }] },
    ]
  },
  {
    _type: 'legalPage',
    title: 'Privacy Policy',
    slug: { _type: 'slug', current: 'privacy' },
    lastUpdated: new Date().toISOString().split('T')[0],
    metaDescription: 'Privacy Policy for PixelKrafts - Learn how we collect, use, and protect your personal information.',
    content: [
      { _type: 'block', _key: 'h1', style: 'h2', children: [{ _type: 'span', text: '1. Information We Collect' }] },
      { _type: 'block', _key: 'p1', style: 'normal', children: [{ _type: 'span', text: 'We collect information you provide directly to us, such as name, email, phone number, company information, and project details. We also collect technical data like IP addresses and browser information for analytics purposes.' }] },
      { _type: 'block', _key: 'h2', style: 'h2', children: [{ _type: 'span', text: '2. How We Use Your Information' }] },
      { _type: 'block', _key: 'p2', style: 'normal', children: [{ _type: 'span', text: 'We use the information to provide, maintain, and improve our services, communicate with you about projects and updates, send marketing communications (with your consent), and comply with legal obligations.' }] },
      { _type: 'block', _key: 'h3', style: 'h2', children: [{ _type: 'span', text: '3. Information Sharing' }] },
      { _type: 'block', _key: 'p3', style: 'normal', children: [{ _type: 'span', text: 'We do not sell or rent your personal information. We may share information with service providers who assist in our operations, or when required by law. All third parties are bound by confidentiality agreements.' }] },
      { _type: 'block', _key: 'h4', style: 'h2', children: [{ _type: 'span', text: '4. Data Security' }] },
      { _type: 'block', _key: 'p4', style: 'normal', children: [{ _type: 'span', text: 'We implement industry-standard security measures including encryption, secure servers, and access controls to protect your personal information from unauthorized access or disclosure.' }] },
      { _type: 'block', _key: 'h5', style: 'h2', children: [{ _type: 'span', text: '5. Your Rights' }] },
      { _type: 'block', _key: 'p5', style: 'normal', children: [{ _type: 'span', text: 'You have the right to access, correct, or delete your personal information. You can also opt-out of marketing communications at any time by contacting us.' }] },
      { _type: 'block', _key: 'h6', style: 'h2', children: [{ _type: 'span', text: '6. Contact Us' }] },
      { _type: 'block', _key: 'p6', style: 'normal', children: [{ _type: 'span', text: 'For privacy concerns or to exercise your rights, contact us at official@pixelkrafts.in' }] },
    ]
  },
  {
    _type: 'legalPage',
    title: 'Refund Policy',
    slug: { _type: 'slug', current: 'refund' },
    lastUpdated: new Date().toISOString().split('T')[0],
    metaDescription: 'Refund Policy for PixelKrafts services - Understand our refund eligibility and process.',
    content: [
      { _type: 'block', _key: 'h1', style: 'h2', children: [{ _type: 'span', text: '1. Refund Eligibility' }] },
      { _type: 'block', _key: 'p1', style: 'normal', children: [{ _type: 'span', text: 'Refunds are considered on a case-by-case basis. Generally, work completed according to specifications is non-refundable. Refunds may be considered if deliverables significantly deviate from agreed specifications.' }] },
      { _type: 'block', _key: 'h2', style: 'h2', children: [{ _type: 'span', text: '2. Request Process' }] },
      { _type: 'block', _key: 'p2', style: 'normal', children: [{ _type: 'span', text: 'Refund requests must be submitted in writing to official@pixelkrafts.in within 7 days of project delivery. Please include your project details, reason for refund, and any supporting documentation.' }] },
      { _type: 'block', _key: 'h3', style: 'h2', children: [{ _type: 'span', text: '3. Partial Refunds' }] },
      { _type: 'block', _key: 'p3', style: 'normal', children: [{ _type: 'span', text: 'Partial refunds may be issued for incomplete work or work not meeting agreed specifications. The refund amount will be calculated based on the work completed and resources utilized.' }] },
      { _type: 'block', _key: 'h4', style: 'h2', children: [{ _type: 'span', text: '4. Non-Refundable Items' }] },
      { _type: 'block', _key: 'p4', style: 'normal', children: [{ _type: 'span', text: 'Third-party costs (hosting, domains, software licenses), completed milestone payments, and consultation fees are generally non-refundable.' }] },
      { _type: 'block', _key: 'h5', style: 'h2', children: [{ _type: 'span', text: '5. Processing Time' }] },
      { _type: 'block', _key: 'p5', style: 'normal', children: [{ _type: 'span', text: 'Approved refunds will be processed within 14 business days. Refunds will be issued using the original payment method when possible.' }] },
      { _type: 'block', _key: 'h6', style: 'h2', children: [{ _type: 'span', text: '6. Contact' }] },
      { _type: 'block', _key: 'p6', style: 'normal', children: [{ _type: 'span', text: 'For refund inquiries, contact official@pixelkrafts.in with your project details.' }] },
    ]
  },
  {
    _type: 'legalPage',
    title: 'Security Policy',
    slug: { _type: 'slug', current: 'security' },
    lastUpdated: new Date().toISOString().split('T')[0],
    metaDescription: 'Security Policy for PixelKrafts - Learn about our data protection measures and security practices.',
    content: [
      { _type: 'block', _key: 'h1', style: 'h2', children: [{ _type: 'span', text: '1. Data Protection' }] },
      { _type: 'block', _key: 'p1', style: 'normal', children: [{ _type: 'span', text: 'We implement industry-standard security measures to protect client data and project information. This includes encryption at rest and in transit, regular security audits, and secure development practices.' }] },
      { _type: 'block', _key: 'h2', style: 'h2', children: [{ _type: 'span', text: '2. Secure Communication' }] },
      { _type: 'block', _key: 'p2', style: 'normal', children: [{ _type: 'span', text: 'All communications and data transfers are encrypted using SSL/TLS protocols. We use secure file sharing platforms and encrypted email when handling sensitive information.' }] },
      { _type: 'block', _key: 'h3', style: 'h2', children: [{ _type: 'span', text: '3. Access Control' }] },
      { _type: 'block', _key: 'p3', style: 'normal', children: [{ _type: 'span', text: 'Access to client data is restricted to authorized personnel only on a need-to-know basis. We implement role-based access controls and regularly review access permissions.' }] },
      { _type: 'block', _key: 'h4', style: 'h2', children: [{ _type: 'span', text: '4. Infrastructure Security' }] },
      { _type: 'block', _key: 'p4', style: 'normal', children: [{ _type: 'span', text: 'Our development and hosting infrastructure uses firewalls, intrusion detection systems, and regular vulnerability scanning to prevent unauthorized access.' }] },
      { _type: 'block', _key: 'h5', style: 'h2', children: [{ _type: 'span', text: '5. Incident Response' }] },
      { _type: 'block', _key: 'p5', style: 'normal', children: [{ _type: 'span', text: 'We have procedures in place to quickly respond to and mitigate security incidents. Affected clients will be notified within 72 hours of any confirmed data breach.' }] },
      { _type: 'block', _key: 'h6', style: 'h2', children: [{ _type: 'span', text: '6. Reporting' }] },
      { _type: 'block', _key: 'p6', style: 'normal', children: [{ _type: 'span', text: 'Report security concerns or vulnerabilities to official@pixelkrafts.in. We take all reports seriously and investigate promptly.' }] },
    ]
  },
  {
    _type: 'legalPage',
    title: 'NDA Policy',
    slug: { _type: 'slug', current: 'nda' },
    lastUpdated: new Date().toISOString().split('T')[0],
    metaDescription: 'NDA Policy for PixelKrafts - Our commitment to confidentiality and protecting your business information.',
    content: [
      { _type: 'block', _key: 'h1', style: 'h2', children: [{ _type: 'span', text: '1. Confidentiality Commitment' }] },
      { _type: 'block', _key: 'p1', style: 'normal', children: [{ _type: 'span', text: 'PixelKrafts commits to maintaining strict confidentiality of all client information, project details, and proprietary data. We understand the importance of protecting your business ideas and intellectual property.' }] },
      { _type: 'block', _key: 'h2', style: 'h2', children: [{ _type: 'span', text: '2. Scope of Confidentiality' }] },
      { _type: 'block', _key: 'p2', style: 'normal', children: [{ _type: 'span', text: 'All information shared during project discussions, development, and delivery is considered confidential. This includes business plans, technical specifications, designs, source code, and any other proprietary information.' }] },
      { _type: 'block', _key: 'h3', style: 'h2', children: [{ _type: 'span', text: '3. Non-Disclosure' }] },
      { _type: 'block', _key: 'p3', style: 'normal', children: [{ _type: 'span', text: 'We will not disclose, share, or use confidential information except as necessary to complete the agreed-upon work. Information will not be shared with competitors or any third parties without explicit written consent.' }] },
      { _type: 'block', _key: 'h4', style: 'h2', children: [{ _type: 'span', text: '4. Employee Obligations' }] },
      { _type: 'block', _key: 'p4', style: 'normal', children: [{ _type: 'span', text: 'All team members working on client projects are bound by confidentiality agreements. Each employee signs an NDA as part of their employment contract.' }] },
      { _type: 'block', _key: 'h5', style: 'h2', children: [{ _type: 'span', text: '5. Duration' }] },
      { _type: 'block', _key: 'p5', style: 'normal', children: [{ _type: 'span', text: 'Confidentiality obligations extend beyond project completion. We maintain confidentiality for a minimum of 5 years after project delivery, unless otherwise specified.' }] },
      { _type: 'block', _key: 'h6', style: 'h2', children: [{ _type: 'span', text: '6. Formal NDA' }] },
      { _type: 'block', _key: 'p6', style: 'normal', children: [{ _type: 'span', text: 'For additional protection, we are happy to sign formal NDA documents tailored to your requirements. Contact official@pixelkrafts.in to discuss your specific needs.' }] },
    ]
  }
]

async function seedLegalPages() {
  console.log('🚀 Starting to seed legal pages...\n')

  for (const page of legalPages) {
    try {
      // Check if page already exists
      const existing = await client.fetch(
        `*[_type == "legalPage" && slug.current == $slug][0]._id`,
        { slug: page.slug.current }
      )

      if (existing) {
        // Update existing
        await client.patch(existing).set(page).commit()
        console.log(`✅ Updated: ${page.title}`)
      } else {
        // Create new
        await client.create(page)
        console.log(`✅ Created: ${page.title}`)
      }
    } catch (error) {
      console.error(`❌ Error with ${page.title}:`, error.message)
    }
  }

  console.log('\n🎉 Seeding complete!')
}

seedLegalPages()
