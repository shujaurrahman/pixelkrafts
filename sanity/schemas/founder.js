export default {
  name: 'founder',
  title: 'Founders',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'position',
      title: 'Position/Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Short Bio',
      type: 'text'
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
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
          name: 'github',
          title: 'GitHub URL',
          type: 'url'
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url'
        }
      ]
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 1
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'image'
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ]
}
