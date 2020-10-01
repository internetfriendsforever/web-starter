const sanityClient = require('@sanity/client')
const imageUrlBuilder = require('@sanity/image-url')
const blocksToHtml = require('@sanity/block-content-to-html')
const Cache = require('@11ty/eleventy-cache-assets')

const client = sanityClient({
  projectId: 'kyx9b3tb',
  dataset: 'production',
  useCdn: false
})

const queryUrl = query => {
  const { url, dataset } = client.clientConfig
  return `${url}/data/query/${dataset}?query=${encodeURIComponent(query)}`
}

const fetch = async (query, options = ({
  duration: '1d',
  type: 'json'
})) => {
  const url = queryUrl(query)
  const response = await Cache(url, options)

  if (response.error) {
    throw new Error(response.error.description)
  } else {
    return response.result
  }
}

const image = source => imageUrlBuilder(client).image(source)
const html = (blocks, props) => blocksToHtml({ blocks, ...props })

module.exports = {
  client,
  image,
  html,
  fetch
}
