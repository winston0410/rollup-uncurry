module Utilities where

import Prelude
import Node
import Data.Maybe

-- hasFunctionChild :: forall r. Node ( body :: Maybe (Node r) ) -> Boolean
-- getBody = _.body
--
-- hasFunctionChild node = case node.type, node.body.type of
--    "ArrowFunctionExpression", "ArrowFunctionExpression" -> true
--    "ArrowFunctionExpression", "FunctionExpression" -> true
--    "FunctionExpression", "FunctionExpression" -> true
--    "FunctionExpression", "ArrowFunctionExpression" -> true
--    _, _ -> false
--
-- getLastFunction node
--   | (hasFunctionChild node) == true = node
--   | otherwise = node

  -- then node # getBody # getLastFunction
  -- else node


-- newtype Example = E { name :: Maybe String}
--
-- exampleMatch :: Example -> Boolean
-- exampleMatch (E {name: Just (x)}) = true
-- exampleMatch (E {name: Nothing}) = false

newtype Example = E { name :: Maybe ({
  age :: Int
})}

getAge :: Example -> Int
getAge (E { name: Just({ age: x })}) = x
getAge (E { name: Nothing}) = 0

-- (E obj) = obj.name.age
-- getAge (E obj) = obj.name.age
