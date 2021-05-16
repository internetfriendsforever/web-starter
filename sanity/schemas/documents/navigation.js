export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  initialValue: {
    name: 'Navigation'
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
