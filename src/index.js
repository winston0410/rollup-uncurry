const walk = require('acorn-walk')
const { generate } = require('astring')
const { getBody } = require('../output/Main/index.js')

module.exports = function (options) {
  // console.log(getBody)

  return {
    name: 'uncurry',
    transform (code, id) {
      const ast = this.parse(code)

      walk.simple(
        ast,
        {
          VariableDeclaration (node) {
            // node.kind = 'var'
          },

          ArrowFunctionExpression (node) {
            // console.log(node)

            console.log(
              getBody(node)
            )
            // node.async = true
            // console.log()

            // console.log('ES6 function found')
          },
          FunctionDeclaration (node) {
            // console.log('ES5 function found')
            // console.log(node)
          }
        }
      )

      const astInString = generate(ast)

      return {
        code: astInString
      }
    }
  }
}
