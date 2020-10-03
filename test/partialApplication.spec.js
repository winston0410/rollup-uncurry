import * as uncurry from '../src/index.js'
import {
  rollup
} from 'rollup'

describe('Uncurrying for partial application', function () {
  // let exampleScript
  //
  // beforeEach(function () {
  //   exampleScript = ''
  // })

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

    console.log(output)
  })
})
