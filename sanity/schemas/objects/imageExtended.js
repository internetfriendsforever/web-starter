export default {
  name: 'imageExtended',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'array',
      options: {
        isHighlighted: true
      },
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' }
          ],
          lists: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' }
            ],
            annotations: []
          }
        }
      ]
    }
  ]
}
