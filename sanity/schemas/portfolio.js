export default {
  name: 'portfolio',
  title: 'Portfolio Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
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
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Website Development', value: 'website'},
          {title: 'App Development', value: 'app'},
          {title: 'E-Commerce', value: 'ecommerce'},
          {title: 'UI/UX Design', value: 'design'},
          {title: 'AI/Automation', value: 'ai'},
          {title: 'Full Stack', value: 'fullstack'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Show on homepage',
      initialValue: false
    },
    
    // Main project image
    {
      name: 'mainImage',
      title: 'Main Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    
    // Short description for card/list view
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Brief 1-2 sentence description for portfolio cards',
      validation: Rule => Rule.required().max(200)
    },
    
    // PROJECT OVERVIEW SECTION
    {
      name: 'overview',
      title: 'Project Overview',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Full Description',
          type: 'text',
          rows: 4,
          description: 'Detailed project description'
        },
        {
          name: 'duration',
          title: 'Project Duration',
          type: 'string',
          description: 'e.g., "8 weeks", "3 months"'
        },
        {
          name: 'completedDate',
          title: 'Completion Date',
          type: 'date'
        },
        {
          name: 'projectUrl',
          title: 'Live Project URL',
          type: 'url'
        },
        {
          name: 'technologies',
          title: 'Technologies Used',
          type: 'array',
          of: [{type: 'string'}],
          description: 'List of technologies, frameworks, tools'
        }
      ]
    },
    
    // CHALLENGE SECTION
    {
      name: 'challenge',
      title: 'The Challenge',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Challenge Title',
          type: 'string',
          initialValue: 'The Challenge'
        },
        {
          name: 'description',
          title: 'Challenge Description',
          type: 'array',
          of: [{type: 'block'}],
          description: 'What problem did the client face?'
        }
      ]
    },
    
    // SOLUTION SECTION
    {
      name: 'solution',
      title: 'Our Solution',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Solution Title',
          type: 'string',
          initialValue: 'Our Solution'
        },
        {
          name: 'description',
          title: 'Solution Description',
          type: 'array',
          of: [{type: 'block'}],
          description: 'How did you solve the problem?'
        }
      ]
    },
    
    // RESULTS/IMPACT SECTION
    {
      name: 'results',
      title: 'Results & Impact',
      type: 'object',
      fields: [
        {
          name: 'metrics',
          title: 'Key Metrics',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {name: 'label', type: 'string', title: 'Metric Label'},
              {name: 'value', type: 'string', title: 'Metric Value'},
              {name: 'icon', type: 'string', title: 'Icon (emoji)', description: 'Optional emoji'}
            ]
          }]
        },
        {
          name: 'description',
          title: 'Results Description',
          type: 'array',
          of: [{type: 'block'}],
          description: 'Describe the impact and results'
        }
      ]
    },
    
    // CASE STUDY DETAILS
    {
      name: 'caseStudy',
      title: 'Full Case Study',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Detailed case study content with rich text'
    },
    
    // MEDIA GALLERY
    {
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        },
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            description: 'Optional caption for the image'
          }
        ]
      }],
      description: 'Additional project screenshots and images'
    },
    
    // VIDEO
    {
      name: 'video',
      title: 'Project Video',
      type: 'object',
      fields: [
        {
          name: 'videoUrl',
          title: 'Video URL (YouTube/Vimeo)',
          type: 'url',
          description: 'Paste YouTube or Vimeo URL'
        },
        {
          name: 'videoFile',
          title: 'Or Upload Video File',
          type: 'file',
          options: {
            accept: 'video/*'
          }
        }
      ]
    },
    
    // TESTIMONIAL
    {
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        {
          name: 'quote',
          title: 'Testimonial Quote',
          type: 'text',
          rows: 3
        },
        {
          name: 'clientName',
          title: 'Client Name',
          type: 'string'
        },
        {
          name: 'clientPosition',
          title: 'Client Position',
          type: 'string'
        },
        {
          name: 'clientPhoto',
          title: 'Client Photo',
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    
    // PROCESS/APPROACH
    {
      name: 'process',
      title: 'Our Approach/Process',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'step', type: 'string', title: 'Step Number', description: 'e.g., "01"'},
          {name: 'title', type: 'string', title: 'Step Title'},
          {name: 'description', type: 'text', title: 'Step Description', rows: 3}
        ]
      }]
    },
    
    // SEO
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string'
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 2
        }
      ]
    }
  ],
  
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'mainImage'
    }
  },
  
  orderings: [
    {
      title: 'Completion Date, New',
      name: 'completedDateDesc',
      by: [
        {field: 'overview.completedDate', direction: 'desc'}
      ]
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [
        {field: 'title', direction: 'asc'}
      ]
    }
  ]
}
