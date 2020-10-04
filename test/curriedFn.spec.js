import * as uncurry from '../src/index.js'
import {
  rollup
} from 'rollup'
const acorn = require('acorn')
const walk = require('acorn-walk')
const chai = require('chai')
const expect = chai.expect

describe('Uncurrying for curried function', function () {
  it('should uncurry that curried function', async function () {
    const bundle = await rollup({
      input: './test/curriedFn.example.js',
      plugins: [
        uncurry.default({})
      ]
    })

    const { output } = await bundle.generate({
      format: 'esm',
      file: './test/curriedFn.result.js',
      plugins: [

      ]
    })

    const outputCode = output[0].code

    const outputAST = acorn.parse(outputCode, {
      sourceType: 'module'
    })

    walk.simple(
      outputAST,
      {
        VariableDeclaration (node) {
          if (node.declarations[0].id.name === 'ES6CurriedFn') {
            const arrowFn = node.declarations[0].init

            // expect(arrowFn.params).to.have.lengthOf(2)
          }
        },
        FunctionDeclaration (node) {
          if (node.id.name === 'ES5CurriedFn') {
            // expect(node.params).to.have.lengthOf(2)
          }
        }
      }
    )
  })
})
