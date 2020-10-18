import * as uncurry from '../src/index.js'
import {
  rollup
} from 'rollup'
const acorn = require('acorn')
const walk = require('acorn-walk')
const chai = require('chai')
const expect = chai.expect

describe('Uncurrying for partial application', function () {
  it('should replace that partial function with a new function that has one less parameter', async function () {
    const bundle = await rollup({
      input: './test/partialApplication.example.js',
      plugins: [
        uncurry.default({})
      ]
    })

    const { output } = await bundle.generate({
      format: 'esm',
      file: './test/partialApplication.result.js',
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
          if (node.declarations[0].id.name === 'ES6PartiallyAppliedFn') {
            const arrowFn = node.declarations[0].init
            // console.log(arrowFn)
          }
        },
        FunctionDeclaration (node) {
          if (node.id.name === 'ES5PartiallyAppliedFn') {

          }
        }
      }
    )
  })
})
