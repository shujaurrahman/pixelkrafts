export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
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
      name: 'icon',
      title: 'Icon (Emoji)',
      type: 'string',
      description: 'Use an emoji like 🌐, 📱, 🤖, etc.',
      validation: Rule => Rule.required()
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Brief description for cards (max 150 chars)',
      validation: Rule => Rule.required().max(200)
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
            }
          ]
        }
      ]
    },
    {
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of key features for this service'
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Technologies, tools, or frameworks used'
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'featured',
      title: 'Featured Service',
      type: 'boolean',
      initialValue: false,
      description: 'Show this service prominently'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order to display services (1 = first)'
    },
    {
      name: 'colorClass',
      title: 'Background Color Class',
      type: 'string',
      options: {
        list: [
          {title: 'Purple (Primary)', value: 'bg-c-purple-1'},
          {title: 'Blue (Secondary)', value: 'bg-c-blue-1'},
          {title: 'Dark', value: 'bg-c-black-2'}
        ]
      },
      initialValue: 'bg-c-black-2'
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    },
    {
      title: 'Title',
      name: 'titleAsc',
      by: [
        {field: 'title', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      icon: 'icon',
      featured: 'featured',
      media: 'mainImage'
    },
    prepare(selection) {
      const {title, icon, featured} = selection
      return {
        title: `${icon} ${title}`,
        subtitle: featured ? '⭐ Featured' : ''
      }
    }
  }
}
