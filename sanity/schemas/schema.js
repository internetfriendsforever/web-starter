import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import i18n from './i18n'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
      name: 'article',
      type: 'document',
      fields: [
        {
          name: 'title',
          type: 'object',
          fields: i18n.locales.map(locale => ({
            name: locale.lang,
            title: locale.title,
            type: 'string'
          }))
        },
        {
          name: 'slug',
          type: 'object',
          fields: i18n.locales.map(locale => ({
            name: locale.lang,
            title: locale.title,
            type: 'slug',
            options: {
              source: `title.${locale.lang}`
            }
          }))
        },
        {
          name: 'image',
          type: 'image'
        },
        {
          name: 'body',
          type: 'object',
          fields: i18n.locales.map(locale => ({
            name: locale.lang,
            title: locale.title,
            type: 'array',
            of: [
              { type: 'block' }
            ]
          }))
        }
      ],
      preview: {
        select: {
          title: 'title'
        },
        prepare: selection => ({
          title: i18n.localize(selection.title)
        })
      }
    }
  ])
})
