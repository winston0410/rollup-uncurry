# Uncurry

[![Known Vulnerabilities](https://snyk.io/test/github/winston0410/uncurry/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/uncurry?targetFile=package.json) [![Maintainability](https://api.codeclimate.com/v1/badges/8503697bcf569800b298/maintainability)](https://codeclimate.com/github/winston0410/uncurry/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/8503697bcf569800b298/test_coverage)](https://codeclimate.com/github/winston0410/uncurry/test_coverage) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/167e407501e24a79a4f8e43a9c78e470)](https://www.codacy.com/manual/winston0410/uncurry/dashboard?utm_source=github.com&utm_medium=referral&utm_content=winston0410/uncurry&utm_campaign=Badge_Grade)

A package that helps you uncurry curried functions for performance boost.

```javascript
//Before transformation

//Curried function
const curriedFn = (param1) => (param2) => param1

//Partial application
const partialApplication = curriedFn('Hello')
```

```javascript
//After transformation

//Curried function
const curriedFn = (param1, param2) => param1

//Partial application
//The partially applied parameter will be reduced from both the head and the body of the function.
const partialApplication = (param2) => 'Hello'
```

## Installation

TODO
