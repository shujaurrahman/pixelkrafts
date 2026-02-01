export default {
  name: 'process',
  title: 'Process Steps',
  type: 'document',
  fields: [
    {
      name: 'step',
      title: 'Step Number',
      type: 'string',
      description: 'e.g., 01, 02, 03',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of features for this step'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order (1 for first, 2 for second, etc.)'
    }
  ],
  orderings: [
    {
      title: 'Step Order',
      name: 'stepOrder',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      step: 'step'
    },
    prepare({ title, step }) {
      return {
        title: `${step}. ${title}`
      }
    }
  }
}
