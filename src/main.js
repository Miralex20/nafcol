/**
 * Global entry point — imported only if you want a single bundle.
 * Each page has its own entry (e.g. home.js) that does the actual
 * per-page bootstrap. This file is kept as a convenience export.
 */
export { renderNav }    from './components/nav.js'
export { renderFooter } from './components/footer.js'
export * from './utils/animations.js'
