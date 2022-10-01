import css from '../utils/css.js'
import scale from './utils/scale.js'
import breakpoints from './breakpoints.js'

const unitRatioScaleValue = operation => index => {
  const transform = ` ${operation} var(--unit-ratio)`.repeat(index)
  const calculation = ['var(--unit-normal)', transform].join('')
  return `calc(${calculation})`
}

export default () => css`
  :root {
    /* Low-level variables */
    /* Do not use outside of this document */

    /* Predefined units based on an exponential scale of --unit-ratio */
    --unit-normal: 18px;
    --unit-thin: 2px;
    --unit-hairline: 1px;
    --unit-ratio: 1.200;

    /* Units based on an exponential scale of --unit-ratio */
    ${scale({
      name: '--unit-large',
      step: 1,
      start: 1,
      end: 12,
      value: unitRatioScaleValue('*')
    })}

    ${scale({
      name: '--unit-small',
      step: 1,
      start: 1,
      end: 12,
      value: unitRatioScaleValue('/')
    })}

    /* Font and type basics */
    --font-stack-system: -apple-system, blinkmacsystemfont, segoe ui, 'helvetica neue', helvetica, ubuntu, roboto, noto, arial, sans-serif;

    /* Named colors */
    --color-white: white;

    --color-red-50: #fcf7f7;
    --color-red-100: #f8f4f4;
    --color-red-200: #fff0ef;
    --color-red-300: #ffd9d6; /* Ultima accent */
    --color-red-400: #f8b5af;
    --color-red-500: #ff7569;
    --color-red-600: #ff4838; /* Ultima brand */
    --color-red-700: #d62a1b;
    --color-red-800: #810d03;
    --color-red-900: #480c07;
    --color-red-950: #270401;

    --color-blue-50: #f7fafc;
    --color-blue-100: #f4f6f8;
    --color-blue-200: #eff9ff;
    --color-blue-300: #d6efff;
    --color-blue-400: #afddf8;
    --color-blue-500: #69c8ff;
    --color-blue-600: #00a2ff;
    --color-blue-700: #1a91d6;
    --color-blue-800: #025281;
    --color-blue-900: #063048;
    --color-blue-950: #001927;

    --color-green-100: #e5ffe5;
    --color-green-200: #c4ffc4;
    --color-green-300: #84ff84;
    --color-green-400: #4fff4f;
    --color-green-500: #00ff00;
    --color-green-600: #03cc03;
    --color-green-700: #007f00;
    --color-green-800: #006200;
    --color-green-900: #003f00;

    --color-gray-50: #f8f8f8;
    --color-gray-100: #f2f2f2;
    --color-gray-200: #e3e3e3;
    --color-gray-300: #d9d8d8;
    --color-gray-400: #c6c6c6;
    --color-gray-500: #9a9a9a;
    --color-gray-600: #767676;
    --color-gray-700: #585858;
    --color-gray-800: #3e3e3e;
    --color-gray-900: #212121;
    --color-gray-950: #121212;
  }

  :root {
    /* High-level variables */
    /* These are meant to be used in the normal stylesheet */

    /* Typography */
    --line-height-large: 1.4;
    --line-height-normal: 1.333;
    --line-height-small: 1.25;
    --line-height-small-2: 1.2;
    --line-height-small-3: 1.1;

    --font-size-large-5: var(--unit-large-7);
    --font-size-large-4: var(--unit-large-5);
    --font-size-large-3: var(--unit-large-3);
    --font-size-large-2: var(--unit-large-2);
    --font-size-large: var(--unit-large);
    --font-size-normal: var(--unit-normal);
    --font-size-small: var(--unit-small);
    --font-size-small-2: var(--unit-small-2);
    --font-size-small-3: var(--unit-small-3);

    --font-stack-primary: var(--font-stack-system);

    /* Colors */
    --color-text: var(--color-gray-800);
    --color-text-muted: var(--color-green-600);
    --color-text-highlighted: var(--color-red-600);
    --color-text-light: var(--color-gray-300);
    --color-text-dark: var(--color-gray-900);
    --color-text-inverted: var(--color-white);
    --color-border: var(--color-gray-500);
    --color-border-muted: var(--color-gray-300);
    --color-footer-background: var(--color-blue-200);
    --color-background: var(--color-white);
    --color-background-contrast: var(--color-gray-200);
    --color-background-contrast-light: var(--color-gray-100);
    --color-background-inverted: var(--color-gray-900);
    --color-background-under-image: var(--color-gray-700);
    --color-background-under-image-hover: var(--color-gray-600);
    --color-link: var(--color-red-600);
    --color-link-hover: var(--color-red-500);
    --color-link-active: var(--color-red-700);
    --color-link-border: var(--color-red-400);
    --color-link-border-hover: var(--color-red-600);
    --color-link-border-active: var(--color-gray-700);
    --color-link-inverted: var(--color-white);
    --color-link-inverted-hover: var(--color-red-100);
    --color-link-inverted-active: var(--color-white);
    --color-link-inverted-border: var(--color-red-500);
    --color-link-inverted-background: var(--color-red-600);
    --color-link-inverted-background-inverted: var(--color-red-600);
    --color-block-link-text: var(--color-text);
    --color-block-link-background: var(--color-white);
    --color-link-navigation-decoration: var(--color-blue-500);
    --color-notice-background: var(--color-blue-200);
    --color-notice-background-inverted: rbga(255, 255, 255, 0.1);
    --color-image-background: var(--color-gray-900);
    --color-brand: var(--color-red-600);

    /* Spacing */
    --spacing-horizontal-large-5: var(--unit-large-12);
    --spacing-horizontal-large-4: var(--unit-large-10);
    --spacing-horizontal-large-3: var(--unit-large-6);
    --spacing-horizontal-large-2: var(--unit-large-4);
    --spacing-horizontal-large: var(--unit-large);
    --spacing-horizontal: var(--unit-small);
    --spacing-horizontal-small: var(--unit-small-3);
    --spacing-horizontal-small-2: var(--unit-small-6);
    --spacing-horizontal-small-3: var(--unit-small-8);
    --spacing-horizontal-small-4: var(--unit-small-10);
    --spacing-horizontal-small-5: var(--unit-small-12);

    --spacing-vertical-large-5: var(--unit-large-12);
    --spacing-vertical-large-4: var(--unit-large-10);
    --spacing-vertical-large-3: var(--unit-large-6);
    --spacing-vertical-large-2: var(--unit-large-4);
    --spacing-vertical-large: var(--unit-large);
    --spacing-vertical: var(--unit-small);
    --spacing-vertical-small: var(--unit-small-3);
    --spacing-vertical-small-2: var(--unit-small-6);
    --spacing-vertical-small-3: var(--unit-small-8);
    --spacing-vertical-small-4: var(--unit-small-10);
    --spacing-vertical-small-5: var(--unit-small-12);

    --spacing-page-margin-horizontal: var(--spacing-horizontal-small);
    --spacing-gutter-horizontal: var(--spacing-horizontal-small);

    /* Borders */
    --border-width-normal: var(--unit-hairline);
    --border-width-large: var(--unit-thin);

    --border-radius-small-2: var(--unit-small-12);
    --border-radius-small: var(--unit-small-6);
    --border-radius: var(--unit-small-3);
    --border-radius-large: var(--unit-large);
    --border-radius-large-2: var(--unit-large-4);

    /* Special */

    --site-header-height: 2.1rem;
  }

  @media (min-width: ${breakpoints[1]}px) {
    :root {
      --unit-normal: 20px;
      --spacing-page-margin-horizontal: var(--spacing-horizontal-large);
      --spacing-gutter-horizontal: var(--spacing-horizontal-large);
    }
  }

  @media (min-width: ${breakpoints[3]}px) {
    :root {
      --unit-normal: 22px;
      --spacing-page-margin-horizontal: var(--spacing-horizontal-large-2);
      --spacing-gutter-horizontal: var(--spacing-horizontal-large-2);
    }
  }

  @media (min-width: ${breakpoints[5]}px) {
    :root {
      --unit-normal: 25px;
    }
  }
`
