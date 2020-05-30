/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')

const LBZUI_CSS_PATH = 'node_modules/@lbzui/vue/src/assets/css/'

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // variables
        resolve(`${LBZUI_CSS_PATH}variables/_elevation.less`),
        resolve(`${LBZUI_CSS_PATH}variables/_layout-grid.less`),
        resolve(`${LBZUI_CSS_PATH}variables/_motion.less`),
        resolve(`${LBZUI_CSS_PATH}variables/_shape.less`),
        resolve(`${LBZUI_CSS_PATH}variables/_state.less`),
        resolve(`${LBZUI_CSS_PATH}variables/_surface.less`),
        resolve('src/assets/css/lbzui/_theme.less'),
        resolve(`${LBZUI_CSS_PATH}variables/_variables.less`),

        // mixins
        resolve(`${LBZUI_CSS_PATH}utilities/_*.less`)
      ]
    }
  }
}
