export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'position',
      title: 'Position / Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'comment',
      title: 'Testimonial Comment',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      initialValue: 5,
      validation: Rule => Rule.min(1).max(5)
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order to display testimonials (1 = first)'
    }
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'position',
      media: 'image'
    }
  }
}
