module.exports = () => null

// const html = require('../utils/html')
// const sanity = require('../utils/sanity')

// module.exports = async id => {
//   const article = await sanity.fetch(`
//     *[_id == $id]{
//       _id,
//       title
//     }[0]
//   `, {
//     id
//   })

//   return html`
//     <a href="/">Back to home</a>
//     <h1>${article.title}</h1>
//   `
// }
