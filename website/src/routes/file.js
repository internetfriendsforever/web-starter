export function file () {
  return 'file.json'
}

export default function () {
  return JSON.stringify({ foo: 'bar' })
}
