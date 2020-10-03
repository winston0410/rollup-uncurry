const ES6CurriedFn = (param1) => (param2) => param1

const ES6PartiallyAppliedFn = ES6CurriedFn('Hello')

function ES5CurriedFn (param1) {
  return function (param2) {
    return param1
  }
}

const ES5PartiallyAppliedFn = ES5CurriedFn('Hello')

export {
  ES6PartiallyAppliedFn,
  ES5PartiallyAppliedFn
}
