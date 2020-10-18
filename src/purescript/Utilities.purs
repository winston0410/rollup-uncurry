module Utilities where

import Data.Maybe
import Data.Nullable
import Data.Array
import Prelude

import Data.Newtype (unwrap)

-- newtype Node = Node {type :: String, body :: Maybe Node, params :: Maybe (Array { type :: String, name :: String }) }
-- newtype Node r = Node {type :: String | r }
newtype Node = Node {type :: String, body :: Maybe Node, params :: Maybe (Array { type :: String, name :: String })  }

nullToMaybe :: {
  type :: String,
  body :: Nullable Node,
  params :: Nullable ( Array { type :: String, name :: String } )
  } -> Node
nullToMaybe obj = Node { type: obj.type, body: toMaybe( obj.body ), params: toMaybe( obj.params ) }

unwrapNode :: Node -> {type :: String, body :: Maybe Node, params :: Maybe (Array { type :: String, name :: String }) }
unwrapNode (Node a) = a

hasFunctionChild :: Node -> Boolean
hasFunctionChild (Node node) = case node.type, node.body of
   "ArrowFunctionExpression", Just ( Node { type: "ArrowFunctionExpression" }) -> true
   "ArrowFunctionExpression", Just ( Node { type: "FunctionExpression" }) -> true
   "FunctionExpression", Just ( Node { type: "FunctionExpression" }) -> true
   "FunctionExpression", Just ( Node { type: "ArrowFunctionExpression" }) -> true
   _, Nothing -> false
   _, _ -> false

getParam :: Node -> { type :: String, name :: String }
getParam node = node # getParams # last # (fromMaybe {type: "Nothing", name: "Nothing"})
  where
  getParams :: Node -> Array { type :: String, name :: String }
  getParams (Node node') = node'.params # (fromMaybe [])

getNextNode :: Node -> Node
getNextNode node = node # getBody # (fromMaybe (Node {type: "Nothing", body: Nothing, params: Nothing}))
  where
  getBody :: Node -> Maybe Node
  getBody (Node node) = node.body

getLastFunction :: Node -> Node
getLastFunction node
  | (hasFunctionChild node) == true = getNextNode node
  | otherwise = node
