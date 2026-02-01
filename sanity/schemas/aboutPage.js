export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Page Subtitle',
      type: 'text',
      description: 'Introduction paragraph about the company'
    },
    {
      name: 'mission',
      title: 'Our Mission',
      type: 'text'
    },
    {
      name: 'vision',
      title: 'Our Vision',
      type: 'text'
    },
    {
      name: 'clientCount',
      title: 'Client Count',
      type: 'string',
      description: 'e.g., "10+" or "50+"'
    },
    {
      name: 'journey',
      title: 'Company Journey',
      type: 'array',
      of: [
        {
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
            },
            {
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              description: 'LightBulbIcon, RocketIcon, StarsIcon, etc.'
            }
          ]
        }
      ]
    },
    {
      name: 'whatWeDo',
      title: 'What We Do Section',
      type: 'array',
      of: [
        {
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
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
