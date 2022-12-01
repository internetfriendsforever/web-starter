import * as path from 'path'
import css from './css.js'
import breakpoints from '../styles/breakpoints.js'

export class Selectable {
  get selector () {
    return `.${this.className}`
  }

  toString () {
    return this.selector
  }
}

export class Value extends Selectable {
  constructor (parent, value) {
    super()
    this.parent = parent
    this.value = value
  }

  get className () {
    if (
      typeof this.value === 'number' ||
      typeof this.value === 'string' ||
      typeof this.value === 'boolean'
    ) {
      return `${this.parent.className}-value-${this.value}`
    } else if (
      this.value === null
    ) {
      return `${this.parent.className}-value-null`
    }
  }
}

export class Breakpoint extends Selectable {
  constructor (parent, name) {
    super()
    this.parent = parent
    this.name = name
  }

  value (value) {
    return new Value(this, value)
  }

  get className () {
    return `${this.parent.className}-breakpoint-${this.name}`
  }
}

export class ModifierValue extends Value {
  get className () {
    if (this.isResponsive) {
      return Object.entries(this.value).map(([key, value]) => {
        return this.parent.breakpoint(key).value(value).className
      }).join(' ')
    } else {
      return super.className
    }
  }

  get selector () {
    if (this.isResponsive) {
      throw new Error('ModifierValue with an object value does not have any valid selector')
    } else {
      return super.selector
    }
  }

  get isResponsive () {
    const value = super.className
    return !value && this.value && typeof this.value === 'object'
  }
}

export class Modifier extends Selectable {
  constructor (parent, name) {
    super()
    this.parent = parent
    this.name = name
  }

  value (value) {
    return new ModifierValue(this, value)
  }

  breakpoint (name) {
    return new Breakpoint(this, name)
  }

  responsive (content) {
    return css`
      ${content(this)}

      ${Object.entries(breakpoints).map(([name, minWidth]) => css`
        @media (min-width: ${minWidth}px) {
          ${content(this.breakpoint(name))}
        }
      `)}
    `
  }

  get className () {
    return `${this.parent.className}--${this.name}`
  }
}

export class Modifiable extends Selectable {
  modifier (name) {
    return new Modifier(this, name)
  }

  classMap (modifiers) {
    const classes = [this.className]

    Object.entries(modifiers).forEach(([key, value]) => {
      classes.push(this.modifier(key).value(value).className)
    })

    return join(classes)
  }
}

export class Element extends Modifiable {
  constructor (parent, name) {
    super()
    this.parent = parent
    this.name = name
  }

  get className () {
    return `${this.parent.className}__${this.name}`
  }
}

export class Block extends Modifiable {
  constructor (name) {
    super()
    this.name = name
  }

  element (name) {
    return new Element(this, name)
  }

  get className () {
    return this.name
  }
}

export function block (name) {
  return new Block(name)
}

export function blockFromFilename (filename) {
  return new Block(path.parse(filename).name)
}

export function blockFromImportMetaUrl (url) {
  return blockFromFilename(new URL('', url).pathname)
}

export function join (classNames) {
  return classNames.filter(Boolean).join(' ')
}

export default {
  block,
  blockFromFilename,
  blockFromImportMetaUrl,
  join
}
