module Utilities where

import Prelude
import Node
import Data.Maybe

hasFunctionChild :: forall r. Node ( body :: Maybe (Node r) ) -> Boolean
hasFunctionChild (Node node) = case node.type, node.body.type of
   "ArrowFunctionExpression", "ArrowFunctionExpression" -> true
   "ArrowFunctionExpression", "FunctionExpression" -> true
   "FunctionExpression", "FunctionExpression" -> true
   "FunctionExpression", "ArrowFunctionExpression" -> true
   _, _ -> false
