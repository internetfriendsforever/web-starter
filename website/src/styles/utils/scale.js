export default ({
  name,
  start = 1,
  end = 12,
  value = index => index
}) => {
  const items = []

  for (let index = start; index <= end; index++) {
    const indexName = [
      name,
      index > 1 && index
    ]
      .filter(Boolean)
      .join('-')

    items.push(`${indexName}: ${value(index)};`)
  }

  return items.join('\n')
}
