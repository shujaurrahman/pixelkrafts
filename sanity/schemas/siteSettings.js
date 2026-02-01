export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short company tagline for header'
    },
    {
      name: 'description',
      title: 'Company Description',
      type: 'text',
      description: 'Used in footer and meta descriptions'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text'
    },
    {
      name: 'workingHours',
      title: 'Working Hours',
      type: 'string'
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url'
        },
        {
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url'
        },
        {
          name: 'twitter',
          title: 'Twitter/X URL',
          type: 'url'
        },
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url'
        },
        {
          name: 'whatsapp',
          title: 'WhatsApp Number (with country code)',
          type: 'string',
          description: 'Example: 917579966178'
        },
        {
          name: 'github',
          title: 'GitHub URL',
          type: 'url'
        },
        {
          name: 'youtube',
          title: 'YouTube URL',
          type: 'url'
        }
      ]
    },
    {
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      description: 'Text shown in footer copyright section'
    },
    {
      name: 'introSection',
      title: 'Intro Section (Home Page)',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        }
      ]
    },
    {
      name: 'stats',
      title: 'Stats (Home Page)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'e.g., 10+, 25+, 24/7'
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g., Happy Clients, Projects Delivered'
            }
          ]
        }
      ]
    },
    {
      name: 'heroSection',
      title: 'Hero Section (Home Page)',
      type: 'object',
      fields: [
        {
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          description: 'e.g., Create. Craft. Conquer.'
        },
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
          description: 'e.g., Amazing Website Creation'
        },
        {
          name: 'subheadline',
          title: 'Sub-headline',
          type: 'text',
          description: 'Description below the headline'
        },
        {
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
          description: 'e.g., Get Free Quote'
        }
      ]
    },
    {
      name: 'ctaSection',
      title: 'CTA Section (Let\'s Work Together)',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'e.g., Let\'s work with Us'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          description: 'e.g., Contact Us'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'companyName',
      media: 'logo'
    }
  }
}
