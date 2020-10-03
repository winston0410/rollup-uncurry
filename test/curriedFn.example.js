const ES6CurriedFn = (param1) => (param2) => param1

function ES5CurriedFn (param1) {
  return function (param2) {
    return param1
  }
}

export {
  ES6CurriedFn,
  ES5CurriedFn
}
