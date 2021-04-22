export default {
  name: 'article',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'image',
      type: 'image'
    },
    {
      name: 'body',
      type: 'array',
      of: [
        { type: 'block' }
      ]
    }
  ]
}
