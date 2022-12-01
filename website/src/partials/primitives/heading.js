import css from '../../utils/css.js'
import classNames from '../../utils/classNames.js'
import text from './text.js'

const block = classNames.blockFromImportMetaUrl(import.meta.url)

export default ({
  content = '',
  level = 1,
  semantic = true,
  semanticLevel = null,
  visualLevel = null,
  className: classNameProp,
  ...rest
} = {}) => {
  if (!semanticLevel) {
    semanticLevel = level
  }

  if (!visualLevel) {
    visualLevel = level
  }

  const tag = semantic ? `h${semanticLevel}` : 'div'

  const className = classNames.join([
    block.classMap({
      semanticLevel,
      visualLevel
    }),
    classNameProp
  ])

  return text({
    tag,
    content,
    className,
    ...rest
  })
}

const styles = () => css`
  ${block.modifier('visualLevel').responsive(visualLevel => css`
    ${visualLevel.value(1)} {
      font-size: var(--font-size-large-4);
      line-height: var(--line-height-small-3);
      font-weight: 400;
      max-width: 34ch;
      margin-left: -0.075em;
    }

    ${visualLevel.value(2)} {
      font-size: var(--font-size-large-2);
      line-height: var(--line-height-small-2);
      font-weight: 400;
    }

    ${visualLevel.value(3)} {
      font-size: var(--font-size);
      font-weight: bold;
    }

    ${visualLevel.value(4)} {
      font-size: var(--font-size);
      font-weight: normal;
    }

    ${visualLevel.value(5)},
    ${visualLevel.value(6)} {
      font-size: var(--font-size-small);
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
`

export { styles as css }
