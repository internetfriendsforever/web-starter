export default {
  name: 'site',
  title: 'Site',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'metadata',
      title: 'Metadata',
      type: 'metadata'
    },
    {
      name: 'appearance',
      title: 'Appearance',
      type: 'appearance'
    }
  ]
}
