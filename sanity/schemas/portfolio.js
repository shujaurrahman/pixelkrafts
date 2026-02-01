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
      type: 'string'
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
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true,
        }
      }]
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url'
    },
    {
      name: 'completedAt',
      title: 'Completed Date',
      type: 'date'
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'impact',
      title: 'Project Impact',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'metric', type: 'string', title: 'Metric'},
          {name: 'value', type: 'string', title: 'Value'}
        ]
      }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'mainImage'
    }
  }
}
