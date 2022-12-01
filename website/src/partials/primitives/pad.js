import element from '../../utils/element.js'
import css from '../../utils/css.js'
import classNames from '../../utils/classNames.js'

const block = classNames.blockFromImportMetaUrl(import.meta.url)

export default ({
  content = '',
  gap = 0, // Negative integer for smaller gaps, positive integers for larger gaps. null is no gap
  top, // Same value type as gap
  left, // Same value type as gap
  right, // Same value type as gap
  bottom, // Same value type as gap
  backgroundImageUrl,
  className: classNameProp = ''
} = {}) => {
  const className = classNames.join([
    block.classMap({
      gap,
      top,
      left,
      right,
      bottom
    }),
    classNameProp
  ])

  return element({
    attributes: {
      class: className
    },
    content
  })
}

const sides = [
  ['top', 'vertical'],
  ['bottom', 'vertical'],
  ['left', 'horizontal'],
  ['right', 'horizontal']
]

const styles = () => css`
  ${block.modifier('gap').responsive(gap => css`
    ${gap.value(null)} { padding: 0; }
    ${gap.value(-5)} { padding: var(--spacing-vertical-small-5) var(--spacing-horizontal-small-5); }
    ${gap.value(-4)} { padding: var(--spacing-vertical-small-4) var(--spacing-horizontal-small-4); }
    ${gap.value(-3)} { padding: var(--spacing-vertical-small-3) var(--spacing-horizontal-small-3); }
    ${gap.value(-2)} { padding: var(--spacing-vertical-small-2) var(--spacing-horizontal-small-2); }
    ${gap.value(-1)} { padding: var(--spacing-vertical-small) var(--spacing-horizontal-small); }
    ${gap.value(0)} { padding: var(--spacing-vertical) var(--spacing-horizontal); }
    ${gap.value(1)} { padding: var(--spacing-vertical-large) var(--spacing-horizontal-large); }
    ${gap.value(2)} { padding: var(--spacing-vertical-large-2) var(--spacing-horizontal-large-2); }
    ${gap.value(3)} { padding: var(--spacing-vertical-large-3) var(--spacing-horizontal-large-3); }
    ${gap.value(4)} { padding: var(--spacing-vertical-large-4) var(--spacing-horizontal-large-4); }
    ${gap.value(5)} { padding: var(--spacing-vertical-large-5) var(--spacing-horizontal-large-5); }
  `)}

  ${sides.map(([side, direction]) => css`
    ${block.modifier(side).responsive(modifier => css`
      ${modifier.value(null)} { padding-${side}: 0 }
      ${modifier.value(-5)} { padding-${side}: var(--spacing-${direction}-small-5) }
      ${modifier.value(-4)} { padding-${side}: var(--spacing-${direction}-small-4) }
      ${modifier.value(-3)} { padding-${side}: var(--spacing-${direction}-small-3) }
      ${modifier.value(-2)} { padding-${side}: var(--spacing-${direction}-small-2) }
      ${modifier.value(-1)} { padding-${side}: var(--spacing-${direction}-small) }
      ${modifier.value(0)} { padding-${side}: var(--spacing-${direction}) }
      ${modifier.value(1)} { padding-${side}: var(--spacing-${direction}-large) }
      ${modifier.value(2)} { padding-${side}: var(--spacing-${direction}-large-2) }
      ${modifier.value(3)} { padding-${side}: var(--spacing-${direction}-large-3) }
      ${modifier.value(4)} { padding-${side}: var(--spacing-${direction}-large-4) }
      ${modifier.value(5)} { padding-${side}: var(--spacing-${direction}-large-5) }
    `)}
  `)}
`

export { styles as css }
