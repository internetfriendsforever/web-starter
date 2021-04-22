import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import metadata from './objects/metadata'
import appearance from './objects/appearance'
import navigationItem from './objects/navigationItem'
import article from './documents/article'
import navigation from './documents/navigation'
import page from './documents/page'
import site from './documents/site'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    metadata,
    appearance,
    navigationItem,
    article,
    navigation,
    page,
    site
  ])
})
