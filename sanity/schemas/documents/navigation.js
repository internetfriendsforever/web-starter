export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  initialValue: {
    name: 'Navigation'
  },
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      hidden: true
    },

    {
      name: 'frontPage',
      title: 'Front page',
      type: 'reference',
      to: [
        { type: 'page' }
      ]
    },

    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'navigation.item' }]
    }
  ]
}
