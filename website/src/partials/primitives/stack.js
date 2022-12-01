import css from '../../utils/css.js'
import element from '../../utils/element.js'
import classNames from '../../utils/classNames.js'

const block = classNames.blockFromImportMetaUrl(import.meta.url)

export default ({
  direction = 'vertical',
  items = [],
  gap = 0, // Negative integer for smaller gaps, positive integers for larger gaps. null is no gap
  dividers = false, // Or true or divider props object
  compact = true,
  justify = 'normal',
  align = 'normal',
  className: classNameProp = ''
} = {}) => {
  const className = classNames.join([
    block.classMap({
      dividers,
      compact,
      justify,
      align,
      direction,
      gap
    }),
    classNameProp
  ])

  return element({
    attributes: {
      class: className
    },
    content: items
      .filter(Boolean)
      .map(item => element({
        content: item,
        attributes: {
          class: block.element('item').className
        }
      }))
  })
}

const styles = () => css`
  ${block} {
    display: flex;
  }

  ${block.modifier('justify').responsive(justify => css`
    ${justify.value('start')} {
      justify-content: flex-start;
    }}

    ${justify.value('end')} {
      justify-content: flex-end;
    }
  
    ${justify.value('center')} {
      justify-content: center;
    }
  
    ${justify.value('space-around')} {
      justify-content: space-around;
    }
  
    ${justify.value('space-between')} {
      justify-content: space-between;
    }
  `)}

  ${block.modifier('align').responsive(align => css`
    ${align.value('start')} {
      align-items: flex-start;
    }

    ${align.value('end')} {
      align-items: flex-end;
    }

    ${align.value('center')} {
      justify-items: center;
    }
  `)}

  ${block.modifier('gap').responsive(gap => css`
    ${gap.value(-5)} {
      --vertical-spacing: var(--spacing-vertical-small-5);
      --horizontal-spacing: var(--spacing-horizontal-small-5);
    }

    ${gap.value(-4)} {
      --vertical-spacing: var(--spacing-vertical-small-4);
      --horizontal-spacing: var(--spacing-horizontal-small-4);
    }

    ${gap.value(-3)} {
      --vertical-spacing: var(--spacing-vertical-small-3);
      --horizontal-spacing: var(--spacing-horizontal-small-3);
    }

    ${gap.value(-2)} {
      --vertical-spacing: var(--spacing-vertical-small-2);
      --horizontal-spacing: var(--spacing-horizontal-small-2);
    }

    ${gap.value(-1)} {
      --vertical-spacing: var(--spacing-vertical-small);
      --horizontal-spacing: var(--spacing-horizontal-small);
    }

    ${gap.value(0)} {
      --vertical-spacing: var(--spacing-vertical);
      --horizontal-spacing: var(--spacing-horizontal);
    }

    ${gap.value(1)} {
      --vertical-spacing: var(--spacing-vertical-large);
      --horizontal-spacing: var(--spacing-horizontal-large);
    }

    ${gap.value(2)} {
      --vertical-spacing: var(--spacing-vertical-large-2);
      --horizontal-spacing: var(--spacing-horizontal-large-2);
    }

    ${gap.value(3)} {
      --vertical-spacing: var(--spacing-vertical-large-3);
      --horizontal-spacing: var(--spacing-horizontal-large-3);
    }

    ${gap.value(4)} {
      --vertical-spacing: var(--spacing-vertical-large-4);
      --horizontal-spacing: var(--spacing-horizontal-large-4);
    }

    ${gap.value(5)} {
      --vertical-spacing: var(--spacing-vertical-large-5);
      --horizontal-spacing: var(--spacing-horizontal-large-5);
    }

    ${gap.value(null)} {
      --vertical-spacing: 0;
      --horizontal-spacing: 0;
    }
  `)}

  ${block.modifier('dividers').responsive(dividers => css`
    ${dividers.value(true)} {
      --border-width: var(--border-width-normal);
      --margin: var(--spacing);
    }

    ${dividers.value(true)} {
      --border-width: 0;
      --margin: 0;
    }
  `)}

  ${block.modifier('compact').responsive(compact => css`
    ${compact.value(true)} {
      --max-size: max-content;
    }

    ${compact.value(false)} {
      --max-size: none;
    }
  `)}

  ${block.modifier('direction').responsive(direction => css`
    ${direction.value('vertical')} {
      flex-direction: column;
      --spacing: var(--vertical-spacing);
    }

    ${direction.value('horizontal')} {
      flex-direction: row;
      max-width: var(--max-size);
      --spacing: var(--horizontal-spacing);
    }
  
    ${direction.value('vertical')} > ${block.element('item')} {
      max-width: 100%;
    }

    ${direction.value('vertical')}[class*="${block.modifier('gap').className}"] > ${block.element('item')}:not(:last-child),
    ${direction.value('vertical')}[class^="${block.modifier('gap').className}"] > ${block.element('item')}:not(:last-child) {
      padding-bottom: var(--spacing);
    }

    ${direction.value('horizontal')}[class*="${block.modifier('gap').className}"] > ${block.element('item')}:not(:last-child),
    ${direction.value('horizontal')}[class^="${block.modifier('gap').className}"] > ${block.element('item')}:not(:last-child) {
      padding-right: var(--spacing);
    }

    ${direction.value('vertical')} > ${block.element('item')}:not(:last-child) {
      border-bottom: var(--border-width) solid var(--color-border-muted);
      margin-bottom:  var(--margin);
    }

    ${direction.value('horizontal')} > ${block.element('item')}:not(:last-child) {
      border-right: var(--border-width) solid var(--color-border-muted);
      margin-right: var(--margin);
    }
  `)}

  ${block.element('item')}:empty {
    display: none;
  }
`

export { styles as css }
