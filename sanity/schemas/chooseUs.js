export default {
  name: 'chooseUs',
  title: 'Why Choose Us',
  type: 'document',
  fields: [
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
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'iconName',
      title: 'Icon Name',
      type: 'string',
      description: 'Icon component name: ThunderLightningIcon, CursorIcon, MobileIcon, LightBulbIcon, GridPlusIcon, StarsIcon',
      options: {
        list: [
          {title: 'Thunder Lightning', value: 'ThunderLightningIcon'},
          {title: 'Cursor', value: 'CursorIcon'},
          {title: 'Mobile', value: 'MobileIcon'},
          {title: 'Light Bulb', value: 'LightBulbIcon'},
          {title: 'Grid Plus', value: 'GridPlusIcon'},
          {title: 'Stars', value: 'StarsIcon'},
          {title: 'Rocket', value: 'RocketIcon'},
          {title: 'Global', value: 'GlobalIcon'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order to display items (1 = first)'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'iconName'
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
