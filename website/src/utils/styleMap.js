export default function (map) {
  return Object.keys(map)
    .filter(key => !!map[key])
    .map(key => `${key}: ${map[key]};`)
    .join(' ')
}
