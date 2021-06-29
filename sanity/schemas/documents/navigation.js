export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  initialValue: {
    title: 'Main navigation'
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },

    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'navigation.item' }]
    }
  ]
}
