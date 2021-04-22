import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import metadata from './objects/metadata'
import appearance from './objects/appearance'
import article from './documents/article'
import page from './documents/page'
import site from './documents/site'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    metadata,
    appearance,
    article,
    page,
    site
  ])
})
