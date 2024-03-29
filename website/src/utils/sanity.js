import throat from 'throat'
import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import blocksToHtml from '@sanity/block-content-to-html'
import cachedFetch from './cachedFetch.js'
import config from '../../../sanity/sanity.json'

const client = sanityClient({
  projectId: config.api.projectId,
  dataset: config.api.dataset,
  useCdn: false,
  apiVersion: '2021-06-07'
})

const concurrencyLimit = throat(100)

const fetch = async (query, queryParams) => {
  return cachedFetch({
    query,
    queryParams
  }, () => (
    concurrencyLimit(() => client.fetch(query, queryParams))
  ))
}

const image = source => imageUrlBuilder(client).image(source)
const html = (blocks, props) => blocksToHtml({ blocks, ...props })

export default {
  client,
  image,
  html,
  fetch
}
