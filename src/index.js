import states from '../data/states.json'

const get = key => states.map(item => item[key])
const capitalize = str => str.replace(/\b\w/g, f => f.toUpperCase())
const capitalizor = items => items.map(item => capitalize(item))

export const long = (opts) => run(opts, 'name')
export const short = (opts) => run(opts, 'abbreviation')
export const capitals = (opts) => run(opts, 'capital')
export const all = () => states

function run(opts, prop) {
  const items = get(prop)
  if (opts && opts.capitalize) return capitalizor(items)
  return items
}
