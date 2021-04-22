import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import article from './documents/article'
import site from './documents/site'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    article,
    site
  ])
})
