module Node where

import Prelude
import Data.Maybe
import Data.Array

-- newtype Node = Node {type :: String, body :: Maybe Node, params :: Array { type :: String, name :: String } }
newtype Node r = Node {type :: String | r }
derive newtype instance showNode :: Show Node
-- //Is it possible?
-- newtype ReturnNode = Node {type :: String}

getParams :: forall r. Node
  (
  body :: Maybe (Node r),
  params :: Array { type :: String, name :: String }
  )
  -> Array { type :: String, name :: String }
getParams (Node node) = node.params

-- getBody :: forall r. Node
--   (
--   body :: Maybe (Node r)
--   )
--   -> Maybe (Node r)
-- getBody (Node node) = node.body

getBody :: forall r. Node
  (
  body :: Maybe (Node r)
  )
  -> Maybe (Node r)
getBody (Node node) = node.body

-- getDeepestNode =
