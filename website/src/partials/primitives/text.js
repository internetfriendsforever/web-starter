import css from '../../utils/css.js'
import element from '../../utils/element.js'
import classNames from '../../utils/classNames.js'

const block = classNames.blockFromImportMetaUrl(import.meta.url)

export default ({
  content,
  lang = '',
  small = false,
  smaller = false,
  strong = false,
  emphasis = false,
  muted = false,
  highlighted = false,
  antialiased = false,
  striked = false,
  tabular = false,
  lining = false,
  inline = false,
  lowerCase = false,
  align = 'left',
  className: classNameProp = ''
} = {}) => {
  const className = classNames.join([
    block.classMap({
      strong,
      emphasis,
      muted,
      highlighted,
      antialiased,
      striked,
      tabular,
      lining,
      small,
      smaller,
      lowerCase,
      align
    }),
    classNameProp
  ])

  const attributes = {
    class: className,
    lang
  }

  const tag = strong
    ? 'strong'
    : emphasis
      ? 'em'
      : inline
        ? 'span'
        : 'div'

  return element({
    tag,
    attributes,
    content
  })
}

export const styles = () => css`
  ${block.modifier('strong').responsive(strong => css`
    ${strong.value(true)} {
      font-weight: bold;
    }
  `)}

  ${block.modifier('emphasis').responsive(emphasis => css`
    ${emphasis.value(true)} {
      font-style: italic;
    }
  `)}

  ${block.modifier('antialiased').responsive(antialiased => css`
    ${antialiased.value(true)} {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `)}

  ${block.modifier('align').responsive(align => css`
    ${align.value('left')} {
      text-align: left;
    }

    ${align.value('center')} {
      text-align: center;
    }

    ${align.value('right')} {
      text-align: right;
    }
  `)}

  ${block.modifier('small').responsive(small => css`
    ${small.value(true)} {
      font-size: var(--font-size-small);
      line-height: var(--line-height-large);
    }
  `)}

  ${block.modifier('smaller').responsive(smaller => css`
    ${smaller.value(true)} {
      font-size: var(--font-size-small-2);
      line-height: var(--line-height-large);
    }
  `)}

  ${block.modifier('lowerCase').responsive(lowerCase => css`
    ${lowerCase.value(true)} {
      text-transform: lowercase;
    }
  `)}

  ${block.modifier('muted').responsive(muted => css`
    ${muted.value(true)} {
      color: var(--color-text-muted);
    }
  `)}

  ${block.modifier('highlighted').responsive(highlighted => css`
    ${highlighted.value(true)} {
      color: var(--color-text-highlighted);
    }
  `)}

  ${block.modifier('striked').responsive(striked => css`
    ${striked.value(true)} {
      text-decoration: line-through;
    }
  `)}

  ${block.modifier('tabular').responsive(tabular => css`
    ${tabular.value(true)} {
      font-variant-numeric: tabular-nums;
    }
  `)}

  ${block.modifier('lining').responsive(lining => css`
    ${lining.value(true)} {
      font-variant-numeric: lining-nums;
    }
  `)}
`

export { styles as css }
