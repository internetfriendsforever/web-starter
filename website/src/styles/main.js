import css from '../utils/css.js'
import reset from './reset.js'
import system from './system.js'
import elements from './elements.js'
import partials from './partials.js'
import routes from './routes.js'

export default () => css`
  ${reset()}
  ${system()}
  ${elements()}
  ${partials()}
  ${routes()}
`
