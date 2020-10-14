module Utilities where

import Data.Maybe
import Data.Nullable
import Node
import Prelude

import Data.Newtype (unwrap)

-- newtype Node = Node {type :: String, body :: Maybe Node, params :: Maybe (Array { type :: String, name :: String }) }
-- newtype Node r = Node {type :: String | r }
newtype Node = Node {type :: String, body :: Maybe Node }

nullToMaybe :: {
  type :: String,
  body :: Nullable Node,
  params :: Nullable ( Array { type :: String, name :: String } )
  } -> Node
nullToMaybe obj = Node { type: obj.type, body: toMaybe( obj.body ) }

unwrapNode :: Node -> {type :: String, body :: Maybe Node }
unwrapNode (Node a) = a

hasFunctionChild :: Node -> Boolean
hasFunctionChild (Node node) = case node.type, wrappedNextNode of
   "ArrowFunctionExpression", Just ( Node { type: "ArrowFunctionExpression" }) -> true
   "ArrowFunctionExpression", Just ( Node { type: "FunctionExpression" }) -> true
   "FunctionExpression", Just ( Node { type: "FunctionExpression" }) -> true
   "FunctionExpression", Just ( Node { type: "ArrowFunctionExpression" }) -> true
   _, Nothing -> false
   _, _ -> false

  where
  wrappedNextNode = node.body
  -- nextNode = unwrapNode wrappedNextNode

getBody :: Node -> Maybe Node
getBody (Node node) = node.body



-- getLastFunction :: Node -> Node
-- getLastFunction node
--   | (hasFunctionChild node) == true = node
--   | otherwise = node
