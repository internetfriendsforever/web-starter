import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
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
  ])
})
