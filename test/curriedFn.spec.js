import * as uncurry from '../src/index.js'
import {
  rollup
} from 'rollup'

describe('Uncurrying for curried function', function () {
  // let exampleScript
  //
  // beforeEach(function () {
  //   exampleScript = ''
  // })

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

    console.log(output)
  })
})
