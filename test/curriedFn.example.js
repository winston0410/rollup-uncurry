const ES6CurriedFn = (param1) => (param2) => param1

const ES6UncurriedFn = (param1, param2) => param1

function ES5CurriedFn (param1) {
  return function (param2) {
    return param1
  }
}

function ES5UncurriedFn (param1, param2) {
  return param1
}

export {
  ES6CurriedFn,
  ES6UncurriedFn,
  ES5CurriedFn
}
