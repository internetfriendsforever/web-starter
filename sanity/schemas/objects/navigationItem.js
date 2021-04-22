export default {
  name: 'navigation.item',
  title: 'Item',
  type: 'object',
  preview: {
    select: {
      targetTitle: 'target.title',
      children: 'children.length'
    },
    prepare: ({ targetTitle, children }) => ({
      title: targetTitle,
      subtitle: children && `${children} child${children > 1 ? 'ren' : ''}`
    })
  },
  fields: [
    {
      name: 'target',
      title: 'Target page',
      type: 'reference',
      to: [{ type: 'page' }],
      validation: Rule => Rule.required()
    },

    {
      name: 'children',
      title: 'Children',
      type: 'array',
      of: [{ type: 'navigation.item' }]
    }
  ]
}
