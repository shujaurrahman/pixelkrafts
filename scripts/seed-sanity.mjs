/**
 * Sanity Data Seed Script
 * Run this script to populate all Sanity tables with initial data
 * Usage: node scripts/seed-sanity.mjs
 * 
 * IMPORTANT: Set SANITY_API_TOKEN environment variable before running
 */

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'a0r2v2xb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Required for write operations
});

// ============ PORTFOLIO DATA ============
const portfolioData = [
  {
    _type: 'portfolio',
    title: 'OneVizion Corporate Website',
    slug: { _type: 'slug', current: 'onevizion' },
    client: 'OneVizion',
    category: 'website',
    description: 'Modern corporate website with dynamic content management, responsive design, and seamless user experience.',
    technologies: ['Next.js', 'Tailwind CSS', 'Sanity CMS'],
    projectUrl: 'https://onevizion.in',
    featured: true,
    completedAt: '2024-01-15'
  },
  {
    _type: 'portfolio',
    title: 'J.K. Global Trading Platform',
    slug: { _type: 'slug', current: 'jk-global' },
    client: 'J.K. Global Trading',
    category: 'ecommerce',
    description: 'Full-featured e-commerce platform with inventory management, payment integration, and real-time analytics.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    projectUrl: '#',
    featured: true,
    completedAt: '2024-01-10'
  },
  {
    _type: 'portfolio',
    title: 'Truelite Technologies Dashboard',
    slug: { _type: 'slug', current: 'truelite' },
    client: 'Truelite Technologies',
    category: 'fullstack',
    description: 'Comprehensive business dashboard with data visualization, user management, and reporting features.',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Chart.js'],
    projectUrl: '#',
    featured: true,
    completedAt: '2024-01-05'
  },
  {
    _type: 'portfolio',
    title: 'AI Customer Support Bot',
    slug: { _type: 'slug', current: 'ai-bot' },
    client: 'Tech Startup',
    category: 'ai',
    description: 'Intelligent chatbot with natural language processing for automated customer support.',
    technologies: ['Python', 'OpenAI', 'FastAPI', 'Redis'],
    projectUrl: '#',
    featured: true,
    completedAt: '2023-12-20'
  }
];

// ============ TESTIMONIALS DATA ============
const testimonialData = [
  {
    _type: 'testimonial',
    fullName: 'Vikram Dhawan',
    position: 'Founder, OneVizion',
    comment: 'Working with PixelKrafts was an excellent experience. They delivered the project on time with exceptional quality. Their professionalism, clear communication, and dedication truly stood out. I would definitely recommend them.',
    rating: 5,
    featured: true,
    order: 1
  },
  {
    _type: 'testimonial',
    fullName: 'R.A. Malik',
    position: 'Director, Truelite Technologies Pvt. Ltd.',
    comment: 'Great experience totally satisfied. Thank you for the high-quality and timely delivery.',
    rating: 5,
    featured: true,
    order: 2
  },
  {
    _type: 'testimonial',
    fullName: 'Zoya',
    position: 'Student / Academic Project Client',
    comment: 'Best work for my mathematics project on statistics. The results were excellent, and they were kind enough to wait for the payment as well. Amazing working with them.',
    rating: 5,
    featured: true,
    order: 3
  },
  {
    _type: 'testimonial',
    fullName: 'Afnan Ghani',
    position: 'Managing Director, J.K. Global Trading',
    comment: 'Very professional and always on time. Their customer support is excellent. I highly recommend PixelKrafts for any web development work.',
    rating: 5,
    featured: true,
    order: 4
  }
];

// ============ FAQ DATA ============
const faqData = [
  {
    _type: 'faq',
    question: 'What services does PixelKrafts offer?',
    answer: 'We offer 9 core digital solutions: Website Development, App Development, SEO Optimization, Social Media Ads, Digital Marketing, Chatbot Development, AI Models Development, UI/UX Designing, and APIs Development. Each service is tailored to help businesses grow and automate operations.',
    category: 'general',
    featured: true,
    order: 1
  },
  {
    _type: 'faq',
    question: 'Do you provide custom website and app development?',
    answer: 'Yes! We specialize in custom websites (WordPress, Shopify, React, Next.js) and mobile apps (Flutter, React Native, native iOS/Android). Every project is built from scratch based on your specific business requirements and goals.',
    category: 'services',
    featured: true,
    order: 2
  },
  {
    _type: 'faq',
    question: 'How long does it take to develop a website or app?',
    answer: 'Timelines depend on project complexity. A simple website takes 2-3 weeks. A dynamic website with CMS takes 3-5 weeks. Mobile apps range from 6-12 weeks. Enterprise solutions may take 3-6 months. We provide detailed timelines during your free consultation.',
    category: 'general',
    featured: true,
    order: 3
  },
  {
    _type: 'faq',
    question: 'What is your pricing model?',
    answer: 'We offer flexible pricing based on project scope. This includes fixed-price projects for defined requirements, monthly retainers for ongoing support, and hourly rates for specific tasks. Contact us for a free quote tailored to your needs.',
    category: 'pricing',
    featured: true,
    order: 4
  },
  {
    _type: 'faq',
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Absolutely! We offer comprehensive post-launch support including bug fixes, updates, security patches, performance monitoring, and feature enhancements. Our maintenance plans ensure your digital assets stay current and secure.',
    category: 'support',
    featured: true,
    order: 5
  },
  {
    _type: 'faq',
    question: 'How do I get started with PixelKrafts?',
    answer: 'Simple! Fill out our contact form or call us at +91 7579966178. We\'ll schedule a free 30-minute consultation to discuss your project, provide recommendations, and create a customized proposal. No commitment required!',
    category: 'general',
    featured: true,
    order: 6
  }
];

// ============ SERVICES DATA ============
const servicesData = [
  {
    _type: 'service',
    title: 'Website Development',
    slug: { _type: 'slug', current: 'website-development' },
    icon: '🌐',
    shortDescription: 'We create fast, responsive, and conversion-focused websites tailored to your brand. Supporting WordPress, Shopify, and custom websites.',
    features: ['WordPress', 'Shopify', 'Custom Websites', 'Responsive Design'],
    technologies: ['Next.js', 'React', 'WordPress', 'Shopify'],
    featured: true,
    order: 1,
    colorClass: 'bg-c-blue-1'
  },
  {
    _type: 'service',
    title: 'App Development',
    slug: { _type: 'slug', current: 'app-development' },
    icon: '📱',
    shortDescription: 'Build high-performance mobile apps with Flutter, React Native, and Laravel. Custom, Native/Hybrid solutions available.',
    features: ['Flutter', 'React Native', 'Laravel', 'Native/Hybrid'],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
    featured: true,
    order: 2,
    colorClass: 'bg-c-black-2'
  },
  {
    _type: 'service',
    title: 'SEO Services',
    slug: { _type: 'slug', current: 'seo-services' },
    icon: '🔍',
    shortDescription: 'Advanced SEO strategies to grow your brand\'s visibility, increase reach, and drive organic traffic to your website.',
    features: ['On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'Local SEO'],
    technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Search Console'],
    featured: false,
    order: 3,
    colorClass: 'bg-c-black-2'
  },
  {
    _type: 'service',
    title: 'Social Media Ads',
    slug: { _type: 'slug', current: 'social-media-ads' },
    icon: '📢',
    shortDescription: 'Create and manage targeted social media advertising campaigns across all major platforms to maximize your ROI.',
    features: ['Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'Twitter Ads'],
    technologies: ['Meta Ads Manager', 'LinkedIn Campaign Manager', 'Google Ads'],
    featured: false,
    order: 4,
    colorClass: 'bg-c-black-2'
  },
  {
    _type: 'service',
    title: 'Digital Marketing',
    slug: { _type: 'slug', current: 'digital-marketing' },
    icon: '📈',
    shortDescription: 'Comprehensive digital marketing strategies to build your brand, engage your audience, and drive conversions.',
    features: ['Content Marketing', 'Email Marketing', 'PPC', 'Analytics'],
    technologies: ['Mailchimp', 'HubSpot', 'Google Analytics', 'Hootsuite'],
    featured: false,
    order: 5,
    colorClass: 'bg-c-black-2'
  },
  {
    _type: 'service',
    title: 'Chatbot Development',
    slug: { _type: 'slug', current: 'chatbot-development' },
    icon: '🤖',
    shortDescription: 'Intelligent chatbots powered by AI to automate customer support and enhance user engagement 24/7.',
    features: ['AI-Powered', 'Multi-Platform', 'Custom Workflows', '24/7 Support'],
    technologies: ['OpenAI', 'Dialogflow', 'Rasa', 'Botpress'],
    featured: true,
    order: 6,
    colorClass: 'bg-c-purple-1'
  },
  {
    _type: 'service',
    title: 'AI Models Development',
    slug: { _type: 'slug', current: 'ai-models-development' },
    icon: '🧠',
    shortDescription: 'Custom AI models and machine learning solutions to automate processes and extract insights from your data.',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API'],
    featured: false,
    order: 7,
    colorClass: 'bg-c-black-2'
  },
  {
    _type: 'service',
    title: 'UI/UX Designing',
    slug: { _type: 'slug', current: 'ui-ux-designing' },
    icon: '🎨',
    shortDescription: 'Create intuitive and engaging user interfaces that provide seamless experiences and keep users engaged.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
    featured: false,
    order: 8,
    colorClass: 'bg-c-black-2'
  },
  {
    _type: 'service',
    title: 'APIs Development',
    slug: { _type: 'slug', current: 'apis-development' },
    icon: '🔗',
    shortDescription: 'Build robust, scalable, and secure APIs to connect your applications and enable seamless data exchange.',
    features: ['RESTful APIs', 'GraphQL', 'Microservices', 'API Documentation'],
    technologies: ['Node.js', 'Python', 'FastAPI', 'Express.js'],
    featured: false,
    order: 9,
    colorClass: 'bg-c-black-2'
  }
];

// ============ CHOOSE US DATA ============
const chooseUsData = [
  {
    _type: 'chooseUs',
    title: 'Smarter, Faster Productivity',
    description: 'We build systems that automate workflows, reduce manual effort, and help your team work with maximum efficiency.',
    iconName: 'ThunderLightningIcon',
    order: 1
  },
  {
    _type: 'chooseUs',
    title: 'Customer-First Digital Experiences',
    description: 'Clean, intuitive designs that improve conversions, build trust, and keep users engaged longer.',
    iconName: 'CursorIcon',
    order: 2
  },
  {
    _type: 'chooseUs',
    title: 'Always-On Performance',
    description: 'Your website or system stays fast, stable, and available 24/7 — no technical bottlenecks, no downtime.',
    iconName: 'MobileIcon',
    order: 3
  },
  {
    _type: 'chooseUs',
    title: 'Lower Operational Costs',
    description: 'Thoughtful engineering and automation reduce running costs, prevent errors, and eliminate unnecessary workload.',
    iconName: 'LightBulbIcon',
    order: 4
  },
  {
    _type: 'chooseUs',
    title: 'Meaningful Data Insights',
    description: 'We integrate smart analytics and AI-driven tools so you can make quick, informed business decisions every day.',
    iconName: 'GridPlusIcon',
    order: 5
  },
  {
    _type: 'chooseUs',
    title: 'Systems That Scale With You',
    description: 'Whether you\'re a startup or an established business, our solutions expand smoothly as your needs grow without complexity.',
    iconName: 'StarsIcon',
    order: 6
  }
];

// ============ BLOG DATA ============
// Helper function to create portable text block
const createBlock = (text, style = 'normal') => ({
  _type: 'block',
  _key: Math.random().toString(36).substr(2, 9),
  style,
  children: [{ _type: 'span', _key: Math.random().toString(36).substr(2, 9), text, marks: [] }],
  markDefs: []
});

const blogData = [
  {
    _type: 'blog',
    title: 'Building Scalable Web Applications with Next.js 14',
    slug: { _type: 'slug', current: 'nextjs-scalable-apps' },
    author: 'Shuja Ur Rahman',
    excerpt: 'Discover best practices for building high-performance, scalable web applications using Next.js 14 App Router, Server Components, and modern React patterns.',
    categories: ['web-development'],
    publishedAt: '2024-01-15T10:00:00Z',
    featured: true,
    body: [
      createBlock('Introduction to Next.js 14', 'h2'),
      createBlock('Next.js 14 represents a significant leap forward in React application development. With the introduction of the App Router, Server Components, and improved performance features, developers can now build faster, more scalable applications than ever before.'),
      createBlock('In this comprehensive guide, we\'ll explore the key features of Next.js 14 and how to leverage them effectively in your projects.'),
      createBlock('Key Features of Next.js 14', 'h2'),
      createBlock('1. App Router Architecture', 'h3'),
      createBlock('The App Router introduces a new paradigm for routing in Next.js. With file-system based routing, layouts, and nested routes, you can create complex application structures with minimal configuration.'),
      createBlock('2. Server Components', 'h3'),
      createBlock('Server Components allow you to render components on the server, reducing the JavaScript bundle size and improving initial page load times. This is particularly beneficial for content-heavy applications.'),
      createBlock('3. Improved Performance', 'h3'),
      createBlock('Next.js 14 includes numerous performance optimizations including better caching strategies, improved build times, and more efficient hydration.'),
      createBlock('Best Practices for Scalability', 'h2'),
      createBlock('When building scalable applications, consider implementing proper caching strategies, code splitting, and optimizing your data fetching patterns. These practices ensure your application performs well under load.'),
      createBlock('Conclusion', 'h2'),
      createBlock('Next.js 14 provides developers with powerful tools to build modern web applications. By understanding and implementing these features, you can create applications that are fast, scalable, and maintainable.')
    ]
  },
  {
    _type: 'blog',
    title: 'The Future of AI in Web Development',
    slug: { _type: 'slug', current: 'ai-web-development' },
    author: 'Syed Faizan Jeelani',
    excerpt: 'Explore how artificial intelligence is revolutionizing web development, from code generation to intelligent user experiences and automated testing.',
    categories: ['ai-automation', 'web-development'],
    publishedAt: '2024-01-10T10:00:00Z',
    featured: false,
    body: [
      createBlock('AI is Transforming Web Development', 'h2'),
      createBlock('Artificial Intelligence is no longer just a buzzword—it\'s becoming an integral part of modern web development workflows. From code generation to automated testing, AI is reshaping how we build digital experiences.'),
      createBlock('AI-Powered Code Generation', 'h2'),
      createBlock('Tools like GitHub Copilot and ChatGPT are revolutionizing how developers write code. These AI assistants can generate boilerplate code, suggest optimizations, and even help debug complex issues.'),
      createBlock('Key benefits include faster development cycles, reduced bugs, and improved code quality through AI-powered suggestions.'),
      createBlock('Intelligent User Experiences', 'h2'),
      createBlock('AI enables personalized user experiences through machine learning algorithms that analyze user behavior and preferences. This includes personalized content recommendations, dynamic pricing, and intelligent chatbots.'),
      createBlock('Automated Testing and QA', 'h2'),
      createBlock('AI-powered testing tools can automatically generate test cases, identify potential bugs, and ensure comprehensive code coverage. This reduces the time and effort required for manual testing.'),
      createBlock('The Road Ahead', 'h2'),
      createBlock('As AI continues to evolve, we can expect even more sophisticated tools and integrations. The key is to embrace these technologies while maintaining a human-centered approach to development.')
    ]
  },
  {
    _type: 'blog',
    title: 'SEO Strategies That Actually Work in 2024',
    slug: { _type: 'slug', current: 'seo-strategies-2024' },
    author: 'PixelKrafts Team',
    excerpt: 'Master the latest SEO techniques that drive organic traffic. Learn about Core Web Vitals, semantic search, and content optimization strategies.',
    categories: ['seo', 'digital-marketing'],
    publishedAt: '2024-01-05T10:00:00Z',
    featured: false,
    body: [
      createBlock('SEO in 2024: What\'s Changed?', 'h2'),
      createBlock('Search engine optimization continues to evolve rapidly. Google\'s algorithm updates focus increasingly on user experience, content quality, and technical performance. Here\'s what you need to know to stay ahead.'),
      createBlock('Core Web Vitals Matter More Than Ever', 'h2'),
      createBlock('Google\'s Core Web Vitals—LCP, FID, and CLS—are crucial ranking factors. Ensuring your website loads quickly, responds fast to interactions, and maintains visual stability is no longer optional.'),
      createBlock('Focus on optimizing images, leveraging browser caching, and minimizing JavaScript to improve these metrics.'),
      createBlock('Semantic Search and Intent', 'h2'),
      createBlock('Search engines are getting better at understanding user intent. Rather than stuffing keywords, focus on creating comprehensive content that answers user questions thoroughly.'),
      createBlock('Content Optimization Strategies', 'h2'),
      createBlock('Create in-depth, authoritative content that provides genuine value. Use proper heading hierarchy, internal linking, and structured data to help search engines understand your content.'),
      createBlock('Technical SEO Essentials', 'h2'),
      createBlock('Ensure your site has proper indexing, fast load times, mobile responsiveness, and secure HTTPS connections. These technical foundations are critical for SEO success.')
    ]
  },
  {
    _type: 'blog',
    title: 'Creating Stunning UI/UX with Tailwind CSS',
    slug: { _type: 'slug', current: 'tailwind-ui-ux' },
    author: 'PixelKrafts Team',
    excerpt: 'Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility classes and custom design systems.',
    categories: ['ui-ux-design', 'web-development'],
    publishedAt: '2023-12-28T10:00:00Z',
    featured: false,
    body: [
      createBlock('Why Tailwind CSS?', 'h2'),
      createBlock('Tailwind CSS has become the go-to choice for modern web development. Its utility-first approach enables rapid UI development without leaving your HTML, resulting in faster development cycles and more maintainable code.'),
      createBlock('Getting Started with Tailwind', 'h2'),
      createBlock('Setting up Tailwind CSS is straightforward. With just a few commands, you can have a fully configured environment ready for development. The framework integrates seamlessly with popular tools like Next.js, Vite, and Create React App.'),
      createBlock('Building Responsive Layouts', 'h2'),
      createBlock('Tailwind\'s responsive design utilities make it easy to create layouts that look great on any device. Use breakpoint prefixes like sm:, md:, lg:, and xl: to apply styles at different screen sizes.'),
      createBlock('Custom Design Systems', 'h2'),
      createBlock('Tailwind\'s configuration file allows you to define custom colors, fonts, spacing, and more. This makes it easy to create a consistent design system across your entire application.'),
      createBlock('Best Practices', 'h2'),
      createBlock('Use component extraction for repeated patterns, leverage the @apply directive for complex styles, and take advantage of Tailwind\'s built-in dark mode support for modern user experiences.')
    ]
  },
  {
    _type: 'blog',
    title: 'Mobile App Development: Native vs Cross-Platform',
    slug: { _type: 'slug', current: 'native-vs-cross-platform' },
    author: 'Syed Faizan Jeelani',
    excerpt: 'Compare native and cross-platform mobile development approaches. Discover which technology stack is best for your next mobile project.',
    categories: ['app-development'],
    publishedAt: '2023-12-20T10:00:00Z',
    featured: false,
    body: [
      createBlock('The Mobile Development Dilemma', 'h2'),
      createBlock('When starting a mobile app project, one of the first decisions is whether to go native or cross-platform. Each approach has its pros and cons, and the right choice depends on your specific requirements.'),
      createBlock('Native Development', 'h2'),
      createBlock('Native development using Swift for iOS and Kotlin for Android provides the best performance and access to platform-specific features. However, it requires maintaining separate codebases for each platform.'),
      createBlock('Benefits include optimal performance, full platform feature access, and better user experience that follows platform-specific design guidelines.'),
      createBlock('Cross-Platform Development', 'h2'),
      createBlock('Frameworks like React Native and Flutter allow you to write once and deploy to multiple platforms. This approach reduces development time and costs while maintaining near-native performance.'),
      createBlock('Making the Right Choice', 'h2'),
      createBlock('Consider factors like budget, timeline, performance requirements, and team expertise when making your decision. For most business applications, cross-platform development offers the best balance of cost and performance.'),
      createBlock('Our Recommendation', 'h2'),
      createBlock('At PixelKrafts, we often recommend React Native for its mature ecosystem and excellent developer experience. However, we evaluate each project individually to ensure the best outcome for our clients.')
    ]
  },
  {
    _type: 'blog',
    title: 'Automating Business Workflows with AI',
    slug: { _type: 'slug', current: 'ai-business-automation' },
    author: 'Shuja Ur Rahman',
    excerpt: 'Discover how AI-powered automation can streamline your business processes, reduce costs, and improve efficiency across operations.',
    categories: ['ai-automation'],
    publishedAt: '2023-12-15T10:00:00Z',
    featured: false,
    body: [
      createBlock('The Power of AI Automation', 'h2'),
      createBlock('Artificial Intelligence is transforming how businesses operate. From customer service to data analysis, AI-powered automation can handle repetitive tasks, freeing your team to focus on strategic initiatives.'),
      createBlock('Common Automation Use Cases', 'h2'),
      createBlock('Customer support chatbots, document processing, email automation, data entry, and predictive analytics are just a few areas where AI can make a significant impact.'),
      createBlock('Implementing AI in Your Business', 'h2'),
      createBlock('Start by identifying repetitive, time-consuming tasks in your workflow. These are prime candidates for automation. Then, evaluate available AI tools and platforms that can address these needs.'),
      createBlock('Measuring ROI', 'h2'),
      createBlock('Track metrics like time saved, error reduction, customer satisfaction, and cost savings to measure the impact of your AI implementations. Most businesses see significant ROI within the first year.'),
      createBlock('Getting Started', 'h2'),
      createBlock('Begin with small, manageable automation projects. As you gain experience and see results, expand your AI initiatives across more areas of your business.')
    ]
  }
];

// ============ CONTACT DUMMY DATA ============
const contactData = [
  {
    _type: 'contact',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '+91 9876543210',
    service: 'website-development',
    inquiryType: 'quote',
    message: 'Hi, I need a professional website for my restaurant business. Looking for a modern design with online ordering capability and table reservation system. Please provide a quote.',
    submittedAt: '2024-01-15T14:30:00Z',
    status: 'new'
  },
  {
    _type: 'contact',
    name: 'Priya Patel',
    email: 'priya.patel@startup.io',
    phone: '+91 8765432109',
    service: 'mobile-app',
    inquiryType: 'quote',
    message: 'We are a health-tech startup looking to develop a mobile app for patient management. Need both iOS and Android apps with doctor consultation features. Would love to discuss the project scope.',
    submittedAt: '2024-01-14T10:15:00Z',
    status: 'in-progress'
  },
  {
    _type: 'contact',
    name: 'Amit Kumar',
    email: 'amit@ecommerce-store.com',
    phone: '+91 7654321098',
    service: 'seo',
    inquiryType: 'information',
    message: 'I want to know more about your SEO services. My e-commerce website is not ranking well on Google and I need help improving organic traffic. What is your approach to SEO?',
    submittedAt: '2024-01-13T16:45:00Z',
    status: 'replied'
  }
];

// ============ SITE SETTINGS DATA ============
const siteSettingsData = [
  {
    _type: 'siteSettings',
    companyName: 'PixelKrafts Software Solutions',
    tagline: 'Create. Craft. Conquer.',
    description: 'Your trusted partner in web development, app development, SEO, and custom AI solutions. Together, we create digital experiences that make a lasting impact.',
    email: 'official@pixelkrafts.in',
    phone: '+91 7579966178',
    address: 'Pilibhit 262001\nUttar Pradesh, India',
    workingHours: 'Mon - Sat: 10:00 AM - 06:00 PM',
    socialLinks: {
      instagram: 'https://www.instagram.com/pixelkrafts_in/',
      linkedin: 'https://www.linkedin.com/company/pixelkraftssoftwaresolution',
      whatsapp: '917579966178',
      twitter: 'https://twitter.com/pixelkrafts',
      github: 'https://github.com/pixelkrafts'
    },
    copyrightText: 'PixelKrafts Software Solutions. All Rights Reserved.',
    introSection: {
      title: 'Where Pixels Meet Purpose',
      description: 'PixelKrafts is a full-service digital agency specializing in website development, mobile apps, SEO, and AI-powered automation. Founded by Shuja Ur Rahman and Syed Faizan Jeelani, we combine technical excellence with creative innovation to deliver solutions that drive real business growth.'
    },
    stats: [
      { value: '10+', label: 'Happy Clients' },
      { value: '25+', label: 'Projects Delivered' },
      { value: '9', label: 'Core Services' },
      { value: '24/7', label: 'Support Available' }
    ],
    heroSection: {
      tagline: 'Create. Craft. Conquer.',
      headline: 'Amazing Website Creation',
      subheadline: 'Turn your ideas into digital reality. We help you build modern, user-friendly websites with clean design that drives growth.',
      ctaText: 'Get Free Quote'
    },
    ctaSection: {
      title: "Let's work with Us",
      description: "Ready to bring your ideas to life? Join forces with our expert team and let's create something extraordinary together. Your vision, our expertise – let's make it happen!",
      buttonText: 'Contact Us'
    }
  }
];

// ============ ABOUT PAGE DATA ============
const aboutPageData = [
  {
    _type: 'aboutPage',
    title: 'About PixelKrafts',
    subtitle: 'PixelKrafts is a software solutions agency combining expertise in development, design, and digital marketing to deliver comprehensive solutions that drive business growth.',
    mission: 'We design, build, and deploy tools that help your business operate more efficiently — not more manually. Our mission is to deliver smooth user experiences that support your business growth and digital presence.',
    vision: 'To become the go-to digital partner for businesses seeking innovative, reliable, and scalable technology solutions that drive real results.',
    clientCount: '10+',
    journey: [
      {
        title: 'The Beginning',
        description: 'Started with a vision to bridge the gap between innovative technology and practical business solutions. Two passionate developers united by a common goal: to empower businesses with digital excellence.',
        iconName: 'LightBulbIcon'
      },
      {
        title: 'Growth & Evolution',
        description: 'Expanded our services from web development to comprehensive digital solutions including mobile apps, AI automation, and digital marketing. Each project taught us valuable lessons that shaped our approach.',
        iconName: 'RocketIcon'
      },
      {
        title: 'Today & Beyond',
        description: "Now serving 10+ businesses across diverse industries, from startups to established enterprises. We continue to push boundaries, embrace emerging technologies, and deliver exceptional results for our clients.",
        iconName: 'StarsIcon'
      }
    ],
    whatWeDo: [
      {
        title: 'Web Development',
        description: 'Fast, responsive, and conversion-focused websites tailored to your brand.'
      },
      {
        title: 'App Development',
        description: 'High-performance mobile apps for iOS and Android platforms.'
      },
      {
        title: 'Digital Marketing',
        description: 'SEO strategies and social media management to grow your brand.'
      },
      {
        title: 'AI Solutions',
        description: 'Intelligent systems that automate workflows and reduce manual effort.'
      }
    ]
  }
];

// ============ FOUNDERS DATA ============
const foundersData = [
  {
    _type: 'founder',
    name: 'Shuja Ur Rahman',
    position: 'Co-Founder & Technical Lead',
    bio: 'Full-stack developer with expertise in modern web technologies, AI integration, and scalable system architecture. Passionate about building solutions that solve real business problems.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/shujaurrahman/',
      github: 'https://github.com/shujaurrahman',
      twitter: 'https://twitter.com/shujaurrahman',
      instagram: 'https://www.instagram.com/shujaurrahman/'
    },
    order: 1
  },
  {
    _type: 'founder',
    name: 'Syed Faizan Jeelani',
    position: 'Co-Founder & Creative Director',
    bio: 'Creative technologist specializing in UI/UX design, brand development, and digital strategy. Committed to creating memorable user experiences that drive engagement.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/syedfaizanjeelani/',
      instagram: 'https://www.instagram.com/syedfaizanjeelani/'
    },
    order: 2
  }
];

// ============ PROCESS DATA ============
const processData = [
  {
    _type: 'process',
    step: '01',
    title: 'Discovery & Smart Analyzing',
    description: 'We start by learning your goals, identifying bottlenecks, and mapping the smartest direction for your solution. This stage gives us clarity on what to build and why.',
    features: ['Analyzing current workflow', 'System check', 'Process check', 'Speed check', 'Manual work', 'Repetitive task'],
    order: 1
  },
  {
    _type: 'process',
    step: '02',
    title: 'Architect & Build',
    description: 'We design clean user flows, structure your system, and develop powerful tech from custom AI to high-performance websites and apps. Everything is built for speed, scale, and longevity.',
    features: ['UI/UX Design', 'System Architecture', 'Frontend Development', 'Backend Development', 'Database Design', 'API Integration'],
    order: 2
  },
  {
    _type: 'process',
    step: '03',
    title: 'Deploy Seamlessly',
    description: 'Your solution goes live with smooth execution and zero disruption. We ensure fast load times, stable operation, and a frictionless user experience across devices.',
    features: ['Cloud Deployment', 'Performance Optimization', 'Security Setup', 'Testing & QA', 'Launch Support'],
    order: 3
  },
  {
    _type: 'process',
    step: '04',
    title: 'Continuous Optimization',
    description: 'To maintain everything operating at peak efficiency, we often check performance and adjust systems. Our constant enhancements guarantee that your outcomes will keep improving over time.',
    features: ['Performance Monitoring', 'Bug Fixes', 'Feature Updates', 'Security Patches', 'Analytics & Insights'],
    order: 4
  }
];

// ============ SEED FUNCTIONS ============
async function deleteExisting(type) {
  console.log(`Deleting existing ${type} documents...`);
  const docs = await client.fetch(`*[_type == "${type}"]._id`);
  if (docs.length > 0) {
    const transaction = client.transaction();
    docs.forEach(id => transaction.delete(id));
    await transaction.commit();
    console.log(`Deleted ${docs.length} ${type} documents`);
  }
}

async function seedData(data, typeName) {
  console.log(`\nSeeding ${typeName}...`);
  try {
    await deleteExisting(typeName);
    
    const transaction = client.transaction();
    data.forEach(item => transaction.create(item));
    await transaction.commit();
    
    console.log(`✓ Successfully seeded ${data.length} ${typeName} documents`);
  } catch (error) {
    console.error(`✗ Error seeding ${typeName}:`, error.message);
  }
}

async function main() {
  console.log('='.repeat(50));
  console.log('Starting Sanity Data Seed...');
  console.log('='.repeat(50));

  if (!process.env.SANITY_API_TOKEN) {
    console.error('\n❌ Error: SANITY_API_TOKEN environment variable is required');
    console.log('\nTo get your token:');
    console.log('1. Go to https://www.sanity.io/manage');
    console.log('2. Select your project');
    console.log('3. Go to API → Tokens');
    console.log('4. Create a token with Editor permissions');
    console.log('\nThen run:');
    console.log('SANITY_API_TOKEN=your_token node scripts/seed-sanity.mjs');
    process.exit(1);
  }

  await seedData(portfolioData, 'portfolio');
  await seedData(testimonialData, 'testimonial');
  await seedData(faqData, 'faq');
  await seedData(servicesData, 'service');
  await seedData(chooseUsData, 'chooseUs');
  await seedData(blogData, 'blog');
  await seedData(contactData, 'contact');
  await seedData(siteSettingsData, 'siteSettings');
  await seedData(aboutPageData, 'aboutPage');
  await seedData(foundersData, 'founder');
  await seedData(processData, 'process');

  console.log('\n' + '='.repeat(50));
  console.log('✓ Sanity data seeding completed!');
  console.log('='.repeat(50));
  console.log('\nYou can now edit this data in Sanity Studio at /studio');
}

main().catch(console.error);
