export default {
  name: 'metadata',
  title: 'Metadata for search and social media sharing',
  type: 'object',
  options: {
    collapsible: true
  },
  description: 'For search engine optimisation and sharing on social media',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Use this to override the default title. Maximum 80 characters.'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 1,
      description: 'Keep it short and concise. Maximum 160 characters.'
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'tags'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'The preferred ratio is 2:1.',
      options: {
        hotspot: true
      }
    }
  ]
}
