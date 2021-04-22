export default {
  name: 'appearance',
  title: 'Appearance',
  type: 'object',
  description: 'Icons and browser colors',
  options: {
    collapsible: true
  },
  fields: [
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'High-resolution bitmap or svg file',
      options: {
        hotspot: false
      }
    },
    {
      name: 'themeColor',
      title: 'Theme color',
      type: 'color',
      description: 'Customize the color of the user’s browser'
    }
  ]
}
