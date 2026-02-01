export default {
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'General', value: 'general'},
          {title: 'Services', value: 'services'},
          {title: 'Pricing', value: 'pricing'},
          {title: 'Technical', value: 'technical'},
          {title: 'Support', value: 'support'}
        ]
      },
      initialValue: 'general'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order to display FAQs (1 = first)'
    },
    {
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category'
    }
  },
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ]
}
