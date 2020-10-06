// Implicit return
const ES6CurriedFnImplicit = (param1) => (param2) => param1

const ES6UncurriedFnImplicit = (param1, param2) => param1
// Explicit return
const ES6CurriedFnExplicit = (param1) => (param2) => {
  return param1
}

const ES6UncurriedFnExplicit = (param1, param2) => {
  return param1
}

function ES5CurriedFn (param1) {
  return function (param2) {
    return param1
  }
}

function ES5UncurriedFn (param1, param2) {
  return param1
}

export {
  ES6CurriedFnImplicit,
  ES6UncurriedFnImplicit,
  ES6CurriedFnExplicit,
  ES6UncurriedFnExplicit,
  ES5CurriedFn
}
