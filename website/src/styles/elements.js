import css from '../utils/css.js'

export default () => css`
  body {
    font-size: var(--font-size-normal);
    font-family: var(--font-stack-primary);
    line-height: var(--line-height-normal);
    background: var(--color-background);
    color: var(--color-text);
  }

  a {
    color: var(--color-link);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    text-decoration-color: var(--color-link-hover);
  }

  a:active {
    color: var(--color-link-active);
    text-decoration-color: currentcolor;
  }
`
