import * as uncurry from '../src/index.js'
import {
  rollup
} from 'rollup'
const acorn = require('acorn')
const walk = require('acorn-walk')
const chai = require('chai')
const expect = chai.expect
const { exampleToMaybe } = require('../output/Utilities/index.js')

describe('Uncurrying for curried function', function () {
  // const example = {
  //   name: 'Hello'
  // }
  //
  // console.log(
  //   exampleToMaybe(
  //     example
  //   )
  // )

  // console.log(
  //   getAge(example)
  // )

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
          if (node.declarations[0].id.name === 'ES6CurriedFnImplicit') {
            const arrowFn = node.declarations[0].init
            // Check if parameter has increased
            // expect(arrowFn.params).to.have.lengthOf(2)

            // Not sure if it should be checked
            // Check if the function is still returning the same variable
            // expect(arrowFn.body.name).equal('param1')
          }

          if (node.declarations[0].id.name === 'ES6CurriedFnExplicit') {
            const arrowFn = node.declarations[0].init
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
