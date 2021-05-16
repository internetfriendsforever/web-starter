import slug from '../../utils/slug'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: doc => `${doc.title}`,
        isUnique: slug.isUniqueAcrossAllDocuments,
        slugify: (input, type) => slug.asyncSlugifier(input, type)
      },
      validation: Rule => Rule.required()
    },

    {
      name: 'metadata',
      title: 'Metadata',
      type: 'metadata'
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          name: 'section.banner',
          title: 'Banner',
          type: 'object',
          fields: [
            {
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Heading', value: 'h1' },
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
        },
        {
          name: 'section.text',
          title: 'Text',
          type: 'object',
          fields: [
            {
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                { type: 'block' }
              ]
            }
          ]
        }
      ]
    }
  ]
}
