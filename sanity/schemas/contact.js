export default {
  name: 'contact',
  title: 'Contact Submissions',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    },
    {
      name: 'service',
      title: 'Service Interested In',
      type: 'string',
      options: {
        list: [
          {title: 'Website Development', value: 'website-development'},
          {title: 'E-commerce Solutions', value: 'ecommerce'},
          {title: 'Mobile App Development', value: 'mobile-app'},
          {title: 'Branding & Identity', value: 'branding'},
          {title: 'SEO Services', value: 'seo'},
          {title: 'Social Media Marketing', value: 'smm'},
          {title: 'UI/UX Design', value: 'ui-ux'},
          {title: 'AI & Automation', value: 'ai-automation'},
          {title: 'Digital Marketing', value: 'digital-marketing'},
          {title: 'Other', value: 'other'}
        ]
      }
    },
    {
      name: 'inquiryType',
      title: 'Inquiry Type',
      type: 'string',
      options: {
        list: [
          {title: 'Get a Quote', value: 'quote'},
          {title: 'General Inquiry', value: 'information'}
        ]
      },
      initialValue: 'quote'
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'New', value: 'new'},
          {title: 'In Progress', value: 'in-progress'},
          {title: 'Replied', value: 'replied'},
          {title: 'Closed', value: 'closed'}
        ]
      },
      initialValue: 'new'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      service: 'service',
      inquiryType: 'inquiryType'
    },
    prepare(selection) {
      const {title, subtitle, service, inquiryType} = selection
      return {
        title: title,
        subtitle: `${subtitle} • ${inquiryType === 'quote' ? '💰 Quote' : 'ℹ️ Info'} • ${service || 'No service'}`
      }
    }
  }
}
