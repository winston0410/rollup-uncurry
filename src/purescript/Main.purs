module Main where

import Prelude
import Data.Maybe

-- newtype Node = Node { type :: String, body :: Maybe Node }

newtype Node = Node { type :: String | body }

getBody :: Node ->  Maybe Node
getBody (Node node) = node."body"

-- createNode :: String -> String -> Node
-- createNode typeName name = { "type": typeName, "name": name}
